import Vue from 'vue'
import App from './App'
import router from './router'
import VueCordova from 'vue-cordova'
import VueResource from 'vue-resource'
import axios from 'axios';

/**
 * 绑定地址,全局请求前部带上ip和端口
 */
Vue.prototype.axios = axios;
// axios.defaults.baseURL = 'http://192.169.40.99:7088';
axios.defaults.baseURL = 'http://192.168.199.241:7088';

Vue.use(VueResource);
Vue.use(VueCordova);

document.addEventListener('deviceready', function () {

  new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
  });






//安卓返回键退出方法
  document.addEventListener("backbutton", onBackKeyDown, false);
}, false);


function onBackKeyDown() {
  window.plugins.toast.showShortCenter("再次点击，退出");
  document.removeEventListener("backbutton", onBackKeyDown, false); // 注销返回键
  document.addEventListener("backbutton", exitApp, false);//绑定退出事件
  // 3秒后重新注册
  var intervalID = window.setInterval(function () {
    window.clearInterval(intervalID);
    document.removeEventListener("backbutton", exitApp, false); // 注销返回键
    document.addEventListener("backbutton", onBackKeyDown, false); // 返回键
  }, 3000);
}
function exitApp() {
  navigator.app.exitApp();
}


