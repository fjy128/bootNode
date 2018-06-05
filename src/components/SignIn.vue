<template>
    <!-- 登录模态框 -->
    <!-- Modal -->
    <div class="modal fade " id="logIn" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content modal-md">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title modal_title" id="myModalLabel">登录</h4>
                </div>
                <div class="modal-body modal_body">
                   <form acrion="" method="">
                       <p><i class="sign user"></i><input type="text" name="username" placeholder="用户名"/></p>
                       <p><i class="sign passWord"></i><input type="text" name="password" placeholder="密码"/></p>
                   </form>
                </div>
                <div class="modal-footer">
                    <b>忘记密码？</b>
                    <button type="button" class="btn  btn-primary" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-primary">登录</button>
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

