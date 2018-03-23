<template>
	<div>
		<nav-bar title="待办事项"></nav-bar>
		<div class="mui-content" v-show="list.length!=0">
			<ul class="mui-table-view mui-table-view-striped mui-table-view-condensed">
		        <li class="mui-table-view-cell" @click="detail(item.doctorId,item.createTime,item.state,item.adviceTypeId)" v-for="item in list" >
		            <div class="mui-table">
		                <div class="mui-table-cell mui-col-xs-10">
		                    <h4 class="mui-ellipsis">{{item.adviceName}}</h4>
		                    <h5>创建人：{{item.name}}</h5>
		                    <p class="mui-h6 mui-ellipsis">创建时间：{{item.createTime}}</p>
		                </div>
		                <div class="mui-table-cell mui-col-xs-2 mui-text-right">
		                    <span class="mui-h5">{{state[item.state]}}</span>
		                </div>
		            </div>
		        </li>
		    </ul>
		</div>
		<noData v-show="list.length==0" content="暂无待办事项"></noData>
	</div>
</template>
<script>
	export default{
		name:'todo',
		data(){
			return {
				list:[],
				state:['','未付款','排队中',]
			}
		},
		methods:{
			detail:function(doctorId,createTime,state,adviceTypeId){
				this.$router.push({name:'todoDetail',query:{doctorId:doctorId,createTime:createTime,state:state,adviceTypeId:adviceTypeId}});
			}
		},
		mounted(){
			this.$axios.get('patientTodo/list',{params:{patientId:this.tool.getUser().id}}).then(res=>{this.list=res.data}).catch(res=>{this.mui.alert("请求超时")});
		}
	}
</script>
<style scoped>
	
</style>