<template>
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
</template>
<style lang="scss" scoped>
.my_right_list{
    background:#fff;
    border-radius:5px;
    .page_heade{
        padding:8px 5px 5px;
        border-bottom:1px solid #ccc;
    }
    .media{
        border-bottom:1px solid #ccc;
    }
    .right_info{
    padding-bottom:20px;
    }
}



</style>
<script>
export default {
    data(){
        return{
            bannerData:[],//banner数据
            recommendData:[],//右边栏热门推荐数据
            shadom:{
                borderRadius:"5px",
                boxShadow:" 0 12px 24px 0 rgba(7,17,27,0.2)"
                }, 
        }
    },
     mounted () {
      //调用
      this.getBanner();
      this.getrecommend();

    },
    methods: {
          //获取banner图片
        getBanner(){ 
            $.ajax({
                url: this.$url+"/banner/banner",
                type: 'get',
                dataType: 'json',
                data: {},
                success:res=>{ this.bannerData=res; },
                error:msg=>{ console.log(msg)}
            })      
        },

   
        //获取热门推荐文章
        getrecommend(){
            this.$axios.get(this.$url+'/banner/recommend').then((res) => {
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
    },
}
</script>


