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
			},{
				id: '0003',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/1b/4143c7e0bfe78d02.jpg_750x200_5a220f6e.jpg'
			},{
				id: '0004',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1810/fe/fd9c295c0e1a7602.jpg_750x200_11c8343f.jpg'
			},{
				id: '0005',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1712/51/36632b2cb850e902.jpg_750x200_fa4120db.jpg'
			},{
				id: '0006',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/12/856f100069809e02.jpg_750x200_e3485a2b.jpg'
			},{
				id: '0007',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1807/78/0a6355bcbbf89502.jpg_750x200_fc738633.jpg'
			},{
				id: '0008',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/69/8697f10f17f35a02.jpg_750x200_c98193a9.jpg'
			},{
				id: '0009',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1810/d3/51a22fafb250e502.jpg_750x200_e4d9c5ae.jpg'
			}]
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