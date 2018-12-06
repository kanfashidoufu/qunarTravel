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
      axios.get('https://www.easy-mock.com/mock/5c08c719539281325f2a1cae/travel/api/index?city=' + this.city)
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