<template>
  <div class="pagination">
    <button @click="changeBtn">首页</button>
    <button @click="changeBtn" >上一页</button>
    <button v-if="judge">......</button>
    <button v-for="btn in pageBtn" 
    @click="changeBtn(btn)"
    :class="[{currentPage:btn === currentPage},'pageBtn']">
      {{btn}}
    </button>
    <button>......</button>
    <button @click="changeBtn">下一页</button>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'Pagination',
  data(){
    return{
      pageBtn:[1,2,3,4,5],
      currentPage:1,
      judge:false
    }
  },
  methods:{
    changeBtn(page){
      if(typeof(page) !== 'number'){
        switch(page.target.innerHTML){
          case '上一页':
            $('button.currentPage').prev().click()
            break

          case '下一页':
            $('button.currentPage').next().click()
            break

          case '首页':
            this.pageBtn = [1,2,3,4,5]
            this.changeBtn(1)
            break

          default:
            break
        }
        return
      }
      this.currentPage = page
      if(page > 4){
        this.judge = true
      }else{
        this.judge = false
      }
      if(page === this.pageBtn[4]){
        this.pageBtn.shift()
        this.pageBtn.splice(4,0,this.pageBtn[3]+1)
      }else if(page === this.pageBtn[0] && page > 1){
        this.pageBtn.unshift(this.pageBtn[0]-1)
        this.pageBtn.splice(5,1)
      }
      this.$emit('handleList',this.currentPage)
    }
  }
}
</script>

<!--scoped 代表只对这个组件有效-->

<style scoped>
  .pagination {
    margin-top: 5px;
    margin-bottom: 20px;
    background-color: white;
    padding: 6px 20px;
    border-radius: 5px;
    /*box-shadow: 0px 2px 9px #888888;*/
    border: 1px solid #888888;
  }

  button {
    background-color: #fff;
    border: 1px solid #ddd;
    color: #778087;
    border-radius: 3px;
    outline: none;
    height: 21px;
    cursor: pointer;
    padding: 0 2px;
    width: 55px;
    height: 29px;
  }

  .pageBtn {
    position: relative;
    bottom: 1px;
    width: 40px;
    margin: 0 4px;
  }

  .currentPage {
    color: white;
    background-color: #1f1b1b;

  }
</style>