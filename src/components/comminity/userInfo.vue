<template>
    <div role="tabpanel" class="tab-pane active" id="home">

        <div class="dropdown">
           入驻月份：
        <button id="dLabel" 
                type="button" 
                class="btn btn-default" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false">
            {{month?month:'January'}}
            <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" aria-labelledby="dLabel">
            <li v-for="item in Months" :key="item.id" @click="changeMonth(item.cycle)"><a href="javascript:;">{{item.cycle}}</a></li>
           
        </ul>
        </div>
        <table class="table table-bordered">
            <thead>
                <tr role="row">
                    <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1"  >order</th>
                    <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1"  >Name</th>
                    <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1"  >Position</th>
                    <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1"  >Office</th>
                    <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1"  >Age</th>
                    <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1"  >Start date</th>
                    <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1"  >Salary</th>
                    <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1"  >phone</th>
                    <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1"  >email</th>
                    <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1"  >month</th>
                </tr>
            </thead>
            <tbody>
                <tr role="row" class="odd" v-for="item in spliceData" :key="item.id">
                    <td >{{item.id}}</td>
                    <td >{{item.name}}</td>
                    <td >{{item.position}}</td>
                    <td >{{item.office}}</td>
                    <td>{{item.age}}</td>
                    <td>{{item.startDate}}</td>
                    <td>${{item.salary}}</td>
                    <td>{{item.phone}}</td>
                    <td>${{item.email}}</td>
                    <td>{{item.cycle}}</td>
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
</template>
<style lang="scss" scoped>
.dropdown{
    margin-top:20px;
    margin-bottom:20px
}
.sorting{
    text-align: center;
}
.odd{
    td{
        text-align: center;
        font-size:12px
    }
}
</style>
<script>
export default {
    data(){
        return{
            month:'',
            Months:[],
            userInfo:[],
            spliceData:[],
            pageLen:1,
            pageIndex:1
        }
    },
    created(){
        this.getUserInfo();
        this.getMonths();
    },
    methods:{
        //获取月份
        getMonths(){
            this.$axios.get(this.$url+'/banner/month').then((res)=>{
                    if(res.status==200){
                      if(res.data&&res.data.length>0){
                          this.Months=res.data;
                      }else{
                          alert('抱歉，数据控暂无数据')
                      }
                  }else{
                      alet('请求发生错误，请检查服务器')
                  }
            })
        },
        //获取用户信息
        getUserInfo(){
              this.$axios.get(this.$url+'/banner/userInfo').then((res)=>{
                  if(res.status==200){
                      if(res.data&&res.data.length>0){
                          this.userInfo=res.data;
                           this.pageLen=res.data.length/10;
                           this.spliceData=this.userInfo.slice(0,10)
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
           this.spliceData= this.userInfo.slice((page-1)*10,10*page);
        },
        //点击切换月份
        changeMonth(month){
            this.month=month;
            var alluserInfo = this.userInfo;
            var len = this.userInfo.length;
           this.spliceData=[];
           for(var i=0;i<len;i++){
               if(alluserInfo[i].cycle==month)
               {
                   this.spliceData.push(alluserInfo[i])
               }
           }
        },
        // putdata(){
        //            this.$axios({  
        //                 method: 'put',
        //                 url: '/banner/entryuserput',
        //                 data: {
        //                     id: "2",
        //                     name: "Mrs. Dillon Kessler",
        //                     phone: "502.728.6568 x418",
        //                     money: "660.00",
        //                     state: false,
        //                     pro: 41
        //                 }
        //            }).then((res)=>{
        //       console.log(res)
        //     })
        // }
    }
    
}
</script>


