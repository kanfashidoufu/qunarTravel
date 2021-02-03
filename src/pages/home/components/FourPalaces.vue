<template>
  <div>
    <ul class="listwraper border-top">
      <li class="listitem border-right">
        <span class="iconfont">&#xe63f;</span>
        定位失败
      </li>
      <li class="listitem">
        <span class="iconfont">&#xe6df;</span>
        必游榜单
      </li>
    </ul>
    <ul class="special-sell">
      <li class="special-sell-item1 border-right"></li>
      <li class="special-sell-item2"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeFourpalaces',
}
</script>

<style lang="stylus" scoped>
.listwraper
  display: -webkit-box
  width: 100%
  background-color: #fff
  .listitem
    overflow: hidden
    -webkit-box-flex: 1
    -moz-box-flex: 1
    -ms-flexbox-flex: 1
    box-flex: 1
    width: 0
    height: .98rem
    font-size: .28rem
    color: #212121
    line-height: .98rem
    text-align: center
    span
      margin-right: .05rem
      color: #616161
      font-size: .32rem
  .border-right:before
    border-right: 1px solid #e0e0e0
.special-sell
  display: -webkit-box
  width: 100%
  margin-top: .2rem
  background-color: #fff
  .special-sell-item1
    background: url(http://img1.qunarzz.com/piao/fusion/1811/12/999862443f79a902.png) center center no-repeat
    background-size: auto 100%
    -webkit-box-flex: 1
    -moz-box-flex: 1
    -ms-flexbox-flex: 1
    box-flex: 1
    position: relative
    width: 0
    height: 1.4rem
    line-height: 1.4rem
    color: #212121
    font-size: .28rem
  .special-sell-item2
    background: url(http://img1.qunarzz.com/piao/fusion/1811/d5/20dc542eb839c702.png) center center no-repeat;
    background-size: auto 100%
    -webkit-box-flex: 1
    -moz-box-flex: 1
    -ms-flexbox-flex: 1
    box-flex: 1
    position: relative
    width: 0
    height: 1.4rem
    line-height: 1.4rem
    color: #212121
    font-size: .28rem
  .border-right:before
    border-right: 1px solid #e0e0e0
</style>
