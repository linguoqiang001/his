<template>
	<div>
		<nav-bar title="设置"></nav-bar>
		<div class="mui-content">
			<ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<router-link :to="{name:'noExploit',query:{nav:'提醒设置'}}" class="mui-navigate-right" >
						<span>提醒设置</span>
					</router-link>
				</li>
				<li class="mui-table-view-cell">
					<router-link :to="{name:'noExploit',query:{nav:'修改密码'}}" class="mui-navigate-right">
						修改密码
					</router-link>
				</li>
				<li class="mui-table-view-cell">
					<router-link :to="{name:'noExploit',query:{nav:'版本介绍'}}" class="mui-navigate-right">
						<span>版本介绍</span>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		name:'setting',
		data(){
			return {

			}
		}
	}
</script>
<style>
.iconfont{font-size: 25px;line-height: 30px;}
#div1{background: red;height: 100px;float: left;}
#div2{background: black;height: 100px;float:right;}
</style>