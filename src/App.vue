<template>
  <div id="app">
  <!-- ============头部开始============== -->
    <header-a></header-a>
    <!-- 登录 -->
    <signin></signin>
    <!-- 注册 -->
    <register></register>
    <!-- ============头部结束============== -->


    <!-- ============中间部分开始  keep-alive用于缓存============== -->
    <!-- <keep-alive> -->
        <router-view/>
    <!-- </keep-alive>       -->
    <!-- ============中间部分结束============== -->


    <!-- ============底部开始============== -->
     <div class="footer " >
            Copyright 2011~2017 Shanghai Big Data Inc. All Rights Reserved
      </div>
    <!-- ============底部结束============== -->



  </div>
</template>

<script>
 import '../static/plugins/bootstrap.min.js';
 import headerA from './components/header.vue';//头部导航栏
 import signin from './components/SignIn.vue';//登录
 import register from './components/register.vue';//注册
export default {
  name: 'App',
  components:{
      signin,register,headerA
  },
  data(){
      return{
      
      }
  }
}
</script>

<style>
 @import '/static/css/layout.css';
  /* @import '/static/css/layout.sass'; */
 @import '/static/css/icon.css';
 @import '/static/plugins/bootstrap.min.css';
#app {
  min-width:700px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


}
.modal_title,.modal_body{
  text-align:center;
}
.navbar-inverse input[type="text"]{
background:#313131;
border:none;
color:#999;
}
.navbar-inverse .navbar-form{
  position:relative;
}

.navbar-inverse button[type="submit"]{
position:absolute;
top:30%;
right:20px;
background:none;
border:none;
}
@media(min-width:768px){
  .navbar-inverse button[type="submit"]{
    top:15%;
  }
}
.navbar-inverse .glyphicon{
  color:#999;
}
</style>
