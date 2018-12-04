<template>
	<transition>
   <slot></slot> 
  </transition>
</template>

<script>

export default {
	name: 'FadeAnimation'
}
</script>

<style lang="stylus" scoped>
  .v-enter
    opacity: 0
  .v-enter-active
    transition: opacity .5s
</style>