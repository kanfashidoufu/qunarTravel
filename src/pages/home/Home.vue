<template>
	<div class="homePage">
		<home-header></home-header>
		<home-swiper></home-swiper>
		<home-icons></home-icons>
		<home-fourpalaces></home-fourpalaces>
    <home-recommend></home-recommend>
	</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeFourpalaces from './components/FourPalaces'
export default {
	name: "Home",
	components: {
	HomeHeader,
	HomeSwiper,
	HomeIcons,
	HomeRecommend,
	HomeFourpalaces
	}
}
</script>

<style lang="stylus" scoped>
  .homePage
    background-color: #f5f5f5
</style>