<template>
	<div>
		 <header  class="mui-bar mui-bar-transparent">
		<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" ></a>
		<h1 class="mui-title">咨询医生</h1>
		</header>
		<div class="mui-content">
			<img id="img1" src="../../static/images/consult.jpg"/>
			<div class="l-overflow l-white doctor l-stop" v-for="(item,index) in list" :key="index">
				<div class="col-xs-12 head" v-show="item.doctorListl.length!=0">
					<p class="col-xs-6 text-left keshi l-mp">{{item.name}}</p>
					<router-link to="" class="col-xs-6 text-right more l-mp">全部</router-link>
				</div>
				<router-link :to="{name:'dialog',query:{name:subitem.name,imgName:subitem.imgName}}" class="col-xs-3 l-mp" v-for="(subitem,subindex) in item.doctorListl" :key="subindex" style="color:black;" id="person">
					<div class="col-xs-12 text-center">
					<img :src="subitem.imgName" class="text-center">
					</div>
					<span class="text-center col-xs-12">{{subitem.name}}</span>
					<p class="text-center col-xs-12 title l-mp">{{subitem.titleName}}</p>
				</router-link>
			</div>
		</div>
	</div>
</template>
<script >
	export default{
		name:'doctorConsult',
		data(){
			return {
				list:[]
			}
		},
		methods:{

		},
		mounted(){
			this.mui('.mui-bar-transparent').transparent({
			    top: 0,
			    offset: 150,
			    duration: 16,
			    scrollby: document.querySelector('.mui-scroll-wrapper')
			});

			this.$axios.get('keshi').then(res=>{
				this.list=res.data;
			}).catch(err=>this.mui.alert("请求超时"))

		}
	}
</script>
<style scoped>
#img1{width: 100%;height: 250px;}
.doctor img{border-radius:20px; ;width:40px;height:40px;margin-top: 5px;}
.doctor span{font-size: 14px;}
.more{font-size: 14px;}
.keshi{font-size: 17px;}
.head{border:1px solid #F1F3F6;line-height: 33px;}
.title{font-size: 14px !important;}
#person{padding-bottom: 10px !important;}
</style>