<template>
  <div id="app">
  <!-- ============头部开始============== -->
    <header>
      <div class="container">
         <nav class="navbar navbar-inverse " style="margin-bottom:0px">
            <div class="container-fluid ">
                <div class="navbar-header ">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    
                </button>
                 <a class="navbar-brand" href="#">
                
                </a>
                </div>
            
                <div class="collapse navbar-collapse" role="navigation" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li v-for="(item,index) in titleList">
                        <router-link :to="{path:item.url}">{{item.title}}</router-link>
                    </li>
                    <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">关于我们 <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">加入我们</a></li>
                        <li><a href="#">联系我们</a></li>
                    </ul>
                    </li>
                </ul>
                    <form class="navbar-form navbar-left ">
                            <div class="form-group">
                            <input type="text" class="form-control" placeholder="搜索">
                            </div>
                            <button type="submit">
                                <span class="glyphicon glyphicon-search"></span>
                            </button>
                    </form>
                <ul class="nav navbar-nav navbar-right">
                    <li  data-toggle="modal" data-target="#logIn">
                        <a href="#" >登录</a>
                    </li>
                    <li data-toggle="modal" data-target="#register">
                      <a href="#" >注册</a>
                    </li>
                </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>
      </div>

    </header>

<!-- 登录模态框 -->
    <!-- Modal -->
    <div class="modal fade " id="logIn" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content modal-xs">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title modal_title" id="myModalLabel">登录</h4>
                </div>
                <div class="modal-body modal_body">
                   <form acrion="" method="">
                       <p><span class="glyphicon glyphicon-user"></span><input type="text" name="username" placeholder="用户名"/></p>
                       <p><span class="glyphicon glyphicon-lock"></span><input type="text" name="password" placeholder="密码"/></p>
                   </form>
                </div>
                <div class="modal-footer">
                    <b>忘记密码？</b>
                    <button type="button" class="btn  btn-primary" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-primary">登录</button>
                </div>
            </div>
        </div>
    </div>
<!-- 注册 -->
<!-- Modal -->
    <div class="modal fade " id="register" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content modal-xs">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title modal_title" id="myModalLabel">注册</h4>
                </div>
                <div class="modal-body modal_body">
                   <form acrion="" method="">
                       <p><span class="glyphicon glyphicon-user"></span><input type="text" name="username" placeholder="用户名"/></p>
                       <p><span class="glyphicon glyphicon-lock"></span><input type="text" name="password" placeholder="密码"/></p>
                       <p><span class="glyphicon glyphicon-check"></span><input type="text" name="password" placeholder="确认密码"/></p>
                       <p><span class="glyphicon glyphicon-envelope"></span><input type="text" name="password" placeholder="邮箱建辉收到激活邮件，请认真填写"/></p>
                       <p>
                          <input type="radio" name="sex" value="男" checked/>男&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <input type="radio" name="sex" value="女"/>女&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <input type="radio" name="sex" value="保密"/>保密
                       </p>
                       <p><span class="glyphicon glyphicon-edit"></span><input type="text" name="username" placeholder="真实姓名"/></p>
                       <p><input type="checkbox" />我已阅读并接受 《版权声明》 和 《隐私保护》</p>
                   </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn  btn-primary" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-primary">注册</button>
                </div>
            </div>
        </div>
    </div>
    <!-- ============头部结束============== -->


    <!-- ============中间部分开始  keep-alive用于缓存============== -->
    <keep-alive>
        <router-view/>
    </keep-alive>      
    <!-- ============中间部分结束============== -->


    <!-- ============底部开始============== -->
     <div class="footer " style="margin-top:30px">
            Copyright 2011~2017 Shanghai Big Data Inc. All Rights Reserved
      </div>
    <!-- ============底部结束============== -->



  </div>
</template>

<script>
 import '../static/plugins/bootstrap.min.js';
export default {
  name: 'App',
  data(){
      return{
          titleList:[
              {
                  title:'首页',
                  url:'/'
              },
               {
                  title:'产品',
                  url:'/produce'
              },
               {
                  title:'数据',
                  url:'/centerNum'
              },
              {
                  title:'Info',
                  url:'/info'
              }
          ]
      }
  }
}
</script>

<style>
 @import '/static/css/layout.css';
 @import '/static/plugins/bootstrap.min.css';
#app {
  min-width:700px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50; */

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
