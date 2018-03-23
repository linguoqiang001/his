<template>
	<div>
		<nav-bar title="选择医生"></nav-bar>
		<div class="l-navTop"></div>
			<div class="col-xs-12" v-for="item in list">
				<div class="col-xs-1"></div>
				<div  class="col-xs-10 l-stop"  @click="guahao(item.roomId,item.doctorId)">
					<div class="col-md-2"></div>
					<div class="col-md-9 text-center list">
						<p>房间号：{{item.roomName}}</p>
						<p>医生：{{item.doctorName}}</p>
						<p>医生编号：{{item.doctorId}}</p>
						<p>当前等候人数:{{item.waitNum}}</p>
			
					</div>
				</div>
			</div>
	</div>
</template>
<script>
	export default{
	name:'rooms',
	data(){
		return {
			list :[],
			total:'',
			piaoHao:'',
			flag:1
		}
	},
	methods:{
		guahao:function(roomId,doctorId){
			var vm=this;
			this.mui.confirm("确认挂号","提示",function(e){
				if(e.index==1){
					vm.$axios.get('agency/addMoney',{params:{patientId:vm.tool.getUser().id,money:30*-1}}).then(res=>{
					if(res.data=='1'){
						vm.$axios.get('guahao',{params:{roomId:roomId,patientId:vm.tool.getUser().id}})
					.then(res=>{
					if(res.data=="0"){
					vm.mui.alert("请勿重复挂号","挂号失败");
					}else{
						var index=res.data.indexOf("|");
						vm.total=res.data.substr(0,index);
						vm.piaoHao=res.data.substr(index+1);
						var str="您是第"+vm.total+"号,当前等候人数"+vm.piaoHao;
						vm.mui.alert(str,"挂号成功");
						vm.$axios.get('room/menZhenRoom',{params:{keShiId:vm.$route.query.keShiId}})
				  		.then(res=>{vm.list=res.data}
				  		).catch(err=>{alert("请求超时")});
				  		vm.$axios.get('doctor/insertAdvice',{params:{patientId:vm.tool.getUser().id,itemName:'门诊',quantity:1,frequency:'一次',itemId:'3000',adviceTypeId:2,unit:'次',touse:'就诊',doctorId:doctorId,size:'一次性',price:30,state:2}})

					}}).catch(err=>{alert("请求超时")});
					}else{
						vm.mui.alert("余额不足");}})
				}});

		}
  	},
  	mounted(){
		this.$axios.get('room/menZhenRoom',{params:{keShiId:this.$route.query.keShiId}})
  		.then(res=>{this.list=res.data}
  		).catch(err=>{alert("请求超时");});
  	}
}
</script>
<style scoped>
.list{background:#3E88C5;margin-bottom: 10px;box-shadow:3px 3px 8px #30638e;border-radius: 2px;}
.list>p{color:white;font-size: 18px;font-weight: bold;}
.select{font-size: 22px;color: #4E849E;font-weight: bold;}
</style>