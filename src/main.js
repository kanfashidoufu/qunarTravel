/*
 * @Date: 2020-09-17 15:39:19
 * @LastEditors: 看法是豆腐
 * @LastEditTime: 2020-09-17 16:27:19
 * @Description: 应用入口文件
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'

import 'styles/reset.css'
import 'styles/border.css'
import	'styles/iconfont.css'
// require styles
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
