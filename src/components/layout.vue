<template>
  <div >
    <!-- ============中间部分开始============== -->
     <!-- banner部分 -->
     <div class="container" style="margin-top:30px">
            <div class="row" v-bind:style='shadom'>
                <!-- banner 左边 -->
                <div class="col-xs-6 col-sm-7 col-md-8">
                    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                        <!-- Indicators -->
                        <ol class="carousel-indicators">
                            <li 
                               v-for="item in bannerData"
                               :class="item.id=='0'? 'active' : '' "
                               v-bind:key="item.id"
                               data-target="#carousel-example-generic" 
                              :data-slide-to="item.id"  ></li>
                        </ol>
                    
                        <!-- Wrapper for slides -->
                        <div class="carousel-inner" role="listbox">
                            <div class="item "
                                 v-bind:class="{ active: item.id=='0' }"
                                 v-for="item in bannerData"
                                 v-bind:key="item.id">
                                <img :src="item.url" alt="..." style="height:320px;width:100%">
                               
                            </div>
                        </div>
                        <!-- Controls -->
                        <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                            <i class="jiantou L_icon" aria-hidden="true"></i>
                        </a>
                        <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                            <i class="jiantou R_icon" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <!-- banner区 右边 -->
                <div class="col-xs-6 col-sm-5 col-md-4 my_right_list">
                    <p class="page_heade">热点文章</p>
                    <ul class="media-list">
                        <li class="media"
                            v-for="item in recommendData"
                            v-bind:key="item.id">
                            <div class="media-left">
                                <a href="#">
                                    <img style="width:84px;height:64px" class="media-object img-thumbnail" :src="item.url" alt="...">
                                </a>
                            </div>
                            <div class="media-body">
                                <div class="right_title">{{item.title}}</div>
                                <div class="right_info">
                                    <span :style="{color:'#c0a26f',fontSize:'12px'}">上传于:</span><time :style="{marginRight:'10px',color:'#909499',fontSize:'12px'}">{{getStyleTime(item.upTime)}}</time>
                                    <span :style="{color:'#c0a26f',fontSize:'12px'}">浏览量:</span><small :style="{marginRight:'10px',color:'#909499',fontSize:'12px'}">{{item.viseNum}}</small>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
     </div>

      <!-- 实／战／推／荐 -->
        <h3 class="types-title">				
            <span class="tit-icon icon-shizhan-l tit-icon-l"></span>
            <em>实</em>／<em>战</em>／<em>推</em>／<em>荐</em>
            <span class="tit-icon icon-shizhan-r tit-icon-r"></span>								
        </h3>
        <div class="container " style="margin-top:20px" >
              <div class="row ">
                    <div class="col-sm-4 col-md-3 " v-for = "(item,index) in indexList" v-bind:key="index">
                            <div class="thumbnail plugthumb">
                                <img :src='item.path'/>
                                <div class="caption">
                                     <router-link :to="{path:'/detail'}">
                                        <h5>{{item.title}}</h5>
                                     </router-link>
                                    <p>{{item.pusDay}}</p>
                                    <div class="my_list_icon">
                                        <i class="_icon eye"></i><span>{{item.vised}}</span>
                                        <i class="_icon comment"></i><span>{{item.pinglun}}</span>
                                        <i class="_icon zan"></i><span>{{item.zan}}</span>
                                    </div>
                                </div>
                            </div>                      
                    </div>
                </div>    
        </div>

       <!-- 新／上／好／课 -->
        <h3 class="types-title">				
            <span class="tit-icon icon-new-l tit-icon-l"></span>
            <em>新</em>／<em>上</em>／<em>好</em>／<em>课</em>
            <span class="tit-icon icon-new-r tit-icon-r"></span>								
        </h3>
        <div class="clearfix types-content container">
            <div class="index-card-container" v-for="item in SHcursomData" v-bind:key="item.id"> 
                <a target="_blank" 
                  :style="{textDecoration:'none'}"
                  href="//coding.imooc.com/class/218.html?mc_marking=c5a3de541d57c8b0f8adb42c41479892&amp;mc_channel=syb11" 
                  data-track="xshk-1-1">
                    <div class="course-stat new" v-show="item.new">NEW</div>
                    <div class="course-card-top hashadow">
                        <img class="course-banner" :src="item.picURL">
                        <div class="course-label">
                            <label v-for="subItem in item.label" >{{subItem}}</label>
                        </div>
					</div>
                    <div class="course-card-content">
                        <h3 class="course-card-name" :style="{marginTop:'5px'}">{{item.title}}</h3>
                        <div class="clearfix course-card-bottom">
                            <div class="course-card-info">
                                <span>{{item.type!=""?item.type:""}}</span>
                                <span>{{item.level!=""?item.level:""}}</span>
                                <span><i class="icon-set_sns"></i>人数:{{item.person}}</span>
                                <span class="course-star-box">
                                    <i class="icon-star2" v-for="n in item.start" ></i>
                                </span>
                            </div>
                            <div class="course-card-price">{{item.money>0?"￥"+item.money:"免费"}}</div>
                        </div>
                    </div>
			    </a>
		    </div>
        </div>
         <!-- 精／彩／手／记／及／猿／问 -->
       <h3 class="types-title">			
            <span class="tit-icon icon-art-l tit-icon-l">
                </span><em>精</em>／<em>彩</em>／<em>手</em>／<em>记</em>／<em>及</em>／<em>猿</em>／<em>问</em>
            <span class="tit-icon icon-art-r tit-icon-r"></span>		
       </h3>
       <div class="container">
            <ul class="wonderful-list js-wonderful-list types-content" :style="{height:'1565px'}">
                <dd class="item" :id="'Apes_ask'+Math.random()" style="left: 390px; top: 0px;">				
                    <label class="article-label blue"><i class="icon-blog"></i>手记文章</label>
                    <div class="clearfix article-tit">
                        <a href="/article/30727" target="_blank" class="big-tit l hasimg">美团点评智能支付核心交易系统的可用性实践</a>	
                        <img class="r" 
                            src="//img1.sycdn.imooc.com/5b0659cb0001f06c10540514-210-130.jpg" 
                            data-original="//img1.sycdn.imooc.com/5b0659cb0001f06c10540514-210-130.jpg">									
                    </div>				
                    <div>					
                        <p class="article-content">背景 每个系统都有它最核心的指标。比如在收单领域：进件系统第一重要的是保证入件准确，第二重要的是保证上单效率。清结算系统第一重要的是保证准确打款，第二重要的是保证及时打款。我们负责的系统是美团点评智能支付的核心链路，承担着智能支付100%的流量，内部习惯称为核心交易。因为涉及美团点评所有线下交易商家、用户之间的资金流转，对于核心交易来说：第一重要的是稳定性，第二重要的还是稳定性。 问题引发 作为一...</p>
                        <div class="bottom-info clearfix">
                            <span>浏览 596</span><span>推荐 9</span>
                            <a href="/article/30727" target="_blank" class="r blue">阅读全文<i class="icon-right"></i></a>
                        </div>				
                    </div>			
                </dd>
            </ul>
       </div>
    <!-- ============中间部分结束============== -->

  </div>
</template>

<script>





import axios from 'axios';
// import wookmark from 'wookmark';
// import $ from 'jquery';
export default {
  name: 'App',
  data(){
    return{
        bannerData:[],//banner数据
        recommendData:[],//右边栏热门推荐数据
        indexList:[],//实战推荐数据
        SHcursomData:[],//新上好课数据
        shadom:{
            borderRadius:"5px",
            boxShadow:" 0 12px 24px 0 rgba(7,17,27,0.2)"
            }
    }
  },
  mounted () {
      //调用
      this.getGoodsList();
      this.getBanner();
      this.getrecommend();
      this.getShcursom();
    // var handler = $('.item');
    //     handler.wookmark({
    //     // Prepare layout options.
    //     autoResize: true, // This will auto-update the layout when the browser window is resized.
    //    // container: $('#main'), // Optional, used for some extra CSS styling
    //     offset: 5, // Optional, the distance between grid items
    //     outerOffset: 10, // Optional, the distance to the containers border
    //     itemWidth: 210 // Optional, the width of a grid item
    //     })
    },
    methods: {
            //文章列表
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
        },
        //获取banner图片
        getBanner(){ 
            $.ajax({
                url: "https://5b076a5892b3b4001425a067.mockapi.io/api/banner/banner",
                type: 'get',
                dataType: 'json',
                data: {},
                success:res=>{ this.bannerData=res; },
                error:msg=>{ console.log(msg)}
            })      
        },

        //获取人们土建文章
        getrecommend(){
            axios.get('http://5b076a5892b3b4001425a067.mockapi.io/api/banner/recommend').then((res) => {
                this.recommendData=res.data
            })
        },
         //获取上好课程
        getShcursom(){
            axios.get('http://5b076a5892b3b4001425a067.mockapi.io/api/banner/hkcourse').then((res) => {
                if(res.status==200&&res.data&&res.data.length){
                    this.SHcursomData=res.data;
                    console.log(res.data)
                }else{
                    console.log("暂无数据")
                }
            })
        },
       //获取时间格式
       getStyleTime(uptime){
            let time =uptime*1000;
            var dateTime = new Date(parseInt(time));
            var year = dateTime.getFullYear();
            var month = dateTime.getMonth() + 1;
            var day = dateTime.getDate();
            var hour = dateTime.getHours();
            var minute = dateTime.getMinutes();
            var second = dateTime.getSeconds();
            var now = new Date();
            var now_new = Date.parse(now.toDateString());  //typescript转换写法
            var milliseconds = 0;
            var timeSpanStr;
            milliseconds = now - time; 
            if (milliseconds <= 1000 * 60 * 1) { timeSpanStr = '刚刚'; }
            else if (1000 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60) {
                timeSpanStr = Math.round((milliseconds / (1000 * 60))) + '分钟前';
            }
            else if (1000 * 60 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24) {
                timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60)) + '小时前';
            }
            else {
                timeSpanStr = year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
            }
            return timeSpanStr;
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