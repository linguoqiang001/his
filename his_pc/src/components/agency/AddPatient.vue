<template>
	<div style="text-align:center;">
		<h4 class="col-md-12 text-justify">前台 >> 新增患者</h4>
		<div class="col-md-2"></div>
		<form class="info form-horizontal col-md-6">
		    <label for="name" class="col-sm-4 control-label" >姓名：</label>
		    <div class=" col-sm-8">
		    	<input type="text" class="form-control" id="name" placeholder="姓名" v-model="name" required="required">
		    </div>	
		    <label for="gender" class="col-sm-4 control-label" >性别：</label>
		    <div class="col-sm-8" id="gender">
		    	<label class="col-md-4"><input name="gender" type="radio" v-model="gender" value="1" required="required"/> 男 </label> 
				<label class="col-md-4"><input name="gender" type="radio" v-model="gender" value="0"required="required" /> 女 </label> 
		    </div>
		    <label for="number" class="col-sm-4 control-label" >年龄：</label>
		    <div class=" col-sm-8">
		    	<input type="number" class="form-control" id="age" placeholder="年龄" v-model="age" required="required">
		    </div>
		    <label for="password" class="col-sm-4 control-label" >密码：</label>
		    <div class=" col-sm-8">
		    	<input type="password" class="form-control" id="password" placeholder="密码" v-model="password" required="required">
		    </div>
		    <label for="money" class="col-sm-4 control-label" >预缴金额：</label>
		    <div class=" col-sm-8">
		    	<input type="number" class="form-control" id="cellphone" placeholder="预缴金额" v-model="money" required="required">
		    </div>
		    <label for="tel" class="col-sm-4 control-label" >联系电话：</label>
		    <div class=" col-sm-8">
		    	<input type="text" class="form-control" id="cellphone" placeholder="联系电话" v-model="cellphone" required="required">
		    </div>
		    <label for="address" class="col-sm-4 control-label" >详细地址：</label>
		    <div class=" col-sm-8">
		    	<input type="text" class="form-control" id="address" placeholder="详细地址" v-model="address" required="required">
		    </div>
		    <div class="col-md-12" style="margin-top:15px;">
		    	<button class="btn btn-primary" @click="addPatient()" type="button" data-toggle="modal" data-target="#layer">添加</button>
		    	<button class="btn btn-danger" type="reset">重置</button>
		    </div>
		</form>
			<div class="modal fade" tabindex="-1"   id="layer">
			<div class="modal-dialog modal-sm">
				<div class="modal-content">
					<div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                        <h4 class="modal-title" v-show="flag==1">添加成功</h4>
                        <h4 class="modal-title" v-show="flag==0">添加失败</h4>
                    </div>
                    <div class="modal-body text-right">
						<div class="form-group text-left">
							<p class="text-muted" v-show="flag==1">该患者编号为：{{id}}</p>
							<p class="text-muted" v-show="flag==0">请求超时</p>
						</div>
                    </div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default{
		name:'AddPatient',
		data(){
			return {
				name:'',
				gender:1,
				age:'',
				password:'',
				cellphone:'',
				address:'',
				money:'',
				flag:0,
				id:''
			}	
		},
		methods:{
			addPatient:function(){
			this.$axios.get('agency/addPatient',{params:{name:this.name,gender:this.gender,age:this.age,password:this.password,yue:this.money}})
			.then(res=>{
				this.id=res.data;
				this.flag=1;
				this.$axios.get('message/messageInit',{params:{patientId:this.id}}).then()
			}).catch(err=>{this.flag=0;});	
			}
	}
}
</script>
<style scoped>
input,label{margin-top:15px;}
</style>