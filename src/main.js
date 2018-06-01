import Vue from 'vue'
import App from './App'
import router from './router'
// 引用API文件
// import api from './api/index.js'
import VueCordova from 'vue-cordova'
import  VueResource  from 'vue-resource'
import axios from 'axios';

/**
 * 绑定地址
 * @type {AxiosStatic}
 */
Vue.prototype.axios = axios;
axios.defaults.baseURL = '/api';

Vue.use(VueResource);
// 将API方法绑定到全局

// console.info(VueCordova);
// Vue.use(VueCordova);
// document.addEventListener('deviceready', function () {
  new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
  });


// }, false);



