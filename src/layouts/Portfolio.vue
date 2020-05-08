<template>
  <div class="container-wrapper" :class="containerClass">
    <div
      id="container"
      class="container flex flex-col min-h-screen max-h-screen"
      :class="$i18n.locale"
    >
      <header class="flex-none lg:px-2">
        <nav class="flex items-center justify-between flex-wrap py-2">
          <div class="flex items-center flex-shrink-0 text-white mr-6">
            <g-link to="/" id="home-link">
              <img
                svg-inline
                id="logo-img"
                :alt="$static.metaData.siteName"
                src="../assets/images/logo.svg"
              />
            </g-link>
          </div>

          <div class="flex-grow text-right">
            <!-- <button
              id="btn-i18n"
              :class="localeBtnClass"
              @click="toggleLocale()"
              @mouseenter="rotateLocaleBtn()"
            >-->
            <button
              id="btn-i18n"
              :class="localeBtnClass"
              @click="toggleLocale()"
            >
              <img
                svg-inline
                :alt="English / 日本語"
                class="h-full w-auto h-max-full inline-block"
                src="../assets/images/icons-language_24px.svg"
              />
              <span class="italic hidden sm:inline-block text-xs pl-2">
                {{ currentLocaleText }}
              </span>
            </button>
          </div>

          <div class="block lg:hidden">
            <button
              class="flex items-center px-3 py-2 text-gray-800 border-none btn-mobile-menu"
              :class="{ open: mobileLinksShown }"
              @click="workLinkActive = mobileLinksShown = !mobileLinksShown"
            >
              <svg
                class="fill-current h-6 w-6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0" />
              </svg>
            </button>
          </div>

          <div
            class="mobile-menu w-full block lg:flex lg:items-center lg:w-auto"
            :class="{ hidden: !mobileLinksShown }"
          >
            <div class="text-sm text-right lg:flex-grow">
              <span
                class="dropdown-link inline-block"
                @mouseover="workLinkActive = true"
                @mouseleave="workLinkActive = false"
              >
                <g-link
                  class="block lg:inline-block pb-1 lg:w-full lg:text-center lg:font-bold header-link"
                  to="/work"
                  >{{ $t("header.work") }}</g-link
                >
                <div class="dropdown-menu" :class="{ shown: workLinkActive }">
                  <a
                    v-for="(val, key) in $t('work.workItems')"
                    :href="val.url"
                    :key="key"
                    :style="
                      'transition-delay:' + (300 + parseInt(key) * 100) + 'ms'
                    "
                    >{{ val.name }}</a
                  >
                </div>
              </span>
              <br class="lg:hidden" />
              <g-link
                class="inline-block lg:px-2 lg:mx-1 pb-1 font-bold header-link"
                to="/about"
                >{{ $t("header.about") }}</g-link
              >
              <br class="lg:hidden" />
              <g-link
                class="inline-block ml-3 pb-1 font-bold header-link"
                to="/contact"
                >{{ $t("header.contact") }}</g-link
              >
            </div>
          </div>
        </nav>
      </header>

      <div class="content flex-grow pt-20">
        <slot />
      </div>

      <div class="bg-overlay" :class="{ shown: workLinkActive }" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      containerClass: "",
      mobileLinksShown: false,
      workLinkActive: false,
      localeBtnBeingAnimated: false,
      localeBtnClass: "",
    };
  },

  methods: {
    toggleLocale() {
      document.body.style.overflow = "hidden";
      document.body.style.background = "black";
      this.containerClass = "rotate";

      setTimeout(() => {
        this.$i18n.locale = this.$i18n.locale == "en" ? "ja" : "en";
      }, 350);

      setTimeout(() => {
        this.containerClass = "";
        document.body.style.overflow = "";
        document.body.style.background = "white";
      }, 650);
    },

    rotateLocaleBtn() {
      if (!this.localeBtnBeingAnimated) {
        this.localeBtnBeingAnimated = true;
        this.localeBtnClass = "rotate";

        setTimeout(() => {
          this.localeBtnBeingAnimated = false;
          this.localeBtnClass = "";
        }, 600);
      }
    },
  },

  computed: {
    currentLocaleText() {
      return this.$i18n.locale == "ja" ? "English" : "日本語";
    },
  },
};
</script>

<style lang="scss" scoped>
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
  color: red !important;

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

@media (min-width: 1279px) {
  .w-half {
    width: calc(50% - 1rem);
  }
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
</style>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
