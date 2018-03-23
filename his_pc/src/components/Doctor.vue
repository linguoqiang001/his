<template>
   <div class="col-md-12" style="text-align: center;">
	<br>
		<form class="find form-horizontal col-md-12">
			<div class="form-group 	col-sm-6">
		    <label for="name" class="col-sm-4 control-label text-right">按姓名查找：</label>
		    <div class="col-sm-8"> 
				<input type="text" class="form-control" id="name"  placeholder="输入姓名" v-model="name"  @input="find(1)">
		    </div>
		  	</div>
		  	<div class="form-group 	col-sm-6">
		    <label for="no" class="col-sm-4 control-label" >按编号查找：</label>
		    <div class=" col-sm-8">
		    	<input type="text" class="form-control" id="no" placeholder="输入编号" v-model="no" @input="find(1)">
		    </div>	
  			</div>
		</form>
		<p class="h2 text-info text-center col-md-12">医生信息表</p>
	 	<table class="table table-bordered text-center table-hover">
	 		<tr class="text-danger h4">
	 			<th class="text-center">序号</th>
	 			<th class="text-center">姓名</th>
	 			<th class="text-center">编号</th>
	 			<th class="text-center">科室</th>
	 			<th class="text-center">操作</th>
	 		</tr>
	 		<tr class="text-center" v-for="(item,index) in doctors">
				<td>{{(pageNum-1)*7+index+1}}</td>
				<td>{{item.name}}</td>
				<td>{{item.no}}</td>
				<td>{{item.departmentNo}}</td>
				<td>	
						<router-link to="/doctor/detailDoctor" class="btn btn-primary btn-sm">详细</router-link>
						<button class="btn btn-warning btn-sm">修改</button>
						<button class="btn btn-danger btn-sm" data-toggle="modal" data-target="#layer" @click="deleteNum=item.no">删除</button>
				</td>
	 		 </tr>
	 	</table>
		<!-- 弹出框 -->
		<div role="dialog" class="modal fade bs-example-modal-sm" id="layer">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                        <h4 class="modal-title">确认删除么?</h4>
                    </div>
                    <div class="modal-body text-right">
                        <button data-dismiss="modal" class="btn btn-primary btn-sm" >取消</button>
                        <button data-dismiss="modal" class="btn btn-danger btn-sm" @click="deleteMsg()">确认</button>
                    </div>
                </div>
            </div>
        </div>
		<router-view></router-view>
	 	 <div class="pagination  center-block" style="display: inline-block;">
	 		<li><a href="#" @click="toStart()">&laquo;</a></li>
			<li><a href="#" v-for="n in this.pages<=5?this.pages:5" @click="dump(n+start-1)">{{n+start-1}}</a></li>
			<li><a href="#" @click="toEnd()">&raquo;</a></li>
	 	</div> 

	</div>

</template>
<script>


export default {
  name: 'doctor',
  data () {
    return {
    	no:'',
    	name:'',
    	departmentNo:'',
    	pages:0,	//总共几页
    	vpage:0,	//能显示几页
    	pageNum:1,	//当前处于哪页
    	start:1,	
    	deleteNum:-1,
    	doctors:[]
    }
  },
  methods:{
  	find:function(n){
      this.$http.post('servlet/DoctorServlet',{
          type:1,     //1代表查询 2代表删除
          name:this.name,
          no:this.no,
          nowPage:n,
          num:7
      },{
          emulateJSON:true
      }).then(function(res){
          var data=res.data;
          var total=data.total;
          this.doctors=data.list;
          this.pages=parseInt(total%7==0?total/7:total/7+1);
          this.start=1;
          this.pageNum=n;
          if(this.pageNum==this.pages){
            this.start=this.pages<=5?1:this.pages-4;
          }else if(this.pageNum<3){
            this.start=1;
          }else if(this.pageNum>=this.pages-1){
            this.start=this.pages-4;
          }else if(this.pageNum>=this.pages-1){
            this.start=this.pages-4;
          }else{
            this.start=this.pageNum-2;
          }
          
      },function(res){
          alert("请求超时");
      });
  	},
	  dump:function(n){
      this.find(n);
    },
    toStart:function(){
      this.dump(1);
  		this.pageNum=1;
  		this.start=1;
  	},
    toEnd:function(){
      this.dump(this.pages);
  	},
    deleteMsg:function(){
      this.$http.post('servlet/DoctorServlet',{
          type:2,
          no:this.deleteNum
          },{
              emulateJSON:true
          }).then(function(res){
                if(this.doctors.length==1){
                  this.find(this.pageNum-1);
                }else{
                  this.find(this.pageNum);
                }
                
           }, function(res){
              //数据交互失败
              alert(请求超时);
        });
     }
  },    
  mounted(){
    //与后台交互
     this.$http.post('servlet/DoctorServlet',{
          type:1,
          name:this.name,
          no:this.no,
          nowPage:1,
          num:7
          },{
              emulateJSON:true
          }).then(function(res){
              var data=res.data;
              var total=data.total;
              this.doctors=data.list;
              this.pages=parseInt(total%7==0?total/7:total/7+1);
              this.start=1;
           }, function(res){
              //数据交互失败
              alert(请求超时);
        });
  	
  	 }
}
</script>
<style >
.table-bordered th,
.table-bordered td {border: 1px solid #9A9DA2 ;}
.table th,td{padding: 8px;}
.table-hover tr:hover{background: #CED1D5;}
</style>