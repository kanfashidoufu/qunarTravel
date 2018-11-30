<template>
	<div class="recommend-title">
    <img class="item-title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="猜你喜欢">
    <span class="item-title">猜你喜欢</span>
    <ul class="recommend-list">
      <router-link tag="li" class="item" v-for="item of recommendList" :key="item.id" :to="'/detail/' + item.id + '&' + item.title">
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
      </router-link>
    </ul>
    <router-link class="item-like-more" to="home">查看所有产品</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
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