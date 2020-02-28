<template lang=pug>
  Portfolio
    .portfolirow.flex-row-reverse.just-right
      .border-t.pt-2.border-black.order-first.w-auto.ml-4.w-half
        h1.text-2xl.font-bold.mb-4 {{ currentItem.name }}
        p.desc {{ currentItem.desc }}
    .portfolirow
      img(src='/images/portfolio/whym/whym-03.png').portfolitem
    .portfolirow.flex-row-reverse.just-right
      .portfolitext.w-half.portfolitem
        h1.portfolisubhead {{ currentItem.bio["1-title"] }}
        p.portfolitext {{ currentItem.bio[1] }}
    .portfolirow
      img(src='/images/portfolio/whym/whym-04.png').portfolitem
    .portfoligroup
      .portfolirow
        img( src='/images/portfolio/whym/whym-01.png').portfolitem.w-half
        .w-half.portfolitext.portfolitem
          h1.portfolisubhead {{ currentItem.bio["2-title"] }}
          p {{ currentItem.bio[2] }}
      .portfolirow
        img( src='/images/portfolio/whym/whym-06.png').portfolitem.w-half
        img( src='/images/portfolio/whym/whym-05.png').portfolitem.w-half
    .portfoligroup
      .portfolirow
        .fg-1.portfolitem
          img( src='/images/portfolio/whym/whym-02.png').w-full
    .portfolirow
      img(src='/images/portfolio/whym/whym-07.png').portfolitem
</template>

<script>
import Vue from "vue";
import Portfolio from "../../layouts/Portfolio.vue";
import Component from "vue-class-component";

@Component({
  components: {
    Portfolio
  }
})
export default class Whym extends Vue {
  test = 20;
  currentItemIndex = 1;

  get currentItem() {
    return this.$t("work.workItems")[this.currentItemIndex];
  }
}
</script>

<style lang="scss" scoped>



</style>
