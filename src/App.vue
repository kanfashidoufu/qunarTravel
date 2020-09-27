<!--
 * @Date: 2020-09-17 15:39:19
 * @LastEditors: 看法是豆腐
 * @LastEditTime: 2020-09-17 17:03:02
 * @Description: 应用入口根组件
-->
<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<style lang="stylus">
#app
  background: #f5f5f5
</style>
