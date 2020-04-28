<script>
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";

@Component
export default class Entry extends Vue {
  portfolioTextShown = false;
  portfolioTextTop = 0;

  @Watch("$route")
  setItemAgain() {
    setItem();
  }

  @Watch("currentItem")
  portfolioTopTimeout() {
    this.setPortfolioTextTop();
    // setTimeout(() => {
    //   this.setPortfolioTextTop();
    // }, 1000);
  }

  get currentItem() {
    return this.$t("work.workItems")[this.currentItemIndex];
  }

  togglePortfolioText() {
    this.portfolioTextShown = !this.portfolioTextShown;
    console.log(this.$refs.portfolioText.clientHeight);
  }

  setPortfolioTextTop() {
    console.log(this.$refs);
    console.log(this.$refs.portfolioText.clientHeight);
    this.portfolioTextTop =
      this.$refs.portfolioText.clientHeight - window.innerHeight + 50;
  }

  setItem() {
    const { url } = this.$context;
    for (var key in this.$t("work.workItems")) {
      var w = this.$t("work.workItems")[key];
      if (w.url == url) {
        this.currentItemIndex = key;
      }
    }
  }

  async mounted() {
    document.addEventListener("keyup", e => {
      if (e.keyCode === 84) {
        console.log("Created, Keyup Listener");
        console.log(this.$refs);
        this.togglePortfolioText();
      }
    });

    setTimeout(() => {
      this.setPortfolioTextTop();
    }, 2000);
  }
}
</script>

<style lang="scss" scoped>
.work-item {
  .title {
    font-weight: 600;
    font-size: 1rem;
  }
}

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
