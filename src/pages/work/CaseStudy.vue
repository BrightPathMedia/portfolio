<template lang="pug">
    div
        #casestudy-view(
          v-show="portfolioTextShown"
          class="lg:w-1/2 ml-4 lg:m-0 lg:ml-8 lg:order-none"
          :style="{top: '-'+portfolioTextTop+'px'}"
          ref="portfolioText"
        )
            slot(name="caseStudy")

        #portfolio-view(
          class='w-full p-4 lg:p-0 lg:mr-8'
          :class="{ 'lg:w-full': !portfolioTextShown, 'lg:w-1/2': portfolioTextShown }"
        )
            slot(name="portfolio")
</template>
<script>
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";

@Component
export default class CaseStudy extends Vue {
  portfolioTextShown = false;
  portfolioTextTop = 0;

  togglePortfolioText() {
    this.portfolioTextShown = !this.portfolioTextShown;
    console.log(this.$refs.portfolioText.clientHeight);
  }

  setPortfolioTextTop() {
    console.log(this.$refs.portfolioText.clientHeight);
    this.portfolioTextTop =
      this.$refs.portfolioText.clientHeight - window.innerHeight + 50;
  }

  async mounted() {
    console.log(this.$refs);
    document.addEventListener("keyup", (e) => {
      if (e.keyCode === 84) {
        console.log("Created, Keyup Listener");
        console.log(this.$refs);
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
#portfolio-view {
  transition: width 0.75s;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
}

#casestudy-view {
  position: sticky;
  -webkit-position: sticky;
  top: 0px;
  align-self: flex-start;
}
</style>
