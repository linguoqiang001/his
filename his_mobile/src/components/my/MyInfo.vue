<template>
	<div class="col-xs-12 l-mp" style="background:#F1F3F6">
		<div class="head col-xs-12">
			<router-link :to="{name:'myInformation',query:{name:patient.name,id:patient.id,gender:patient.gender}}" class="col-xs-3">
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-touxiang1"></use>
			</svg>
			</router-link>
			<div class="col-xs-4 name l-mp">{{patient.name}}</div>
		</div>
		<div class="coin text-center col-xs-12 l-white">
			<div class="col-xs-6">优惠券(0)</div>
			<div class="col-xs-6">健康币(50)</div>
		</div>

		

		<div  class="col-xs-12 l-white l-stop l-mp">
			<router-link :to="{name:'noExploit',query:{nav:'我的医生'}}" class="col-xs-12 l-mp">
				<i class="iconfont icon-wodeyisheng-copy col-xs-2"></i>
				<p class="col-xs-8">我的医生</p>
				<i class="iconfont icon-you col-xs-2"></i>
			</router-link>
			<router-link :to="{name:'noExploit',query:{nav:'我的收藏'}}" class="col-xs-12 l-mp">
				<i class="iconfont icon-wodeshoucang col-xs-2"></i>
				<p class="col-xs-8">我的收藏</p>
				<i class="iconfont icon-you col-xs-2"></i>
			</router-link>	
		</div>

		<div class="col-xs-12 l-white l-stop l-mp">
			<router-link :to="{name:'noExploit',query:{nav:'在线客服'}}" class="col-xs-12 l-mp">
				<i class="iconfont icon-zaixiankefu col-xs-2"></i>
				<p class="col-xs-8">在线客服</p>
				<i class="iconfont icon-you col-xs-2"></i>
			</router-link>
			<router-link :to="{name:'setting'}" class="col-xs-12 l-mp">
				<i class="iconfont icon-shezhi col-xs-2"></i>
				<p class="col-xs-8">设置</p>
				<i class="iconfont icon-you col-xs-2"></i>
			</router-link>	
		</div>

		<div class="l-white l-stop col-xs-12 out text-center" @click="out">
			退出登录
		</div>
	</div>
</template>
<script>
	export default{
		name:'myInfo',
		data(){
			return {
				patient:{}
			}
		},
		methods:{
			out:function(){
				var vm=this;
				this.mui.confirm('确认退出？', '提示', function(e) {
					if (e.index == 1) {
						localStorage.clear();
						vm.$router.push({name:'login'});
					} 
				})
			}
		},
		mounted(){
			this.$axios.get('patient/getPatient',{params:{patientId:this.tool.getUser().id}}).then(res=>this.patient=res.data)
		}
	}
</script>
<style scoped>
a{color:black;}
.head{height:80px;position: fixed;background: url(../../static/images/myBack.jpg);background-size: 100% 150%;top:0;}
.icon{font-size: 50px;margin-top: 15px;}
.name{line-height: 80px;font-size: 20px;color:white;}
.coin{margin-top:80px;font-size: 18px;}
.coin div{line-height: 40px;}
.coin :nth-child(1){border-right: 1px solid #F1F3F6;line-height: 40px;}
.iconfont{font-weight: bold;text-align: center;}
.icon-you{text-align: center;}
i,p{padding: 8px;font-size: 17px;color: black;}
.icon-you,p{border-bottom: 1px solid #F1F3F6;}
.icon-wodeyisheng-copy{font-size: 20px;}
.out{font-size: 18px;color:#FE3636;font-weight: bold;padding: 8px;}
.icon-shezhi{font-size: 22px;}
.icon-wodeshoucang{font-size: 20px;}
</style>