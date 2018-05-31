<template>
    <!-- 头部导航栏 -->
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
                    <li v-for="(item,index) in titleList" :key="index">
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
                                <i class="_icon search"></i>
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
</template>
<style lang="sass" scoped>

</style>
<script>
export default {
    data(){
        return{
            titleList:[
                {
                    title:'首页',
                    url:'/'
                },
                {
                    title:'作品',
                    url:'/produce'
                },
                {
                    title:'社区',
                    url:'/Community'
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

