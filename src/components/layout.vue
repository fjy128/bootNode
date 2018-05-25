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
              <div class="row">
                    <div class="col-sm-4 col-md-3" v-for = "(item,index) in indexList" v-bind:key="index">
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
                </div>    
        </div>

       <!-- 新／上／好／课 -->
        <h3 class="types-title">				
            <span class="tit-icon icon-new-l tit-icon-l"></span>
            <em>新</em>／<em>上</em>／<em>好</em>／<em>课</em>
            <span class="tit-icon icon-new-r tit-icon-r"></span>								
        </h3>
        <div class="clearfix types-content container">
            <div class="index-card-container  ">
                <a target="_blank" class="course-card" href="//coding.imooc.com/class/218.html?mc_marking=c5a3de541d57c8b0f8adb42c41479892&amp;mc_channel=syb11" data-track="xshk-1-1">
                    <div class="course-stat new">NEW</div>
                    <div class="course-card-top hashadow">
                        <img class="course-banner" src="//img3.sycdn.imooc.com/szimg/5afbd8bf000175f805400300.jpg">
                        <div class="course-label">
                            <label>Vue.js</label>
                        </div>
					</div>
                    <div class="course-card-content">
                        <h3 class="course-card-name">全网首发mpvue课程小程序全栈开发</h3>
                        <div class="clearfix course-card-bottom">
                            <div class="course-card-info">
                                <span>实战</span><span>中级</span><span><i class="icon-set_sns"></i>256</span>
                                <span class="course-star-box">
                                    <i class="icon-star2 on"></i>
                                    <i class="icon-star2 on"></i>
                                    <i class="icon-star2 on"></i>
                                    <i class="icon-star2 on"></i>
                                    <i class="icon-star2 on"></i>
                                </span>
                            </div>
                            <div class="course-card-price">￥266.00</div>
                        </div>
                    </div>
			</a>
		</div>
           <div class="index-card-container  ">
                <a target="_blank" class="course-card" href="//coding.imooc.com/class/218.html?mc_marking=c5a3de541d57c8b0f8adb42c41479892&amp;mc_channel=syb11" data-track="xshk-1-1">
                    <div class="course-stat new">NEW</div>
                    <div class="course-card-top hashadow">
                        <img class="course-banner" src="//img3.sycdn.imooc.com/szimg/5afbd8bf000175f805400300.jpg">
                        <div class="course-label">
                            <label>Vue.js</label>
                        </div>
					</div>
                    <div class="course-card-content">
                        <h3 class="course-card-name">全网首发mpvue课程小程序全栈开发</h3>
                        <div class="clearfix course-card-bottom">
                            <div class="course-card-info">
                                <span>实战</span><span>中级</span><span><i class="icon-set_sns"></i>256</span>
                                <span class="course-star-box">
                                    <i class="icon-star2 on"></i>
                                    <i class="icon-star2 on"></i>
                                    <i class="icon-star2 on"></i>
                                    <i class="icon-star2 on"></i>
                                    <i class="icon-star2 on"></i>
                                </span>
                            </div>
                            <div class="course-card-price">￥266.00</div>
                        </div>
                    </div>
			</a>
		</div>
           <div class="index-card-container  ">
                <a target="_blank" class="course-card" href="//coding.imooc.com/class/218.html?mc_marking=c5a3de541d57c8b0f8adb42c41479892&amp;mc_channel=syb11" data-track="xshk-1-1">
                    <div class="course-stat new">NEW</div>
                    <div class="course-card-top hashadow">
                        <img class="course-banner" src="//img3.sycdn.imooc.com/szimg/5afbd8bf000175f805400300.jpg">
                        <div class="course-label">
                            <label>Vue.js</label>
                        </div>
					</div>
                    <div class="course-card-content">
                        <h3 class="course-card-name">全网首发mpvue课程小程序全栈开发</h3>
                        <div class="clearfix course-card-bottom">
                            <div class="course-card-info">
                                <span>实战</span><span>中级</span><span><i class="icon-set_sns"></i>256</span>
                                <span class="course-star-box">
                                    <i class="icon-star2 on"></i>
                                    <i class="icon-star2 on"></i>
                                    <i class="icon-star2 on"></i>
                                    <i class="icon-star2 on"></i>
                                    <i class="icon-star2 on"></i>
                                </span>
                            </div>
                            <div class="course-card-price">￥266.00</div>
                        </div>
                    </div>
			</a>
		</div>
           <div class="index-card-container  ">
                <a target="_blank" class="course-card" href="//coding.imooc.com/class/218.html?mc_marking=c5a3de541d57c8b0f8adb42c41479892&amp;mc_channel=syb11" data-track="xshk-1-1">
                    <div class="course-stat new">NEW</div>
                    <div class="course-card-top hashadow">
                        <img class="course-banner" src="//img3.sycdn.imooc.com/szimg/5afbd8bf000175f805400300.jpg">
                        <div class="course-label">
                            <label>Vue.js</label>
                        </div>
					</div>
                    <div class="course-card-content">
                        <h3 class="course-card-name">全网首发mpvue课程小程序全栈开发</h3>
                        <div class="clearfix course-card-bottom">
                            <div class="course-card-info">
                                <span>实战</span><span>中级</span><span><i class="icon-set_sns"></i>256</span>
                                <span class="course-star-box">
                                    <i class="icon-star2 on"></i>
                                    <i class="icon-star2 on"></i>
                                    <i class="icon-star2 on"></i>
                                    <i class="icon-star2 on"></i>
                                    <i class="icon-star2 on"></i>
                                </span>
                            </div>
                            <div class="course-card-price">￥266.00</div>
                        </div>
                    </div>
			</a>
		</div>
           <div class="index-card-container  ">
                <a target="_blank" class="course-card" href="//coding.imooc.com/class/218.html?mc_marking=c5a3de541d57c8b0f8adb42c41479892&amp;mc_channel=syb11" data-track="xshk-1-1">
                    <div class="course-stat new">NEW</div>
                    <div class="course-card-top hashadow">
                        <img class="course-banner" src="//img3.sycdn.imooc.com/szimg/5afbd8bf000175f805400300.jpg">
                        <div class="course-label">
                            <label>Vue.js</label>
                        </div>
					</div>
                    <div class="course-card-content">
                        <h3 class="course-card-name">全网首发mpvue课程小程序全栈开发</h3>
                        <div class="clearfix course-card-bottom">
                            <div class="course-card-info">
                                <span>实战</span><span>中级</span><span><i class="icon-set_sns"></i>256</span>
                                <span class="course-star-box">
                                    <i class="icon-star2 on"></i>
                                    <i class="icon-star2 on"></i>
                                    <i class="icon-star2 on"></i>
                                    <i class="icon-star2 on"></i>
                                    <i class="icon-star2 on"></i>
                                </span>
                            </div>
                            <div class="course-card-price">￥266.00</div>
                        </div>
                    </div>
			</a>
		</div>
        </div>
        
    <!-- ============中间部分结束============== -->

  </div>
</template>

<script>





import axios from 'axios';
// import $ from 'jquery';
export default {
  name: 'App',
  data(){
    return{
        bannerData:[],
        recommendData:[],
        indexList:[],
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
      this.getrecommend()
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