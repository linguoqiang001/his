<template>
	<div class="mp">	
		<div class="col-md-12">
			<fieldset disabled class="" >
			<legend>患者信息</legend>
			<div class="col-md-3" >
			姓名：<input type="text" class="name text-center" :value="patient.name">
			</div>
			<div class="col-md-3">
			年龄：<input type="text" class="text-center" :value="patient.age">
			</div>
			<div class="col-md-3">
			性别：<input type="text" class="text-center" :value="patient.gender">
			</div>
			<div class="col-md-3">
			账户余额：<input type="text" class="text-center" :value="patient.yue">
			</div>
			
			</fieldset>
		</div>
		<br>
		<h3 class="text-info text-center col-md-12">医嘱</h3>
		<div class="col-md-12 mp">
			<div class="col-md-11">
					<table class="table table-bordered text-center table-hover">
					<tr class="text-danger h4">
						<th class="text-center">医嘱内容</th>
						<th class="text-center">数量</th>
						<th class="text-center">频率</th>
						<th class="text-center">用法</th>
						<th class="text-center">操作</th>
					</tr>
					<tr v-for="item in list" v-show="item.adviceTypeId!=2">
						<td>{{item.content}}</td>
						<td>{{item.quantity}}</td>
						<td>{{item.frequency}}</td>
						<td>{{item.touse}}</td>
						<td>
							<button class="btn btn-danger" @click="detele(item.itemId,item.adviceTypeId)">删除</button>
						</td>
					</tr>
					<tr v-show="list.length==0" class="text-center text-muted" >
						<td colspan="5">暂无数据</td>
					</tr>
					</table>
			</div>
			<div class="col-md-1 mp">
				<router-link :to="{name:'kaiYao',query:{patientId:$route.query.patientId}}" class="btn btn-info col-md-10">开药</router-link>
				<button class="btn btn-info col-md-10" style="margin-top:10px;">检查</button>
				<button class="btn btn-danger col-md-10" style="margin-top:10px;" @click="over()">结束</button>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  name: 'wenzhen',
  data () {
    return {
    	list:[],
    	patient:{},
    }
  },
  methods:{
  	detele:function(Id,TypeId){
  			this.$axios.get('doctor/deleteAdvice',{params:{doctorId:this.tool.getUser().id,patientId:this.$route.query.patientId,itemId:Id,adviceTypeId:TypeId}})
			.then(res=>{
				this.$axios.get('doctor/getAdvice',{params:{patientId:this.$route.query.patientId,doctorId:this.tool.getUser().id}})
				.then(res=>{this.list=res.data;}
				).catch(err=>{alert("请求超时");});	
			}
			).catch(err=>{alert("请求超时");});	
  	},
  	over:function(){
  			this.$axios.get('doctor/updateGuaHao',{params:{patientId:this.$route.query.patientId,doctorId:this.tool.getUser().id}})
				.then(res=>{
					this.$router.push({name:'daiZhen'});
				}
				).catch(err=>{alert("请求超时");});	
			this.$axios.get('patientTodo/updateState',{params:{state:0,nowState:2,patientId:this.$route.query.patientId,doctorId:this.tool.getUser().id,adviceTypeId:2}}).then().catch("请求超时")
			this.$axios.get('comment/addComment',{params:{patientId:this.$route.query.patientId,doctorId:this.tool.getUser().id}})
			this.$axios.get('message/updateMessage',{params:{patientId:this.$route.query.patientId,title:'医生评价',display:1}})
  		}	
  },
  mounted(){
			this.$axios.get('doctor/patient',{params:{patientId:this.$route.query.patientId}})
				.then(res=>{this.patient=res.data;}
				).catch(err=>{alert("请求超时");});	

			this.$axios.get('doctor/getAdvice',{params:{patientId:this.$route.query.patientId,doctorId:this.tool.getUser().id}})
				.then(res=>{this.list=res.data;}
				).catch(err=>{alert("请求超时");});	
  }
}
</script>
<style scoped>
.mp{margin:0;padding: 0;}
.name{width: 130px;}
input{width: 100px;}
.table-bordered th,
.table-bordered td {border: 1px solid #9A9DA2 ;}
.table th,td{padding: 8px;}
.table-hover tr:hover{background: #CED1D5;}
</style>