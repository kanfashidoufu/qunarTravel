<template>
	<div class="homePage">
		<home-header></home-header>
		<home-swiper></home-swiper>
		<home-icons></home-icons>
		<home-fourpalaces></home-fourpalaces>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
	</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeFourpalaces from './components/FourPalaces'
import HomeWeekend from './components/Weekend'
export default {
	name: "Home",
	components: {
	HomeHeader,
	HomeSwiper,
	HomeIcons,
	HomeRecommend,
	HomeFourpalaces,
  HomeWeekend
	}
}
</script>

<style lang="stylus" scoped>
  .homePage
    background-color: #f5f5f5
</style>