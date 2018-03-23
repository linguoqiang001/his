<template>
	<div>
		<nav-bar title="内科"></nav-bar>
		<div class="mui-content">
			<div class="mui-table-view">
				<ul class="mui-table-view mui-table-view-chevron" >
					<li class="mui-table-view-cell mui-collapse" v-for="item in list" ><a class="mui-navigate-right" href="javascript:void(0)" >{{item.name}}</a>
						<ul class="mui-table-view mui-table-view-chevron">
							<li class="mui-table-view-cell" v-for="subitem in item.planList" v-show="subitem.doctorId!=0"><router-link :to="        {name:'paiBanDoctor',query:{doctorId:subitem.doctorId}}" class="mui-navigate-right">{{subitem.weekName}}</router-link>
							</li>
							<li class="mui-table-view-cell"  v-show="item.num==0"><a href="javascript:void(0)" style="color:#8F8FA2;">暂无排班</a></li> 
						</ul>
					</li>
				</ul>
			</div>
		</div>	
	</div>
</template>
<script>
export default{
	name:'paiBanDay',
	data(){
		return {
			length:1,
			list:[],
			show:true
		}
	},
	mounted(){
		this.$axios.get('room/list',{params:{keShiId:this.$route.query.keShiId}}).then(res=>{
				this.list=res.data;
			}).catch()
	},
	methods:{

	}


}
</script>