<template lang=pug>
  Layout
    div(class='lg:flex-row').flex.flex-col.my-4.w-full
      div(class='lg:w-1/2 p-4 lg:p-0 lg:mr-8').w-full
        img(:src='currentItem.image').h-auto.w-auto

      div(class='lg:w-1/2 lg:m-0 lg:ml-8 lg:order-none').border-t.pt-2.border-black.order-first.w-auto.ml-4 
        h1.text-2xl.font-bold.mb-4 {{ currentItem.name }}
        p.desc {{ currentItem.bio[1] }}
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Whym extends Vue {
  test = 20;
  currentItemIndex = 1;

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
