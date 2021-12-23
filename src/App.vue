<template>
  <div id="app" >
    <Header></Header>
    <div class="main">
    <!-- 这里的main对应的就是路由中components里的main。也就是点击时对应要打开的组件 -->
    <router-view name="slideBar"></router-view> 
    <router-view name="main"></router-view>
    </div>
    <isFooter class="footer"></isFooter>
  </div>
</template>

<script>

import Header from './components/Header.vue'

import isFooter from './components/isFooter.vue'

export default {
  name: 'App',
  components:{
    Header,isFooter
  }
}
</script>

<style>
body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
.main,.footer{
  width: 80%;
  margin: 0 auto;
}
#app{
  width:100%;
  height: 100%;
  background-color: #e1e1e1; 
}
</style>
