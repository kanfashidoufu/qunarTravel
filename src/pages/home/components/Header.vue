<!--
 * @Date: 2020-09-17 15:15:26
 * @LastEditors: 看法是豆腐
 * @LastEditTime: 2021-02-03 17:43:33
 * @Description: 
-->
<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span> 输入城市/景点/游玩主题
    </div>

    <div class="header-right">
      <router-link to="/city" class="colorfix"
        >{{ city
        }}<span class="iconfont arrow-icon">&#xe601;</span></router-link
      >
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'HomeHeader',
  setup() {
	  const store = useStore()
	  const city = computed(() => store.state.city)
	  return { city }
  },
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
	.header
		display: flex
		line-height: .88rem
		background: $bgColor
		color: #fff
		.header-left
			width: 0.64rem
			float: left
			.back-icon
				text-align: center
				font-size: .4rem
		.header-input
			flex: 1
			height: .59rem
			line-height: .59rem
			margin-top: .14rem
			margin-left: .2rem
			background: #fff
			padding-left: .2rem
			border-radius: .1rem
			color: #e4e7ea
		.header-right
			min-width 1.04rem
			padding: 0 .1rem
			float: right
			text-align: center
			.colorfix
				color: #fff
				.arrow-icon
					font-size: .24rem
					margin-left .04rem
					color: #fff
</style>
