<!--
 * @Date: 2020-09-17 15:15:26
 * @LastEditors: 看法是豆腐
 * @LastEditTime: 2020-09-27 16:05:16
 * @Description: 
-->
<template>
	<div class="homePage">
		<home-header></home-header>
		<home-swiper :swiperlist="swiperList"></home-swiper>
		<home-icons :iconList="iconList"></home-icons>
		<home-fourpalaces></home-fourpalaces>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
	</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeFourpalaces from './components/FourPalaces'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
	name: "Home",
	components: {
	HomeHeader,
	HomeSwiper,
	HomeIcons,
	HomeRecommend,
	HomeFourpalaces,
  HomeWeekend
	},
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods:{
    getHomeInfo() {
      axios.get('http://rap2api.taobao.org/app/mock/120239/api/index?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style lang="stylus" scoped>
  .homePage
    background-color: #f5f5f5
</style>