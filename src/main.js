import Vue from 'vue'
import App from './App'
import router from './router'
// 引用API文件
import api from './api/index.js'
// 将API方法绑定到全局
Vue.prototype.$api = api;
Vue.config.productionTip = false;

document.addEventListener('deviceready', function () {
  new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
  });
}, false);

