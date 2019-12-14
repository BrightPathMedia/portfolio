<template>
  <Layout>

    <div class='flex flex-col lg:flex-row my-4 w-full'>
      <a class='work-item w-full lg:w-1/4 p-2'
         :href="w.url"
         v-for="w in $t('work.workItems')">
        <div class=''>
          <div class='title pb-2'>{{ w.name }}</div>
          <div class='image'>
            <img :src="w.image" class="h-auto w-auto" />
          </div>
        </div>
      </a>
    </div>

    </div> 
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Work'
  },

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
