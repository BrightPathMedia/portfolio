<template lang=pug>
  Portfolio
    .portfolirow.flex-row-reverse.just-right
      div(class="lg:border-t").pt-2.border-black.order-first.w-auto.ml-4.w-half.portfolitem.portfolitext
        h1.text-2xl.font-bold.mb-4 {{ currentItem.name }}
        p.desc {{ currentItem.desc }}
    .portfolirow
      img(:src='currentItem.images.straight').portfolitem.w-half
      img(:src='currentItem.images.curly').portfolitem.w-half
    
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
export default class Lately extends Entry {
  currentItemIndex = 4;
}
</script>

<style lang="scss" scoped>
</style>
