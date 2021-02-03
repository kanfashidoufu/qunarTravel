<!--
 * @Date: 2020-09-17 15:15:26
 * @LastEditors: 看法是豆腐
 * @LastEditTime: 2020-09-27 16:51:14
 * @Description: 
-->
<template>
  <div>
    <div class="detailInfo">
      <div class="detailInfo-card">
        <div class="detailInfo-card-rating">
          <div>
            <span class="detailInfo-card-rating-score">{{baseInfo.score}}</span>
            <span class="detailInfo-card-rating-text">分</span>
            <span class="detailInfo-card-rating-desc">{{baseInfo.desc}}</span>
          </div>
          <div>
            <span class="detailInfo-card-rating-totalcommentnum">{{baseInfo.totalcommentnum}}</span>
            <span class="detailInfo-card-rating-totalcommentnum">{{baseInfo.totalstrategynum}}</span>
            <span class="iconfont rightarrow">&#xe62d;</span>
          </div>
        </div>
        <div class="detailInfo-card-fixed border-left">
          <div>
            <span class="detailInfo-card-fixed-title">景点简介</span>
          </div>
          <div>
            <span class="detailInfo-card-fixed-text">开放时间、贴士</span>
            <span class="iconfont rightarrow">&#xe62d;</span>
          </div>
        </div>
      </div>
      <div class="detailInfo-address border-top">
        <p class="detailInfo-address-txt">
          <span class="iconfont detailInfo-address-icon">&#xe63f;</span>
          {{baseInfo.address}}
          <span class="iconfont detailInfo-address-arrow">&#xe62d;</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: 'DetailInfo',
  props: {
    baseInfo: Object
  }
}
</script>

<style lang="stylus" scoped>
.detailInfo
  position: relative
  top: -.1rem
  padding: .1rem .2rem 0 .2rem
  margin-bottom: .1rem
  background: #fff
  -webkit-border-radius: .1rem .1rem 0 0
  -moz-border-radius: .1rem .1rem 0 0
  border-radius: .1rem .1rem 0 0
  .detailInfo-card
    padding-top: .1rem
    padding-bottom: .2rem
    display: -webkit-box
    display: -moz-box
    display: -webkit-flex
    display: -moz-flex
    display: -ms-flexbox
    display: flex
    width: 100%
    .detailInfo-card-rating
      position: relative
      -webkit-box-flex: 1
      -moz-box-flex: 1
      -webkit-flex: 1
      -moz-flex: 1
      -ms-flex: 1
      flex: 1
      .detailInfo-card-rating-score
        font-size: .44rem
        color: #ff8300
        line-height: .44rem
      .detailInfo-card-rating-text
        font-size: .28rem
        color: #ff8300
        line-height: .48rem
      .detailInfo-card-rating-desc
        font-size: .28rem
        color: #ff8300
        line-height: .48rem
        margin-left: .2rem
      .detailInfo-card-rating-totalcommentnum
        font-size: .24rem
        color: #9e9e9e
        line-height: .32rem
        margin-right: .2rem
      .rightarrow
        position: absolute;
        top: .3rem;
        right: .2rem;
        color: #9e9e9e;
        font-size: .24rem;
    .detailInfo-card-fixed
      position: relative
      -webkit-box-flex: 1
      -moz-box-flex: 1
      -webkit-flex: 1
      -moz-flex: 1
      -ms-flex: 1
      flex: 1
      .detailInfo-card-fixed-title
        font-size: .28rem
        color: #212121
        line-height: .48rem
        padding-left: .3rem
      .detailInfo-card-fixed-text
        color: #9e9e9e
        font-size: .24rem
        padding-left: .3rem
      .rightarrow
        position: absolute;
        top: .3rem;
        right: .2rem;
        color: #9e9e9e;
        font-size: .24rem;
  .detailInfo-address
    display: block;
    position: relative;
    padding: .2rem 0;
    line-height: .36rem;
    color: #212121;
    .detailInfo-address-txt
      padding-right: .56rem;
      position: relative;
      padding-left: .56rem;
      .detailInfo-address-icon
        display: block;
        height: 100%;
        line-height: 100%;
        position: absolute;
        left: 0;
        top: .16rem;
        margin-top: -.16rem;
        margin-right: .2rem;
        color: #9e9e9e;
        font-size: .36rem;
      .detailInfo-address-arrow
        position: absolute;
        right: 0;
        top: 50%;
        margin-top: -.14rem;
        color: #9e9e9e;
        font-size: .24rem;
</style>