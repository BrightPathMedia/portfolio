<template lang="pug">
    div
        #casestudy-view(

          class="lg:w-1/2 xs:w-full sm:w-full ml-2 lg:m-0 lg:ml-4 lg:order-none"
          :style="{top: '-'+portfolioTextTop+'px', opacity: '0', width: '0'}"
          ref="portfolioText"
        )
            slot(name="caseStudy")

        //- #portfolio-view(
          class='p-4 lg:p-0 lg:mr-8 '
          :class="{ 'lg:w-full': !portfolioTextShown, 'w-half yielded': portfolioTextShown }"
          
        //- )
            slot(name="portfolio")

        #portfolio-view(
          class='lg:w-full p-4 lg:p-0 lg:mr-8 '
          :class="{ 'yielded': !portfolioFullWidth, 'w-half': splitHalf }"
          ref="portfolioView"
        )
            slot(name="portfolio")
</template>
<script>
import Vue from "vue";
import _ from "lodash";
import { Component, Watch, Prop } from "vue-property-decorator";

@Component
export default class CaseStudy extends Vue {
  portfolioTextShown = false;
  portfolioFullWidth = true;
  splitHalf = false;
  portfolioTextTop = 0;
  thisComponentWidth;
  bezier = [1, 0, 0, 1];
  fadeDelay = 700;

  removePx(value) {
    return parseInt(value.split("px")[0]);
  }

  bezierExpression(bExp) {
    return `cubic-bezier(${bExp[0]}, ${bExp[1]}, ${bExp[2]}, ${bExp[3]} )`;
  }
  transExpression(attr, t) {
    return `${attr} ${t}ms`;
  }

  addPx(value) {
    return value + "px";
  }

  placeCaseStudy() {
    this.$refs.portfolioText.style.width = this.addPx(0);
    this.$refs.portfolioText.style.height = this.addPx(0);
    this.$refs.portfolioText.style.opacity = 0;
    this.portfolioFullWidth = false;
  }

  expandCaseStudy() {
    this.splitHalf = true;
    this.$refs.portfolioText.style.width = this.addPx(
      this.removePx(this.thisComponentWidth) / 2
    );
    if (this.thisComponentWidth < 1024) {
      this.$refs.portfolioText.style["min-height"] = this.addPx(250);
      this.$refs.portfolioText.style["max-height"] = this.addPx(350);
    } else {
      this.$refs.portfolioText.style["min-height"] = this.addPx(500);
    }
  }

  fadeCaseStudy(polarity) {
    console.log("hehehe");
    this.$refs.portfolioText.style.opacity = polarity ? 1 : 0;
    this.portfolioFullWidth = !polarity;
  }

  shrinkCaseStudy() {
    this.$refs.portfolioText.style.width = this.addPx(0);
    this.$refs.portfolioText.style.height = this.addPx(0);
    this.$refs.portfolioText.style["margin-right"] = this.addPx(-15);
    this.$refs.portfolioText.style["min-height"] = this.addPx(0);
    this.splitHalf = false;
    setTimeout(() => {
      this.portfolioTextShown = false;
    }, this.fadeDelay);
  }

  togglePortfolioText() {
    if (!this.portfolioTextShown) {
      console.log("Case Study not shown, starting process");

      // Place (display) #casestudy-view, neutron state
      this.placeCaseStudy();

      // Widen case study x and y
      this.expandCaseStudy();

      // Toggle opacity of the #casestudy-view first, delayed

      _.delay(() => {
        this.portfolioTextShown = true;
        this.fadeCaseStudy(true);
      }, this.fadeDelay);

      // Indicate end of display
      console.log(this.$refs.portfolioText.style.transition);
    } else {
      // Fade case study
      this.fadeCaseStudy(false);

      // shrink and remove case study

      this.shrinkCaseStudy();
    }

    // Stretch/shrink height of portfolioText
    this.$refs.portfolioText.style.height = this.$refs.portfolioText.style
      .height
      ? "0px"
      : "50px";
  }

  setPortfolioTextTop() {
    // console.log(this.$refs.portfolioText.clientHeight);
    this.portfolioTextTop =
      this.$refs.portfolioText.clientHeight - window.innerHeight + 50;
  }

  async mounted() {
    console.log(this.$refs);
    // Animation Prep

    // Adding transition attribute
    this.$refs.portfolioText.style.transition = `${this.transExpression(
      "all",
      this.fadeDelay
    )} ${this.bezierExpression(this.bezier)}`;
    this.$refs.portfolioView.style.transition = `${this.transExpression(
      "all",
      this.fadeDelay
    )} ${this.bezierExpression(this.bezier)}`;

    // Get component width for animation calculations
    this.thisComponentWidth = window
      .getComputedStyle(this.$el)
      .getPropertyValue("width");

    console.log(
      window
        .getComputedStyle(this.$refs.portfolioText)
        .getPropertyValue("transition-timing-function")
    );

    document.addEventListener("keyup", e => {
      if (e.keyCode === 84) {
        // console.log("Created, Keyup Listener");
        // console.log(this.$refs);
        this.togglePortfolioText();
      }
    });

    setTimeout(() => {
      this.setPortfolioTextTop();
    }, 1000);
  }
}
</script>

<style lang="scss" scoped>
#casestudy-view {
  position: sticky;
  -webkit-position: sticky;
  top: 0px;
  align-self: flex-start;
  overflow: scroll;
}

$header-height: 5.6rem;
@keyframes rotate-screen {
  0% {
    transform: rotateY(0);
  }

  50% {
    transform: rotateY(90deg);
  }

  51% {
    transform: rotateY(270deg);
  }

  100% {
    transform: rotateY(360deg);
  }
}

.container-wrapper {
  transform: rotateY(0);
  background: white;
  opacity: 1;

  &.rotate {
    animation: rotate-screen 650ms ease-in-out;
  }
}

#container.ja {
  font-family: source-han-sans-japanese, sans-serif;
}

#container.en {
  font-family: canada-type-gibson, sans-serif;
}

#container.en p {
  font-family: mr-eaves-sans, sans-serif;
}

header {
  max-height: 5.6rem;
  z-index: 10;
}

.content {
  height: calc(100vh - 5.6rem);
}

#home-link svg {
  width: 250px;
}

#btn-i18n {
  /*@apply mr-4 mb-1 outline-none border border-black rounded px-1 inline-block;*/
  margin: 0 1rem 0.25rem 0;
  outline: none;
  border: 1px solid black;
  border-radius: 0.25rem;
  padding: 0 0.25rem;
  display: inline-block;
  border-width: 1.25px;
  transition: opacity 100ms ease-in-out;
  opacity: 1;
  transform: rotateY(0);

  &:active,
  &:focus {
    /*@apply outline-none; */
    outline: none;
  }

  svg {
    height: 0.75rem;
    outline: none;
  }

  &.rotate {
    animation: rotate-screen 450ms ease-in-out;
  }
}

.header-link {
  position: relative;
  cursor: pointer;
  font-weight: 400;

  &::before {
    content: "";
    width: 1px;
    height: 0;
    background-color: black;
    position: absolute;
    top: -1.6rem;
    left: 0;
    right: 0;
    margin: auto;
    transform: rotate(180deg);
    transition: height 150ms ease-in-out;
  }

  &:hover::before,
  &.active::before {
    height: 1.5rem;
  }
}

.bg-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.5);
  z-index: 1;
  visibility: hidden;
  opacity: 0;
  transition: all 300ms ease-in-out;

  &.shown {
    opacity: 1;
    visibility: visible;
  }
}

.dropdown-link {
  position: relative;
  z-index: 10;
  min-width: 5rem;

  &:hover {
    .header-link::before {
      height: 1.5rem;
    }

    &::after {
      height: 0.5rem;
    }
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    z-index: 1000;
    transform: scaleY(0);
    left: 0;
    width: 100%;
    text-align: center;
    padding-top: 0.5rem;
    height: 0;

    &:before {
      content: "";
      width: 1px;
      height: 0;
      background-color: black;
      position: absolute;
      top: -0.5rem;
      left: 0;
      right: 0;
      margin: auto;
      transform: rotate(180deg);
      transition: height 100ms ease-in-out;
      transition-delay: 150ms;
    }

    &:after {
      content: "";
      width: 100%;
      height: 1px;
      position: absolute;
      top: 0;
      left: 0;
      background: black;
      transform: scale(0);
      transition: transform 200ms ease-in-out;
      transition-delay: 250ms;
    }

    &.shown:before {
      height: 0.5rem;
    }

    &.shown:after {
      transform: scale(1);
    }

    a {
      display: block;
      width: 100%;
      clear: both;
      padding: 0.25rem 0;
      font-size: 0.7rem;
      transition: none;
      transform: translateY(-8px);
      /*transition-delay: 300ms; */
      opacity: 0;
    }

    &.shown {
      transform: scaleY(1);
      height: auto;

      a {
        transform: translateY(0);
        transition: all 200ms ease-in-out;
        opacity: 1;
      }
    }
  }
}

.btn-mobile-menu {
  transform: rotate(0deg);
  transition: all 100ms ease-in-out;
  outline: none;

  &.open {
    transform: rotate(90deg);
  }
}

@media (max-width: 1023px) {
  #home-link svg {
    width: 175px;
  }

  .mobile-menu {
    background: white;
    padding-top: 3rem;
    opacity: 0.9;
    transition: all 200ms ease-in;
    height: 100%;

    &.hidden {
      height: 0;
    }
  }
  .dropdown-link {
    transition: none;

    .dropdown-menu {
      position: initial;
      text-align: right;
      margin-bottom: 1rem;
      width: auto;

      a {
        padding-right: 3rem;
        &:after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          margin: auto;
          right: -0.5rem;
          width: 3rem;
          height: 1px;
          background: black;
        }
      }

      &:before,
      &:after {
        display: none;
      }
    }
  }

  .header-link,
  .dropdown-link .header-link {
    padding-right: 1.5rem;
    overflow: hidden;
    padding-top: 0.25rem;

    &::before {
      height: 1px;
      width: 100%;
      right: 0;
      left: 0;
      top: 0;
      background-color: #666;
      transition: none;
    }

    &.active,
    &:hover {
      &::before {
        height: 2px;
        background-color: #000;
      }
    }
  }
}

.desc {
  line-height: 1.7rem;
}

.flex-row-reverse {
  flex-flow: row-reverse;
}

.portfolirow {
  display: flex;
  justify-content: space-around;
}

.portfolitem {
  margin: 0 1rem;
  align-self: center;

  &:last-child {
    margin-right: 0;
  }

  &:first-child {
    margin-left: 0;
  }
}

.en .portfolitext {
  display: inline-block;
  font-size: 1.2rem;
  padding-right: 3rem;
  line-height: 1.7rem;
  font-weight: 400 !important;
}

.ja .portfolitext {
  display: inline-block;
  font-size: 1rem;
  padding-right: 3rem;
  line-height: 1.7rem;
  font-weight: 400 !important;
}

.portfolitext {
  font-weight: 400;
}

.portfolisubhead {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 400;
}

@media (max-width: 1279px) {
  .portfoligroup {
    margin: 0 !important;
  }
  .portfolirow .desc {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .portfolitext {
    padding: unset !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    max-width: 60%;
    min-width: 375px;
  }

  .portfolirow.just-right {
    justify-content: center !important;
  }
  .portfolirow {
    flex-wrap: wrap;
    padding: 0 !important;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .portfolitem {
    margin-top: 2rem !important;
    margin: 0 !important;
    padding-left: 0 !important;
    padding: 2rem !important;
  }
}

.portfoligroup,
.portfolirow {
  margin-bottom: 4rem;
  .portfolirow {
    margin-bottom: 2rem;
  }
}

.fg-1 {
  flex-grow: 1;
}

.desc {
  padding-right: 4rem;
  font-size: 1.4rem;
  font-weight: 400;
}

.ja .desc {
  padding-right: 4rem;
  font-weight: 400;
  line-height: 2rem;
  font-size: 1.2rem;
}

.just-right {
  justify-content: right;
}

.font-semibold {
  font-weight: 400;
}

.yielded .portfolitem {
  width: 100% !important;
  margin: 2rem 0;
}

.yielded .portfolitem:first-child {
  margin-top: 0;
}

@media (min-width: 1279px) {
  .yielded * {
    display: block;
    width: 100%;
  }
  .w-half {
    width: calc(50% - 1rem);
  }
}
@media (max-width: 1279px) {
  #casestudy-view {
    overflow-y: scroll;
  }
}
</style>
