<!--
 * @Date: 2020-09-17 15:39:19
 * @LastEditors: 看法是豆腐
 * @LastEditTime: 2020-10-12 16:49:17
 * @Description: 应用入口根组件
-->
<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<style lang="stylus">
#app
  background: #f5f5f5
</style>
