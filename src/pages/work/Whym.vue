<template lang=pug>
  Portfolio
    .portfolirow.flex-row-reverse.just-right
      div(class="lg:border-t").pt-2.border-black.order-first.w-auto.ml-4.w-half.portfolitem.portfolitext
        h1.text-2xl.font-bold.mb-4 {{ currentItem.name }}
        p.desc {{ currentItem.desc }}
    .portfolirow
      img(src='/images/portfolio/whym/whym-03.png').portfolitem
    .portfolirow.flex-row-reverse.just-right
      .portfolitext.w-half.portfolitem
        h1.portfolisubhead {{ currentItem.bio["1-title"] }}
        p {{ currentItem.bio[1] }}
    .portfolirow
      img(src='/images/portfolio/whym/whym-04.png').portfolitem
    .portfoligroup
      .portfolirow.flex-row-reverse
        img( src='/images/portfolio/whym/whym-01.png').portfolitem.w-half
        .w-half.portfolitext.portfolitem.order-first
          h1.portfolisubhead {{ currentItem.bio["2-title"] }}
          p {{ currentItem.bio[2] }}
      .portfolirow
        img( src='/images/portfolio/whym/whym-06.png').portfolitem.w-half
        img( src='/images/portfolio/whym/whym-05.png').portfolitem.w-half
    .portfoligroup
      .portfolirow
        img( src='/images/portfolio/whym/whym-02.png').w-full.portfolitem
    .portfolirow
      img(src='/images/portfolio/whym/whym-07.png').portfolitem
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
export default class Whym extends Entry {
  currentItemIndex = 1;
}
</script>

<style lang="scss" scoped>



</style>
