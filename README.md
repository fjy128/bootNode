

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
