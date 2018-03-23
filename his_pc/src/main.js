import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routerConfig from './router.config.js'
import jQuery from 'jquery'
import ichart from 'ichart'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap'
import '../resources/iconfont/iconfont.css'
import '../resources/iconfont1/iconfont.css'
import '../resources/css/reset.css'
import Axios from 'axios'
import tool from './components/common/storage.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
//Axios.defaults.baseURL='http://localhost:8008/medicalManage'
Axios.defaults.baseURL='http://47.95.210.82/medicalManage/';
Vue.prototype.$axios=Axios;
Vue.prototype.tool=tool;
Vue.use(VueRouter);	
const router=new VueRouter(routerConfig);

new Vue({
  router:router,
  el: '#app',
  render: h => h(App)
})
