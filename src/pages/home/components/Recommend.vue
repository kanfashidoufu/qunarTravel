<template>
	<div class="recommend-title">
    <img class="item-title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="猜你喜欢">
    <span class="item-title">猜你喜欢</span>
    <ul class="recommend-list">
      <li class="item" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.itemImgUrl" :alt="item.title">
        </div>
        <div v-if="item.tagName" class="item-like-tag" :style="item.tagImgUrl">可订明日</div>
        <div class="item-like-info">
          <div class="item-like-title">{{item.title}}</div>
          <div class="item-like-price">
            <span class="price-tag">
              ¥
              <em class="price-number">{{item.price}}</em>
              起
            </span>
            <span class="item-like-address">{{item.address}}</span>
          </div>
          <div class="item-like-feature" v-if="item.feature">
            <div class="mp-ellipsis2">
              {{item.feature}}
            </div>
          </div>
        </div>
      </li>
    </ul>
    <router-link class="item-like-more" to="home">查看所有产品</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data() {
    return {
      recommendList: [{
        id: '00001',
        itemImgUrl: 'http://img1.qunarzz.com/sight/p0/1809/6b/6b0d71ae741a583da3.img.jpg_200x200_dc19cbb1.jpg',
        tagImgUrl: "background-image:url(https://img1.qunarzz.com/piao/fusion/1802/52/b9080e45b69b4f02.png)",
        tagName: '可订明日',
        title: '杭州乐园',
        price: '120',
        address: '萧山区',
        feature: '这里特别受欢迎哟(๑‾ ꇴ ‾๑)'
      },
      {
        id: '00002',
        itemImgUrl: 'http://img1.qunarzz.com/sight/p0/1810/14/14b8a787d6e901f6a3.img.jpg_200x200_4a447e3c.jpg',
        tagImgUrl: "background-image:url(https://img1.qunarzz.com/piao/fusion/1802/52/b9080e45b69b4f02.png)",
        tagName: '可订明日',
        title: '杭州云曼温泉',
        price: '127',
        address: '萧山区'
      },
      {
        id: '00003',
        itemImgUrl: 'http://img1.qunarzz.com/sight/p0/1810/5e/5e855d32e9aff0aba3.img.jpg_200x200_a70a4170.jpg',
        tagImgUrl: "background-image:url(https://img1.qunarzz.com/piao/fusion/1802/52/b9080e45b69b4f02.png)",
        tagName: '可订明日',
        title: '杭州烂苹果乐园',
        price: '140',
        address: '萧山区',
        feature: '全室内高科技亲子乐园'
      },
      {
        id: '00004',
        itemImgUrl: 'http://img1.qunarzz.com/sight/p0/1508/12/4e6170303c63bdb7070fb1987480afab.water.jpg_200x200_0775a71c.jpg',
        tagImgUrl: "background-image:url(https://img1.qunarzz.com/piao/fusion/1802/52/b9080e45b69b4f02.png)",
        tagName: '可订明日',
        title: '杭州极地海洋世界',
        price: '299',
        address: '萧山区'
      },
      {
        id: '00005',
        itemImgUrl: 'http://img1.qunarzz.com/sight/p0/1709/28/288fbeccc335f774a3.img.jpg_200x200_4a81bde9.jpg',
        tagImgUrl: "background-image:url(https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png)",
        tagName: '随买随用',
        title: '印象西湖',
        price: '340',
        address: '杭州'
      },
      {
        id: '00006',
        itemImgUrl: 'http://img1.qunarzz.com/sight/p0/201212/18/f195032e85740a4b93835fbb.jpg_200x200_77761d11.jpg',
        tagImgUrl: "background-image:url(https://img1.qunarzz.com/piao/fusion/1802/52/b9080e45b69b4f02.png)",
        tagName: '可订明日',
        title: '杭州海底世界',
        price: '115',
        address: '西湖区',
        feature: '西子湖畔畅游海底世界，了解神秘海洋生物'
      },
      {
        id: '00007',
        itemImgUrl: 'http://img1.qunarzz.com/sight/p0/1702/86/86bc4db81a8b229da3.water.jpg_200x200_30a5026d.jpg',
        title: '良渚文化村白鹭泉汤池',
        price: '98',
        address: '余杭区'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.recommend-title
    margin-top: .2rem
    line-height: .8rem
    background: #fff
    text-indent: .2rem
    .item-title-img
      display: inline-block
      overflow: hidden
      width: .3rem
      height: .3rem
      vertical-align: text-top
    .item-title
      margin-left: .08rem;
      height: .44rem;
      color: #212121;
      font-size: .32rem;
      line-height: .44rem;
    .item-like-more
      display: block
      padding: .2rem 0
      color: #00afc7
      font-size: .28rem
      line-height: .4rem
      text-align: center
      border-top: 1px solid #e0e0e0
    .recommend-list
      margin-left: .24rem
      .item
        position: relative
        overflow: hidden
        padding: .2rem 0
        .item-img-wrapper
          background: none !important
          float: left
          width: 2rem
          height: 2rem
          .item-img
            width: 100%
        .item-like-tag
          position: absolute
          left: 0.2rem
          width: 1.02rem
          height: .38rem
          background-size: 100%
          color: #fff
          font-size: .2rem
          line-height: .38rem
          text-indent: .04rem
        .item-like-info
          overflow: hidden
          padding-left: .22rem
          .item-like-title
            margin-top: .26rem
            height: .44rem
            color: #212121
            font-size: .32rem
            line-height: .44rem
            ellipsis()
          .item-like-price
            position: relative
            margin-top: .22rem
            color: #616161
            font-size: .24rem
            line-height: .4rem
            .price-tag
              color: #ff8300
              .price-number
                font-size: .4rem
            .item-like-address
              position: absolute
              right: .24rem
              bottom: 0
          .item-like-feature
            display: inline-block
            margin-left: 0.24rem
            margin-right: .24rem
            background: #fff9f9
            padding: .04rem .1rem
            color: #f55
            font-size: .24rem
            line-height: .34rem
            .mp-ellipsis2
              display: -webkit-box
              overflow: hidden
              text-overflow: ellipsis
              -webkit-line-clamp: 2
              -webkit-box-orient: vertical
</style>