<template>
<div style="margin-top:100px;">
<div class="col-md-3"></div>
<div class="col-md-5">
	<div class="form-group">
		<label for="oldpassword">原始密码:</label>
		<input type="text" id="oldpassword" class="form-control" placeholder="输入初始密码" >
		<p class="limit"></p>
	</div>
	<div class="form-group" >
		<label for="newpassword">新密码:</label>
		<input type="text" id="newpassword" class="form-control" placeholder="输入新密码">
		<p class="limit">6-16位字符（字母、数字、符号），区分大小写</p>
	</div>
		<div class="form-group" >
		<label for="confirmpassword">确认密码:</label>
		<input type="text" id="confirmpassword" class="form-control" placeholder="再次输入密码">
		<p class="limit"></p>
	</div>
		<div class="form-group"  style="width:120px;display:block;margin:20px auto;">
		<input type="button" value="修改" class="btn btn-primary xiugai">
		<input type="reset" value="重置" class="btn btn-danger">
	</div>
</div> 
</div>
</template>
<script>
	$(function(){	
		 $(".form-control").focus(function(){
		 	for(var i=0;i<$(".form-control").length;i++){
		 		if(i!=1){
		 		   $(".limit").html("");
		 		}else{
		 			$(".limit").eq(i).html("6-16位字符（字母、数字、符号），区分大小写");
		 		}
		 	}
		 });
		 $("#newpassword").focus(function(){
		 	$(this).siblings(".limit").html("6-16位字符（字母、数字、符号），区分大小写").css({color:"#808080"});
		 });
		 var reg=/^[a-zA-Z0-9]{6,18}/; 
		 $(".xiugai").click(function(){
		 	if (!reg.test($("#newpassword").val())) {
		 			$("#newpassword").siblings(".limit").html("格式错误").css({color:"red"});
		 		}
		 	for(var i=0;i<$(".form-control").length;i++){
		 		if($(".form-control").eq(i).val()==""){
		 			$(".limit").eq(i).css({color:"red"});
		 			$(".limit").eq(i).html("密码不能为空");
		 		}
		 		if($("#confirmpassword").val()!=$("#newpassword").val()){
		 			$("#confirmpassword").siblings(".limit").html("两次密码不一样").css({color:"red"});
		 		}
		 		
		 	}
		 });
	});
</script>
<style scoped>
.form-control{width:300px;height:40px;}
label{font-size:15px;}
.form-group{position: relative;}
.limit{color:#808080;font-size:14px;width:300px;position:absolute;top:35px;left:320px;}
</style>