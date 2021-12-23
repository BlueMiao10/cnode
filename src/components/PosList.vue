<template>
  <div class="PostList">
    <!-- 在数据未返回时显示此图片 -->
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" alt="loading">
    </div>
    <!-- 代表我们的帖子列表 -->
    <div class="posts">
      <ul>
        <li>
          <div class="tooBar">
          <span>全部</span>
          <span>精华</span>
          <span>分享</span>
          <span>问答</span>
          <span>招聘</span>
        </div>
        </li>
        <li v-for="post in posts" class="clearfix">
          <router-link :to="{
            name:'user_info',
            params:{
              name:post.author.loginname,
            }
          }">
          <!-- 头像 -->
          <img :src="post.author.avatar_url" alt="头像">
          </router-link>
          
          <span class="reply">
            <!-- 回复与浏览量 -->
            <span class="reply_count">{{post.reply_count}}</span>
            /{{post.visit_count}}
          </span>
          <span :class="[{'put_good':(post.good === true),'put_top':(post.top === true),'topicList-tab':(post.good === false && post.top === false)}]">{{post | tabFormate}}</span>
          <!-- name:'post_content'  路由的名字。我们点击这个标题的时候会请求哪个路由呢？所以在这里要给他一个名字
             id:post.id 要传递的参数。比如在我们这个项目里是通过id来实现页面之间的识别和跳转的。所以我们把post.id传过去，路由用属性id接收我们传过去的值 -->
          <router-link :to="{
            //这里只能是单引号
            //下边的id只能是post.id  当我使用post.author_id时会无法跳转  这里的author_id应该是指作者的id。可以凭借这个id跳转到作者页面，但并不能跳转到响应的帖子
            name:'post_content',
            params:{
              id:post.id,
              name:post.author.loginname
            }
          }">
            <!-- 点击标题会跳转到相应页面，所以用路由（router-link）包裹起来，效果类似于超链接 -->
            <!-- 标题 -->
            <span>{{post.title}}</span>
          </router-link>
          <!-- 最终回复时间 -->
          <span class="last_reply">{{post.last_reply_at | formateDate}}</span>
        </li>
        <li><pagination  @handleList="renderList"></pagination></li>
      </ul>
    </div>
    
    
    <div class="authorInfo">
        <div class="authorSummary">
          <p class="topBar">登录或注册</p>
          <div class="name">
            <p>您可以 <a href="#">登录</a> 或 <a href="#">注册</a> , 也可以</p>
            <a href="https://cnodejs.org/auth/github"><button>通过GitHub登录</button></a>
          </div>
        </div>
        <div class="recent_topics">
          <p class="topBar">友情社区</p>
          <div><a href="https://ruby-china.org/"><img src="https://static2.cnodejs.org/public/images/ruby-china-20150529.png" alt=""></a></div>
          <div><a href="http://golangtc.com/"><img src="https://static2.cnodejs.org/public/images/golangtc-logo.png" alt=""></a></div>
          <div><a href="http://phphub.org/"><img src="https://static2.cnodejs.org/public/images/phphub-logo.png" alt=""></a></div>
        </div>
      </div>
  </div>
</template>

<script>
import pagination from './Pagination.vue'
  export default {
    name: 'PosList',
    data(){
      return{
        isLoading:false,
        posts:[], //代表页面的列表数组
        postPage:1
      }
    },
    components:{
        pagination
    },
    methods:{
      getData(){
        this.$http.get('https://cnodejs.org/api/v1/topics',{
          params:{
            page:this.postPage,
            limit :20
          }
        }).then(res => {
          this.isLoading = false  //加载成功之后去除loading图画
          this.posts = res.data.data
          console.log(posts)
        }).catch(err => {
          console.log(err)
        })
      },
      renderList(value){
        this.postPage = value
        this.getData()
      }
    },
    beforeMount(){
      this.isLoading = true  //加载成功之前显示动图
      this.getData()  //在加载页面之前获取数据
    }
  }
</script>

<!--scoped 代表只对这个组件有效-->
<style scoped>
  .PostList{
    background-color: #e1e1e1;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .posts {
    margin-top: 10px;
    width: 1300px;
  }

  .posts img {
    height: 30px;
    width: 30px;
    vertical-align: middle;
  }

  .loading{
    margin: auto;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 1344px;
    margin: 0 auto;
  }

  ul li:not(:first-child) {
    padding: 9px;
    font-size: 15px;
    font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma, "Hiragino Sans GB", STHeiti, sans-serif !important;
    font-weight: 400;
    background-color: white;
    color: #333;
    border-top: 1px solid #f0f0f0;
  }

  li:not(:first-child):hover {
    background: #f5f5f5;;
  }

  li:last-child:hover {
    background: white;
  }

  li span {
    line-height: 30px;
  }
  .reply_count {
    color: #9e78c0;
    font-size: 14px;
  }

  .reply{
    display: inline-block;
    width: 90px;
    text-align: center;
  }
  .put_good, .put_top {
    background: #80bd01;
    padding: 2px 4px;
    border-radius: 3px;
    /*为了适配不同浏览器内核
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    */
    color: #fff;
    font-size: 12px;
    margin-right: 10px;
  }

  .topicList-tab {
    background-color: #e5e5e5;
    color: #999;
    padding: 2px 4px;
    border-radius: 3px;
    /* 为了适配不同浏览器内核
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    */
    font-size: 12px;
    margin-right: 10px;
  }

  .last_reply {
    float: right;
    text-align: right;
    min-width: 50px;
    white-space: nowrap;
    color: #778087;
    font-size: 12px;
    width: 100px
  }

  .tooBar {
    height: 40px;
    background-color: #f5f5f5;
  }

  .tooBar span {
    font-size: 14px;
    color: #80bd01;
    line-height: 40px;
    margin: 0 10px;
    cursor: pointer;
  }

  .tooBar span:hover {
    color: #9e78c0;
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    text-decoration: underline;
  }

  .loading {
    text-align: center;
    padding-top: 300px;
  }

  .clearfix::after{
    content: '';
    display: block;
    clear: both;
  }

  .authorInfo{
    width: 328px;
    margin-left:10px;
    margin-top: 10px;
    margin-right:30px
  }
  .name{
    padding:15px ;
  }

  .name p{
    padding: 0;
    margin:0;
    margin-bottom:15px
  }

  .name a{
    color: skyblue;
  }

  button{
    border: none;
    outline: none;
    font-size: 16px;
    padding: 5px;
    cursor: pointer;
    transition: all .3s;
    background-color: rgb(106, 197, 233);
    opacity:1;
  }

  button:hover{
    opacity:0.8;
  }


  .authorSummary, .recent_topics {
    background-color: #fff;
  }

  .authorInfo .topBar {
    padding: 10px;
    background-color: #f6f6f6;
    height: 16px;
    font-size: 12px;
    margin-top: 10px;
  }

  .authorInfo img {
    height: 48px;
    width: 150px;
    margin: 10px;
  }

  .authorInfo .authorSummary .topBar {
    margin-top: 0px;
  }
</style>