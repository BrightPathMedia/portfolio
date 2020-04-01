<template lang=pug>
  Portfolio
    .portfolirow.flex-row-reverse.just-right
      div(class="lg:border-t").pt-2.border-black.order-first.w-auto.ml-4.w-half.portfolitem.portfolitext
        h1.text-2xl.font-bold.mb-4 {{ currentItem.name }}
        p.desc {{ currentItem.desc }}
    .portfolirow.flex-row-reverse.just-right
      .portfolitext.w-half.portfolitem
        h1.portfolisubhead {{ currentItem.bio["1-title"] }}
        p {{ currentItem.bio[1] }}
    .portfolirow
      img(:src='currentItem.images.homepage1').portfolitem.w-half
      img(:src='currentItem.images.homepage2').portfolitem.w-half
    .portfolirow.flex-row-reverse.just-right
      .portfolitext.w-half.portfolitem
        h1.portfolisubhead {{ currentItem.bio["battledishTitle"] }}
        p {{ currentItem.bio["battledishBody"] }}
    .portfolirow
      img(:src='currentItem.images.battledish').portfolitem
    .portfoligroup
      .portfolirow.flex-row-reverse
        img(:src='currentItem.images.tastemakersLogo').portfolitem.w-half
        .portfolitext.w-half.portfolitem.order-first
          h1.portfolisubhead {{ currentItem.bio["tastemakersTitle"] }}
          p {{ currentItem.bio["tastemakersBody"] }}
      .portfolirow
        img(:src='currentItem.images.tastemakersCombo').portfolitem
</template>

<script>
import Entry from "./Entry.vue";
import Portfolio from "../../layouts/Portfolio.vue";
import Component from "vue-class-component";

@Component({
  components: {
    Portfolio
  }
})
export default class Dishcrawl extends Entry {
  test = 20;
  currentItemIndex = 3;

  get currentItem() {
    return this.$t("work.workItems")[this.currentItemIndex];
  }
}
</script>

<style lang="scss" scoped>
</style>
