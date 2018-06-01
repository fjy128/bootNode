

<h2>20180524--修复问题</h2>
<h3>打开webpack.base.conf.js  路径：build/webpack.base.conf.js,添加入下代码</h3>
<p>
const webpack = require('webpack');
</p>
<p>
 // 增加一个plugins
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    })
  ],
</p>
<h3>前端模拟数据网址：</h3>
<p><a href="https://www.mockapi.io/projects">https://www.mockapi.io/projects</a></p>
<h2>项目中发现问题并记录：</h2>
<h3>全局引入问题</h3>
<p>Vue.prototype.$axios = axios;</p>
<p>Vue.prototype.$url='http://5b076a5892b3b4001425a067.mockapi.io/api'</p>
<p>在main.js定义全局变量,就可以在整个项目中通过this.$axios/this.$url使用</p>
<h3>项目中使用'<keep-alive> '会出现组件缓存的问题，导致数据不能实时更新</h3>
