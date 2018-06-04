<template>
    <div class="edit" v-show="showedit">
        <form class="form-horizontal">
            <div class="form-group" >
                <label for="exampleInputName2">Name/姓名</label>
                <input type="text" class="form-control" id="exampleInputName2" name="name" placeholder="用户名">
            </div>
            <div class="form-group">
                <label for="exampleInputEmail2">Email/邮箱</label>
                <input type="email" class="form-control" id="exampleInputEmail2" name="email" placeholder="邮箱">
            </div>
            <div class="form-group">
                <label for="exampleInputphone2">phone/联系方式</label>
                <input type="phone" class="form-control" id="exampleInputphone2" name="phone" placeholder="联系方式">
            </div>
            <div class="form-group">
                <label for="exampleInputmoney2">money/资金</label>
                <input type="type" class="form-control" id="exampleInputmoney2" name="money" placeholder="入驻资金">
            </div>
            <div class="form-group">
                <label for="exampleInputmoney2">是否入驻</label>
                    <select class="form-control">
                    <option value="true">是</option>
                    <option value="false">否</option>
                </select>          
            </div>   
         </form>
         <p>
            <button type="button" class="btn btn-primary " @click="cancel">取消</button>
            <button type="button" class="btn btn-default" @click="confirm">确定</button>
        </p>
    </div>
</template>
<style lang="scss" scoped>
// 添加用户
.edit{
    margin-left:15px;
    margin-top:30px;
    min-height:400px;
}
</style>
<script>
export default {
    props: ['showedit'],
    methods:{
        cancel(){//接收一个来自父亲的函数，并将改变的值作为第二个参数
            this.$emit('fnshowedit',this.showedit=true);
        },
        confirm(){
          let name = $("input[name='name']").val();//用户名
          let email = $("input[name='email']").val();//邮箱
          let phone = $("input[name='phone']").val();//联系方式
          let money = $("input[name='money']").val();//入驻资金
          let control=$('.form-control option:selected').val();
          if(name==''){
              alert('请输入用户名');
              return false;
          }
          if(email==""){
              alert('请输入邮箱');
              return false;
          }else{
               var regemail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
               var  isemail= regemail.test(email )
               if(!isemail){
                alert("邮箱格式不正确，请重新输入！");
                 $("input[name='email']").focus();
                 return false;
               }
          }
          if(phone==''){
              alert('请输入联系方式');
              return false;
          }else{
              var regphone=/^[1][3,4,5,7,8][0-9]{9}$/;
              var isphone = regphone.test(phone) ;
              if(!isphone){
                   alert("手机号码格式不正确，请重新输入！");
                  $("input[name='phone']").focus();
                  return false;
              }
          }
          if(money==''){
              alert('入驻资金不能为空');
              return false;
          }else{
              if( parseInt(money)<=0){
                  alert('入驻资金必须大于1');
                    return false;
              }
            
          }
          if(control=='false'){
              control=false
          }else if(control=='true'){
              control=true
          }
            var newUser={};
            newUser.name=name;
            newUser.emil =email;
            newUser.phone =phone;
            newUser.money =money;
            newUser.state=control;
            newUser.img='https://s3.amazonaws.com/uifaces/faces/twitter/okansurreel/128.jpg';
            newUser.pro=Math.floor((money/10));
             this.$emit('newuser',newUser);
             this.$emit('fnshowedit',this.showedit=true);
        }
    }
}
</script>
