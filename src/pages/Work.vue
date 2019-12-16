<template lang=pug>
  Layout
    div(class="lg:flex-row").flex.flex-col.my-4.w-full
      a(class="lg:w-1/4.p-2" :href="w.url" v-for="w in $t('work.workItems')").work-item.w-full
        div
          .title.pb-2 {{ w.name }}
          div
          .image
            img(:src="w.image").h-auto.w-auto
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Work extends Vue {
  metaInfo = {
    title: 'Work'
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
