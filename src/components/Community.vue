<template>
  <div>
       <!-- ============中间部分开始============== -->
       <div class="container my_container" >
          <!-- Nav tabs -->
            <ul class="nav nav-tabs" role="tablist">
                <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">用户信息</a></li>
                <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">用户入驻状态</a></li>
            </ul>
            <div class="tab-content">
                <!-- tab 一  用户信息 -->
               <user-info></user-info>
                 <!-- tab 二 入驻信息-->
               <entrystatus></entrystatus>
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
import userInfo from './comminity/userInfo';//用户信息表
import entrystatus from './comminity/user_entry_status';//用户信息表
export default{
       components: {
        userInfo,
        entrystatus
    },
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


