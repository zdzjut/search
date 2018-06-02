import Vue from 'vue'
import App from './App'
import router from './router'
import VueCordova from 'vue-cordova'
import  VueResource  from 'vue-resource'
import axios from 'axios';

/**
 * 绑定地址,全局请求前部带上ip和端口
 */
Vue.prototype.axios = axios;
axios.defaults.baseURL = 'http://192.169.40.99:7088';

Vue.use(VueResource);
Vue.use(VueCordova);
// document.addEventListener('deviceready', function () {
  new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
  });


// }, false);



