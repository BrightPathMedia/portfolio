<template lang=pug>
  Portfolio
    .portfolirow.flex-row-reverse.just-right
      div(class="lg:border-t").pt-2.border-black.order-first.w-auto.ml-4.w-half.portfolitem.portfolitext
        h1.text-2xl.font-bold.mb-4 {{ currentItem.name }}
        p.desc {{ currentItem.desc }}
    .portfoligroup
      .portfolirow
        img(:src='currentItem.images.firePan').portfolitem.w-half
        img(:src='currentItem.images.drinkNotes').portfolitem.w-half


</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import Portfolio from "../../layouts/Portfolio.vue";

@Component({
  components: {
    Portfolio
  }
})
export default class CultureSJ extends Vue {
  test = 20;
  currentItemIndex = 2;

  get currentItem() {
    return this.$t("work.workItems")[this.currentItemIndex];
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
