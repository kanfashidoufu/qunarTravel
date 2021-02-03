<!--
 * @Date: 2020-09-17 15:15:26
 * @LastEditors: 看法是豆腐
 * @LastEditTime: 2020-09-27 16:52:07
 * @Description: 
-->
<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg">
      <div class="mp-headfeagure-info">
        <div class="mp-headfeagure-title">{{sightName}}</div>
      </div>
      <div class="mp-imgswipeicon">
        <span class="iconfont mp-imgswipeicon-icon">&#xe626;</span>
        <em class="mp-imgswipeicon-number">{{gallaryNum}}</em>
      </div>
    </div>
    <fade-animation>
      <common-gallary :imgs="gallaryImgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from '@/common/gallary/Gallary'
import FadeAnimation from '@/common/fade/Fade'
export default {
	name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  computed: {
    gallaryNum () {
      return this.gallaryImgs.length
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  }
}
</script>

<style lang="stylus" scoped>
.banner:after
  content: " "
  display: block
  position: absolute
  bottom: 0
  left: 0
  width: 100%
  min-height: .6rem
  background-color: transparent
  background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.8))
.banner
  overflow: hidden
  height: 0
  padding-bottom: 55%
  position: relative
  .banner-img
    width: 100%
  .mp-headfeagure-info
    position: absolute
    right: .2rem
    bottom: .36rem
    left: .2rem
    min-height: .4rem
    .mp-headfeagure-title
      position: relative
      z-index: 1
      line-height: .4rem
      color: #fff
      font-size: .36rem
      text-shadow: 0 1px 2px rgba(0,0,0,0.70)
  .mp-imgswipeicon
    position: absolute
    left: .2rem
    bottom: .86rem
    width: 1.2rem
    height: .4rem
    background: rgba(0,0,0,.5)
    border-radius: .2rem
    font-size: .24rem
    color: #fff
    line-height: .4rem
    text-align: center
    .mp-imgswipeicon-icon
      position: relative
      top: .02rem
    .mp-imgswipeicon-number
      margin-left: .1rem
</style>