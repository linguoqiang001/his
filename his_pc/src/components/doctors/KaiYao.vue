<template>
   <div class="col-md-12" style="text-align: center;">
	<br>
		<form class="find form-horizontal col-md-12">
			<router-link :to="{name:'wenZhen',query:{patientId:$route.query.patientId}}"  class="btn btn-danger col-md-1">返回</router-link>
			<div class="form-group 	col-sm-5">
		    <label for="name" class="col-sm-4 control-label text-right">按药名查找：</label>
		    <div class="col-sm-8"> 
				<input type="text" class="form-control" id="name"  placeholder="输入药名" v-model="name"  @input="find(1)">
		    </div>
		  	</div>
		  	<div class="form-group 	col-sm-5">
		    <label for="no" class="col-sm-4 control-label" >按编号查找：</label>
		    <div class=" col-sm-8">
		    	<input type="text" class="form-control" id="no" placeholder="输入编号" v-model="no" @input="find(1)">
		    </div>	
  			</div>
		</form>
		<p class="h2 text-info text-center col-md-12">药品表</p>
	 	<table class="table table-bordered text-center table-hover">
	 		<tr class="text-danger h4">
	 			<th class="text-center">序号</th>
	 			<th class="text-center">药名</th>
	 			<th class="text-center">编号</th>
	 			<th class="text-center">单位</th>
	 			<th class="text-center">用法</th>
	 			<th class="text-center">单价</th>
	 			<th class="text-center">操作</th>	
	 		</tr>
	 		<tr class="text-center" v-for="(item,index) in list">
				<td>{{(pageNum-1)*7+index+1}}</td>
				<td>{{item.name}}</td>
				<td>{{item.id}}</td>
				<td>{{item.unit}}</td>
				<td>{{item.touse}}</td>
				<td>{{item.price}}</td>
				<td>	
					<button class="btn btn-primary btn-sm" data-toggle="modal" data-target="#layer" @click="getInfo(item.id,item.name,item.unit,item.touse,item.size,item.price)">添加</button>
				</td>
	 		 </tr>
	 	</table>
		<!-- 弹出框 -->
		<div class="modal fade" tabindex="-1"   id="layer">
			<div class="modal-dialog modal-sm" role="document">
				<div class="modal-content">
					<div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                        <h4 class="modal-title"></h4>
                    </div>
                    <div class="modal-body text-right">
                    	<form class="" >
						<div class="form-group text-left">
							<label for="quantity" class="text-left">数量：</label>
							<input type="number" class="form-control" id="quantity" placeholder="数量" v-model="quantity" min="1">
						</div>
						<div class="form-group text-left">
							<label for="frequency">频率：</label>
							<input type="text" class="form-control" id="frequency" placeholder="频率" v-model="frequency">
						</div>
                        <button data-dismiss="modal" class="btn btn-primary btn-sm" >取消</button>
                        <button data-dismiss="modal" class="btn btn-danger btn-sm" @click="add()">确认</button>
                        </form>
                    </div>
				</div>
			</div>
		</div>
		
		<!-- 分页 -->
	 	 <div class="pagination  center-block" style="display: inline-block;">
	 		<li><a href="#" @click="toStart()">&laquo;</a></li>
			<li><a href="#" v-for="n in this.pages<=5?this.pages:5" @click="dump(n+start-1)">{{n+start-1}}</a></li>
			<li><a href="#" @click="toEnd()">&raquo;</a></li>
	 	</div> 

	</div>

</template>
<script>


export default {
  name: 'kaiyao',
  data () {
    return {
    	no:'',
    	name:'',
    	pages:0,	//总共几页
    	vpage:0,	//能显示几页
    	pageNum:1,	//当前处于哪页
    	start:1,	
    	deleteNum:-1,
    	list:[],
    	drugId:'',
    	quantity:1,
    	frequency:'',
      drugName:'',
      unit:'',
      touse:'',
      size:'',    //规格
      price:''
    }
  },
  methods:{
  	find:function(n){
          this.$axios.get('doctor/limitDrug',{params:{nowPage:n, num:7,drugName:this.name,drugId:this.no}})
        .then(res=>{this.list=res.data;}
        ).catch(err=>{alert("请求超时");}); 

         this.$axios.get('doctor/limitDrugNum',{params:{drugName:this.name,drugId:this.no}})
        .then(res=>{
            var total=res.data;
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
        }
        ).catch(err=>{alert("请求超时");}); 
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
  	getInfo:function(drugId,drugName,drugUnit,touse,size,price){
  		this.drugId=drugId;
      this.drugName=drugName; 
      this.unit=drugUnit;
      this.touse=touse;
      this.size=size;
      this.price=price;
  	},
  	add:function(){
          this.$axios.get('doctor/insertAdvice',{params:{patientId:this.$route.query.patientId,itemName:this.drugName,quantity:this.quantity,frequency:this.frequency,itemId:this.drugId,adviceTypeId:1,unit:this.unit,touse:this.touse,doctorId:this.tool.getUser().id,size:this.size,price:this.price,state:1}})
        .then(res=>{}).catch(err=>{alert("请求超时");}); 
  	}
  },  
  mounted(){
          this.$axios.get('doctor/drug',{params:{nowPage:1, num:7}})
        .then(res=>{this.list=res.data;
              this.start=1;}
        ).catch(err=>{alert("请求超时");}); 

        this.$axios.get('doctor/drugNum',{params:{nowPage:1, num:7}})
        .then(res=>{var total=res.data;
               this.pages=parseInt(total%7==0?total/7:total/7+1);}
        ).catch(err=>{alert("请求超时");});   
  	
  	 }
}
</script>
<style >
.table-bordered th,
.table-bordered td {border: 1px solid #9A9DA2 ;}
.table th,td{padding: 8px;}
.table-hover tr:hover{background: #CED1D5;}
</style>