<template lang=pug>
  Portfolio
    .portfolirow.flex-row-reverse.just-right
      .border-t.pt-2.border-black.order-first.w-auto.ml-4.w-half
        h1.text-2xl.font-semibold.mb-4 {{ currentItem.name }}
        p.desc {{ currentItem.desc }}
    .portfolirow
      img(src='/images/portfolio/whym/whym-03.png').portfolitem
    .portfolirow.flex-row-reverse.just-right
      .portfolitext.w-half.portfolitem
        h1.portfolisubhead {{ currentItem.bio["1-title"] }}
        p {{ currentItem.bio[1] }}
    .portfolirow
      img(src='/images/portfolio/whym/whym-04.png').portfolitem
    .portfoligroup
      .portfolirow
        img( src='/images/portfolio/whym/whym-01.png').portfolitem.w-half
        .w-half.portfolitext.portfolitem
          h1.portfolisubhead {{ currentItem.bio["2-title"] }}
          p {{ currentItem.bio[2] }}
      .portfolirow
        img( src='/images/portfolio/whym/whym-06.png').portfolitem.w-half
        img( src='/images/portfolio/whym/whym-05.png').portfolitem.w-half
    .portfoligroup
      .portfolirow
        .fg-1.portfolitem
          img( src='/images/portfolio/whym/whym-02.png').w-full
    .portfolirow
      img(src='/images/portfolio/whym/whym-07.png').portfolitem
</template>

<script>
import Vue from "vue";
import Portfolio from "../../layouts/Portfolio.vue"
import Component from "vue-class-component";

@Component({
  components: {
    Portfolio
  }
})
export default class Whym extends Vue {
  test = 20;
  currentItemIndex = 1;

  get currentItem() {
    return this.$t("work.workItems")[this.currentItemIndex];
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

.desc {
  line-height: 1.7rem;
}

.flex-row-reverse {
  flex-flow: row-reverse;
}

.portfolirow {
  display: flex;
  justify-content: space-around;
}

.portfolitem {
  margin: 0 1rem;
  align-self: center;

  &:last-child{
    margin-right: 0;
  }

  &:first-child{
    margin-left: 0;
  }
}

.portfolitext {
  display: inline-block;
  font-size: 1rem;
  padding-right: 3rem;
  line-height: 1.7rem;
  font-weight: 100;
}

.portfolisubhead {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 400;
}



@media (max-width: 1279px) {
  .portfolirow {
    flex-wrap: wrap;
  }
  .portfolitem {
    padding-left: 0;
    padding-right: 0;
  }
}

.portfoligroup, .portfolirow {
  margin-bottom: 4rem;
  .portfolirow {
    margin-bottom: 2rem;
  }
}

.fg-1 {
  flex-grow: 1;
}

@media (min-width: 1279px) {
  .w-half {
    width: calc(50% - 1rem);
  }
}

.desc {
  padding-right: 4rem;
  font-weight: 100;
}

.just-right{
  justify-content: right;
}

.font-semibold {
  font-weight: 400;
}
</style>
