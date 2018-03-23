<template>
	<div>
		<nav-bar title="我的账户"></nav-bar>
		<div class="col-xs-12 yue l-mp">
			<i class="iconfont icon-tixian col-xs-2 l-mp text-right"></i>
			<p class="col-xs-8 l-mp">可用余额:0.00元</p>
		</div>
		<div class="col-xs-12 opration l-white">
			<p class="col-xs-6 l-mp">
				<i class="col-xs-4 iconfont icon-icon02 text-right l-mp"></i>
				<span class="col-xs-8">充值</span>
			</p>
			<p class="col-xs-6 l-mp">
				<i class="col-xs-4 iconfont icon-tixian l-mp text-right"></i>
				<span class="col-xs-8">提现</span>
			</p>
		</div>

		<div class="record col-xs-12 l-white l-stop">交易记录</div>

	</div>
</template>
<script>
	export default{
		name:'myAccount',
		data(){
			return {
				list:[]
			}
		},
		methods:{
		}
	}
</script>
<style>
.yue{height: 80px;background: url(../../static/images/account.jpg);margin-top: 50px;background-size: 100% 200%;}
.yue p{color: white;font-size: 18px;line-height: 80px;}
.yue .icon-tixian{color: white;font-size: 40px;font-weight: bold;line-height: 80px;}
.opration i{font-size: 30px;line-height: 40px;}
.opration span{font-size: 20px;line-height: 45px;}
.opration .icon-tixian{line-height: 45px;}
.opration p:nth-child(1){border-right: 1px solid #F1F3F6;}
.record{color: #0873B7;font-size: 18px;padding:15px; }
</style>