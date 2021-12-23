<template>
 <div class="authorInfo">
   <div class="authorSummary">
    <p class="topBar">作者</p>
    <div class="name">
      <router-link :to="{
        name:'user_info',
           params:{
            name:userInfo.loginname
           }
        }">
        <img :src="userInfo.avatar_url" alt="头像">
       </router-link>
       <router-link :to="{
        name:'user_info',
           params:{
            name:userInfo.loginname
           }
        }">
        <span >{{userInfo.loginname}}</span>
       </router-link>
    </div>
     <div class="score">积分：{{userInfo.score}}</div>
   </div>
   <div class="recent_topics">
     <p class="topBar">作者最近主题</p>
     <ul>
       <li v-for="list in topicLimit">
         <router-link :to="{
           name:'post_content',
           params:{
             id:list.id,
             name:list.author.loginname
           }
         }">
          {{list.title}}
         </router-link>
       </li>
     </ul>
   </div>
   <div class="recent_replies">
     <p class="topBar">作者最近回复</p>
     <ul>
       <li v-for="list in replyLimit">
         <router-link :to="{
           name:'post_content',
           params:{
             id:list.id,
             name:list.author.loginname
           }
         }">
          {{list.title}}
         </router-link>
       </li>
     </ul>
   </div>
 </div>
</template>

<script>
  export default {
    name: 'slideBar',
    data(){
      return{
        isLoading:false,
        userInfo:{}
      }
    },
    methods:{
      getData(){
        this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
        .then(res => {
          this.userInfo = res.data.data
          console.log(res.data.data)
          this.isLoading = false
        })
        .catch(err => console.log(err))
      }
    },
    computed:{
      topicLimit(){
        if(this.userInfo.recent_topics){
          return this.userInfo.recent_topics.slice(0,5)
        }
      },
      replyLimit(){
        if(this.userInfo.recent_replies){
          return this.userInfo.recent_replies.slice(0,5)
        }
      }
    },
    beforeMount(){
      this.isLoading = true
      this.getData()
    }
  }
</script>

<!--scoped 代表只对这个组件有效-->
<style scoped>
  .authorSummary, .recent_replies, .recent_topics {
    background-color: #fff;
  }
  .authorInfo {
    width: 328px;
    float: right;
    margin-top: 0;
  }
  li{
    padding: 3px 0 ;
  }
  .recent_replies ul, .recent_topics ul {
    margin-top: 0px;
    margin-bottom: 0px;
    list-style: none;
    padding-left: 14px;
  }

  ul a {
    font-size: 12px;
    text-decoration: none;
    color: #778087;
  }

  .topBar {
    padding: 10px;
    background-color: #f6f6f6;
    height: 16px;
    font-size: 12px;
    margin-top: 10px;
  }

  img {
    height: 48px;
    width: 48px;
    border-radius: 3px;
    margin: 10px;
  }

  .loginName {
    width: 100px;
    float: right;
    margin-top: 22px;
    margin-right: 159px;
    font-size: 14px;
  }

  .loginName a {
    text-decoration: none;
    color: #778087;
  }

  .authorSummary .topBar {
    margin-top: 0px;
  }
  .name{
    display: flex;
    align-items: center;
  }
  .name span{
    text-decoration: none;
  }

  .score{
    margin-left: 10px;
    padding-bottom: 10px;
  }
</style>