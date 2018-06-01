<template>
<!-- 注册 -->
<!-- Modal -->
    <div class="modal fade " id="register" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content modal-xs">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title modal_title" id="myModalLabel">注册</h4>
                </div>
                <div class="modal-body modal_body">
                   <form acrion="" method="">
                       <p><i class="sign user"></i><input type="text" name="username" placeholder="用户名"/></p>
                       <p><i class="sign passWord"></i><input type="text" name="password" placeholder="密码"/></p>
                       <p><i class="sign passWord_again"></i><input type="text" name="password" placeholder="确认密码"/></p>
                       <p><i class="sign email"></i><input type="text" name="password" placeholder="填写邮箱，接收激活邮件"/></p>
                       <p>
                           <i class="sign sex" style="margin-right:45px"></i>
                          <input type="radio" name="sex" value="男" checked/><i style="margin-right:10px;font-style:normal">男</i>
                          <input type="radio" name="sex" value="女"/><i style="margin-right:10px;font-style:normal">女</i>
                          <input type="radio" name="sex" value="保密"/>保密
                       </p>
                       <p><span class="sign userName"></span><input type="text" name="username" placeholder="真实姓名"/></p>
                       <p><input type="checkbox" />我已阅读并接受 《版权声明》 和 《隐私保护》</p>
                   </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn  btn-primary" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-primary">注册</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>

</style>
<script>
export default {
    
}
</script>

