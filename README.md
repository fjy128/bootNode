

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
<h1>干货</h1>
<p><a href="https://github.com/ElemeFE/element">https://github.com/ElemeFE/element</a> element 饿了么出品的Vue2的web UI工具套件</p>
<p><a href="https://github.com/airyland/vux">https://github.com/airyland/vux</a> Vux 基于Vue和WeUI的组件库</p>
<p><a href="https://github.com/ElemeFE/mint-ui">https://github.com/ElemeFE/mint-ui</a> mint-ui Vue 2的移动UI元素</p>
<p><a href="https://github.com/iview/iview">https://github.com/iview/iview</a> iview 基于 Vuejs 的开源 UI 组件库</p>
<p><a href="https://github.com/JosephusPaye/Keen-UI">https://github.com/JosephusPaye/Keen-UI</a> Keen-UI 轻量级的基本UI组件合集</p>
<p><a href="https://github.com/marcosmoura/vue-material">https://github.com/marcosmoura/vue-material</a> vue-material 通过Vue Material和Vue 2建立精美的app应用</p>
<p><a href="https://github.com/museui/muse-ui">https://github.com/museui/muse-ui</a> muse-ui 三端样式一致的响应式 UI 库</p>
<p><a href="https://github.com/vuetifyjs/vuetify">https://github.com/vuetifyjs/vuetify</a> vuetify 为移动而生的Vue JS 2组件框架</p>
<p><a href="https://github.com/wangdahoo/vonic">https://github.com/wangdahoo/vonic</a> vonic 快速构建移动端单页应用</p>
<p><a href="https://github.com/egoist/eme">https://github.com/egoist/eme</a> eme 优雅的Markdown编辑器</p>
<p><a href="https://github.com/monterail/vue-multiselect">https://github.com/monterail/vue-multiselect</a>vue-multiselect Vue.js选择框解决方案</p>
<p><a href="https://github.com/ratiw/vue-table">https://github.com/ratiw/vue-table</a> vue-table-简化数据表格</p>
<p><a href="https://github.com/OYsun/VueCircleMenu">https://github.com/OYsun/VueCircleMenu</a>VueCircleMenu-漂亮的vue圆环菜单</p>
<p><a href="https://github.com/Coffcer/vue-chat">https://github.com/Coffcer/vue-chat</a> vue-chat-vuejs和vuex及webpack的聊天示例</p>
<p><a href="https://github.com/luojilab/radon-ui">https://github.com/luojilab/radon-ui</a> radon-ui-快速开发产品的Vue组件库</p>
<p><a href="https://github.com/MopTym/vue-waterfall">https://github.com/MopTym/vue-waterfall</a> vue-waterfall-Vue.js的瀑布布局组件</p>
<p><a href="https://github.com/myronliu347/vue-carbon">https://github.com/myronliu347/vue-carbon</a> vue-carbon-基于 vue 开发MD风格的移动端</p>
<p><a href="https://github.com/FE-Driver/vue-beauty">https://github.com/FE-Driver/vue-beauty</a> vue-beauty-由vue和ant design创建的优美UI组件</p>
<p><a href="https://github.com/chenz24/vue-blu">https://github.com/chenz24/vue-blu</a>vue-blu-帮助你轻松创建web应用</p>
<p><a href="https://github.com/taylorchen709/vueAdmin">https://github.com/taylorchen709/vueAdmin</a> vueAdmin-基于vuejs2和element的简单的管理员模板</p>
<p><a href="https://github.com/vuejs/vue-syntax-highlight">https://github.com/vuejs/vue-syntax-highlight</a> vue-syntax-highlight-Sublime Text语法高亮</p>
<p><a href="https://github.com/ElemeFE/vue-infinite-scroll">https://github.com/ElemeFE/vue-infinite-scroll</a> vue-infinite-scroll-VueJS的无限滚动指令</p>
<p><a href="https://github.com/David-Desmaisons/Vue.Draggable">https://github.com/David-Desmaisons/Vue.Draggable</a> Vue.Draggable-实现拖放和视图模型数组同步</p>
<p><a href="https://github.com/surmon-china/vue-awesome-swiper">https://github.com/jinzhe/vue-calendar</a> vue-awesome-swiper-vue.js触摸滑动组件</p>
<p><a href="https://github.com/jinzhe/vue-calendar">https://github.com/jinzhe/vue-calendar</a> vue-calendar-日期选择插件</p>
<p><a href="https://github.com/pi0/bootstrap-vue">https://github.com/pi0/bootstrap-vue</a> bootstrap-vue-应用于Vuejs2的Twitter的Bootstrap 4组件</p>
<p><a href="https://github.com/ElemeFE/vue-swipe">https://github.com/ElemeFE/vue-swipe</a> vue-swipe-VueJS触摸滑块</p>
<p><a href="https://github.com/ElemeFE/vue-amap">https://github.com/ElemeFE/vue-amap</a> vue-amap-基于Vue 2和高德地图的地图组件</p>
<p><a href="https://github.com/apertureless/vue-chartjs">https://github.com/apertureless/vue-chartjs</a> vue-chartjs-vue中的Chartjs的封装</p>
<p><a href="https://github.com/hilongjw/vue-datepicker">https://github.com/hilongjw/vue-datepicker</a> vue-datepicker-日历和日期选择组件</p>
<p><a href="https://github.com/jrainlau/markcook">https://github.com/jrainlau/markcook</a> markcook-好看的markdown编辑器</p>
<p><a href="https://github.com/GuillaumeLeclerc/vue-google-maps">https://github.com/GuillaumeLeclerc/vue-google-maps</a> vue-google-maps-带有双向数据绑定Google地图组件</p>
<p><a href="https://github.com/hilongjw/vue-progressbar">https://github.com/hilongjw/vue-progressbar</a> vue-progressbar-vue轻量级进度条</p>
<p><a href="https://github.com/alessiomaffeis/vue-picture-input">https://github.com/alessiomaffeis/vue-picture-input</a> vue-picture-input-移动友好的图片文件输入组件</p>
<p><a href="https://github.com/PeachScript/vue-infinite-loading">https://github.com/PeachScript/vue-infinite-loading</a> vue-infinite-loading-VueJS的无限滚动插件</p>
<p><a href="https://github.com/lian-yue/vue-upload-component">https://github.com/lian-yue/vue-upload-component</a> vue-upload-component-Vuejs文件上传组件</p>
<p><a href="https://github.com/Haixing-Hu/vue-datetime-picker">https://github.com/Haixing-Hu/vue-datetime-picker</a> vue-datetime-picker-日期时间选择控件</p>
<p><a href="https://github.com/wangdahoo/vue-scroller">https://github.com/wangdahoo/vue-scroller</a> vue-scroller-Vonic UI的功能性组件</p>
<p><a href="https://github.com/icai/vue2-calendar">https://github.com/icai/vue2-calendar</a> vue2-calendar-支持lunar和日期事件的日期选择器</p>
<p><a href="https://github.com/surmon-china/vue-video-player">https://github.com/surmon-china/vue-video-player</a> vue-video-player-VueJS视频及直播播放器</p>
<p><a href="https://github.com/Wanderxx/vue-fullcalendar">https://github.com/Wanderxx/vue-fullcalendar</a> vue-fullcalendar-基于vue.js的全日历组件</p>
<p><a href="https://github.com/ccforward/rubik">https://github.com/ccforward/rubik</a> rubik-基于Vuejs2的开源 UI 组件库</p>
<p><a href="https://github.com/OYsun/VueStar">https://github.com/OYsun/VueStar</a> VueStar-带星星动画的vue点赞按钮</p>
<p><a href="https://github.com/egoist/vue-mugen-scroll">https://github.com/egoist/vue-mugen-scroll</a> vue-mugen-scroll-无限滚动组件</p>
<p><a href="https://github.com/mint-ui/mint-loadmore">https://github.com/mint-ui/mint-loadmore</a> mint-loadmore-VueJS的双向下拉刷新组件</p>
<p><a href="https://github.com/matfish2/vue-tables-2">https://github.com/matfish2/vue-tables-2</a> vue-tables-2-显示数据的bootstrap样式网格</p>
<p><a href="https://github.com/Akryum/vue-virtual-scroller">https://github.com/Akryum/vue-virtual-scroller</a> vue-virtual-scroller-带任意数目数据的顺畅的滚动</p>
<p><a href="https://github.com/SimonZhangITer/DataVisualization">https://github.com/SimonZhangITer/DataVisualization</a> DataVisualization-数据可视化</p>
<p><a href="https://github.com/surmon-china/vue-quill-editor">https://github.com/surmon-china/vue-quill-editor</a> vue-quill-editor-基于Quill适用于Vue2的富文本编辑器</p>
<p><a href="https://github.com/hifarer/Vueditor">https://github.com/hifarer/Vueditor</a> Vueditor-所见即所得的编辑器</p>
<p><a href="https://github.com/PeakTai/vue-html5-editor">https://github.com/PeakTai/vue-html5-editor</a> vue-html5-editor-html5所见即所得编辑器</p>
<p><a href="https://github.com/ElemeFE/vue-msgbox">https://github.com/ElemeFE/vue-msgbox</a> vue-msgbox-vuejs的消息框</p>
<p><a href="https://github.com/warpcgd/vue-slider">https://github.com/warpcgd/vue-slider</a> vue-slider-vue 滑动组件</p>
<p><a href="https://github.com/Vanthink-UED/vue-core-image-upload">https://github.com/Vanthink-UED/vue-core-image-upload</a> vue-core-image-upload-轻量级的vue上传插件</p>
<p><a href="https://github.com/hilongjw/vue-slide">https://github.com/hilongjw/vue-slide</a> vue-slide-vue轻量级滑动组件</p>
<p><a href="https://github.com/JALBAA/vue-lazyload-img">https://github.com/JALBAA/vue-lazyload-img</a> vue-lazyload-img-移动优化的vue图片懒加载插件</p>
<p><a href="https://github.com/Alex-fun/vue-drag-and-drop-list">https://github.com/Alex-fun/vue-drag-and-drop-list </a> vue-drag-and-drop-list-创建排序列表的Vue指令</p>
<p><a href="https://github.com/MatteoGabriele/vue-progressive-image">https://github.com/MatteoGabriele/vue-progressive-image</a> vue-progressive-image-Vue的渐进图像加载插件</p>
<p><a href="https://github.com/vuwe/vuwe">https://github.com/vuwe/vuwe</a> vuwe-基于微信WeUI所开发的专用于Vue2的组件库</p>
<p><a href="https://github.com/rowanwins/vue-dropzone">https://github.com/rowanwins/vue-dropzone</a> vue-dropzone-用于文件上传的Vue组件</p>
<p><a href="https://github.com/hchstera/vue-charts">https://github.com/hchstera/vue-charts</a> vue-charts-轻松渲染一个图表</p>
<p><a href="https://github.com/weilao/vue-swiper  ">https://github.com/weilao/vue-swiper  </a>vue-swiper-易于使用的滑块组件</p>
<p><a href="https://github.com/littlewin-wang/vue-images">https://github.com/littlewin-wang/vue-images</a>vue-images-显示一组图片的lightbox组件</p>
<p><a href="https://github.com/Wlada/vue-carousel-3d">https://github.com/Wlada/vue-carousel-3d</a> vue-carousel-3d-VueJS的3D轮播组件</p>
<p><a href="https://github.com/QingWei-Li/vue-region-picker">https://github.com/QingWei-Li/vue-region-picker</a> vue-region-picker-选择中国的省份市和地区</p>
<p><a href="https://github.com/cngu/vue-typer">https://github.com/cngu/vue-typer</a> vue-typer-模拟用户输入选择和删除文本的Vue组件</p>
<p><a href="https://github.com/NewDadaFE/vue-impression">https://github.com/NewDadaFE/vue-impression</a> vue-impression-移动Vuejs2 UI元素</p>
<p><a href="https://github.com/galenyuan/vue-datatable">https://github.com/galenyuan/vue-datatable</a>vue-datatable-使用Vuejs创建的DataTableView</p>
<p><a href="https://github.com/santiblanko/vue-instant">https://github.com/santiblanko/vue-instant</a>vue-instant-轻松创建自动提示的自定义搜索控件</p>
<p><a href="https://github.com/hilongjw/vue-dragging">https://github.com/hilongjw/vue-dragging</a>" vue-dragging-使元素可以拖拽</p>
<p><a href="https://github.com/NightCatSama/vue-slider-component">https://github.com/NightCatSama/vue-slider-component</a>" vue-slider-component-在vue1和vue2中使用滑块</p>
<p><a href="https://github.com/BosNaufal/vue2-loading-bar">https://github.com/BosNaufal/vue2-loading-bar </a> vue2-loading-bar-最简单的仿Youtube加载条视图</p>
<p><a href="https://github.com/weifeiyue/vue-datepicker">https://github.com/weifeiyue/vue-datepicker</a> vue-datepicker-漂亮的Vue日期选择器组件</p>
<p><a href="https://github.com/hilongjw/vue-video">https://github.com/hilongjw/vue-video</a> vue-video-Vue.js的HTML5视频播放器</p>
<p><a href="https://github.com/ElemeFE/vue-toast-mobile">https://github.com/ElemeFE/vue-toast-mobile       </a> vue-toast-mobile-VueJS的toast插件</p>
<p><a href="https://github.com/dai-siki/vue-image-crop-upload ">https://github.com/dai-siki/vue-image-crop-upload </a> vue-image-crop-upload-vue图片剪裁上传组件</p>
<p><a href="https://github.com/Akryum/vue-tooltip">https://github.com/Akryum/vue-tooltip</a>" vue-tooltip-带绑定信息提示的提示工具</p>
<p><a href="https://github.com/weizhenye/vue-highcharts">https://github.com/weizhenye/vue-highcharts</a>" vue-highcharts-HighCharts组件</p>
<p><a href="https://github.com/surmon-china/vue-touch-ripple">https://github.com/surmon-china/vue-touch-ripple</a>" vue-touch-ripple-vuejs的触摸ripple组件</p>
<p><a href="https://github.com/Kocisov/coffeebreak">https://github.com/Kocisov/coffeebreak</a>" coffeebreak-实时编辑CSS组件工具</p>
<p><a href="https://github.com/coderdiaz/vue-datasource">https://github.com/coderdiaz/vue-datasource</a>" vue-datasource-创建VueJS动态表格</p>
<p><a href="https://github.com/phoenixwong/vue2-timepicker">https://github.com/phoenixwong/vue2-timepicker</a>" vue2-timepicker-下拉时间选择器</p>
<p><a href="https://github.com/Bubblings/vue-date-picker">https://github.com/Bubblings/vue-date-picker</a>" vue-date-picker-VueJS日期选择器组件</p>
<p><a href="https://github.com/BosNaufal/vue-scrollbar">https://github.com/BosNaufal/vue-scrollbar</a>" vue-scrollbar-最简单的滚动区域组件</p>
<p><a href="https://github.com/CroudSupport/vue-quill">https://github.com/CroudSupport/vue-quill</a>" vue-quill-vue组件构建quill编辑器</p>
<p><a href="https://github.com/phanan/vue-google-signin-button">https://github.com/phanan/vue-google-signin-button</a>" vue-google-signin-button-导入谷歌登录按钮</p>
<p><a hrefhttps://github.com/MMF-FE/vue-svgiconhttps://github.com/MMF-FE/vue-svgicon</a>" vue-svgicon-创建svg图标组件的工具</p>
<p><a href="https://github.com/bkzl/vue-float-label">https://github.com/bkzl/vue-float-label</a>" vue-float-label-VueJS浮动标签模式</p>
<p><a href="https://github.com/Dafrok/vue-baidu-map">https://github.com/Dafrok/vue-baidu-map</a>" vue-baidu-map-基于 Vue 2的百度地图组件库</p>
<p><a href="https://github.com/nicolasbeauvais/vue-social-sharing">https://github.com/nicolasbeauvais/vue-social-sharing</a>" vue-social-sharing-社交分享组件</p>
<p><a href="https://github.com/davidroyer/vue2-editor">https://github.com/davidroyer/vue2-editor</a>" vue2-editor-HTML编辑器</p>
<p><a href="https://github.com/Ginhing/vue-tagsinput">https://github.com/Ginhing/vue-tagsinput</a>" vue-tagsinput-基于VueJS的标签组件</p>
<p><a href="https://github.com/shhdgit/vue-easy-slider">https://github.com/shhdgit/vue-easy-slider</a>" vue-easy-slider-Vue 2.x的滑块组件</p>
<p><a href="https://github.com/vue-bulma/datepicker">https://github.com/vue-bulma/datepicker</a>" datepicker-基于flatpickr的时间选择组件</p>
<p><a href="https://github.com/miaolz123/vue-chart">https://github.com/miaolz123/vue-chart</a>" vue-chart-强大的高速的vue图表解析</p>
<p><a href="https://github.com/yunyi1895/vue-music-master">https://github.com/yunyi1895/vue-music-master</a>" vue-music-master-vue手机端网页音乐播放器</p>
<p><a href="https://github.com/vue-bulma/handsontable">https://github.com/vue-bulma/handsontable</a> handsontable-网页表格组件</p>
<p><a href="https://github.com/F-loat/vue-simplemde  ">https://github.com/F-loat/vue-simplemde  </a>vue-simplemde-VueJS的Markdown编辑器组件</p>
<p><a href="https://github.com/fangyongbao/cubeex    ">https://github.com/fangyongbao/cubeex    </a>cubeex-包含一套完整的移动UI</p>
<p><a href="https://github.com/bbonnin/vue-morris    ">https://github.com/bbonnin/vue-morris    </a>vue-morris-Vuejs组件封装Morrisjs库</p>
<p><a href="https://github.com/tianyong90/we-vue     ">https://github.com/tianyong90/we-vue     </a>we-vue-Vue2及weui1开发的组件</p>
<p><a href="https://github.com/vue-bulma/chartjs     ">https://github.com/vue-bulma/chartjs     </a>chartjs-Vue Bulma的chartjs组件</p>
<p><a href="https://github.com/myronliu347/vue-popup-mixin  ">https://github.com/myronliu347/vue-popup-mixin  </a>vue-popup-mixin-用于管理弹出框的遮盖层</p>
<p><a href="https://github.com/CroudSupport/vue-fullcalendar">https://github.com/CroudSupport/vue-fullcalendar</a> vue-fullcalendar-vue FullCalendar封装</p>
<p><a href="https://github.com/loujiayu/vue-material-design ">https://github.com/loujiayu/vue-material-design </a> vue-material-design-Vue MD风格组件</p>
<p><a href="https://github.com/legeneek/vue-image-clip      ">https://github.com/legeneek/vue-image-clip      </a> vue-image-clip-基于vue的图像剪辑组件</p>
<p><a href="https://github.com/jbaysolutions/vue-bootstrap-table">https://github.com/jbaysolutions/vue-bootstrap-table</a>  vue-bootstrap-table-可排序可检索的表格</p>
<p><a href="https://github.com/wyzant-dev/vue-radial-progress">https://github.com/wyzant-dev/vue-radial-progress</a> vue-radial-progress-Vue.js放射性进度条组件</p>
<p><a href="https://github.com/bajian/vue-pull-to-refresh">https://github.com/bajian/vue-pull-to-refresh</a>vue-pull-to-refresh-Vue2的上拉下拉</p>
<p><a href="https://github.com/staskjs/vue-slick     ">https://github.com/staskjs/vue-slick     </a>  vue-slick-实现流畅轮播框的vue组件</p>
<p><a href="https://github.com/matfish2/vue-form-2   ">https://github.com/matfish2/vue-form-2   </a>  vue-form-2-全面的HTML表单管理的解决方案</p>
<p><a href="https://github.com/vue-comps/vue-side-nav">https://github.com/vue-comps/vue-side-nav</a>  vue-side-nav-响应式的侧边导航</p>
<p><a href="https://github.com/mint-ui/mint-indicator">https://github.com/mint-ui/mint-indicator</a>  mint-indicator-VueJS移动加载指示器插件</p>
<p><a href="https://github.com/suguangwen/vue-scroll ">https://github.com/suguangwen/vue-scroll </a>  vue-scroll-vue滚动</p>
<p><a href="https://github.com/BosNaufal/vue-ripple  ">https://github.com/BosNaufal/vue-ripple  </a>  vue-ripple-制作谷歌MD风格涟漪效果的Vue组件</p>
<p><a href="https://github.com/icebob/vue-touch-keyboard">https://github.com/icebob/vue-touch-keyboard</a> vue-touch-keyboard-VueJS虚拟键盘组件</p>
<p><a href="https://github.com/ankane/vue-chartkick   ">https://github.com/ankane/vue-chartkick   </a>vue-chartkick-VueJS一行代码实现优美图表</p>
<p><a href="https://github.com/lisiyizu/vue-ztree     ">https://github.com/lisiyizu/vue-ztree     </a>vue-ztree-用 vue 写的树层级组件</p>
<p><a href="https://github.com/shiye515/vue-m-carousel">https://github.com/shiye515/vue-m-carousel</a> vue-m-carousel-vue 移动端轮播组件</p>
<p><a href="https://github.com/dai-siki/vue-datepicker-simple">https://github.com/dai-siki/vue-datepicker-simple</a> vue-datepicker-simple-基于vue的日期选择器</p>
<p><a href="https://github.com/alexqdjay/vue-tabs    ">https://github.com/alexqdjay/vue-tabs    </a>vue-tabs-多tab页轻型框架</p>
<p><a href="https://github.com/aweiu/vue-verify-pop  ">https://github.com/aweiu/vue-verify-pop  </a>vue-verify-pop-带气泡提示的vue校验插件</p>
<p><a href="https://github.com/vue-comps/vue-parallax">https://github.com/vue-comps/vue-parallax</a> vue-parallax-整洁的视觉效果</p>
<p><a href="https://github.com/JackGit/vue-img-loader">https://github.com/JackGit/vue-img-loader</a> vue-img-loader-图片加载UI组件</p>
<p><a href="https://github.com/eduardostuart/vue-typewriter">https://github.com/eduardostuart/vue-typewriter</a> vue-typewriter-vue组件类型</p>
<p><a href="https://github.com/Teddy-Zhu/vue-smoothscroll  ">https://github.com/Teddy-Zhu/vue-smoothscroll  </a>vue-smoothscroll-smoothscroll的VueJS版本</p>
<p><a href="https://github.com/xinxingyu/vue-city     ">https://github.com/xinxingyu/vue-city     </a> vue-city-城市选择器</p>
<p><a href="https://github.com/weibangtuo/vue-tree    ">https://github.com/weibangtuo/vue-tree    </a> vue-tree-vue树视图组</p>
<p><a href="https://github.com/Treri/vue-ios-alertview">https://github.com/Treri/vue-ios-alertview</a>  vue-ios-alertview-iOS7+ 风格的alertview服务</p>
<p><a href="https://github.com/ibufu/dd-vue-component ">https://github.com/ibufu/dd-vue-component </a>  dd-vue-component-订单来了的公共组件库</p>
<p><a href="https://github.com/yeseason/paco-ui-vue   ">https://github.com/yeseason/paco-ui-vue   </a>  paco-ui-vue-PACOUI的vue组件</p>
<p><a href="https://github.com/doodlewind/vue-cmap    ">https://github.com/doodlewind/vue-cmap    </a> vue-cmap-Vue China map可视化组件</p>
<p><a href="https://github.com/steven5538/vue-button  ">https://github.com/steven5538/vue-button  </a> vue-button-Vue按钮组件</p>









开发框架

https://github.com/vuejs/vue" vue.js-流行的轻量高效的前端组件化方案

https://github.com/fundon/vue-admin" vue-admin-Vue管理面板框架

https://github.com/SimulatedGREG/electron-vue" electron-vue-Electron及VueJS快速启动样板

https://github.com/petervmeijgaard/vue-2.0-boilerplate" vue-2.0-boilerplate-Vue2单页应用样板​

https://github.com/hanan198501/vue-spa-template" vue-spa-template-前后端分离后的单页应用开发

https://github.com/nolimits4web/Framework7-Vue" Framework7-Vue-VueJS与Framework7结合

https://github.com/wangxg2016/vue-bulma" vue-bulma-轻量级高性能MVVM Admin UI框架

https://github.com/rodzzlessa24/vue-webgulp" vue-webgulp-仿VueJS Vue loader示例

https://github.com/Metnew/vue-element-starter" vue-element-starter-vue启动页

常用vue库

https://github.com/vuejs/vuex" vuex-专为 Vue.js 应用程序开发的状态管理模式

https://github.com/monterail/vuelidate" vuelidate-简单轻量级的基于模块的Vue.js验证

https://github.com/zerqu/qingcheng" qingcheng-qingcheng主题

https://github.com/ElemeFE/vue-desktop" vue-desktop-创建管理面板网站的UI库

https://github.com/declandewet/vue-meta" vue-meta-管理app的meta信息

https://github.com/imcvampire/vue-axios" vue-axios-将axios整合到VueJS的封装

https://github.com/cenkai88/vue-svg-icon" vue-svg-icon-vue2的可变彩色svg图标方案

https://github.com/eddyerburgh/avoriaz" avoriaz-VueJS测试实用工具库

https://github.com/lmk123/vue-framework7" vue-framework7-结合VueJS使用的Framework7组件

https://github.com/Coffcer/vue-bootstrap-modal" vue-bootstrap-modal-vue的Bootstrap样式组件

https://github.com/QingWei-Li/vuep" vuep-用实时编辑和预览来渲染Vue组件

https://github.com/Sopamo/vue-online" vue-online-reactive的在线和离线组件

https://github.com/yeyuqiudeng/vue-lazy-render" vue-lazy-render-用于Vue组件的延迟渲染

https://github.com/apertureless/vue-password-strength-meter" vue-password-strength-meter-交互式密码强度计

https://github.com/lynzz/element-admin" element-admin-支持 vuecli 的 Element UI 的后台模板

https://github.com/SimulatedGREG/vue-electron" vue-electron-将选择的API封装到Vue对象中的插件

https://github.com/vue-bulma/cleave" cleave-基于cleave.js的Cleave组件

https://github.com/cklmercer/vue-events" vue-events-简化事件的VueJS插件

https://github.com/iFgR/vue-shortkey" vue-shortkey-应用于Vue.js的Vue-ShortKey 插件

https://github.com/kartsims/vue-cordova" vue-cordova-Cordova的VueJS插件

https://github.com/weinot/vue-router-transition" vue-router-transition-页面过渡插件

https://github.com/mlyknown/vue-gesture" vue-gesture-VueJS的手势事件插件

https://github.com/FranckFreiburger/http-vue-loader" http-vue-loader-从html及js环境加载vue文件

https://github.com/superman66/vue-qart" vue-qart-用于qartjs的Vue2指令

https://github.com/gocanto/vuemit" vuemit-处理VueJS事件

https://github.com/icebob/vue-websocket" vue-websocket-VueJS的Websocket插件

https://github.com/pinguinjkeke/vue-local-storage" vue-local-storage-具有类型支持的Vuejs本地储存插件

https://github.com/gocanto/lazy-vue" lazy-vue-懒加载图片

https://github.com/yangmingshan/vue-bus" vue-bus-VueJS的事件总线

https://github.com/ropbla9/vue-reactive-storage" vue-reactive-storage-vue插件的Reactive层

https://github.com/se-panfilov/vue-notifications" vue-notifications-非阻塞通知库

https://github.com/Coffcer/vue-lazy-component" vue-lazy-component-懒加载组件或者元素的Vue指令

https://github.com/AStaroverov/v-media-query" v-media-query-vue中添加用于配合媒体查询的方法

https://github.com/Akryum/vue-observe-visibility" vue-observe-visibility-当元素在页面上可见或隐藏时检测

https://github.com/HerringtonDarkholme/vue-ts-loader" vue-ts-loader-在Vue装载机检查脚本

https://github.com/matfish2/vue-pagination-2" vue-pagination-2-简单通用的分页组件

https://github.com/dkfbasel/vuex-i18n" vuex-i18n-定位插件

https://github.com/David-Desmaisons/Vue.resize" Vue.resize-检测HTML调整大小事件的vue指令

https://github.com/xanf/vuex-shared-mutations" vuex-shared-mutations-分享某种Vuex mutations

https://github.com/BosNaufal/vue-file-base64" vue-file-base64-将文件转换为Base64的vue组件

https://github.com/vue-bulma/modal" modal-Vue Bulma的modal组件

https://github.com/irwansyahwii/Famous-Vue" Famous-Vue-Famous库的vue组件

https://github.com/LeoHuiyi/leo-vue-validator" leo-vue-validator-异步的表单验证组件

https://github.com/MetinSeylan/Vue-Easy-Validator" Vue-Easy-Validator-简单的表单验证

https://github.com/imcvampire/vue-truncate-filter" vue-truncate-filter-截断字符串的VueJS过滤器

https://github.com/vue-comps/vue-zoombox" vue-zoombox-一个高级zoombox

https://github.com/syropian/vue-input-autosize" vue-input-autosize-基于内容自动调整文本输入的大小

https://github.com/yodfz/vue-lazyloadImg" vue-lazyloadImg-图片懒加载插件

服务端

https://github.com/nuxt/nuxt.js" nuxt.js-用于服务器渲染Vue app的最小化框架

https://github.com/danmademe/express-vue" express-vue-简单的使用服务器端渲染vue.js

https://github.com/ccforward/vue-ssr" vue-ssr-非常简单的VueJS服务器端渲染模板

https://github.com/hilongjw/vue-ssr" vue-ssr-结合Express使用Vue2服务端渲染

https://github.com/leaves4j/vue-easy-renderer" vue-easy-renderer-Nodejs服务端渲染

辅助工具

https://github.com/MiCottOn/DejaVue" DejaVue-Vuejs可视化及压力测试

https://github.com/vue-play/vue-play" vue-play-展示Vue组件的最小化框架

https://github.com/OYsun/vscode-VueHelper" vscode-VueHelper-目前vscode最好的vue代码提示插件

https://github.com/NetanelBasal/vue-generate-component" vue-generate-component-轻松生成Vue js组件的CLI工具

https://github.com/xwpongithub/vue-multipage-cli" vue-multipage-cli-简单的多页CLI

https://github.com/MetinSeylan/VuejsStarterKit" VuejsStarterKit-vuejs starter套件
