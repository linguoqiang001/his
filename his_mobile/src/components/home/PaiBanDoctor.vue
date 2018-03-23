<template>
	<div>
		<nav-bar title="医生主页"></nav-bar>
		<div class="mui-content">
			<div class="head  l-mp">
				<div class="col-xs-12 img">
					<img :src="doctor.imgName">
					<div class="col-xs-4">
						<p>{{doctor.name}}</p>
						<span>{{doctor.titleName}}</span>
					</div>
				</div>
				<div class="col-xs-12 l-mp">
					<div class="col-xs-6 text-center l-mp fensi">
						<p>{{doctor.fans}}</p>
						<p>粉丝数</p>
					</div>
					<div class="col-xs-6 text-center l-mp">
						<p>{{doctor.registration}}</p>
						<p>挂号数</p>
					</div>
				</div>
			</div>
			<div class="l-white l-stop">
				<div class="col-xs-12" style="border-bottom:1px solid #F1F3F6;padding-top:5px;padding-bottom:5px;">
					<i class="col-xs-1 l-mp">
					<svg class="icon" aria-hidden="true">
					  <use xlink:href="#icon-jianjie"></use>
					</svg>
					</i>
					<p class="col-xs-4 l-mp" style="line-height:25px;font-size:17px;">医生简介</p>
				</div>
				<div class="col-xs-12" style="padding-top:10px;padding-bottom:10px;font-size:16px;">
					<span>{{doctor.introduce}}</span>
				</div>					
			</div>

			<div class="l-white l-stop">
				<div class="col-xs-12" style="border-bottom:1px solid #F1F3F6;padding-top:5px;padding-bottom:5px;">
					<i class="col-xs-1 l-mp">
					<svg class="icon" aria-hidden="true">
					  <use xlink:href="#icon-019"></use>
					</svg>
					</i>
					<p class="col-xs-4 l-mp" style="line-height:25px;font-size:17px;">医生擅长</p>
				</div>
				<div class="col-xs-12" style="padding-top:10px;padding-bottom:10px;font-size:16px;">
					<span>{{doctor.good}}</span>
				</div>					
			</div>

			<div class="l-white l-stop">
				<div class="col-xs-12" style="border-bottom:1px solid #F1F3F6;padding-top:5px;padding-bottom:5px;">
					<i class="col-xs-1 l-mp">
					<svg class="icon" aria-hidden="true">
					  <use xlink:href="#icon-zixunyisheng"></use>
					</svg>
					</i>
					<p class="col-xs-4 l-mp" style="line-height:25px;font-size:17px;">患者评价</p>
				</div>
				<div class="col-xs-12 comment" style="padding-top:10px;padding-bottom:10px;font-size:16px;border-bottom:1px solid #F1F3F6;" v-for="item in comment">
					<p class="col-xs-4 l-mp">患者:{{item.patientName}}</p>
					<div class="col-xs-8 xing text-right">
						<svg class="icon" aria-hidden="true" v-for="rate in item.rate" >
						  <use xlink:href="#icon-pingjia-xing" ></use>
						</svg>
						<svg class="icon" aria-hidden="true" v-for="nrate in 5-item.rate" >
						  <use xlink:href="#icon-pingjiaxingji" ></use>
						</svg>
					</div>
					<div class="col-xs-12 l-mp l-stop">
						{{item.content}}
					</div>
					<p class="col-xs-4 l-mp l-stop">{{item.createTime }}</p>
				</div>						
			</div>
		</div>
	</div>
</template>
<script>
export default{
	name:'paiBanDay',
	data(){
		return {
			doctor:{},
			comment:[]
		}
	},
	mounted(){
		this.$axios.get('getDoctor',{params:{doctorId:this.$route.query.doctorId}}).then(
			res=>this.doctor=res.data).catch();
		this.$axios.get('comment/getCommenet',{params:{doctorId:this.$route.query.doctorId}}).then(res=>this.comment=res.data)
	}

}
</script>
<style scoped>
*{overflow: hidden;}
.head{overflow: hidden;background:url(../../static/images/back1.png);}
img{width: 60px;height: 60px;border-radius: 33px;float: left;margin-top: 10px;}
.head .img{border-bottom:1px solid #6A615D;padding:10px 15px;}
.head .img p{color:white;font-size: 18px;margin-top:15px;}
.head .img span{color:white;font-size: 16px;}
.head p{font-size: 18px;color: white;margin-top:5px;}
.head .fensi{border-right:1px solid #6A615D;}
i .icon{font-size: 23px;}
.comment .icon{font-size: 15px !important;color:#FFDC44;font-size: 18px;margin-right:5px;}
</style>