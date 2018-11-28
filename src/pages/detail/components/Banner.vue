<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1809/6b/6b0d71ae741a583da3.img.jpg_600x330_d01e63d7.jpg" alt="杭州乐园">
      <div class="mp-headfeagure-info">
        <div class="mp-headfeagure-title">杭州乐园(AAAA景区)</div>
      </div>
      <div class="mp-imgswipeicon">
        <span class="iconfont mp-imgswipeicon-icon">&#xe626;</span>
        <em class="mp-imgswipeicon-number">32</em>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
    <router-link class="mp-header-back iconfont" to="/" v-show="showBackIcon">
      <span class="mp-headerback-bg"></span>
      <span class="mp-headerback-icon">&#xe624;</span>
    </router-link>
  </div>
</template>

<script>
import CommonGallary from '@/common/gallary/Gallary'
export default {
	name: 'DetailBanner',
  data () {
    return {
      imgs: ['http://img1.qunarzz.com/sight/p0/1809/6b/6b0d71ae741a583da3.img.jpg_r_800x800_b072777b.jpg', 'http://img1.qunarzz.com/sight/p0/1811/37/37c94ff139726420a3.water.jpg_r_800x800_2e5275a4.jpg'],
      showGallary: false,
      showBackIcon: true
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
    CommonGallary
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
      font-size: .1rem
    .mp-imgswipeicon-number
      margin-left: .1rem
.mp-header-back
  left: .1rem;
  top: .1rem;
  width: .72rem;
  height: .72rem;
  line-height: .72rem;
  position: absolute;
  font-size: .36rem;
  color: #fff;
  text-align: center;
  .mp-headerback-bg
    display: block;
    width: .72rem;
    height: .72rem;
    background-color: #000;
    opacity: .5;
    -webkit-border-radius: .36rem;
    -moz-border-radius: .36rem;
    border-radius: .36rem;
  .mp-headerback-icon
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: .72rem;
    line-height: .72rem;
    text-align: left;
    text-indent: .18rem;
</style>