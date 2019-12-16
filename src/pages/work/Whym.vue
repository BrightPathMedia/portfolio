<template lang=pug>
  Layout

    div(class='lg:flex-row').flex.flex-col.my-4.w-full 
      div(class='lg:w-1/2 lg:p-0 lg:mr-8').w-full.p-4
      div(class='lg:w-1/2 lg:m-0 lg:ml-8 lg:order-none').w-auto.ml-4.border-t.pt-2.border-black.order-first 
        h1.h1.text-2xl.font-bold.mb-4 {{ test }}
        p.desc

</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Whym extends Vue {
    test = 20;
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
