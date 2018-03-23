<template>
	<header class="mui-bar mui-bar-nav">
			<a href="javascript:void(0)" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">{{title}}</h1>
	</header>
</template>
<script>
	export default{
		name:'navBar',
		data(){
			return {
			}
		},
		props:['title'],
		mounted(){
			this.mui.init({
				swipeBack: true //启用右滑关闭功能
			});
		}
	}
</script>
<style scoped>
a{color: #49A0FF;}
</style>