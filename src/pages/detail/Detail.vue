<!--
 * @Date: 2020-09-17 15:15:26
 * @LastEditors: 看法是豆腐
 * @LastEditTime: 2020-09-27 16:07:43
 * @Description: 
-->
<template>
	<div>
		<detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
		<detail-header></detail-header>
    <detail-info :baseInfo="baseInfo"></detail-info>
		<div class="content">
			<detail-list :list="list"></detail-list>
		</div>
	</div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailInfo from './components/Info'
import DetailList from './components/List'
import axios from 'axios'
export default {
	name: 'Detail',
	components: {
		DetailBanner,
		DetailHeader,
    DetailInfo,
		DetailList
	},
	data () {
		return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      baseInfo: {},
			list: [],
      lastId: ''
		}
	},
	methods: {
		getDetailInfo () {
			axios.get('http://rap2api.taobao.org/app/mock/120239/api/detail', {
				params: {
					id: this.$route.params.id
				}
			}).then(this.getDetailInfoSucc)
		},
		getDetailInfoSucc (res) {
      res = res.data
			if (res.ret && res.data) {
        const data = res.data[this.$route.params.id]
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.baseInfo = data.baseInfo
        this.list = data.categoryList
			}
		}    
	},
	mounted () {
    this.lastId = this.$route.params.id
		this.getDetailInfo()
	},
  activated () {
    if (this.lastId !== this.$route.params.id) {
      this.lastId = this.$route.params.id
      this.getDetailInfo()
    }
  }
}
</script>

<style lang="stylus" scoped>
.content
  background: #f5f5f5
  height: 20rem
</style>