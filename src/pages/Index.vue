<template>
  <Layout>
    <div class='w-full overflow-hidden'>
      <transition name="slide">
        <keep-alive>
          <HeroSlider :title="currentSlide.title"
                      :image="currentSlide.image"
                      :sub="currentSlide.sub"
                      :desc="currentSlide.desc"
                      :key="currentSlideIndex"
                      :textDisplayTime="sliderTextDisplayTime"
          />
        </keep-alive>
      </transition>
    </div>

  </Layout>
</template>

<script>
import HeroSlider from '~/components/HeroSlider'

export default {
  components: {
    HeroSlider
  },

  metaInfo: {
    title: 'Home'
  },

  data() {
    return {
      sliderTextDisplayTime: 4000,  // (ms) Interval b/w slider text display/hide transition.
      currentSlideIndex: 1,
    }
  },

  computed: {
    currentSlide() {
      return this.$t(`index.slides.${this.currentSlideIndex + 1}`)
    }
  },

  mounted() {
    const slideCount = Object.keys(this.$t('index.slides')).length;

    setInterval(() => {
      if (this.currentSlideIndex + 1 >= slideCount) {
        this.currentSlideIndex = 0;
      } else {
        this.currentSlideIndex = this.currentSlideIndex + 1;
      }
    }, 4000 + this.sliderTextDisplayTime);
  }
}
</script>

<style lang='scss' scoped>

  .slide {
    transform: translate(0,0);
    transition: none;
  }

  .slide-leave, .slide-enter {
    transform: translateY(0);
  }

  .slide-leave-to {
    transform: translateY(-100%);
  }

  .slide-enter-active, .slide-leave-active {
    transition: transform 750ms cubic-bezier(0.77, 0, 0.175, 1);
  }

  .slide-enter-to {
    transform: translateY(-100%) !important;
  }

</style>
