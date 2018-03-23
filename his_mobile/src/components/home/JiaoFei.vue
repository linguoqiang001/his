<template>
	<div>
		<nav-bar title="缴费"></nav-bar>
		<div class="mui-content">
		<br>
		<form class="mui-input-group">
			<div class="mui-input-row">
				<label>金额（元）</label>
				<input type="number" class="mui-input-clear" v-model="money" placeholder="请输入金额">
			</div>
		</form>
		<br>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-radio mui-right">
					<svg class="icon" aria-hidden="true" >
					  <use xlink:href="#icon-weixinzhifu"></use>
					</svg>
					<input name="radio" type="radio" checked="">微信支付
			</li>
			<li class="mui-table-view-cell mui-radio mui-right">
				<svg class="icon" aria-hidden="true" >
					  <use xlink:href="#icon-zhifubao"></use>
				</svg>
				<input name="radio" type="radio">支付宝支付
			</li>
		</ul>
		<br>
		<button type="button" class="mui-btn mui-btn-primary" @click="jiaoFei">确定</button>
		</div>
	</div>
</template>
<script>
	export default{
		name:'jiaoFei',
		data(){
			return {
				money:''
			}
		},
		methods:{
			jiaoFei:function(){
				this.$axios.get('agency/addMoney',{params:{patientId:this.tool.getUser().id,money:this.money}}).then(res=>{
					if(res.data=='1'){
						this.mui.alert("缴费成功");
					}else{
						this.mui.alert("缴费失败");
					}
				}).catch(res=>{this.mui.alert("缴费失败")});
			}
		}
	}
</script>
<style scoped>
	.icon{font-size:25px;}
	.mui-btn{width: 90%;margin: auto;display: block;height: 40px;font-size: 20px;}
</style>