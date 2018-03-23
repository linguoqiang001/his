<template>
	<div id="wrap">
		<mt-header title="登录" id="nav"></mt-header>
		<br><br>
		<form class="find form-horizontal col-xs-12 text-left">
		    <label for="id" class=" control-label text-right">卡号：</label>
				<input type="text" class="form-control" id="id"  placeholder="输入卡号" v-model="id">
			<br>	
		    <label for="password" class=" control-label" >密码：</label>
		    <input type="password" class="form-control" id="password" placeholder="输入密码" v-model="password">
		</form>
		<div style="width:90%;margin-top:30px;display:inline-block;" >
			<!-- <router-link :to="{name:'home'}"  class="btn btn-primary btn-lg col-xs-12" @click="login">登录</router-link> -->
			<button class="btn btn-primary btn-lg col-xs-12"  @click="login">登录</button>
			<a href="#" class="col-xs-4 text-left mp top">注册</a>
			<div class="col-xs-3"></div>
			<a href="#" class="col-xs-5 text-right mp top">忘记密码</a>
		</div>
		<p>快捷登录</p>
		<hr noshade="noshade"/>
		<div class="kuaijie">
			<div class="col-xs-4">
				<img src="../static/images/qq.png" class="col-xs-10">
				<p class="col-xs-10">QQ登录</p>
			</div>
			<div class="col-xs-4">
				<img src="../static/images/wx.png" class="col-xs-10">
				<p class="col-xs-10">微信登录</p>
			</div>
			<div class="col-xs-4">
				<img src="../static/images/wb.png" class="col-xs-10">
				<p class="col-xs-10">微博登录</p>
			</div>
		</div>
	</div>
</template>
<script>
import tool from './common/storage.js'
import mui from '../static/mui/dist/js/mui'
	export default{
		name:'login',
		data(){
			return{
				id:'',
				password:''
			}
		},
		mounted(){
			var first = null;

			mui.back = function() {
			if (!first) {
				first = new Date().getTime();
				mui.toast('再按一次退出应用');
				//history.go(-1);
				
				setTimeout(function() {
				first = null;
				}, 1000);
			} else {
				if (new Date().getTime() - first < 1000) {
				plus.runtime.quit();
			}}};
		},
		methods:{
			login:function(){
				if(this.id=='' || this.password==''){
					this.mui.alert("不能为空","提示");
				}else{
				this.$axios.get('patient/login',{params:{id:this.id,password:this.password}})
				.then(res=>{
				if(res.data=='success'){
					tool.setUser(this.id,this.password);
					this.$router.push({path:'/home'});
				}else{
					this.mui.alert("帐号不存在或密码错误","提示")
				}
				}).catch(err=>{
					this.mui.alert("帐号不存在或密码错误","提示")
				});
				}		
			}
		}
	}
</script>
<style scoped>
#nav{background: white;color: black;box-shadow:1px 1px 5px #c4c4c4;font-weight: bold;font-size: 18px;}
#wrap{text-align:center; }
.top{margin-top:10px;}
.kuaijie p{font-size: 10px;margin-top: 5px;}
</style>