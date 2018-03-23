<template>
	<div class="wrap">
		<div class="login">
			<div class="head">登录</div>
			<div class="opration">
				<p class="error" v-show="error">帐号不存在或密码错误</p>
				<input type="text" name="" placeholder="请输入账号" class="no" v-model="id">
				<input type="password" name="" placeholder="请输入密码" class="password" v-model="password">
				<input  type="button" value="登录" class="submit text-center" @click="login">
			</div>		
		</div>
	</div>
</template>
<script>
	export default{
		name:'login',
		data(){
			return {
				id:'',
				password:'',
				error:false
			}
		},
		mounted(){
			$(function(){
			var left=($(window).width()-$(".login").width())/2;
			$(".login").css({left:left});
			});
		},
		methods:{
			login:function(){
				if(this.id=='' || this.password==''){
					alert("不能为空");
				}else{
				this.$axios.get('login',{params:{id:this.id,password:this.password}})
				.then(res=>{
				if(res.data=='success'){
					console.log(this.tool);
					this.tool.setUser(this.id,this.password);
					this.$router.push({name:'main'});
				}else{
					this.error=true;
				}
				}).catch(err=>{
					alert("请求超时");
				});
				}
			}
		}
	}
</script>
<style scoped>
*{margin:0;padding: 0;}
.wrap{width:100%;height: 100%; background: url(../../../resources/images/bag.jpg) no-repeat;perspective: 500;background-size: 100% 100%;}
.login{width: 450px;height: 285px;background: white;border-radius: 10px;position: absolute;animation: active 1s ease-in-out;	animation-fill-mode:forwards;perspective: 500;-webkit-perspective: 500;}
.login .head{width: 450px;height: 61px;line-height: 61px;text-align: center;color: #27d;font-size: 22px;font-weight: bold;letter-spacing: 5px;border-bottom: 2px solid #27d;}
.login .opration{width: 450px;height: 222px;position: relative;}
.login .opration>input:nth-child(2){width: 305px;height: 40px;display: block;margin: 25px auto;border: 1px solid #27d;font-size: 17px;text-indent: 20px;}
.login .opration>input:nth-child(3){width: 305px;height: 40px;display: block;margin: 25px auto;border: 1px solid #27d;font-size: 17px;text-indent: 20px;}
.login .opration>input:nth-child(4){width: 160px;height: 40px;background: #27d;color: white;border: none;margin:25px auto;display: block;font-size:20px;letter-spacing: 5px;cursor: pointer;}
.error{font-size: 12px;color:red;position: absolute;top:-18px;width:200px;left:70px;}
@keyframes active{
	0%{opacity: 0.4;top: -100px;transform:scale(0.2) ;}
	50%{opacity: 0.4;top:40%;transform:scale(0.2) rotateX(90deg);}
	100%{opacity: 1;top:35%;transform: scale(1) rotateX(0deg);}
}
</style>