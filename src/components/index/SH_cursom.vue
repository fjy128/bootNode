// 实战推荐
<template>
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
                            <div>
                                <span>好评指数:</span>
                                <i class="icon-star2" v-for="n in item.start" :key="n"></i>
                            </div>
                        </div>
                        <div class="course-card-price">{{item.money>0?"￥"+item.money:"免费"}}</div>
                    </div>
                </div>
            </a>
        </div>
    </div>  
</template>
<style lang="scss">

</style>

<script>
export default {
    data(){
    return{
        SHcursomData:[],//新上好课数据
    }
  },
  mounted () {
      this.getShcursom();
    },
    methods: {
         //获取上好课程
        getShcursom(){
            this.$axios.get(this.$url+'/banner/hkcourse').then((res) => {
                if(res.status==200&&res.data&&res.data.length){
                    this.SHcursomData=res.data;
                }else{ console.log("暂无数据")}
            })
        },
    },
}
</script>

