/*
 * @Date: 2020-09-17 15:39:19
 * @LastEditors: 看法是豆腐
 * @LastEditTime: 2020-09-27 16:55:54
 * @Description: 应用入口文件
 */
import Vue, { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'

import 'styles/reset.css'
import 'styles/border.css'
import	'styles/iconfont.css'
// require styles
import 'swiper/dist/css/swiper.css'


createApp(App).use(router).use(store).use(VueAwesomeSwiper).mount('#app')
