<template lang=pug>
  Portfolio
    .portfolirow.flex-row-reverse.just-right
      .border-t.pt-2.border-black.order-first.w-auto.ml-4.w-half
        h1.text-2xl.font-bold.mb-4 {{ currentItem.name }}
        p.desc.portfolitext {{ currentItem.bio[1] }}
    .portfolirow
      img(src='/images/portfolio/whym/whym-03.png').portfolitem
    .portfoligroup
      .portfolirow
        img( src='/images/portfolio/whym/whym-01.png').portfolitem.w-half
        .w-half.portfolitext.portfolitem
          h1.text-2xl.font-bold.mb-4 あら嫌だ
          p {{ currentItem.bio[2] }}
      .portfolirow
        img( src='/images/portfolio/whym/whym-04.png').portfolitem.w-half
        img( src='/images/portfolio/whym/whym-05.png').portfolitem.w-half
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

.flex-row-reverse {
  flex-flow: row-reverse;
}

.portfolirow {
  margin-bottom: 2rem;
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
  font-size: 1.5rem;
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

.portfoligroup {
  margin-bottom: 6rem;
}

.fg-1 {
  flex-grow: 1;
}

@media (min-width: 1279px) {
  .w-half {
    width: 50%;
  }
}

.desc {
  padding-right: 4rem;
}

.just-right{
  justify-content: right;
}
</style>
