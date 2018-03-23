<template>
	<div>
		<router-view></router-view>
		<nav class="mui-bar mui-bar-tab">
			<router-link :to="{name:'home'}" class="mui-tab-item" >
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link :to="{name:'message'}" class="mui-tab-item" >
				<!-- <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span> -->
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">消息</span>
			</router-link>
			<router-link :to="{name:'myInfo'}"  class="mui-tab-item" >
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>
	</div>
</template>
<script>
export default{
	name:'home',
	data(){
		return {
		}
	},
	methods:{
	},
	mounted(){
			var vm=this;
			var first = null;
			this.mui.back = function() {
			if(vm.$route.name=='home' || vm.$route.name=='messageDetail' || vm.$route.name=='myInfo' || vm.$route.name=='contact'){
				if (!first) {
				first = new Date().getTime();
				vm.mui.toast('再按一次退出应用');
				setTimeout(function() {
				first = null;
				}, 1000);
				} else {
					if (new Date().getTime() - first < 1000) {
					plus.runtime.quit();
				}}
			}else{
					history.go(-1);
			}};	
	}
}
</script>
<style scoped>
#tabbar{position: fixed;bottom: 0;background:#F2F4F6;box-shadow: 0 0 1px #54564B}
.iconfont{font-size: 20px;}
.icon-home{font-weight: bold;}
.tabback{background:#C3C7AD; }
p{margin:0;padding: 0;}
.router-link-active{color:#36A5EC;}
</style>