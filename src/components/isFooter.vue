<template>
  <div class="footer">
    <div class="space"></div>
    <div class="footer_main">
      <a href="https://cnodejs.org/rss">Rss</a> | <a href="#">源码地址</a>
      <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
      <div>服务器搭建在<img src="https://static2.cnodejs.org/public/images/digitalocean.png" alt="logo">，存储赞助商为<img src="https://static2.cnodejs.org/public/images/qiniu.png"></div>
      <p>新手搭建 Node.js 服务器，推荐使用无需备案的<a href="https://www.digitalocean.com/">DigitalOcean(https://www.digitalocean.com/)</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'isFooter'
  }
</script>

<!--scoped 代表只对这个组件有效-->

<style scoped>
  
 .footer{
    background-color:#fff ;
    position: relative;
   }

   .space{
     width: 100%;
     height: 20px;
     background-color: #e1e1e1;
   }

   .footer_main{
      position: absolute;
      top:0;
      width: 90%;
      max-width: 1400px;
      min-width: 960px;
      margin: 10px auto;
      color: #999696;
      padding: 20px 0;
      font-size: 13px;
      line-height: 2em;
   }

   
  img{
    max-width: 120px;
    margin-left:10px;
    margin-top: 10px;
  }
  
  a{
    text-decoration: none;
    color:#08c;
    font-size: 16px;
    text-shadow: none;
  }
</style>