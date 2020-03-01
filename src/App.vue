<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>

    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script lang="ts">
import {Vue,Component} from 'vue-property-decorator'
import HelloWorld from './components/HelloWorld.vue'

@Component({
  name:'app',
    components: {
    HelloWorld
  }
})
export default class App extends Vue{

}



</script>

<style lang="stylus">
@import 'stylus/reset.styl'

#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width 100%
  height 100%
}
</style>
