<template>
	<div class="wrapper">
		<swiper :options="swiperOption" v-if="showSwiper">
            <!-- slides -->
            <swiper-slide v-for="item of swiperlist" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="去哪儿门票">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
	</div>
</template>

<script>
export default {
	name: 'HomeSwiper',
	props: {
		swiperlist: Array
	},
	data () {
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
				loop: true,
				autoplay: 3000
			}
		}
	},
	computed: {
		showSwiper () {
			return this.swiperlist.length
		}
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