<template lang=pug>
  Layout
    div(class='lg:flex-row').flex.flex-col.my-4.w-full
      div(class='lg:w-1/2 p-4 lg:p-0 lg:mr-8').w-full
        img(:src="currentItem.image").h-auto.w-auto

      div(class='lg:w-1/2 lg:m-0 lg:ml-8 lg:order-none').border-t.pt-2.border-black.order-first.w-auto.ml-4 
        h1.text-2xl.font-bold.mb-4 {{ currentItem.name }}
        p.desc {{ currentItem.desc }}
</template>

<script>
export default {
  metaInfo: {
    title: "Work"
  },

  data() {
    return {
      currentItemIndex: 1
    };
  },

  async mounted() {
    this.setItem();
  },

  watch: {
    $route: "setItem"
  },

  computed: {
    currentItem() {
      return this.$t("work.workItems")[this.currentItemIndex];
    }
  },

  methods: {
    setItem() {
      const { url } = this.$context;
      for (var key in this.$t("work.workItems")) {
        var w = this.$t("work.workItems")[key];
        if (w.url == url) {
          this.currentItemIndex = key;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
