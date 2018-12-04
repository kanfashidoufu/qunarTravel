<template>
  <div>
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div class="item-children" v-if="item.children">
        <div class="ticket-list border-top" v-for="(subItem, index) of item.children" :key="index">
          <div class="ticket-type-info border-bottom">
            <h5 class="ticket-type-name ellipsis2">{{subItem.title}}</h5>
            <div class="ticket-price">
              ¥
              <em class="ticket-price-num">{{subItem.price}}</em>
              <span class="ticket-price-numword">起</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: 'DetailList',
	props: {
		list: Array
	}
}
</script>

<style lang="stylus" scoped>
.item
  background: #fff
  margin-bottom: .2rem
  .item-title
    line-height: .8rem
    font-size: .32rem
    padding: 0 .2rem
    .item-title-icon
      display: inline-block
      position: relative
      left: .12rem
      top: .06rem
      width: .36rem
      height: .36rem
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
      margin-right: .1rem
      background-size: .4rem 3rem
  .item-children
    padding: 0 .2rem
    .ticket-list
      overflow: hidden
      .ticket-type-info
        position: relative
        z-index: 2
        margin-bottom: -.02rem
        padding: .24rem .2rem
        background: #fff
        .ticket-type-name
          margin-right: 1.8rem
          color: #333
          font-size: .3rem
          line-height: .48rem
        .ellipsis2
          display: -webkit-box
          overflow: hidden
          text-overflow: ellipsis
          -webkit-line-clamp: 2
          -webkit-box-orient: vertical
        .ticket-price
          position: absolute
          right: .46rem
          margin-top: -.6rem
          color: #ff9800
          font-size: .24rem
          .ticket-price-num
            margin-left: .04rem
            font-size: .4rem
          .ticket-price-numword
            display: inline-block
            color: #9e9e9e
            font-size: .24rem
            transform: scale(.8)
      
          
</style>