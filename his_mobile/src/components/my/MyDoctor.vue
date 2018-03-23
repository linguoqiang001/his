<template>
	<div>
		<nav-bar title="全部医生"></nav-bar>
		<div class="mui-content">
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" >
				<router-link to="">
					<img class="mui-media-object mui-pull-left" src="../../static/images/doctorHead.jpg">
					<div class="mui-media-body">
						<p class='' style="margin-top:5px;font-size:16px;color:black">肖小凡 </p>
						<p class='mui-ellipsis' style="margin-top:5px;font-size:16px;">副主任医师</p>
					</div>
				</router-link>
			</li>
			
			<li class="mui-table-view-cell mui-media" >
				<router-link to="">
					<img class="mui-media-object mui-pull-left" src="../../static/images/doctorHead.jpg">
					<div class="mui-media-body">
						<p class='' style="margin-top:5px;font-size:16px;color:black">张志坚 </p>
						<p class='mui-ellipsis' style="margin-top:5px;font-size:16px;">主任医师</p>
					</div>
				</router-link>
			</li>
		</ul>
		</div>
	</div>
</template>
<script>
	export default{
		name:'contact',
		data(){
			return {

			}
		},
		mounted(){
		}
	}
</script>
<style scoped>
img{width: 42px;height: 42px ;border-radius: 21px;margin-top: 5px;}
</style>