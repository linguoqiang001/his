<template>
	<div>
		<nav-bar title="消费记录"></nav-bar>

		<div class="mui-content">
			<div class="col-xs-12 yue l-mp">
			<i class="iconfont icon-tixian col-xs-2 l-mp text-right"></i>
			<p class="col-xs-8 l-mp">可用余额:{{yue}}元</p>
			</div>
			<div class="col-xs-12 opration l-white">
				<p class="col-xs-6 l-mp" @click="jiaoFei">
					<i class="col-xs-4 iconfont icon-icon02 text-right l-mp"></i>
					<span class="col-xs-8">充值</span>
				</p>
				<p class="col-xs-6 l-mp">
					<i class="col-xs-4 iconfont icon-tixian l-mp text-right"></i>
					<span class="col-xs-8">提现</span>
				</p>
			</div>

			<div class="record col-xs-12 l-white l-stop">消费记录</div>
			<ul class="mui-table-view mui-table-view-striped mui-table-view-condensed col-xs-12">
		        <li class="mui-table-view-cell" style="padding-top:5px;padding-bottom:5px;" v-for="item in list">
		            <div class="mui-table">
		                <div class="mui-table-cell mui-col-xs-10">
		                    <span class="mui-ellipsis">{{item.content}}</span>
		                    <p class="mui-h6 mui-ellipsis">{{item.createTime}}</p>
		                </div>
		                <div class="mui-table-cell mui-col-xs-2 mui-text-right">
		                    <span class="mui-ellipsis" style="color:red;">-{{item.price}}</span>
		                </div>
		            </div>
		        </li>
		    </ul>
		    <noData content="暂无任何消费" v-show="list.length==0" ></noData>
		</div>
	</div>
</template>
<script>
	export default{
		name:'consumption',
		data(){
			return {
				list:[],
				yue:0
			}
		},
		mounted(){
			this.$axios.get('consume/yue',{params:{patientId:this.tool.getUser().id}}).then(
				res=>{this.yue=res.data;}
				).catch()
			this.$axios.get('consume/list',{params:{patientId:this.tool.getUser().id}}).then(res=>{this.list=res.data}).catch(err=>this.mui.alert("请求超时"))
		},
		methods:{
			jiaoFei(){
				this.$router.push({name:'jiaoFei'});
			}
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
.record{color: #0873B7;font-size: 18px;padding:15px; border-bottom: 1px solid #F1F3F6;}

</style>