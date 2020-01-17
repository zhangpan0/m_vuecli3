<template>
  <div class="home">
    <HelloWorld msg="Welcome"/>
    <div class="mian">
      这是主要main
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
  .main {
    background:skyblue;
  }
</style>
