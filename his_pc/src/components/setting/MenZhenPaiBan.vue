<template>
	<div>
		<br>
		<form class="find form-horizontal col-md-12">
			<div class="form-group 	col-sm-6">
		    <label for="name" class="col-sm-4 control-label text-right">请选择科室：</label>
		    <div class="col-sm-8"> 
				<select class="form-control col-md-12" @change="changeKeShi()"  v-model="keShiId">
				<option v-for="item in keshi" :value="item.id">{{item.name}}</option>
				</select>
		    </div>
		  	</div>
		  	<div class="form-group 	col-sm-6">
		    <label class="col-sm-4 control-label" >请选择房间：</label>
		    <div class=" col-sm-8">
				<select class="form-control col-md-12" v-model="roomId" @change="changeRoom">
					<option v-for="item in room" :value="item.id">{{item.name}}</option>
				</select>
		    </div>	
  			</div>
		</form>
		<p class="h2 text-info text-center col-md-12">门诊排班表</p>
		<div class="col-md-12">
		<table class="table table-bordered text-center table-hover">
	 		<tr class="text-danger h4">
	 			<th class="text-center">时间</th>
	 			<th class="text-center">房名</th>
	 			<th class="text-center">姓名</th>
	 			<th class="text-center">编号</th>
	 			<th class="text-center">操作</th>
	 		</tr>
	 		<tr v-for="item in plan" class="text-center">
	 			<td>{{item.weekName}}</td>
	 			<td>{{item.roomName}}</td>
	 			<td>{{item.doctorName}}</td>
	 			<td>{{item.doctorId}}</td>
	 			<td>
	 				<button class="btn btn-danger" data-toggle="modal" data-target="#layer" @click="xiugai(item.weekId,item.roomId)">修改</button>
	 			</td>
	 		</tr>
	 	</table>
	 	</div>

	 	<!-- Large modal -->
		<div class="modal fade" id="layer" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
		<div class="modal-dialog modal-sm" role="document">
		<div class="modal-content">
			<div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                    <span>&times;</span>
                </button>
                        <h4 class="modal-title">排班修改</h4>
     		</div>
	        <div class="modal-body">
	           	<label for="name" class="control-label text-left">请选择门诊医生：</label>
				<select class="form-control" v-model="doctorId">
					<option v-for="item in doctor" :value="item.id">{{item.name}}</option>
				</select>
				<br>
				<div class="text-center">
				<button data-dismiss="modal" class="btn btn-primary" @click="update">确定</button>
				<button data-dismiss="modal" class="btn btn-danger">取消</button>
				</div>
	        </div>
		</div>
		</div>
		</div>
	</div>
</template>
<script>

export default{
	name:'registration',
	data(){
		return {
			keShiId:'',
			roomId:'',
			keshi:[],
			room:[],
			plan:[],
			doctor:[],
			weekdayId:'',
			roomId:'',
			doctorId:''

		}
	},
	methods:{
		changeKeShi:function(){
			this.$axios.get('room/list',{params:{keShiId:this.keShiId}})
				.then(res=>{
					this.room=res.data;
					this.roomId=this.room[0].id;
					this.$axios.get('room/plan',{params:{roomId:this.roomId}})
					.then(res=>{this.plan=res.data;}
					).catch(err=>{alert("请求超时");});	
				}
				).catch(err=>{alert("请求超时");});	


		},
		changeRoom:function(){
			this.$axios.get('room/plan',{params:{roomId:this.roomId}})
					.then(res=>{this.plan=res.data;}
					).catch(err=>{alert("请求超时");});	
		},
		xiugai:function(weekdayId,roomId){
			this.weekdayId=weekdayId;
			this.roomId=roomId;
			this.$axios.get('setting/getDoctor',{params:{keShiId:this.keShiId}})
					.then(res=>{ this.doctor=res.data;
	                this.doctorId=this.doctor[0].id;}
					).catch(err=>{alert("请求超时");});	
		},
		update:function(){
			this.$axios.get('setting/updateMenZhenPaiBan',{params:{weekdayId:this.weekdayId,roomId:this.roomId,doctorId:this.doctorId}})
					.then(res=>{
						this.$axios.get('room/plan',{params:{roomId:this.roomId}})
						.then(res=>{this.plan=res.data;}
						).catch(err=>{alert("请求超时");});	
					}
			).catch(err=>{alert("请求超时");});	
		}

  	},		
  	mounted(){
  		this.$axios.get('keshi')
				.then(res=>{
					this.keshi=res.data;
  					this.keShiId=this.keshi[0].id;
  					this.$axios.get('room/list',{params:{keShiId:this.keShiId}})
					.then(res=>{
							this.room=res.data;
							this.roomId=this.room[0].id;
							this.$axios.get('room/plan',{params:{roomId:this.roomId}})
							.then(res=>{this.plan=res.data;}
							).catch(err=>{alert("请求超时");});	
					}
					).catch(err=>{alert("请求超时");});	
		}
		).catch(err=>{alert("请求超时");});		
  	}
}
</script>
<style scoped>
.table-bordered th,
.table-bordered td {border: 1px solid #ddd ;}
.table th,td{padding: 8px;}
.table-hover tr:hover{background: #F5F5F5;}
</style>