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

  setItem() {
    const { url } = this.$context;
    for (var key in this.$t("work.workItems")) {
      var w = this.$t("work.workItems")[key];
      if (w.url == url) {
        this.currentItemIndex = key;
      }
    }
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
</style>
