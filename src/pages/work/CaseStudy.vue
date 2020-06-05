<template lang="pug">
    div 
        #casestudy-view(
          class="lg:w-1/2 xs:w-full sm:w-full ml-2 lg:m-0 lg:ml-8 xs:pl-4 sm:pl-4 xs:pr-4 sm:pr-4 lg:order-none"
          :style="{ opacity: '0', width: '20px', height: '0', minHeight: '0'}"
          ref="portfolioText"
        )   
            h2(class="lg:border-black lg:border-t")#case-title.text-2xl.font-bold.mb-4.d-inline-block {{ caseTitle }} Case Study
              i.fa.fa-times-circle-o.close-button.ml-2(@click="togglePortfolioText")
            #case-body
              p.desc(ref="caseBody")
            //- slot(name="caseStudy")


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
import { mixins } from "vue-class-component";

const CaseProps = Vue.extend({
  props: {
    caseTitle: String,
    caseBody: String,
  },
});

@Component
export default class CaseStudy extends mixins(Vue, CaseProps) {
  portfolioTextShown = false;
  portfolioFullWidth = true;
  splitHalf = false;
  portfolioTextTop = 0;
  thisComponentWidth;
  bezier = [0.5, 0.5, 0, 1];
  fadeDelay = 800;
  closeButtonText = "LESS INFO";
  openButtonText = "MORE INFO";

  $t = this.$t.bind(this);

  // caseStudyButtonPhrase = this.i18n.t("caseStudyShowPhrase.text");

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
    // this.$refs.portfolioText.style.width = this.addPx(0);
    // this.$refs.portfolioText.style.height = this.addPx(0);
    // this.$refs.portfolioText.style.opacity = 0;
    this.portfolioFullWidth = false;
  }

  expandCaseStudy() {
    this.splitHalf = true;
    this.$refs.portfolioText.style.width = "50%";
    // this.$refs.portfolioText.style.width = this.addPx(
    //   this.removePx(this.thisComponentWidth) / 2
    // );
    // this.$refs.portfolioText.style["min-height"] = this.addPx(500);
    // this.$refs.portfolioText.style.height = "100vh";
    this.$refs.portfolioText.classList.add("height-adjust");
  }

  fadeCaseStudy(polarity) {
    console.log("hehehe");
    if (polarity) {
      this.portfolioFullWidth = !polarity;
      setTimeout(() => {
        this.$refs.portfolioText.style.opacity = polarity ? 1 : 0;
      }, this.fadeDelay);
    } else {
      this.$refs.portfolioText.style.opacity = polarity ? 1 : 0;
      setTimeout(() => {
        this.portfolioFullWidth = !polarity;
      }, this.fadeDelay);
    }
  }

  shrinkCaseStudy() {
    this.$refs.portfolioText.style.width = this.addPx(35);
    // this.$refs.portfolioText.style.height = this.addPx(0);
    // this.$refs.portfolioText.style["min-height"] = this.addPx(0);
    this.$refs.portfolioText.classList.add("hideCase");
    this.splitHalf = false;
    setTimeout(() => {
      this.portfolioTextShown = false;
    }, this.fadeDelay);
    this.$refs.portfolioText.classList.remove("height-adjust");
  }

  toggleButtonText(willShowButton) {
    if (willShowButton) {
      // select element by class
      let buttons = document.querySelectorAll(".studyShowButton");
      // For each node, change gext
      _.forEach(buttons, (x) => {
        console.log(x);
        x.textContent = this.closeButtonText;
      });
    } else {
      // select element by class
      let buttons = document.querySelectorAll(".studyShowButton");

      // Change text node
      _.forEach(buttons, (x) => {
        console.log(x);
        x.textContent = this.openButtonText;
      });
    }
  }

  togglePortfolioText() {
    if (!this.portfolioTextShown) {
      console.log("Case Study not shown, starting process");

      //toggle the button text
      this.toggleButtonText(true);

      // Place (display) #casestudy-view, neutron state
      // this.placeCaseStudy();

      // Widen case study x and y
      this.expandCaseStudy();

      // Toggle opacity of the #casestudy-view first, delayed

      this.portfolioTextShown = true;
      this.fadeCaseStudy(true);

      // Indicate end of display
      console.log(this.$refs.portfolioText.style.transition);
    } else {
      //Toggle the buttons
      this.toggleButtonText(false);

      // Fade case study
      this.fadeCaseStudy(false);

      // shrink and remove case study
      setTimeout(() => {
        this.shrinkCaseStudy();
      }, this.fadeDelay);
    }

    // Stretch/shrink height of portfolioText
    // this.$refs.portfolioText.style.height = this.$refs.portfolioText.style
    //   .height
    //   ? "0px"
    //   : "50px";
  }

  setPortfolioTextTop() {
    // console.log(this.$refs.portfolioText.clientHeight);
    this.portfolioTextTop =
      this.$refs.portfolioText.clientHeight - window.innerHeight + 50;
  }

  async mounted() {
    let ptext = document.querySelectorAll(".portfolitext");

    _.forEach(ptext, (x) => {
      console.log(x);
      x.classList.add("studyShow");
      let studyShowButton = document.createElement("div");
      let showButtonText = document.createTextNode("MORE INFO");
      studyShowButton.appendChild(showButtonText);
      studyShowButton.classList.add("studyShowButton");
      studyShowButton.addEventListener("click", this.togglePortfolioText);
      x.append(studyShowButton);
    });

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

    document.addEventListener("keyup", (e) => {
      if (e.keyCode === 84) {
        // console.log("Created, Keyup Listener");
        // console.log(this.$refs);
        this.togglePortfolioText();
      }
    });

    setTimeout(() => {
      this.setPortfolioTextTop();
    }, 1000);

    // Now with HTML in the JSON, unescaping said HTML for body text, placing in description area.
    var e = this.$refs.caseBody;
    e.innerHTML = this.caseBody;
  }
}
</script>

<style lang="scss">
.close-button {
  float: right;
  cursor: pointer;
  &:hover {
    color: #00d49c;
    border-color: #00d49c;
  }
  transition: all cubic-bezier(0.75, 0.25, 0.25, 0.75) 600ms;
}
.fa.fa-times-circle-o.close-button {
  font-size: 2rem;
}

.studyShow .studyShowButton {
  color: #333;
  font-size: 0.75rem;
  background: rgba(255, 255, 255, 0.5);
  border: 2px solid #333;
  padding: 8px 16px;
  display: inline-block;
  margin-top: 10px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    color: #00d49c;
    border-color: #00d49c;
  }
  transition: all cubic-bezier(0.75, 0.25, 0.25, 0.75) 600ms;
}

#casestudy-view {
  height: 0px;
  position: sticky;
  -webkit-position: sticky;
  top: 0px;
  align-self: flex-start;
  backdrop-filter: blur(10px);
}

.hideCase {
  min-height: 80px !important;
}

#case-body {
  margin-bottom: 2rem;
  p {
    font-size: 14px;
    line-height: 22px;
  }
}

#case-title {
  position: sticky;
  top: 0;
  padding: 10px 0;
  margin-bottom: 0;
}

#portfolio-view {
  // margin-right: 0 !important;
}
@media (min-width: 1280px) {
  .content {
    padding-right: 1.2rem;
  }

  .height-adjust {
    min-height: 80vh !important;
  }

  .hideCase {
    margin-right: -35px;
  }

  #casestudy-view {
    top: 2rem;
    max-height: 100vh;
    padding-bottom: 2rem;
    overflow-y: scroll;
  }

  #case-title {
    background: white;
  }
}

@media (max-width: 1279px) {
  .desc {
    padding-bottom: 10rem;
  }
  .height-adjust {
    min-height: 50vh !important;
  }
  #case-body {
    max-height: 50vh;
    overflow-y: scroll;
    padding-bottom: 2rem;
    p {
      font-size: 14px;
      line-height: 22px;
    }
  }
  #casestudy-view {
    width: 100% !important;
    margin-left: 0 !important;
    padding-left: 2rem;
    padding-right: 2rem;
    background: #eeeeeeef;
    border-top: 40px #eeeeee00 solid;
    border-bottom: 40px #eeeeee00 solid;
    overflow: hidden;
  }
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
  width: 275px;
  margin-left: -20px;
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
  line-height: 1.7rem;
  font-weight: 400 !important;
}

.ja .portfolitext {
  display: inline-block;
  font-size: 1rem;
  line-height: 1.7rem;
  font-weight: 400 !important;
}

@media (min-width: 1280) {
  .en .portfolitext {
    padding-right: 3rem;
  }

  .ja .portfolitext {
    padding-right: 3rem;
  }
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
    padding-right: 0;
    padding-left: 0;
  }
  .portfolitext {
    padding: unset;
    margin-left: 0;
    margin-right: 0;
    min-width: 300px;
  }

  .portfolirow.just-right {
    justify-content: center !important;
  }
  .portfolirow {
    flex-wrap: wrap;
    padding: 0;
    margin-top: 0;
    margin-bottom: 0;
  }
  .portfolitem {
    margin-top: 2rem;
    margin: 0 !important;
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
</style>
