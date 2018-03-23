<template>
	<div>
		<ul class="mui-table-view" v-show="list.length!=0">
			<li class="mui-table-view-cell" v-for="(item,index) in list" v-show="show[index]" @tap="go(item.title)">
				<div class="mui-slider-right mui-disabled" >
						<a class="mui-btn mui-btn-red" href="javascript:void(0)"    @tap.stop="shanchu(item.title,index)">删除</a>
				</div>
				<a href="javascript:void(0)" class="mui-slider-handle">
					<img class="mui-media-object mui-pull-left" :src="item.imgName">
					<div class="mui-media-body">
						<span class="col-xs-6 l-mp">{{item.title}}</span>
						<p class="col-xs-6 text-right l-mp">{{item.lastTime}}</p>
						<p class='mui-ellipsis col-xs-12 l-mp'>{{item.subTitle}}</p>
					</div>
				</a>
			</li>
		</ul>
		<noData v-show="list.length==0" content="当前没有任何消息"></noData>
	</div>
</template>
<script>
	export default{
		name:'messageDetail',
		data(){
			return {
				list:[],
				show:[]

			}
		},
		mounted(){
			this.$axios.get('message/getMessageList',{params:{patientId:this.tool.getUser().id}}).then(res=>{this.list=res.data;for(var i=0;i<res.data.length;i++){this.show[i]=true}})
		},
		methods:{
			go(title){
				if(title=='医生评价'){
					this.$router.push({name:'toComment'});
				}
			},
			shanchu(title,index){
				this.$set(this.show,index,false);
				this.$axios.get('message/updateMessage',{params:{patientId:this.tool.getUser().id,display:0,title:title}}).then().catch(err=>this.mui.alert("请求超时"));
			}
		}
	}
</script>
<style scoped>
	img{border-radius: 21px;}

</style>