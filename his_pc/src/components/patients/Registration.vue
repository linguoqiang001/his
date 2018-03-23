<template>
	<div>
		<br>
		<div class="select col-md-12 text-left">请选择科室：</div>
		<br><br><br>
		<div class="lists col-md-12">
			<div class="col-md-4 list" v-for="item in list">
				<div class="col-md-2"></div>
				<router-link :to="{name:'rooms',query:{keShiId:item.id}}" class="col-md-9 text-center keshi">{{item.name}}</router-link>
			</div>
		</div>
	</div>
</template>
<script>

export default{
	name:'registration',
	data(){
		return {
			list:[],
			a:5
		}
	},
	methods:{

  	},		
  	mounted(){
  		this.$axios.get('keshi')
  		.then(res=>{this.list=res.data}
  		).catch(err=>{});
  	}
}
</script>
<style scoped>
	.keshi{height: 50px;margin-top: 25px;line-height: 50px;background: #479FE9;color: white;font-size: 18px;font-weight: bold;letter-spacing: 5px;box-shadow:3px 3px 8px #30638e;border-radius: 2px;}
	.keshi:hover{background: #3e88c5;}
	.select{font-size: 22px;color: #4E849E;font-weight: bold;}
</style>