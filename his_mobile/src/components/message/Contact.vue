<template>
	<div>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" >
				<router-link :to="{name:'noExploit',query:{nav:'我的群组'}}">
					<img class="mui-media-object mui-pull-left" src="../../static/images/qunzu.png">
					<div class="mui-media-body">
						<p class='mui-ellipsis' style="margin-top:10px;font-size:16px;">我的群组</p>
					</div>
				</router-link>
			</li>
			
			<li class="mui-table-view-cell mui-media" >
				<router-link :to="{name:'noExploit',query:{nav:'手机通讯录'}}">
					<img class="mui-media-object mui-pull-left" src="../../static/images/tongxunlu.png">
					<div class="mui-media-body">
						<p class='mui-ellipsis' style="margin-top:10px;font-size:16px;">手机通讯录</p>
					</div>
				</router-link>
			</li>
		</ul>
	
		<p class="l-stop" style="margin-left:10px;">我的好友</p>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" >
				<router-link :to="{name:'dialog',query:{name:'客服',imgName:'./dist/kefu.png'}}">
					<img class="mui-media-object mui-pull-left" src="../../static/images/kefu.png">
					<div class="mui-media-body">
						<p class='mui-ellipsis' style="margin-top:10px;font-size:16px;">客服</p>
					</div>
				</router-link>
			</li>
		</ul>
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

</style>