<template>
	<div style="text-align:center;">
		<h4 class="col-md-12 text-justify">前台 >> 缴费</h4>
		<div class="col-md-2"></div>
		<form class="info form-horizontal col-md-6">
		    <label for="name" class="col-sm-4 control-label" >患者编号：</label>
		    <div class=" col-sm-7">
		    	<input type="text" class="form-control" v-model="patientId" required="required" placeholder="患者编号">
		    </div>
		    <label for="name" class="col-sm-4 control-label" >缴费金额：</label>
		    <div class=" col-sm-7">
		    	<input type="number" class="form-control" v-model="yue" required="required" placeholder="金额">
		    </div>
		    <div class="col-md-12" style="margin-top:15px;margin-left:50px;">
		    	<button class="btn btn-primary" type="button" @click="addMoney">确认缴费</button>
		    </div>			    
		</form>
	</div>
</template>
<script>
	export default{
		name:'AddPatient',
		data(){
			return {
				yue:'',
				patientId:''
			}	
		},
		methods:{
			addMoney:function(){
				 this.$axios.get('agency/addMoney',{params:{yue:this.yue,patientId:this.patientId}})
		        .then(res=>{if(res.data=="1"){
						alert("缴费成功");
					}else{
						alert("缴费失败");
					}}
		        ).catch(err=>{alert("请求超时");}); 
			}
		},
		mounted(){
		}
}
</script>
<style scoped>
input,label{margin-top:15px;}
</style>

