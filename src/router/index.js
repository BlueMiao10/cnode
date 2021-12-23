import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/Article'
import PosList from '../components/PosList'
import userInfo from '../components/userInfo'
import slideBar from '../components/slideBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'root',
      path: '/',
      components: {
        main: PosList
      }
    },
    {
      //路由的名字，方便路由的请求。点击相应链接时就回来请求这个路由
      name: 'post_content',
      //收到点击时传过来的post.id  利用传过来的值进行操作  跳转
      path: '/topic/:id&author=:name',
      //这里是path要指向的组件 
      components: {
        main: Article,
        slideBar: slideBar
      }
    },
    {
      name: 'user_info',
      path: '/user/:name',
      components: {
        main: userInfo
      }
    }
  ]
})
