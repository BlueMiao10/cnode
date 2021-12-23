<template>
 <div class="article">
   <div class="loading" v-if="isLoading">
     <!-- 如果正在加载，显示此图片 -->
     <img src="../assets/loading.gif" alt="加载中" >
   </div>
   <div v-else>
     <div class="topic_header">
       <div class="topic_title">{{post.title}}</div>
       <span>发布于 {{post.create_at | formateDate}}</span>
       <span>作者 <a href="#">{{post.author.loginname}}</a></span>
       <span>{{post.visit_count}}次浏览</span>
       <span>来自 {{post | tabFormate}}</span>
       <div v-html="post.content" class="topic_content"></div>
     </div>
     <div id="reply">
       <div class="topBar">回复</div>
       <div v-for="(reply,index) in post.replies" class="replySec">
         <router-link :to="{
           name:'user_info',
           params:{
             name:reply.author.loginname
           }
         }">
           <img :src="reply.author.avatar_url" alt="头像">
         </router-link>
         <router-link :to="{
          name:'user_info',
          params:{
            name:reply.author.loginname
          }
          }">
            <span>{{reply.author.loginname}}</span>
          </router-link>
         <span>{{index + 1}}楼</span>
         <span v-if ="reply.ups.length > 0">{{reply.ups.length}}</span>
         <span v-else></span>
         <p v-html="reply.content"></p>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
  export default {
    name: 'Article',
    data(){
      return{
        //默认状态下，等待图片不加载
        isLoading:false,
        //代表当前Article组件的所有属性
        post:{}
      }
    },
    methods:{
      getArticleData(){
        this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
        .then(res => {
          if(res.data.success === true){
            this.isLoading = false
            this.post = res.data.data
          }
        })
        .catch(err => console.log(err))
      }
    },
    beforeMount(){
      this.getArticleData()
      this.isLoading = true
    },
    watch:{
      '$route'(to,from){
        this.getArticleData()
      }
    }
  }
</script>

<!--scoped 代表只对这个组件有效-->
<style>
  @import url('../assets/markdown-github.css');
  .topBar {
    padding: 10px;
    background-color: #f6f6f6;
    height: 16px;
    font-size: 15px;
    margin-top: 10px;
  }

  .article:not(:first-child) {
    margin-right: 340px;
    margin-top: 15px;
  }
  

  #reply, .topic_header {
    background-color: #fff;
  }

  #reply {
    margin-top: 15px;
  }

  #reply img {
    width: 30px;
    height: 30px;
    position: relative;
    bottom: -9px;
  }

  #reply a, #reply span {
    font-size: 13px;
    color: #666;
    text-decoration: none;
  }
  .replySec{
    border-bottom:1px solid #e5e5e5;
    padding:0 10px;
  }

  .loading {
    text-align: center;
    padding-top: 300px;
  }

  .replyUp a:nth-of-type(2) {
    margin-left: 0px;
    display: inline-block;
    text-decoration: none;
  }

  .topic_header {
    padding: 10px;
  }

  .topic_title {
    font-size: 20px;
    font-weight: bold;
    padding-top: 8px;
  }


  .topic_header span {
    font-size: 15px;
    color: #838383;
  }

  .topic_content {
    border-top: 1px solid #e5e5e5;
    padding: 0 10px;
  }

  .markdown-text img {
    width: 92% !important;
  }

</style>