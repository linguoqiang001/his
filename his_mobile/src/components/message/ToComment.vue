<template>
	<div>
		<nav-bar title="待评价"></nav-bar>
		<div class="mui-content" v-show="list.length!=0">
			<div v-for="item in list">
			<div class="col-xs-2"></div>
			<div class="box col-xs-8">
				<span class="line"></span>
				<span class="text">{{item.createTime}}</span>
				<span class="line"></span>
			</div>
			<div class="mui-card col-xs-12">	
				<div class="wrap col-xs-12" >
						<img class="" :src="item.imgName">
						<div class="right col-xs-10 ">
							<span class="col-xs-12 l-mp" style="font-size:16px;">{{item.keShiName}} {{item.doctorName}}</span>
							<p class='mui-ellipsis col-xs-12 l-mp' style="margin-top:5px !important" >请根据实际情况评价，打分，谢谢！</p>
						</div>
						<router-link :to="{name:'comment',query:{url:item.imgName,doctorId:item.doctorId,createTime:item.createTime}}" class="btn btn-info  col-xs-12" style="margin-top:8px;">去评价</router-link>
				</div>
			</div>
			</div>
		</div>
		<noData content="暂无待评价" v-show="list.length==0"></noData>

	</div>
</template>
<script>
	export default{
		name:'toComment',
		data(){
			return {
				list:[]
			}
		},
		mounted(){
			this.$axios.get('comment/toCommenet',{params:{patientId:this.tool.getUser().id}}).then(res=>{this.list=res.data}).catch(err=>this.mui.alert("请求超时"))
		}
	}
</script>
<style scoped>
	img{border-radius: 21px;width: 42px;height: 42px;float: left;}
	.wrap{padding:10px 5px 10px 5px;}
	.right{padding: 0 0 0 10px}
	.comment{border:1px solid red;float: right;color: red;padding: 5px;}
	.box {
	margin-top: 8px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	}
	.line {
	height: 1px;
	flex-grow: 1;
	background-color: #D5D8DB;
	}
	.text {
	margin: 0 5px;color: #8F8F94;font-size: 15px;
	}
</style>

