<template>
    <div style="min-height:500px">
        <div class="container" style="margin-top:30px;">
            <!-- =========详情页头部=========== -->
            <div class="wvHead clearfix" >
                <div class="wvUser fr">
                    <div class="clearfix">
                        <a  href="javascript:;"  class="fl relative" target="_blank">
                            <img  height="62" width="62" class="radius100" :src="detailData.path">
                        </a>
                        <div class="workName">
                            <p><a href="/10685" target="_blank" class="c_394a58 f18" :title="detailData.autor">{{detailData.autor}}</a></p>
                            {{detailData.vised}}粉丝 / {{detailData.zan}}关注
                        </div>
                    </div>
                    <div class="mt10 relative">
                        <a href="javascript:;" class="designerBtn followBtn " data="10685"><span class="glyphicon glyphicon-plus-sign"></span><i class="text">&nbsp;加关注</i></a>&nbsp;&nbsp;
                        <a href="javascript:;" class="designerBtn fasixin"><span class="glyphicon glyphicon-envelope"></span>&nbsp;发私信</a>
                    </div>
                </div>
                <div class="p20">
                    <h2 class="c_38485a f24">{{detailData.title}}</h2>
                    <p class="c_8f98aa f12 mt10">
                        <span>作品分类：</span><a  class="c_4095cc">{{detailData.style}}</a>
                        <span class="c_4095cc">发布时间：</span><a  class="c_4095cc">{{detailData.pusDay}}</a>  
                    </p>
                    <div class="mt10 c_ccc f12">
                        <i class="_icon eye"></i><span>{{detailData.vised}}</span>
                        <i class="_icon comment"></i><span>{{detailData.pinglun}}</span>
                        <i class="_icon zan"></i><span>{{detailData.zan}}</span>
                        © 版权&nbsp;
                        <span class="relative">
                            <img src="" class="mtf3">&nbsp;<a href="javascript:;" class="c_ccc">举报</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="container detail" style="margin-top:30px">
            <img class="container" src=""/>
        </div>
    </div>
    <!-- =========详情页中间部分========== -->
  
</template>
<script>


export default{

      data(){
        return{
            detailData:{},
        }
    },
      created(){
        this.getDetail();
    },
    methods:{
        getDetail(){
           this.$axios.get(this.$url+'/banner/produceList/'+this.$route.params.id).then((res)=>{
                this.detailData=res.data;
            })
        }
    },

};
</script>

<style scoped>

.fl {
    float: left;
}
.fr {
    float: right;
}
.relative {
    position: relative;
}
.clearfix {
    zoom: 1;
}
.mt10 {
    margin-top: 10px;
}
a {
    text-decoration: none;
    outline: none;
    color: #454545;
}
i{
font-style:normal;
}
.f24 {
    font-size: 24px;
}
.f12 {
    font-size: 12px;
}
.c_8f98aa, a.c_8f98aa, .c_8f98aa a {
    color: #8f98aa;
}
.c_38485a, a.c_38485a, .c_38485a a {
    color: #38485a;
}
.c_4095cc, a.c_4095cc, .c_4095cc a {
    color: #4095cc;
}
.c_ccc{
    color:#ccc
}
span{
    margin-right:5px
}
.wvHead {
    background-color: #fafafa;
    border: 1px #e5e5e5 solid;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    }

.wvUser {
    border-left: 1px #e5e5e5 solid;
    padding: 13px 35px;
    position: relative;
}

.wvUser .workName {
    color: #394a58;
    margin-left: 70px;
    padding-top: 10px;
}
.workName {
    color: #abb0b3;
    font-size: 12px;
    line-height: 20px;
    margin-left: 45px;
    min-height: 40px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.designerBtn {
    background-color: #0099e5;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    line-height: 30px;
    padding: 0;
    text-align: center;
    width: 100px;
}
.designerBtn.fasixin {
    background-color: #7087a3;
}
.designerBtn {
    background-color: #0099e5;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    line-height: 30px;
    padding: 0;
    text-align: center;
    width: 100px;
}


.p20 {
    padding: 20px;
}
.materialIcon {
    color: #8f98aa;
    display: inline-block;
    font-size: 13px;
    margin-right: 10px;
}
.detail .container{
    margin-left:-15px;
}
</style>


