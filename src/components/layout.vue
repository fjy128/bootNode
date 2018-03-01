<template>
  <div >
    <!-- ============中间部分开始============== -->
     <!-- banner部分 -->
     <div class="container" style="margin-top:30px">
            <div class="row">
                <!-- banner 左边 -->
                <div class="col-xs-6 col-sm-7 col-md-8">
                    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                        <!-- Indicators -->
                        <ol class="carousel-indicators">
                            <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="3"></li>
                        </ol>
                    
                        <!-- Wrapper for slides -->
                        <div class="carousel-inner" role="listbox">
                            <div class="item active">
                                <img src="../assets/banner01.jpg" alt="..." style="height:320px;width:100%">
                                <div class="carousel-caption"></div>
                            </div>
                            <div class="item">
                            <img src="../assets/banner02.jpg" alt="..." style="height:320px;width:100%">
                                <div class="carousel-caption " style="color:#000">小技巧支招.... </div>
                            </div>
                            <div class="item">
                            <img src="../assets/banner03.jpg" alt="..." style="height:320px;width:100%">
                            </div>
                            <div class="item">
                                <img src="../assets/banner04.jpg" alt="..." style="height:320px;width:100%">
                            </div>
                        </div>
                        <!-- Controls -->
                        <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <!-- banner区 右边 -->
                <div class="col-xs-6 col-sm-5 col-md-4 my_right_list">
                    <p class="page_heade">热点文章</p>
                    <ul class="media-list">
                        <li class="media">
                            <div class="media-left">
                            <a href="#">
                            <img style="width:84px;height:64px" class="media-object img-thumbnail" src="../assets/littlePic01.jpg" alt="...">
                            </a>
                            </div>
                            <div class="media-body">
                            <div class="right_title">推荐6款UI设计是必备的Sketch插件，请你查收！</div>
                            <div class="right_info">1年前上传&nbsp;&nbsp;&nbsp;浏览：21875</div>
                            </div>
                        </li>
                        <li class="media">
                            <div class="media-left">
                            <a href="#" >
                            <img style="width:84px;height:64px" class="media-object img-thumbnail" src="../assets/littlePic02.jpg" alt="...">
                            </a>
                            </div>
                            <div class="media-body">
                            <div class="right_title">干货！推荐30个国外免费高清图片素材网站</div>
                            <div class="right_info">1月前上传&nbsp;&nbsp;&nbsp;浏览：31875</div>
                            </div>
                        </li>
                        <li class="media">
                            <div class="media-left">
                            <a href="#">
                            <img style="width:84px;height:64px" class="media-object img-thumbnail" src="../assets/littlePic03.jpg" alt="...">
                            </a>
                            </div>
                            <div class="media-body">
                            <div class="right_title">详细讲解APP切图流程和APP切图命名规范</div>
                            <div class="right_info">1年前上传&nbsp;&nbsp;&nbsp;浏览：21875</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
     </div>
  
    
        <!-- 资讯新闻 -->
        <div class="container " style="margin-top:50px" >
              <div class="row">
                    <div class="col-sm-4 col-md-3" v-for = "(item,index) in indexList" >
                            <div class="thumbnail">
                                <img :src='item.path'/>
                                <div class="caption">
                                     <router-link :to="{path:'/detail'}">
                                        <h5>{{item.title}}</h5>
                                     </router-link>
                                    <p>{{item.pusDay}}</p>
                                    <div class="my_list_icon">
                                        <i class="glyphicon glyphicon-eye-open"></i><span>{{item.vised}}</span>
                                        <i class="glyphicon glyphicon-comment"></i><span>{{item.pinglun}}</span>
                                        <i class="glyphicon glyphicon-thumbs-up"></i><span>{{item.zan}}</span>
                                    </div>
                                </div>
                            </div>
                       
                    </div>


                    <div class="col-sm-4 col-md-3">
                        <div class="thumbnail">
                            <img src="../assets/indexList02.jpg" alt="...">
                            <div class="caption">
                                <h5>（第一期）蝙蝠侠汽车合成</h5>
                                <p>9月前发布</p>
                                <div class="my_list_icon">
                                    <i class="glyphicon glyphicon-eye-open"></i><span>2375</span>
                                    <i class="glyphicon glyphicon-comment"></i><span>0</span>
                                    <i class="glyphicon glyphicon-thumbs-up"></i><span>0</span>
                                </div>                        
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 col-md-3">
                        <div class="thumbnail">
                        <img src="../assets/indexList03.jpg" alt="...">
                        <div class="caption">
                            <h5>新风尚</h5>
                            <p>9月前发布</p>
                            <div class="my_list_icon">
                                <i class="glyphicon glyphicon-eye-open"></i><span>2375</span>
                                <i class="glyphicon glyphicon-comment"></i><span>0</span>
                                <i class="glyphicon glyphicon-thumbs-up"></i><span>0</span>
                            </div>   
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-4 col-md-3">
                        <div class="thumbnail">
                        <img src="../assets/indexList04.jpg" alt="...">
                        <div class="caption">
                             <h5>网站中突出主要内容的5种方法</h5>
                            <p>9月前发布</p>
                            <div class="my_list_icon">
                                <i class="glyphicon glyphicon-eye-open"></i><span>2375</span>
                                <i class="glyphicon glyphicon-comment"></i><span>0</span>
                                <i class="glyphicon glyphicon-thumbs-up"></i><span>0</span>
                            </div>   
                        </div>
                        </div>
                    </div>
                     <div class="col-sm-4 col-md-3">
                        <div class="thumbnail">
                        <img src="../assets/indexList05.jpg" alt="...">
                        <div class="caption">
                              <h5>去年的项目</h5>
                            <p>1年前发布</p>
                           <div class="my_list_icon">
                                <i class="glyphicon glyphicon-eye-open"></i><span>2375</span>
                                <i class="glyphicon glyphicon-comment"></i><span>0</span>
                                <i class="glyphicon glyphicon-thumbs-up"></i><span>0</span>
                            </div>   
                        </div>
                        </div>
                    </div>
                     <div class="col-sm-4 col-md-3">
                        <div class="thumbnail">
                        <img src="../assets/indexList06.jpg" alt="...">
                        <div class="caption">
                              <h5>Interface Collection Part 04</h5>
                            <p>1月前发布</p>
                            <div class="my_list_icon">
                                <i class="glyphicon glyphicon-eye-open"></i><span>2375</span>
                                <i class="glyphicon glyphicon-comment"></i><span>0</span>
                                <i class="glyphicon glyphicon-thumbs-up"></i><span>0</span>
                            </div>                           </div>
                        </div>
                    </div>
                     <div class="col-sm-4 col-md-3">
                        <div class="thumbnail">
                        <img src="../assets/indexList07.jpg" alt="...">
                        <div class="caption">
                              <h5>春节回家抢票神器</h5>
                            <p>9月前发布</p>
                            <div class="my_list_icon">
                                <i class="glyphicon glyphicon-eye-open"></i><span>2375</span>
                                <i class="glyphicon glyphicon-comment"></i><span>0</span>
                                <i class="glyphicon glyphicon-thumbs-up"></i><span>0</span>
                            </div>                           </div>
                        </div>
                    </div>
                     <div class="col-sm-4 col-md-3">
                        <div class="thumbnail">
                        <img src="../assets/indexList08.jpg" alt="...">
                        <div class="caption">
                             <h5>有我就有你想去的世界</h5>
                            <p>9月前发布</p>
                            <div class="my_list_icon">
                                <i class="glyphicon glyphicon-eye-open"></i><span>2375</span>
                                <i class="glyphicon glyphicon-comment"></i><span>0</span>
                                <i class="glyphicon glyphicon-thumbs-up"></i><span>0</span>
                            </div> 
                        </div>
                        </div>
                    </div>
             </div>
            <nav aria-label="Page navigation ">
                <ul class="pagination pagination-lg navbar-right">
                    <li>
                    <a href="#" aria-label="Previous" style="margin-right:10px">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                    </li>
                    <li class="active"><a style="margin-right:10px" href="#">1</a></li>
                    <li><a style="margin-right:10px" href="#">2</a></li>
                    <li><a style="margin-right:10px" href="#">3</a></li>
                    <li><a style="margin-right:10px" href="#">4</a></li>
                    <li><a style="margin-right:10px" href="#">5</a></li>
                    <li>
                    <a href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                    </li>
                </ul>
            </nav>
        </div>

        
    <!-- ============中间部分结束============== -->

  </div>
</template>

<script>





import axios from 'axios';
export default {
  name: 'App',
  data(){
    return{
        indexList:[],
    }
  },
  mounted () {
      this.getGoodsList()
    },
    methods: {
      getGoodsList () {
        axios.get('/api/alldata').then((res) => {
          var result = res.data
          if(result){
              console.log(result.data)
              var layoutData = result.data.layout
              for(var i=0;i<layoutData.length;i++){
                this.indexList.push(layoutData[i])
              }
              
          }
        })
      }
    }
}
</script>

<style scoped>


.my_right_list{
    background:#fff;
    border-radius:5px;
}
.page_heade{
    padding:8px 5px 5px;
    border-bottom:1px solid #ccc;
}
.media{
    border-bottom:1px solid #ccc;
}
/* .col-sm-4 .thumbnail .caption div{
    border-bottom:1px solid #ccc;
    padding-bottom:20px;

} */
.right_title{

}
.right_info{

    padding-bottom:20px;
}
.my_list_icon i{
  font-style:normal;
  color:#ccc;
  padding:3px;
}
.my_list_icon span{
  font-style:normal;
  color:#ccc;
  margin-right:15px;
}

</style>