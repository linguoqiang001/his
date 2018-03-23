<template>
	<div>
		<p class="h2 text-info text-center col-md-12">待诊患者</p>
	 	<table class="table table-bordered text-center table-hover">
	 		<tr class="text-danger h4">
	 			<th class="text-center">序号</th>
	 			<th class="text-center">票号</th>
	 			<th class="text-center">创建时间</th>
	 			<th class="text-center">患者编号</th>
	 			<th class="text-center">患者姓名</th>
	 			<th class="text-center">操作</th>	
	 		</tr>
	 		<tr class="text-center" v-for="(item,index) in list">
				<td>{{index+1}}</td>
				<td>{{item.piaoHao}}</td>
				<td>{{item.createTime}}</td>
				<td>{{item.patientId}}</td>
				<td>{{item.patientName}}</td>
				<td>
					<button class="btn btn-danger" @click="remove(item.patientId)">移除</button>
					<router-link :to="{name:'wenZhen',query:{patientId:item.patientId}}" class="btn btn-info">叫号</router-link>
				</td>
	 		</tr>
	 		<tr v-show="list.length==0">
	 			<td class="text-muted" colspan="6">暂无数据</td>
	 		</tr>
	 	</table>
	</div>
</template>
<script>
export default{
	name:'daizhen',
	data(){
		return {
			list:[]
		}
	},
	methods:{
		remove:function(patientId){
			this.$axios.get('doctor/removeDaiZhenPatient',{params:{doctorId:this.tool.getUser().id,patientId:patientId}})
			.then(res=>{
				this.$axios.get('doctor/daizhen',{params:{doctorId:this.tool.getUser().id}})
				.then(res=>{this.list=res.data}
				).catch(err=>{alert("请求超时");});			
			}
			).catch(err=>{alert("请求超时");});

			this.$axios.get('patientTodo/updateState',{params:{state:0,nowState:2,patientId:patientId,doctorId:this.tool.getUser().id,adviceTypeId:2}}).then().catch("请求超时")
		}
  	},
  	mounted(){
		this.$axios.get('doctor/daizhen',{params:{doctorId:this.tool.getUser().id}})
			.then(res=>{this.list=res.data}
			).catch(err=>{alert("请求超时");});	
  	}
	
}
</script>
<style scoped>
.table-bordered th,
.table-bordered td {border: 1px solid #9A9DA2 ;}
.table th,td{padding: 8px;}
.table-hover tr:hover{background: #CED1D5;}
</style>