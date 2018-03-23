import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import RouterConfig from './router.config.js'
import './static/css/reset.css'
import './static/iconfont/iconfont.css'
import iconfont from './static/iconfont/iconfont.js'
import NavBar from './components/common/NavBar.vue'
import NoData from './components/common/NoData.vue'
import Axios from 'axios'
import './static/mui/dist/css/mui.css'
import Mui from './static/mui/dist/js/mui'
import tool from './components/common/storage.js'
import MuseUI from 'muse-ui'
import $ from 'jquery' 

window.$=$;
Axios.defaults.baseURL='http://47.95.210.82/medicalManage/';
//Axios.defaults.baseURL='http://localhost:8008/medicalManage/'
Axios.interceptors.request.use(function(config){
	Mint.Indicator.open();
	return config;
})

Axios.interceptors.response.use(function(config){
	Mint.Indicator.close();
	return config;
})

Vue.prototype.$axios=Axios;
Mui('body,html').on('tap','a',function(){document.location.href=this.href;});
Vue.prototype.mui=Mui;
Vue.prototype.tool=tool;
Vue.component('navBar',NavBar);
Vue.component('noData',NoData);
Vue.use(Mint);
Vue.use(Router);
Vue.use(MuseUI);

let router=new Router(RouterConfig);

new Vue({
	router:router,
	el: '#app',
	render: h => h(App)
})
