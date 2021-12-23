<template>
  <div class="header clearfix">
      <router-link :to="{name:'root'}">
        <!-- 使用字体图标，便于编辑 -->
        <span class="iconfont icon-logo"></span>
      </router-link>
      <ul class="clearfix">
        <li class="weight">首页</li>
        <li>新手入门</li>
        <li>API</li>
        <li>关于</li>
      </ul>
      <div class="yes select clearfix">
        <input type="text" placeholder="探索cnode社区">
        <span class="iconfont icon-sousuo"></span>
      </div>

      <div class="select add clearfix">
        <input type="select" placeholder="搜索文章/招聘信息/用户">
        <span class="iconfont icon-sousuo"></span>
      </div>
      <div class="container">
        <span>创作者中心</span>
        <span class="state">写文章
          <div class="iconfont icon-xia"></div>
        </span>
        <span class="login">登录</span>
        <span class="register">注册</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
  }
</script>

<!--scoped 代表只对这个组件有效-->

<style scoped>
  .clearfix::after{
    content: '';
    display: block;
    clear: both;
  }

 .header{
    background-color: #fff;
    height: 80px;
    padding-right: 200px;
    position: relative;
   }

  .icon-logo{
    position: absolute;
    left: 200px;
    top:25px;
    transform: scale(3);
    color: rgb(30, 128, 255);
  }

  .select{
    display: flex;
    position:absolute;
    width: 200px;
    height: 35px;
    top: 25px;
    right: 500px;
    background-color: rgb(244,245,245);
  }

  .icon-sousuo{
    margin: 8px 0;
    font-size: 22px;
    cursor: pointer;
  }

  input{
    border: none;
    outline: none;
    margin-left: 5px;
    background-color: rgb(244,245,245);
  }

  .add{
    width: 400px;
    display: none;
  }

  .add input{
    width: 100%;;
  }

  ul{
    list-style: none;
    margin: 0;
    padding:0;
    position: absolute;
    left: 350px;
    top: 20px;
  }

  li{
    display: inline-block;
    padding: 10px 15px;
    font-size: 18px;
  }

  li:hover{
    color:#1E8CFF;
    cursor: pointer;
  }

  .container{
    display: inline-block;
    position: absolute;
    width: 440px;
    right: 50px;
    top: 25px;
    display: flex;
    justify-content: space-evenly;
    text-align: center;
 }

 .container span{
   border-radius: 2px;
   display: inline-block;
   padding: 4px 18px;
   background: #E8F3FF;
   color: #3487F2;
   font-size: 18px;
 }

 .container .state{
   padding-right: 0;
   background:#1E80FF;
   color: #fff;
 }
 .container .icon-xia{
   display:inline-block;
   padding:0 8px;
   background:#1E80FF;
   color: #fff;
 }

  .container .login{
    background-color: #fff;
    border:1px solid #3487F2 ;
  }
  li:first-child{
    /*首页加粗*/ 
    font-weight:800;
    color:#1E8CFF;
  }
</style>