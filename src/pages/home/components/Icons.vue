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
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      },
      iconList: [{
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          keywords: '景点门票'
        },{
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          keywords: '一日游'
        },{
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          keywords: '杭州必游'
        },{
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
          keywords: '动植物园'
        },{
          id: '0005',
          imgUrl: 'https://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
          keywords: '打卡圣地'
        },{
          id: '0006',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png',
          keywords: '西湖'
        },{
          id: '0007',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
          keywords: '杭州乐园'
        },{
          id: '0008',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png',
          keywords: '西溪湿地'
        },{
          id: '0009',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png',
          keywords: '千岛湖'
        },{
          id: '0010',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
          keywords: '全部玩乐'
        }]  
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