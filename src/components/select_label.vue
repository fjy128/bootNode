
<template>
<div class="container" style="min-height:160px">
    <div class="row">
    
    <div class="col-md-1" :style="{lineHeight:'45px',fontWeight:'600',marginTop:'10px'}">方向：</div>
    <div :class="['col-md-1',direIndex==item.id?'act':'']" 
         @click="changedireTab(item.id,item.kind)"
         :style="{lineHeight:'45px',textAlign:'center',marginTop:'10px',cursor:'pointer'}" 
         v-for="(item,index) in direData" 
         :key="'dire'+index" >{{item.name}}</div>

    <div class="col-md-1" :style="{lineHeight:'45px',fontWeight:'600',marginTop:'10px'}">分类：</div>
    <div :class="['col-md-1',ClassIndex==item.id?'act':'','tabLabel']" 
         @click="changeClassTab(item.id,item.dies,item.kind)"
         :style="{lineHeight:'45px',textAlign:'center',marginTop:'10px',cursor:'pointer'}"  
         v-for="(item,index) in direIndex=='0'?classData:selectClassData" 
         :key="'class'+index" >{{item.name}}</div>

    </div>
</div>

</template>
<script >
import axios from 'axios';
export default {
  
    data(){
      return{
          direData:[],//方向
          classData:[],//分类
          selectClassData:[],//分类筛选
          direIndex:'0',
          ClassIndex:'0'
         
      }
    },
    mounted(){
        this.getlabel()
    },
    methods:{
      getlabel(){
        axios.get('http://5b076a5892b3b4001425a067.mockapi.io/api/banner/produce').then((res) => {
            if(res.status==200&&res.data&&res.data.length>0){
                this.direData=res.data[0].direData;
                this.classData=res.data[0].classData;
            }
        })
      },
      changedireTab(id,kind){
          this.selectClassData=[];
          this.direIndex=id;
          var subLabel={};
          subLabel.data=this.classData;
          subLabel.len=this.classData.length;
          for(var i=0;i<subLabel.len;i++){
              if( subLabel.data[i].kind==kind){
                  this.selectClassData.push(subLabel.data[i])
              }
          }
      },
      changeClassTab(id,dies,kind){
         
          this.ClassIndex=id;
          var die=null;
          id=='0'? die='':die=dies;
          this.$emit('child-msg',die);
      }
     
    }

}
</script>
<style scoped>
 .act{background:#000;color:#fff;border-radius:3px};
  .tabLabel{
      color:#f00
  }
</style>

