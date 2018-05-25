[![npm][npm]][npm-url]
[![node][node]][node-url]
[![deps][deps]][deps-url]
[![chat][chat]][chat-url]

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
