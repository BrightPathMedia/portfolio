<template>
  <Layout>

    <div class='flex flex-col lg:flex-row my-4 w-full'>
      <div class='w-full lg:w-1/2 p-4 lg:p-0 lg:mr-8'>
      </div>

      <div class='w-auto lg:w-1/2 ml-4 lg:m-0 lg:ml-8 border-t pt-2 border-black order-first lg:order-none'>
        <h1 class='h1 text-2xl font-bold mb-4'>{{ test }}</h1>
        <p class='desc'>
        </p>
      </div>
    </div>

    </div>
  </Layout>
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
