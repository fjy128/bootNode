<template>
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
                    <tr v-for = "(item,index) in domList" :key="index" >
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


