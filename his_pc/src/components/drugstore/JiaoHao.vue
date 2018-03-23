<template>
	<div>
		<p class="h2 text-info text-center col-md-12">待取药</p>
	 	<table class="table table-bordered text-center table-hover">
	 		<tr class="text-danger h4">
	 			<th class="text-center">序号</th>
	 			<th class="text-center">创建时间</th>
	 			<th class="text-center">患者编号</th>
	 			<th class="text-center">患者姓名</th>
	 			<th class="text-center">操作</th>	
	 		</tr>
	 		<tr class="text-center" v-for="(item,index) in list">
				<td>{{index+1}}</td>
				<td>{{item.createTime}}</td>
				<td>{{item.patientId}}</td>
				<td>{{item.name}}</td>
				<td>
					<button class="btn btn-danger" @click="jiaoHao(item.patientId,item.doctorId,index,item.adviceTypeId)">叫号</button>
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
	name:'jiaoHao',
	data(){
		return {
			list:[]
		}
	},
	methods:{
		jiaoHao(patientId,doctorId,index,adviceTypeId){
			this.$axios.get('patientTodo/updateState',{params:{state:0,nowState:2,patientId:patientId,doctorId:doctorId,adviceTypeId:adviceTypeId}}).then().catch(err=>this.mui.alert("请求超时"))
			this.list.splice(index,1);
		}
		
  	},
  	mounted(){
		this.$axios.get('drugStore/getToDrugList')
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