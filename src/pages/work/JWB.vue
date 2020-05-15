<template lang="pug">
  Portfolio
    CaseStudy(:caseTitle="currentItem.name", class="sm:w-full").portfolirow.flex-row-reverse.just-right
      template(v-slot:caseStudy)
        .portfolirow.flex-row-reverse.just-right
          .pt-2.order-first.w-auto.ml-4.w-full.portfolitem.portfolitext
            p.desc {{ currentItem.study.body }}
      template(v-slot:portfolio)
        .portfolirow.flex-row-reverse.just-right
          .portfolitext.w-full.portfolitem
            h1.portfolisubhead {{ currentItem.bio["1-title"] }}
            p {{ currentItem.bio[1] }}
        .portfolirow
          img(:src='currentItem.images.curly').portfolitem.w-half
          img(:src='currentItem.images.straight').portfolitem.w-half
        .portfolirow.flex-row-reverse.just-right
          .portfolitext.w-half.portfolitem
            h1.portfolisubhead {{ currentItem.bio["battledishTitle"] }}
            p {{ currentItem.bio["battledishBody"] }}
        .portfolirow
          img(:src='currentItem.images.curly').portfolitem
        .portfoligroup
          .portfolirow.flex-row-reverse
            img(:src='currentItem.images.straight').portfolitem.w-half
            .portfolitext.w-half.portfolitem.order-first
              h1.portfolisubhead {{ currentItem.bio["tastemakersTitle"] }}
              p {{ currentItem.bio["tastemakersBody"] }}
          .portfolirow
            img(:src='currentItem.images.curly').portfolitem
</template>

<script>
import Entry from "./Entry.vue";
import Portfolio from "../../layouts/Portfolio.vue";
import Component from "vue-class-component";
import CaseStudy from "./CaseStudy.vue";
@Component({
  components: {
    Portfolio,
    CaseStudy
  }
})
export default class JWB extends Entry {
  currentItemIndex = 5;
}
</script>

<style lang="scss" scoped></style>
