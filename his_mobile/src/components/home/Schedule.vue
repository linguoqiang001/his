<template>
	<div>
		<nav-bar title="科室"></nav-bar>
		<div class="mui-content">
			<ul class="mui-table-view">
				<li class="mui-table-view-cell" v-for="item in list">
					<router-link :to="{name:'paiBanRoom',query:{keShiId:item.id}}" class="mui-navigate-right">
						{{item.name}}
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		name:'schedule',
		data(){
			return {
				list:[]
			}
		},
		mounted(){
			this.$axios.get('keshi')
	  		.then(res=>{this.list=res.data}
	  		).catch(err=>{alert("请求超时");});
		}
	}
</script>
<style scoped>
	
</style>