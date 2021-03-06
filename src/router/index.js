/*
 * @Date: 2020-09-17 15:39:19
 * @LastEditors: 看法是豆腐
 * @LastEditTime: 2020-09-27 16:19:53
 * @Description: 路由入口文件
 */
/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "City" */ '@/pages/city/City.vue')
    },
    {
      path: '/detail/:id&:title',
      name: 'Detail',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Detail" */ '@/pages/detail/Detail.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
