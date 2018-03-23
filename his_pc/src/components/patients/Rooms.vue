<template>
	<div class="col-md-12">
		<br>
		<div class="col-md-12 select text-left">点击进行挂号：</div>
		<div class="col-md-12">
			<a href="#" class="col-md-4" v-for="item in list" data-target="#layer" data-toggle="modal" @click="roomId=item.roomId">
				<div class="col-md-2"></div>
				<div class="col-md-9 text-center list">
					<p>房间号：{{item.roomName}}</p>
					<p>医生：{{item.doctorName}}</p>
					<p>医生编号：{{item.doctorId}}</p>
					<p>当前等候人数:{{item.waitNum}}</p>

				</div>
			</a>
		</div>
		<!-- 弹出框 -->
		<div role="dialog" class="modal fade bs-example-modal-sm" id="layer">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                        <h4 class="modal-title">确定挂号？</h4>
                    </div>
                    <div class="modal-body text-right">
                        <button data-dismiss="modal" class="btn btn-primary btn-sm" >取消</button>
                        <button data-dismiss="modal" class="btn btn-danger btn-sm"data-toggle="modal" data-target=".tishi" @click="guahao()" >确认</button>
                    </div>
                </div>
            </div>
        </div>
		<!-- 弹出框二 -->
		<div class="modal fade tishi" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" >
		<div class="modal-dialog modal-sm" role="document">
		<div class="modal-content">
			<div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                        <h4 class="modal-title text-warning" v-show="flag==1">挂号成功</h4>
                        <h4 class="modal-title text-warning" v-show="flag==0">挂号失败</h4>
             </div>
             <div class="modal-body text-right" v-show="flag==1">
                       	<h3 class="text-center">您是第{{total}}号</h3>
                       	<h3 class="text-center">当前等候人数{{piaoHao}}人</h3>
             </div>
             <div class="modal-body text-right" v-show="flag==0">
                       	<h3 class="text-center">请勿重复挂号</h3>              
             </div>
		</div>
		</div>
		</div>
	</div>
</template>
<script>
	export default{
	name:'rooms',
	data(){
		return {
			list :[],
			roomId:0,
			total:'',
			piaoHao:'',
			flag:1,
		}
	},
	methods:{
		guahao:function(){
		this.$axios.get('guahao',{params:{roomId:this.roomId,patientId:this.tool.getUser().id}})
			.then(res=>{
			if(res.data==0){
				this.flag=0;
			}
			else{
				var index=res.data.indexOf("|");
				this.total=res.data.substr(0,index);
				this.piaoHao=res.data.substr(index+1);
			}
			this.$axios.get('room/menZhenRoom',{params:{keShiId:this.$route.query.keShiId}})
			.then(res=>{this.list=res.data}
			).catch(err=>{alert("请求超时");});


  		}
  		).catch(err=>{alert("请求超时");});



		}
  	},
  	mounted(){
  		this.$axios.get('room/menZhenRoom',{params:{keShiId:this.$route.query.keShiId}})
  		.then(res=>{this.list=res.data}
  		).catch(err=>{alert("请求超时");});
  	}
}
</script>
<style scoped>
	.list{background:#3E88C5;margin-top: 40px;box-shadow:3px 3px 8px #30638e;border-radius: 2px;}
	.list>p{color:white;font-size: 18px;font-weight: bold;}
	.select{font-size: 22px;color: #4E849E;font-weight: bold;}
</style>