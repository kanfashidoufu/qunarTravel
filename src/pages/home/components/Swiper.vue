<template>
	<div class="wrapper">
		<swiper :options="swiperOption">
    	<!-- slides -->
	    <swiper-slide v-for="item of swiperList" :key="item.id">
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
	data () {
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
				loop: true,
				autoplay: 3000
			},
			swiperList: [{
				id: '0001',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/31/da037478f37cf202.jpg_750x200_a02cf862.jpg'
			},{
				id: '0002',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/c6/2467595fffc3b302.jpg_750x200_cca13d51.jpg'
			}]
		}
	}
}	
</script>

<style lang="stylus" scoped>
// >>>表示样式穿透
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