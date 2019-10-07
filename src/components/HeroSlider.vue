<template>
  <div class='slide h-full w-full flex flex-col lg:flex-row flex-grow-1 flex-shrink-0' :class="slideAnimClass">
    <div class='slide-col img-col text-center flex justify-center'>
      <img :src="image" class="h-auto max-h-full max-w-full m-auto" />
    </div>
    <div class='slide-col text-col flex flex-col justify-center' :class="textAnimClass">
      <div>
        <span class='text-2xl font-bold title'> {{ title }} </span>
      </div>
      <div>
        <span class='text-md font-thin sub'> {{ sub }} </span>
      </div>

      <div class='mt-4'>
        <span class='text-sm desc'> {{ desc }} </span>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'HeroSlider',
  props: ['image', 'title', 'sub', 'desc', 'textDisplayTime'],
  data() {
    return {
      textAnimClass: 'pre-anim',
      slideAnimClass: 'img-only'
    }
  },

  mounted() {
    this.animate();
  },

  activated() {
    this.animate();
  },

  methods: {
    animate() {
      let animDelay = 1000;
      let animInterval = 500;
      setTimeout(() => this.slideAnimClass = 'anim-in', animDelay);
      setTimeout(() => this.textAnimClass = 'anim-in', animDelay + animInterval);
      setTimeout(() => this.textAnimClass = 'anim-out', animDelay + (animInterval * 2));
      setTimeout(() => this.textAnimClass = 'anim-in-2', animDelay + (animInterval * 2) + this.textDisplayTime);
      setTimeout(() => this.textAnimClass = 'pre-anim', animDelay + (animInterval * 3) + this.textDisplayTime);
      setTimeout(() => this.slideAnimClass = 'img-only',animDelay + (animInterval * 4) + this.textDisplayTime);
    }
  }

}
</script>

<style lang='scss' scoped>

  .slide {
    transform: translateY(0);
    opacity: 1;
    transition: all 1000ms cubic-bezier(0.77, 0, 0.175, 1);

    .slide-col {
      width: 50%;
      margin-left: 0;
      transition: all 600ms cubic-bezier(0.77, 0, 0.175, 1);

      &.img-col {
        img {
          width: 40%;
          margin: auto;
          height: auto;
        }
      }
    }

    &.img-only {
      .img-col {
        width: 50%;
        margin-left: 25%;
      }

      .text-col {
        width: 0;
        overflow: hidden;
      }
    }

    &.pre-anim {
      transform: translateY(150%);
    }
    &.anim-in {
      transform: translateY(0);
    }
    &.post-anim {
      transform: translateY(-150%);
    }
  }

  .text-col {
    .title, .sub, .desc {
      position: relative;
      display: inline-block;
      overflow: hidden;

      &::after {
        position: absolute;
        top: 0;
        left: 0;
        content: '';
        background: black;
        width: 0;
        height: 100%;
        transform: translateX(0);
        transition: all 450ms cubic-bezier(0.77, 0, 0.175, 1);;
      }
    }

    .sub {
      &::after {
        transition-delay: 100ms;
      }
    }

    .desc {
      width: 16rem;
      &::after {
        transition-delay: 200ms;
      }
    }

    &.pre-anim {
      .title, .sub, .desc {
        color: white;
      }
    }

    &.anim-in {
      .title, .sub, .desc {
        color: white;
        &::after {
          width: 100%;
        }
      }
    }

    &.anim-in-2 {
    .title, .sub, .desc {
        color: black;
        &::after {
          width: 100%;
        }
      }
    }

    &.anim-out {
      .title, .sub, .desc {
        color: black;
        &::after {
          transform: translateX(101%);
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 1023px) {
    .slide {
      flex-direction: column;

      .slide-col {
        width: 100%;
        height: 50%;
      }

      .text-col {
        .desc {
          width: auto;
        }
      }

      &.img-only {
        .img-col {
          width: 100%;
          margin-left: 0;
        }

        .text-col {
          width: 100%;
          text-align: center;
        }
      }
    }
  }

</style>
