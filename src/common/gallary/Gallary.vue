<!--
 * @Date: 2020-09-17 15:15:26
 * @LastEditors: 看法是豆腐
 * @LastEditTime: 2020-10-12 15:32:12
 * @Description: 
-->
<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions" ref="gallarySwiper">
        <!-- slides -->
        <swiper-slide v-for="(item, index) of imgs" :key="index">
          <img class="gallary-img" :src="item" />
        </swiper-slide>
        <!-- Optional controls -->
        <template v-slot:pagination>
          <div class="swiper-pagination"></div>
        </template>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'commonGallary',
  props: {
    imgs: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true,
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.gallarySwiper.swiper
    },
  },
  methods: {
    handleGallaryClick() {
      this.$emit('close')
      this.swiper.slideTo(0)
    },
  },
}
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
  overflow: inherit
.container
  display: flex
  flex-direction: column
  justify-content: center
  z-index: 99
  position: fixed
  left: 0
  right: 0
  top: 0
  bottom: 0
  background: #000
  .wrapper
    width: 100%
    height: 0
    padding-bottom: 65%
    .gallary-img
      width: 100%
    .swiper-pagination
      color: #fff
      bottom: -2.5rem
</style>
