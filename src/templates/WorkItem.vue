<template>
  <Layout>

    <div class='flex flex-col lg:flex-row my-4 w-full'>
      <div class='w-full lg:w-1/2 p-4 lg:p-0 lg:mr-8'>
        <img :src="currentItem.image" class="h-auto w-auto" />
      </div>

      <div class='w-auto lg:w-1/2 ml-4 lg:m-0 lg:ml-8 border-t pt-2 border-black order-first lg:order-none'>
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
    this.setItem()
  },

  watch: {
    $route: 'setItem'
  },

  computed: {
    currentItem() {
      return this.$t('work.workItems')[this.currentItemIndex]
    }
  },

  methods: {
    setItem() {
      const { url } = this.$context
      for(var key in this.$t('work.workItems')) {
        var w = this.$t('work.workItems')[key]
        if (w.url == url) {
          this.currentItemIndex = key
        }
      }
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
