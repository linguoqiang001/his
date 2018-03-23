<template>
	<div>
		<nav-bar title="我的信息"></nav-bar>
		<div class="col-xs-12 account">账户信息</div>
		<div  class="col-xs-12 l-white wrap">
			<router-link :to="{name:'myInformation'}" class="col-xs-12 l-mp">
				<p class="col-xs-6">头像</p>
				<div class="col-xs-5 text-right l-mp head">
					<img src="../../static/images/qq.png">
				</div>
				<i class="iconfont icon-you col-xs-1"></i>
			</router-link>
			<router-link :to="{name:'myInformation'}" class="col-xs-12 l-mp">
				<p class="col-xs-6">姓名</p>
				<p class="col-xs-5 text-right">{{name}}</p>
				<i class="iconfont icon-you col-xs-1"></i>
			</router-link>
			<router-link to="" class="col-xs-12 l-mp">
				<p class="col-xs-6">昵称</p>
				<p class="col-xs-5 text-right">{{name}}</p>
				<i class="iconfont icon-you col-xs-1"></i>
			</router-link>
			<router-link to="" class="col-xs-12 l-mp">
				<p class="col-xs-6">帐号</p>
				<p class="col-xs-5 text-right">{{id}}</p>
				<i class="iconfont icon-you col-xs-1"></i>
			</router-link>
			<router-link to="" class="col-xs-12 l-mp">
				<p class="col-xs-6">二维码</p>
				<i class="iconfont icon-erweima col-xs-5 text-right text-muted"></i>
				<i class="iconfont icon-you col-xs-1"></i>
			</router-link>	
		</div>

		<div class="col-xs-12 personal">个人信息</div>
		<div  class="col-xs-12 l-white wrap">
			<router-link :to="{name:'myInformation'}" class="col-xs-12 l-mp">
				<p class="col-xs-6">性别</p>
				<p class="col-xs-5 text-right">{{gender}}</p>
				<i class="iconfont icon-you col-xs-1"></i>
			</router-link>
			<router-link to="" class="col-xs-12 l-mp">
				<p class="col-xs-6">生日</p>
				<p class="col-xs-5 text-right">未填写</p>
				<i class="iconfont icon-you col-xs-1"></i>
			</router-link>
			<router-link to="" class="col-xs-12 l-mp">
				<p class="col-xs-6">手机</p>
				<p class="col-xs-5 text-right">未填写</p>
				<i class="iconfont icon-you col-xs-1"></i>
			</router-link>
			<router-link to="" class="col-xs-12 l-mp">
				<p class="col-xs-6">邮箱</p>
				<p class="col-xs-5 text-right">未填写</p>
				<i class="iconfont icon-you col-xs-1"></i>
			</router-link>	
			<router-link to="" class="col-xs-12 l-mp">
				<p class="col-xs-6">地区</p>
				<p class="col-xs-5 text-right">未填写</p>
				<i class="iconfont icon-you col-xs-1"></i>
			</router-link>	
		</div>
	</div>
</template>
<script>
	export default{
		name:'myInformation',
		data(){
			return {
				name:this.$route.query.name,
				id:this.$route.query.id,
				gender:this.$route.query.id==1?'男':'女'
			}
		}
	}
</script>
<style scoped>
a{color:black;}
.account{color: #939393;margin-top:55px;padding:5px 15px;}
.personal{padding:5px 15px;}
.icon-you{text-align: right;font-weight: bold;font-size: 18px;padding:12px 0;}
i,p{padding:13px 0;font-size: 17px;margin-bottom: 0;line-height: 28px;}
.head{height: 50px;line-height: 50px;}
.head img{height:40px;width:40px;border-radius: 20px;  }
.icon{font-size: 30px;}
.wrap a{border-bottom: 1px solid #F1F3F6;}
.wrap a p:nth-child(1){color:black;}
</style>