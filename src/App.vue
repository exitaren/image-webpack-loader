<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <img class="test-img" src="./assets/ico_arena_home_mode.svg" alt="">
    <img class="test-img" src="./assets/ico_arena_home_qualification.svg" alt="">
    <img class="test-img" src="./assets/ico_arena_home_reward.svg" alt="">
    <img class="test-img" src="./assets/ico_arena_home_schdule.svg" alt="">
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.test-img{
  width: 50px;
  height: 50px;
}
</style>
