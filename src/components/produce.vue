<template>
  <div>
      <select-label v-on:child-msg="getChildData"></select-label>
      <div class="container">
          <div v-if="childMsg!=''" class="archive-header-info">
                <div class="archive-title">
                    <span class="grey-shadow">
                        <h1>The following are the classifications👇</h1>
                    </span>
                </div>
                <div class="archive-description">
                    <span class="grey-shadow">
                       ✨🚀🐢🎉 {{childMsg}} 🎉🐢🚀✨
                    </span>
                </div>
            </div>
            
            <div class="row" style="margin-top:20px;">
                <div class="col-sm-4 col-md-3 " v-for = "(item,index) in spliceData" v-bind:key="index">
                    <div class="thumbnail plugthumb" style="margin-top:30px">
                        <div class="showPic"><img :src='item.path'/></div>
                        <div class="caption">
                                <router-link :to="{path:'/detail/'+item.id}">
                                <h5 :style="ellip" :title="item.title">{{item.title}}</h5>
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

            <nav aria-label="Page navigation ">
                <ul class="pagination pagination-lg navbar-right">
                    <li>
                        <a href="#" aria-label="Previous" style="margin-right:10px">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li :class="pageIndex==n?'active':''"
                         v-for="n in pageNum" 
                         :key="n"
                         @click="tabPage(n)">
                        <a style="margin-right:10px" href="#">{{n}}</a>
                    </li>
              
                    <li>
                        <a href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
      </div>

            

        
  </div>
</template>

<script >
import selectLabel from './select_label';


export default { 
      components: {
        selectLabel,
    },
    data(){
        return{
            listAllData:[],
            spliceData:[],
            childMsg:'',
            pageNum:1,
            pageIndex:1,
            ellip:{
                    width: '240px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    lineHeight:'20px'
            }
        }
    },
      mounted () {
      //调用
      this.getListData()
    },
     methods: {
        getListData(){
           this.$axios.get(this.$url+'/banner/produceList').then((res) => {
                console.log(res)
                if(res.status==200&&res.data&&res.data.length>0){
                    this.listAllData=res.data;
                    this.pageNum=res.data.length/8;
                    this.spliceData=this.listAllData.slice(0,8) ; 
                }    
            } )
        },
        //切换页数
        tabPage(page){
           this.pageIndex=page;
           this.spliceData= this.listAllData.slice((page-1)*8,8*page);
        },
        //父组件向子组件获取信息
        getChildData(msg){
            this.childMsg=msg;
        }
     }
   
}
</script>
<style scoped>
@media (max-width: 840px){ 
.archive-header-info .archive-title,.archive-header-info .archive-description {
    max-width: none;
}
}
.archive-header-info .archive-title {
    font-size: 2.625rem;
    line-height: 2.625rem;
    margin-bottom: .625rem;
    letter-spacing: -2px;
    max-width: 80%;
    margin-right: auto;
    margin-left: auto;
}
.archive-header-info .archive-title {

    font-size: 2.625rem;
    line-height: 2.625rem;
    margin-bottom: .625rem;
    letter-spacing: -2px;
    max-width: 80%;
    margin-right: auto;
    margin-left: auto;
}
.archive-header-info .archive-title h1{
    text-align:center;
}
@media (max-width: 1430px){
.archive-header-info .archive-description {
    max-width: 80%;
}
}
 .archive-header-info .archive-description {
    font-family: -apple-system,BlinkMacSystemFont,Arial,Helvetica Neue,Helvetica,sans-serif;
    color: #777;
    max-width: 60%;
    margin-right: auto;
    margin-left: auto;
    font-size: 1.25rem;
    line-height: 1.5rem;
    letter-spacing: -0.2px;
}

.my_list_icon{
    padding:9px;
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
