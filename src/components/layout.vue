<template>
  <div >
    <!-- ============中间部分开始============== -->
     <!-- banner部分 -->    
        <banner></banner>
      <!-- 实／战／推／荐 -->
       <div style="background:#f8fafc;padding: 10px 0 0;margin-top:20px">
        <h3 class="types-title">				
            <span class="tit-icon icon-shizhan-l tit-icon-l"></span>
            <em>实</em>／<em>战</em>／<em>推</em>／<em>荐</em>
            <span class="tit-icon icon-shizhan-r tit-icon-r"></span>								
        </h3>
        <div class="container " style="margin-top:20px" >
             <recommend></recommend>
        </div>
       </div>
       

       <!-- 新／上／好／课 -->
        <h3 class="types-title">				
            <span class="tit-icon icon-new-l tit-icon-l"></span>
            <em>新</em>／<em>上</em>／<em>好</em>／<em>课</em>
            <span class="tit-icon icon-new-r tit-icon-r"></span>								
        </h3>
        <cursom></cursom>
         <!-- 精／彩／手／记／及／猿／问 -->
         <div style="background:#f8fafc;padding: 10px 0 0;">
            <h3 class="types-title">			
            <span class="tit-icon icon-art-l tit-icon-l">
                </span><em>精</em>／<em>彩</em>／<em>手</em>／<em>记</em>／<em>及</em>／<em>猿</em>／<em>问</em>
            <span class="tit-icon icon-art-r tit-icon-r"></span>		
            </h3>
            <div class="container">
                <apes-ask></apes-ask>
            </div>
         </div>
      
       
    <!-- ============中间部分结束============== -->

  </div>
</template>

<script>

import banner from './index/banner';//banner
import recommend from './index/SZ_recommen';//实战推荐
import cursom from './index/SH_cursom';//新上好课
import apesAsk   from './index/Apes_ask';//猿问手记
export default {

  name: 'App',
  components: {
        banner,
        recommend,
        cursom,
        apesAsk
  },
}
</script>

