<template>
  <div>
    <h2 class="weekendtitle">周末去哪儿</h2>
    <div>
      <div class="weekenditem" v-for="item of weekendList" :key="item.id">
        <div class="item-img">
          <img :src="item.imgUrl" :alt="item.itemName">
        </div>
        <div class="item-info">
          <p class="item-name">{{item.itemName}}</p>
          <p class="item-desc">{{item.itemDesc}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  }
}
</script>

<style lang="stylus" scoped>
  .weekendtitle
    height: .8rem
    padding-left: .26rem
    line-height: .8rem
    color: #212121
  .weekenditem
    position: relative
    margin-bottom: .1rem
    background: #fff
    .item-img
      overflow: hidden
      height: 0;
      padding-bottom: 37.4375%
      background: url(//s.qunarzz.com/piao_topic/image/common/default/640x266.jpg) no-repeat center #dcdcdc
      background-size: 100% 100%
      img
        transition: opacity 400ms
        width: 100%
        opacity: 1
    .item-info
      position: relative
      padding: .14rem .2rem .2rem .2rem
      .item-name
        overflow: hidden
        padding-right: 1.4rem
        color: #212121
        font-size: .28rem
        line-height: .48rem
        white-space: nowrap
        text-overflow: ellipsis
      .item-desc
        overflow: hidden
        padding-right: 1.4rem
        color: #616161
        font-size: .24rem
        line-height: .42rem
        white-space: nowrap
        text-overflow: ellipsis
</style>