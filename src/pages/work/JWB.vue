<template lang=pug>
  Portfolio
      #portfolio-view.w-auto.border-t.pt-2.border-black.order-first(
        v-show="portfolioTextShown"
        class="lg:w-1/2 ml-4 lg:m-0 lg:ml-8 lg:order-none"
        :style="{top: '-'+portfolioTextTop+'px'}"
        ref="portfolioText"
        )
        .portfolirow.flex-row-reverse.just-right
          div(class="lg:border-t").pt-2.border-black.order-first.w-auto.ml-4.w-half.portfolitem.portfolitext
            h1.text-2xl.font-bold.mb-4 {{ currentItem.name }}
            p.desc {{ currentItem.desc }}
      #casestudy-view
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
export default class JWB extends Entry {
  currentItemIndex = 5;
}
</script>

<style lang="scss" scoped>
</style>
