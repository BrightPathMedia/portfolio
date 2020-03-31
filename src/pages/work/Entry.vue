<script>
import Vue from "vue";

export default class Entry extends Vue {
  get currentItem() {
    return this.$t("work.workItems.rows")["r" + this.currentRow][
      this.currentItemIndex
    ];
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
