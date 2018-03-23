<template>
	<div class="wrap">
		{{content}}
	</div>
</template>
<script>
	export default{
		name:'noData',
		data(){
			return {
			}
		},
		props:['content']
	}
</script>
<style scoped>
	.wrap{line-height: 600px;font-size: 30px;text-align: center;color: #CECFD1;font-family: STSong;position: absolute;top:0;left: 0;height: 100%;width: 100%;}
</style>