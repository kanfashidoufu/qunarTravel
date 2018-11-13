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
  data() {
    return {
      weekendList:[{
        id: '000001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/4e/3e87ee62e59cdb.jpg_r_640x214_fe6cc902.jpg',
        itemName: '杭州必游TOP10',
        itemDesc: '杭州，前世今生与你有一场美丽约会'
      },{
        id: '000002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1510/c1/afe3ab32b3bc23.jpg_r_640x214_beb61760.jpg',
        itemName: '青山秀水，精致暖汤',
        itemDesc: '天然高品质温泉，这个冬天秀美容颜首选'
      },{
        id: '000003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9f/7d45cc38259e0.jpg_r_640x214_156f4299.jpg',
        itemName: '承载杭城的历史之地',
        itemDesc: '饱经沧桑的地方诉述着这座城的段段衷肠'
      },{
        id: '000004',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/a3/9c9d78e925e8bc.jpg_r_640x214_74656d68.jpg',
        itemName: '泡汤首选地',
        itemDesc: '泡在氤氲的温泉中，聆听秋天脚步的声音'
      },{
        id: '000005',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1509/8a/4cbf58944de788.jpg_r_640x214_1893da0a.jpg',
        itemName: '秋时景致美',
        itemDesc: '火红的秋天，是杭州一年中最美的季节'
      },]
    }
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