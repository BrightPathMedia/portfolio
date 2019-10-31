<template>
  <Layout>

    <div class='flex flex-col lg:flex-row my-4 w-full'>
      <div class='w-1/2 mr-8'>
        <img :src="currentItem.image" class="h-auto w-auto" />
      </div>

      <div class='w-1/2 ml-8 border-t pt-2 border-black'>
        <h1 class='h1 text-2xl font-bold mb-4'>{{ currentItem.name }}</h1>
        <p class='desc'>
          {{ currentItem.desc }}
        </p>
      </div>
    </div>

    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Work'
  },

  data() {
    return {
      currentItemIndex: 1
    }
  },

  async mounted() {
    const { id } = this.$route.params
    for(var key in this.$t('work.workItems')) {
      console.log(this.$t('work.workItems')[key])
      var w = this.$t('work.workItems')[key]
      if (w.url.replace('/work/','').toLowerCase() == id.toLowerCase()) {
        this.currentItemIndex = key
      }
    }
  },

  computed: {
    currentItem() {
      return this.$t('work.workItems')[this.currentItemIndex]
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
