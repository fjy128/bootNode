<template>
  <div>
       <!-- ============中间部分开始============== -->
       <div class="container my_container" >
          <!-- Nav tabs -->
            <ul class="nav nav-tabs" role="tablist">
                <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">用户信息</a></li>
                <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">用户入驻状态</a></li>
                <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">业务三</a></li>
                <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">业务四</a></li>
            </ul>
            <div class="tab-content">
                <!-- tab 一 -->
                <div role="tabpanel" class="tab-pane active" id="home">
                    <p>用户信息</p>
                    <div class="dropdown">
                        日期：
                    <button id="dLabel" type="button" class="btn btn-default" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       一期
                        <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dLabel">
                       <li><a href="##">一期</a></li>
                       <li><a href="##">二期</a></li>
                       <li><a href="##">三期</a></li>
                    </ul>
                    </div>
                    <table class="table table-bordered">
                        <thead>
                            <tr role="row">
                                <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Name: activate to sort column ascending" style="width: 152px;">Name</th>
                                <th class="sorting_desc" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Position: activate to sort column ascending" aria-sort="descending" style="width: 238px;">Position</th>
                                <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Office: activate to sort column ascending" style="width: 110px;">Office</th>
                                <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Age: activate to sort column ascending" style="width: 49px;">Age</th>
                                <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Start date: activate to sort column ascending" style="width: 106px;">Start date</th>
                                <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Salary: activate to sort column ascending" style="width: 85px;">Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr role="row" class="odd">
                                <td class="">Donna Snider</td>
                                <td class="sorting_1">Customer Support</td>
                                <td class="">New York</td>
                                <td>27</td>
                                <td>2011/01/25</td>
                                <td>$112,000</td>
                            </tr>
                            <tr role="row" class="even">
                                <td class="">Fiona Green</td>
                                <td class="sorting_1">Chief Operating Officer (COO)</td>
                                <td class="">San Francisco</td>
                                <td>48</td>
                                <td>2010/03/11</td>
                                <td>$850,000</td>
                            </tr>
                            <tr role="row" class="odd">
                                <td class="">Yuri Berry</td>
                                <td class="sorting_1">Chief Marketing Officer (CMO)</td>
                                <td class="">New York</td>
                                <td>40</td>
                                <td>2009/06/25</td>
                                <td>$675,000</td>
                                </tr>
                            <tr role="row" class="even">
                                <td class="">Paul Byrd</td>
                                <td class="sorting_1">Chief Financial Officer (CFO)</td>
                                <td class="">New York</td>
                                <td>64</td>
                                <td>2010/06/09</td>
                                <td>$725,000</td>
                            </tr>
                            <tr role="row" class="odd">
                                <td class="">Angelica Ramos</td>
                                <td class="sorting_1">Chief Executive Officer (CEO)</td>
                                <td class="">London</td>
                                <td>47</td>
                                <td>2009/10/09</td>
                                <td>$1,200,000</td>
                            </tr>
                            <tr role="row" class="even">
                                <td class="">Garrett Winters</td>
                                <td class="sorting_1">Accountant</td>
                                <td class="">Tokyo</td>
                                <td>63</td>
                                <td>2011/07/25</td>
                                <td>$170,750</td>
                                </tr>
                            <tr role="row" class="odd">
                                <td class="">Airi Satou</td>
                                <td class="sorting_1">Accountant</td>
                                <td class="">Tokyo</td>
                                <td>33</td>
                                <td>2008/11/28</td>
                                <td>$162,700</td>
                            </tr>
                        </tbody>
                    </table>
                 <nav aria-label="Page navigation" class="navbar-right tabBar">
                    <ul class="pagination">
                        <li>
                        <a href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                        </li>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li>
                        <a href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                        </li>
                    </ul>
                </nav>
                </div>
                <!-- tab 二-->
                <div role="tabpanel" class="tab-pane" id="profile">
                     <p>用户入驻状态</p>
                     <a @click='addItem'>添加</a>
                     <table class="table table-hover">
                         <thead>
                             <tr>
                                 <th><input type="checkbox" v-model="myV"/>&nbsp;全部</th>
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
                              <tr v-for = "(item,index) in domList" >
                                 <td><input type="checkbox" :checked='checked'  />&nbsp;&nbsp;&nbsp;{{index}}</td>
                                 <td>{{item.name}}</td>
                                 <td>{{item.phone}}</td>
                                 <td>{{item.emil}}</td>
                                 <td>{{item.money}}</td>
                                   <td v-if="parseInt(item.pro)>85">
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
                                 <td v-if="item.state"><button type="button" class="btn btn-success">intall</button></td>
                                 <td v-else><button type="button" class="btn btn-default  active" disabled="disabled">intalled</button></td>
                                 <td><a href="##" @click='removeItem(index)'>删除</a></td>
                             </tr> 
                         </tbody>
                    </table>
                      <nav aria-label="Page navigation" class="navbar-right tabBar">
                        <ul class="pagination">
                            <li>
                            <a href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                            </li>
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li>
                            <a href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                            </li>
                        </ul>
                     </nav>
                </div>
                <!-- tab 三 -->
                <div role="tabpanel" class="tab-pane" id="messages">...</div>
                <div role="tabpanel" class="tab-pane" id="settings">...</div>
            </div>
              
       </div>
       <!-- ============中间部分结束============== -->

  </div>
</template>
<script>
import Vue from "vue";
export default{
    
    data(){
        return {
            myV:'',
            checked:false,
        domList:[
                {
                name:'sunmmer',
                phone:'15766759389',
                emil:'hellp@gam.com',
                money:'$7546',
                state:false,
                pro:'75'
            },
            {
                name:'jhonny',
                phone:'15768759389',
                emil:'boot@gam.com',
                money:'$8546',
                state:true,
                 pro:'85'
            },
             {
                name:'jean',
                phone:'15985459389',
                emil:'hellphoe@gam.com',
                money:'$8596',
                state:false,
                pro:'76'
            },
             {
                name:'justic',
                phone:'15256859389',
                emil:'1234fjy@gam.com',
                money:'$9546',
                state:true,
                pro:'95'
            },
             {
                name:'Ricky',
                phone:'15229059389',
                emil:'fjy127@gam.com',
                money:'$10546',
                state:true,
                pro:'98'
             },
              {
                name:'Marco',
                phone:'15222759389',
                emil:'hellp@gam.com',
                money:'$7546',
                state:true,
                pro:'75'
            },
              {
                name:'sunmmer',
                phone:'15766759389',
                emil:'hellp@gam.com',
                money:'$7546',
                state:true,
                pro:'75'
            },
            {
                name:'jhonny',
                phone:'15768759389',
                emil:'boot@gam.com',
                money:'$8546',
                state:true,
                pro:'85'
            },
             {
                name:'jean',
                phone:'15985459389',
                emil:'hellphoe@gam.com',
                money:'$8596',
                state:true,
                pro:'87'
            }
            ],
        addList:
            [
                {
                name:'sunmmer',
                phone:'15766759389',
                emil:'hellp@gam.com',
                money:'$7546',
                state:false,
                pro:'75'
                },
                {
                    name:'jhonny',
                    phone:'15768759389',
                    emil:'boot@gam.com',
                    money:'$8546',
                    state:true,
                    pro:'85'
                },
                {
                    name:'jean',
                    phone:'15985459389',
                    emil:'hellphoe@gam.com',
                    money:'$8596',
                    state:false,
                    pro:'76'
                },
                {
                    name:'justic',
                    phone:'15256859389',
                    emil:'1234fjy@gam.com',
                    money:'$9546',
                    state:true,
                    pro:'95'
                },
                {
                    name:'Ricky',
                    phone:'15229059389',
                    emil:'fjy127@gam.com',
                    money:'$10546',
                    state:true,
                    pro:'98'
                },
                {
                    name:'Marco',
                    phone:'15222759389',
                    emil:'hellp@gam.com',
                    money:'$7546',
                    state:true,
                    pro:'75'
                },
                {
                    name:'sunmmer',
                    phone:'15766759389',
                    emil:'hellp@gam.com',
                    money:'$7546',
                    state:true,
                    pro:'75'
                },
                {
                    name:'jhonny',
                    phone:'15768759389',
                    emil:'boot@gam.com',
                    money:'$8546',
                    state:true,
                    pro:'85'
                },
                {
                    name:'jean',
                    phone:'15985459389',
                    emil:'hellphoe@gam.com',
                    money:'$8596',
                    state:true,
                    pro:'87'
                }
            ]
        ,
        count:0
        }
    },
    methods:{
        removeItem(index){
            console.log(index)
            this.domList.splice(index,1)
            Vue.set(this.domList)
        },
        addItem(){
            if(this.count<this.addList.length){
                this.domList.push(this.addList[this.count])
                this.count++;
            }
        }
    },
    watch:{
        myV(){
            this.checked = !this.checked
        }
    }
};
</script>

<style scoped>
.my_container{
    background:#fff;
    margin-top:20px;
    padding-top:20px;
    padding-bottom:10px;
    margin-bottom:20px;
}
p{
    /* font-size:25px; */
 
    padding:15px 0;

}
table th{
       text-align:center; 
}
table{
    margin-top:30px;
    text-align:center;
}
table tr:nth-child(odd){background:#f2f6f9;}
table tr:nth-child(even){background:#e4eaf1;}
.tabBar{
    margin-right:0px;
}
</style>


