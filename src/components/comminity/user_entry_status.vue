<template>

   <div role="tabpanel" class="tab-pane" id="profile">
      <add-edit :showedit="!show_tab_pane" v-on:fnshowedit="fnshowedit" v-on:newuser="newuser"></add-edit>
       <div v-show="show_tab_pane">
                <p style="margin:20px 0 20px 0"> <a @click='addItem' href="javascript:;">添加</a></p>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th><input type="checkbox" v-model="myV"/>&nbsp;全部</th>
                        <th></th>
                        <th>用户名字</th>
                        <th>联系方式</th>
                        <th>邮箱</th>
                        <th>入驻资金</th>
                        <th>入驻资金占比(>85%显示红色)</th>
                        <th>状态</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for = "(item,index) in spliceData" :key="index" >
                        <td><input type="checkbox" :checked='checked'  />&nbsp;&nbsp;&nbsp;</td>
                        <td ><img class="userPic" :src="item.img"/></td>
                        <td>{{item.name}}</td>
                        <td>{{item.phone}}</td>
                        <td>{{item.emil}}</td>
                        <td>{{item.money}}</td>
                        <td v-if="parseInt(item.pro)>80">
                        <div class="progress">
                            <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" :style='"width:"+item.pro+"%"'>
                                <span class="sr-only">{{item.pro}}</span>
                            </div>
                        </div>
                    </td>
                    <td v-else>
                        <div class="progress">
                            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" :style='"width:"+item.pro+"%"'>
                                <span class="sr-only">{{item.pro}}</span>
                            </div>
                        </div>
                    </td>
                        <td v-if="!item.state"><button type="button" class="btn btn-success">intall</button></td>
                        <td v-else><button type="button" class="btn btn-default  active" disabled="disabled">intalled</button></td>
                        <td><a href="javascript:;" @click='removeItem(index)'>删除</a></td>
                    </tr> 
                </tbody>
        </table>
            <nav aria-label="Page navigation" class="navbar-right tabBar">
            <ul class="pagination">
                  <li :class="pageIndex==n?'active':''"
                         v-for="n in pageLen" 
                         :key="n"
                         @click="tabPage(n)">
                        <a style="margin-right:10px" href="javascript:;">{{n}}</a>
                    </li>
            </ul>
            </nav>
       </div>
      
       </div>
    
</template>
<script>
import Vue from "vue";
import addEdit from './addEdit';
export default{
      components: {
      addEdit
    },
    data(){
        return {
            myV:'',
            checked:false,
            domList:[],//请求全部数据
            spliceData:[],//分页数据
            pageLen:1,//页数中长度
            pageIndex:1,//页数下标
            show_tab_pane:true,//显示隐藏模板

        }
    },
    created(){
        this.getData();
    },
    methods:{
        getData(){
             this.$axios.get(this.$url+'/banner/entryuser').then((res)=>{
                    if(res.status==200){
                      if(res.data&&res.data.length>0){
                          this.domList=res.data;
                           this.pageLen=res.data.length/10;
                           this.spliceData=this.domList.slice(0,10)
                      }else{
                          alert('抱歉，数据控暂无数据')
                      }
                  }else{
                      alet('请求发生错误，请检查服务器')
                  }
            })
        },
         //切换页数
        tabPage(page){
           this.pageIndex=page;
           this.spliceData= this.domList.slice((page-1)*10,10*page);
        },
        //移除操作
        removeItem(index){
            this.spliceData.splice(index,1)
            Vue.set(this.spliceData)
        },
        //添加操作
        addItem(){
            this.show_tab_pane=false;
        },
        //获取子组件取消时传递过来的值
        fnshowedit(msg){
            this.show_tab_pane=msg;
        },
        newuser(msg){
            console.log(msg)
            this.spliceData.unshift(msg)
        }
    },
    watch:{
        myV(){
            this.checked = !this.checked
        }
    }
};
</script>

<style lang="scss" scoped>
table{
    margin-top:30px;
    text-align:center;
    th{
       text-align:center; 
    }
    tr:nth-child(odd){background:#f2f6f9;}
    tr:nth-child(even){background:#e4eaf1;}
    .userPic{
        width:30px;
        height:30px;
        border-radius:50%;
    }
}
.tabBar{
    margin-right:0px;
}

</style>


