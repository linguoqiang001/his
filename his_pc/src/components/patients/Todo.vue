<template>
	<div>
		<p class="h2 text-info text-center col-md-12">待办事项</p>
	 	<table class="table table-bordered text-center table-hover">
	 		<tr class="text-danger h4">
	 			<th class="text-center" style="width:250px;">创建时间</th>
	 			<th class="text-center" style="width:200px;">创建人</th>
	 			<th class="text-center">内容</th>
	 		</tr>
	 		<tr class="text-center" v-for="item in list">
				<td>{{item.createTime}}</td>
				<td>{{item.name}}</td>
				<td>{{item.content}}</td>
	 		</tr>
	 		<tr v-show="list.length==0">
	 			<td class="text-muted" colspan="3">暂无数据</td>
	 		</tr>
	 	</table>
	</div>
</template>
<script>
	export default{
	name:'todo',
	data(){
		return {
			list:[{time:'2015-10-12 10:08',operator:'杨斯华',content:'到药房取药'}]
		}
	},
	methods:{
		guahao:function(){}
  	},
 	mounted(){
 		//this.$http({
          //   url:'http://localhost:8008/his/patientTodo/list',
          //   method:'get',
          //   emulateJSON:true,
          //   headers:{Accept:'*'}
          // } ).then(function(res){
          //       this.list=res.data;
          // },function(res){
          //   alert("请求超时");
          // });
 	}
}
</script>
<style scoped>
.table-bordered th,
.table-bordered td {border: 1px solid #9A9DA2 ;}
.table th,td{padding: 8px;}
.table-hover tr:hover{background: #CED1D5;}	
</style>