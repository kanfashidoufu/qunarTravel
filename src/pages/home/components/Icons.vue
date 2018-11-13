<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(item, index) of pages" :key="index">
        <div class="icon" v-for="subItem of item" :key="subItem.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="subItem.imgUrl" :alt="subItem.keywords">
          </div>
          <div class="icon-desc">{{subItem.keywords}}</div>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  props: {
    iconList: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      } 
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/mixins.styl'
    // >>>表示样式穿透
    .icons >>> .swiper-container
      height: 0
      padding-bottom: 50%
    .icons >>> .swiper-pagination-bullet
      height: .12rem
      width: .12rem
      margin: 0
      background: rgba(144,144,144,0.8)
    .icons >>> .swiper-pagination-bullet-active
      background: rgba(0,175,190,.8) !important
    .icons
      overflow: hidden
      height: 0
      padding-bottom: 50%
      padding-top: 0.1rem
      background-color: #fff
      .icon
        position: relative
        overflow: hidden 
        float: left
        width: 25%
        height: 0
        padding-top: .1rem
        padding-bottom: 20%
        text-align: center
        .icon-img
          display: inline-block
          margin: 0
          width: 1.1rem
          height: 1.1rem
          .icon-img-content
            width: 1.1rem
            height: 1.1rem
            background: 0
            opacity: 1
            vertical-align: middle
        .icon-desc
          margin-top: .1rem
          color: #212121
          font-size: .28rem
          ellipsis()
          
</style>