<template>
	<div id="wrap">
		<header id="header" class="mui-bar mui-bar-nav">
			<span class="col-xs-4"></span>
			<div class="col-xs-4 l-mp">
				<router-link :to="{name:'messageDetail'}" class="col-xs-6 text-center l-mp focus">消息</router-link>
				<router-link :to="{name:'contact'}" class="col-xs-6 text-center l-mp">联系人</router-link>
			</div>
			<a class="col-xs-4 text-right l-mp " href="#topPopover">
				<i class="iconfont icon-plus"></i>
			</a>
		</header>
		<div class="mui-content l-stop">
			<div class="mui-input-row mui-search">
			    <input type="search" class="mui-input-clear" placeholder="搜索">
			</div>
			<router-view></router-view>
		</div>

		<div id="topPopover" class="mui-popover">
			<div class="mui-popover-arrow"></div>
			<ul class="mui-table-view">
				<li class="mui-table-view-cell">扫一扫</li>
				<li class="mui-table-view-cell">添加好友</li>
				<li class="mui-table-view-cell">发起群聊</li>
				<li class="mui-table-view-cell">查找群组</li>
				<li class="mui-table-view-cell">我的群组</li>
			</ul>
		</div>

		</div>
	</div>
</template>
<script>
	export default{
		name:'message',
		data(){
			return {

			}
		},
		mounted(){
		}
	}
</script>
<style scoped>
#wrap{position: relative;}
#header a{line-height: 30px;color: #36A5EC;font-size: 14px;}
#header div:nth-child(2){background: white;border-radius: 5px;border:1px solid #36A5EC;margin-top: 5px !important;}
.router-link-active{background: #36A5EC;color: white !important;}
.icon-plus{color: #36A5EC; font-size: 25px;line-height: 40px;}
.mui-input-clear{background: white;}
#topPopover {position: fixed;top: 43px !important;width: 100px;height: 200px;right: 6px; }
#topPopover .mui-popover-arrow {left: 70px !important;}
.mui-table-view-cell:after{left:0;}
</style>