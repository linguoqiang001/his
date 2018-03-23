<template>
	<div>
		<nav-bar title="详细"></nav-bar>
		<div class="mui-content">
			<div class="mui-card">
				<ul class="mui-table-view mui-table-view-chevron">
					<li class="mui-table-view-cell mui-collapse " v-for="item in list">
						<a class="mui-navigate-right" href="javascript:void(0)" > <span style="color:#007AFF;">[{{item.itemId}}]</span> &nbsp;&nbsp;{{item.itemName}} </span></a>
						<ul class="mui-table-view mui-table-view-chevron">
							<li class="mui-table-view-cell">项目编号：{{item.itemId}}</li>
							<li class="mui-table-view-cell">项目全称：{{item.itemName}}</li>
							<li class="mui-table-view-cell">规格：{{item.size}}</li>
							<li class="mui-table-view-cell">数量：{{item.quantity}}</li>
							<li class="mui-table-view-cell">费用：￥{{item.price}}</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
		<div class="pay">
			<span class="col-xs-9 text-right">合计：<span style="color:#FE6300">{{money}}</span></span>
			<div  class="col-xs-3 jiesuan text-center" @click="pay" v-show="state==1">
				<span style="font-size:18px;" v-show="state==1">结算</span>
			</div>
			<div  class="col-xs-3 jiesuan text-center">
				<span v-show="state!=1">已付款</span>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'todoDetail',
		data(){
			return {
				list:[],
				state:this.$route.query.state,
				money:0
			}
		},
		mounted(){
			 this.$axios.get('patientTodo/listDetail',{params:{patientId:this.tool.getUser().id,createTime:this.$route.query.createTime,doctorId:this.$route.query.doctorId,adviceTypeId:this.$route.query.adviceTypeId,state:this.$route.query.state}}).then(res=>{
			 		this.list=res.data;
			 		for(var i=0;i<res.data.length;i++){
			 			this.money=this.money+(res.data[i].price*res.data[i].quantity);
			 		}
			 }).catch(res=>{	
			 	this.mui.alert("请求超时");
			 });
		},
		methods:{
			pay:function(){
				this.$axios.get('agency/addMoney',{params:{patientId:this.tool.getUser().id,money:this.money*-1}}).then(res=>{
					if(res.data=='1'){
						this.mui.alert("付款成功");
						this.state=0;
						this.$axios.get('patientTodo/updateState',{params:{state:2,nowState:1,patientId:this.tool.getUser().id,doctorId:this.$route.query.doctorId,adviceTypeId:this.$route.query.adviceTypeId}}).then().catch()
					}else{
						this.mui.alert("余额不足");	
					}
				}).catch(res=>{this.mui.alert("请求超时")})
			}
		}
	}
</script>
<style >
	.pay{position: fixed;bottom:0;background: white;
		height: 50px;width: 100%;border-top: 1px solid #EFEFF4;overflow: hidden;}
	.pay span{line-height: 50px;font-size: 15px;}
	.jiesuan{color: white;background: #FE6300;height: 50px;line-height: 50px;}
</style>