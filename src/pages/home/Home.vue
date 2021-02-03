<!--
 * @Date: 2020-09-17 15:15:26
 * @LastEditors: 看法是豆腐
 * @LastEditTime: 2021-02-03 17:50:27
 * @Description: 
-->
<template>
  <div class="homePage">
    <home-header></home-header>
    <home-swiper :swiperList="data.swiperList"></home-swiper>
    <home-icons :iconList="data.iconList"></home-icons>
    <home-fourpalaces></home-fourpalaces>
    <home-recommend :recommendList="data.recommendList"></home-recommend>
    <home-weekend :weekendList="data.weekendList"></home-weekend>
  </div>
</template>

<script>
// Composition API
import HomeHeader from './components/Header'
import HomeSwiper from './components/HomeSwiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeFourpalaces from './components/FourPalaces'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { useStore } from 'vuex'
import { reactive, onMounted, onActivated } from 'vue'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeFourpalaces,
    HomeWeekend,
  },
  setup() {
    const data = reactive({
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
    })
    const store = useStore()
    const city = store.state.city

    async function getHomeInfo() {
      let res = await axios.get('http://rap2api.taobao.org/app/mock/120239/api/index?city=' + city)
      res = res.data
      if (res.ret && res.data) {
        const result = res.data
        data.swiperList = result.swiperList
        data.iconList = result.iconList
        data.recommendList = result.recommendList
        data.weekendList = result.weekendList
      }
    }
    onMounted(() => {
      getHomeInfo()
    })
    onActivated(() => {
      if (data.lastCity !== city) {
        data.lastCity = city
        getHomeInfo()
      }
    })
    console.log(data)
    return { data }
  },
  // methods:{
  //   getHomeInfo() {
  //     axios.get('http://rap2api.taobao.org/app/mock/120239/api/index?city=' + this.city)
  //       .then(this.getHomeInfoSucc)
  //   },
  //   getHomeInfoSucc (res) {
  //     res = res.data
  //     if (res.ret && res.data) {
  //       const data = res.data
  //       this.swiperList = data.swiperList
  //       this.iconList = data.iconList
  //       this.recommendList = data.recommendList
  //       this.weekendList = data.weekendList
  //     }
  //   }
  // },
  // mounted () {
  //   this.lastCity = this.city
  //   this.getHomeInfo()
  // },
  // activated () {
  //   if (this.lastCity !== this.city) {
  //     this.lastCity = this.city
  //     this.getHomeInfo()
  //   }
  // }
}
</script>

<style lang="stylus" scoped>
.homePage
  background-color: #f5f5f5
</style>
