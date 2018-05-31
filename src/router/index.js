import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/components/layout';//首页
import CenterNum from '@/components/Community';//社区
import Detail from '@/components/detail';//详情
import Produce from '@/components/produce';//产品
import Info from '@/components/info';
var infiniteScroll =  require('vue-infinite-scroll');
Vue.use(infiniteScroll);

Vue.use(Router)//注册

//实例化VUE-router
export default new Router({
  mode:'history',//使用HTML5的模式
  routes: [
    {
      path: '/',
      component:Layout
    },
    {
      path: '/Community',
      component:CenterNum
    }, 
    {
      path: '/produce',
      component:Produce
    }, 
    {
      path: '/info',
      component:Info
    }, 
    {
      path: '/detail/:id',
      component:Detail
    }
  ]
})
