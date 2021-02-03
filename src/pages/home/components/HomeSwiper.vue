<!--
 * @Date: 2020-09-17 15:15:26
 * @LastEditors: 看法是豆腐
 * @LastEditTime: 2021-01-15 14:18:19
 * @Description: 
-->
<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="去哪儿门票" />
      </swiper-slide>
      <!-- Optional controls -->
      <template v-slot:pagination>
        <div class="swiper-pagination"></div>
      </template>
    </swiper>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array,
  },
  setup(props) {
    const swiperOption = {
      pagination: '.swiper-pagination',
      loop: true,
      autoplay: 3000,
    }
    const showSwiper = computed(() => props.swiperList.length)
    return { swiperOption, showSwiper }
  }
}
</script>

<style lang="stylus" scoped>
// >>>表示样式穿透
	.wrapper >>> .swiper-pagination-bullet
		height: .12rem
		width: .12rem
		background: rgba(255, 255, 255, 0.5)
	.wrapper >>> .swiper-pagination-bullet-active
		background: white !important
	.wrapper
		overflow: hidden
		width: 100%
		height: 0
		padding-bottom: 27%
		background: #ccc
		.swiper-img
			width: 100%
</style>
