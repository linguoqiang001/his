<template>
	<div>
		<nav-bar title="选择科室"></nav-bar>
		<div class="lists col-xs-12 l-navTop">
			<div class="col-xs-6 list" v-for="item in list">
				<router-link :to="{name:'rooms',query:{keShiId:item.id}}" class="col-xs-12 text-center keshi">{{item.name}}</router-link> 
			</div>
		</div>

	</div>
</template>
<script>

export default{
	name:'registration',
	data(){
		return {
			list:[]
		}
	},
	methods:{

  	},		
  	mounted(){
  		this.$axios.get('keshi')
  		.then(res=>{this.list=res.data}
  		).catch(err=>{alert("请求超时");});
  	}
}
</script>
<style scoped>
.keshi{height: 50px;margin-top: 25px;line-height: 50px;background: #479FE9;color: white;font-size: 18px;font-weight: bold;letter-spacing: 5px;box-shadow:3px 3px 8px #30638e;border-radius: 2px;}
.keshi:hover{background: #3e88c5;}
.select{font-size: 22px;color: #4E849E;font-weight: bold;}
</style>