<template>
  <Layout>
    
    <div class='flex flex-col lg:flex-row my-4 w-full'>
      <div id='portfolio-images'
           class='w-full p-4 lg:p-0 lg:mr-8'
           :class="{ 'lg:w-full': !portfolioTextShown,
                     'lg:w-1/2': portfolioTextShown }">
        <img :src="currentItem.image" class="h-auto w-auto" />
        <img :src="currentItem.image" class="h-auto w-auto" />
        <img :src="currentItem.image" class="h-auto w-auto" />
        <img :src="currentItem.image" class="h-auto w-auto" />
      </div>

      <div v-if="portfolioTextShown"
           id="portfolio-text"
           class="w-auto lg:w-1/2 ml-4 lg:m-0 lg:ml-8 border-t pt-2 border-black order-first lg:order-none"
           :style="{top: '-'+portfolioTextTop+'px'}"
           ref="portfolioText">
        <h1 class='h1 text-2xl font-bold mb-4'>{{ currentItem.name }}</h1>
        <p class='desc'>
          {{ currentItem.desc }}
          
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin odio in purus finibus pharetra. Fusce imperdiet mattis justo, et tristique nulla porttitor id. Etiam sed purus et ex posuere gravida id vitae enim. Mauris magna sapien, tincidunt et risus id, lacinia sodales ligula. Sed et vehicula leo, tristique cursus lorem. Nullam nibh turpis, dapibus at ante quis, dignissim finibus metus. Duis venenatis porttitor est eget convallis. Nullam at fermentum sem. Maecenas vel lectus nec massa efficitur dictum. Etiam vel lorem ac turpis tempor gravida. Praesent tincidunt placerat nulla, ut tincidunt odio fermentum a.
          <br/>
          Ut id convallis libero. Sed quis dolor nec felis mollis viverra. Sed vehicula a massa vel finibus. Nunc lorem velit, placerat sed lobortis eu, fermentum eget risus. Ut sed posuere neque. Sed mollis, arcu eu feugiat egestas, libero nibh facilisis nulla, id lobortis massa urna quis velit. Nunc laoreet eu tortor nec fermentum. Nam condimentum hendrerit ante, sed placerat neque imperdiet in. Pellentesque non ligula mattis, faucibus mauris at, molestie elit. Nunc tincidunt faucibus ante, eu rutrum velit vulputate in. Sed id erat vel felis iaculis commodo. Proin at nulla eget leo ultricies dapibus. Cras eget aliquet mi, feugiat efficitur lorem. Phasellus tortor nulla, aliquam et placerat porttitor, finibus eget justo.
          <br/>

          Pellentesque in efficitur purus. Curabitur eleifend ante ac sollicitudin convallis. Nullam varius magna laoreet efficitur fermentum. Nam ultrices blandit varius. Nullam aliquet, dolor vitae aliquam vulputate, augue eros aliquet libero, a tincidunt magna diam quis orci. Pellentesque aliquam aliquam risus, ac pretium dui rhoncus non. Donec urna nunc, tincidunt sit amet lobortis id, blandit vel libero. Pellentesque tempus at tortor sit amet ultricies. Suspendisse ultricies velit in ligula imperdiet, quis accumsan nunc ornare. Donec mauris nisl, pharetra eu magna sed, tempor suscipit purus. Donec tincidunt, nisl non aliquet condimentum, mi metus cursus justo, rhoncus porta eros odio vitae sapien. In eget ipsum sed magna placerat efficitur eget a erat.
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
      currentItemIndex: 1,
      portfolioTextShown: true,
      portfolioTextTop: 0
    }
  },

  async mounted() {
    this.setItem()
    
    document.addEventListener('keyup', (e) => {
      if (e.keyCode === 84) {
        this.togglePortfolioText(!this.portfolioTextShown);
      }
    });
    
    setTimeout(() => {
      this.setPortfolioTextTop()
    }, 1000);

  },

  watch: {
    $route: 'setItem',
    currentItem() {
      setTimeout(() => {
        this.setPortfolioTextTop()
      }, 1000);
    }
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
    },
    
    togglePortfolioText(show = false) {
      this.portfolioTextShown = show;
    },
    
    setPortfolioTextTop() {
      console.log(this.$refs.portfolioText.clientHeight);
      this.portfolioTextTop = (this.$refs.portfolioText.clientHeight - window.innerHeight) + 50;
    }
  }

}
</script>

<style lang="scss" scoped>

  #portfolio-images {
    transition: width 150ms ease-in-out;
  }
  
  #portfolio-text {
    position: sticky;
    -webkit-position: sticky;
    top: 0px;
    align-self: flex-start;
  }

</style>
