<template>
	<div>
		<header id="header" class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">评价</h1>
		</header>
		<div class="mui-content l-stop">
			<div class="col-xs-12 l-white" style="padding:10px;">
				<img :src="imgUrl">
				<div class="col-xs-10">
					<span class="col-xs-12" style="font-size:15px;">评分</span>
					<div class="col-xs-12 xing text-left">
						<svg class="icon" aria-hidden="true" v-for="index in 5" @tap="rate(index)" v-show="rates[index]">
						  <use xlink:href="#icon-pingjia-xing" ></use>
						</svg>
						<svg class="icon" aria-hidden="true" v-for="index in 5" @tap="rate(index)" v-show="!rates[index]">
						  <use xlink:href="#icon-pingjiaxingji" ></use>
						</svg>
					</div>
				</div>
			</div>
			<textarea id="textarea" rows="5" placeholder="请输入评价，不少于10个字" v-model="content"></textarea >
			
			<button class="btn btn-info col-xs-12 col-xs-offset-0 btn-lg l-stop" @tap="submit">提交</button>
		</div>
	</div>
</template>
<script>
	export default{
		name:'comment',
		data(){
			return {
				rates:[true,true,true,true,true,true],
				content:'',
				imgUrl:this.$route.query.url,
				score:5
			}
		},
		methods:{
			rate(index){
				this.score=index;
				for(var i=1;i<=index;i++){
					this.$set(this.rates,i,true)
				}
				for(var i=5;i>index;i--){
					this.$set(this.rates,i,false)
				}
			},
			submit(){
				var vm=this;	
				this.$axios.get('comment/updateCommenet',{params:{patientId:this.tool.getUser().id,doctorId:this.$route.query.doctorId,content:this.content,rate:this.score,oldCreateTime:this.$route.query.createTime}}).then(res=>{this.mui.alert("提交成功",function(){vm.$router.go(-1)})})
			}

		}
	}
</script>
<style scoped>
	img{width: 50px;height: 50px;border-radius: 25px;float: left;}
	.icon{font-size: 23px;color:#FFDC44;font-size: 18px;margin-right:5px;margin-top:10px;}
	#textarea{border:none;border-top: 1px solid #F1F3F6;padding-bottom: 0;margin-bottom: 0;}	

</style>