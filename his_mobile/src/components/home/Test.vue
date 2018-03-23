<template>
	<div>
		<header id="header" class="mui-bar mui-bar-transparent">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">导航栏</h1>
		</header>

		<div style="background:white;font-size:80px;" class="mui-content">
			<p>asdfasdfds</p>
			<p>asdfasdfds</p>
			<p>asdfasdfds</p>
			<p>asdfasdfds</p>
			<p>asdfasdfds</p>
			<p>asdfasdfds</p>
			<p>asdfasdfds</p>
			<p>asdfasdfds</p>
			<p>asdfasdfds</p>
			<p>asdfasdfds</p>
			<p>asdfasdfds</p>
			<p>asdfasdfds</p>
			<p>asdfasdfds</p>
			<p>asdfasdfds</p>
			<p>asdfasdfds</p>
			<p>asdfasdfds</p>
			<p>asdfasdfds</p>
			<p>asdfasdfds</p>
			<p>asdfasdfds</p>
			<p>asdfasdfds</p>
			<p>asdfasdfds</p>
			<p>asdfasdfds</p>
			<p>asdfasdfds</p>
			<p>asdfasdfds</p>
			<p>asdfasdfds</p>
			<p>asdfasdfds</p>
			<p>asdfasdfds</p>
			<p>asdfasdfds</p>
			<p>asdfasdfds</p>
			<p>asdfasdfds</p>
			<p>asdfasdfds</p>
			<p>asdfasdfds</p>
			<p>asdfasdfds</p>
			<p>asdfasdfds</p>
			<p>asdfasdfds</p>
			<p>asdfasdfds</p>
		</div>
	</div>
</template>
<script>
	export default{
		mounted(){
			this.mui('.mui-bar-transparent').transparent({
		    top: 0,
		    offset: 150,
		    duration: 16,
		    scrollby: document.querySelector('.mui-scroll-wrapper')
			});
		}
	}
</script>