
<template>
   <ul 
      v-infinite-scroll="loadMore" 
      infinite-scroll-disabled="busy" 
      infinite-scroll-distance="10"
      class="wonderful-list types-content" >
      <dd class="item" v-for="item in data" :key="item.id">				
          <label class="article-label blue"><i class="icon-blog"></i>手记文章</label>
          <div class="clearfix article-tit">
              <a href="/article/30727" target="_blank" class="big-tit l hasimg">{{item.title}}</a>	
                                      
          </div>				
          <div>					
              <p class="article-content">{{item.content}}</p>
              <div class="bottom-info clearfix">
                  <span>浏览 {{item.viewnum}}</span><span>推荐 {{item.recommend}}</span>
                  <a href="/article/30727" target="_blank" class="r blue">阅读全文<i class="icon-right"></i></a>
              </div>				
          </div>			
      </dd>
  </ul>
</template>
<script >
import infiniteScroll from 'vue-infinite-scroll';
export default {
    components: {
        infiniteScroll
    },
    data(){
      return{
        busy: false,   
        data: [],
      }
    },
    method:{

        loadMore() {
           if(this.data.length>0){
               this.busy=true
           }else{
                axios.get('http://5b076a5892b3b4001425a067.mockapi.io/api/banner/question').then((res) => {
                    if(res.status==200&&res.data&&res.data.length){
                        this.data=res.data;
                        console.log(res.data)
                    }
                }).then(()=>{
                    var $item = $('.wonderful-list .item');
                    var len =$item.length 
                    var aHeight = {L:[],C:[],R:[]}
                    for(let i=0;i<len;i++){
                        var iNow = i%3;
                        switch(iNow){
                            case 0:
                            $($item[i]).css({left:'15px'});
                             aHeight.L.push( $($item[i]).height());
                            var step = Math.floor(i/3);
                            if(!step){
                                  $($item[i]).css({top:'0'});
                            }
                            else{
                                var sum = 0;
                                for(var j=0;j<step;j++){
                                    sum += aHeight.L[j] + 15;
                                }
                                $($item[i]).css({top:sum + 'px'});
                            }
                            break;
                            case 1:
                            $($item[i]).css({left:(348+30)+'px'});
                            aHeight.C.push( $($item[i]).height());
                            var step = Math.floor(i/3);
                            if(!step){
                                  $($item[i]).css({top:'0'});
                            }
                            else{
                                var sum = 0;
                                for(var j=0;j<step;j++){
                                    sum += aHeight.C[j] + 15;
                                }
                                $($item[i]).css({top:sum + 'px'});
                            }
                            break;
                             case 2:
                            $($item[i]).css({left:(2*348+45)+'px'});
                            aHeight.R.push( $($item[i]).height());
                            var step = Math.floor(i/3);
                            if(!step){
                                  $($item[i]).css({top:'0'});
                            }
                            else{
                                var sum = 0;
                                for(var j=0;j<step;j++){
                                    sum += aHeight.R[j] + 15;
                                }
                                $($item[i]).css({top:sum + 'px'});
                            }
                            break;
                        }
                    }
                })
           }            
        },
    }

}
</script>
<style scoped>

</style>

