// 实战推荐
<template>
       <div class="row ">
            <div class="col-sm-4 col-md-3 " v-for = "(item,index) in indexList" v-bind:key="index">
                    <div class="thumbnail plugthumb">
                        <div class="showPic"><img :src='item.path'/></div>
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
</template>
<style lang="scss">
.my_list_icon{
    i{
        font-style:normal;
        color:#ccc;
        padding:3px;
    }
    span{
        font-style:normal;
        color:#ccc;
        margin-right:15px;
    }
} 


</style>

<script>
export default {
      data(){
    return{

        indexList:[],//实战推荐数据
    }
  },
   mounted () {
      //调用
      this.getGoodsList();

    },
    methods: {
            //文章列表
        getGoodsList () {'/api/alldata'
            this.$axios.get('/api/alldata').then((res) => {
            var result = res.data
            if(result){
                var layoutData = result.data.layout
                for(var i=0;i<layoutData.length;i++){
                    this.indexList.push(layoutData[i])
                }   
            }
            })
        },
    },
}
</script>

