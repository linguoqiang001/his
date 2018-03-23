<template>
	<div class="l-bottom l-overflow">
		
		<div class="mui-content">
		<mt-swipe :auto="4000" id="lunbo">
		<mt-swipe-item>
			<router-link :to="{name:'noExploit',query:{nav:'医院动态'}}">
				<img src="../../static/images/lunbo/l1.jpg">
			</router-link>
			
		</mt-swipe-item>
		<mt-swipe-item>
			<router-link :to="{name:'noExploit',query:{nav:'医院动态'}}">
				<img src="../../static/images/lunbo/l2.jpg">
			</router-link>
		
		</mt-swipe-item>
		<mt-swipe-item>
			<router-link :to="{name:'noExploit',query:{nav:'医院动态'}}">
				<img src="../../static/images/lunbo/l3.jpg">
			</router-link>
	
		</mt-swipe-item>
		</mt-swipe>

		<div class="text-center l-white col-xs-12 l-mp " style="padding-top:15px  !important;">
			<div class="col-xs-12 l-top l-mp ">
				<router-link :to="{name:'guaHao'}"  class="col-xs-4" >
					<svg class="icon" aria-hidden="true">
					  <use xlink:href="#icon-yuyueguahao"></use>
					</svg>
					<p>预约挂号</p>
				</router-link> 
					<router-link :to="{name:'doctorConsult'}"  class="col-xs-4" >
					<svg class="icon" aria-hidden="true" >
					  <use xlink:href="#icon-zixunyisheng"></use>
					</svg>
					<p>咨询医生</p>
				</router-link> 
				<router-link :to="{name:'todo'}"  class="col-xs-4" >
					<svg class="icon" aria-hidden="true">
					  <use xlink:href="#icon-daibanshixiang"></use>
					</svg>
					<p>待办事项</p>
				</router-link> 
			</div>
			<div class="col-xs-12 l-top l-mp">	
				<router-link :to="{name:'jiaoFei'}"  class="col-xs-4" >
					<svg class="icon" aria-hidden="true">
					  <use xlink:href="#icon-jiaofei"></use>
					</svg>
					<p>缴费</p>
				</router-link>
				<router-link :to="{name:'schedule'}"  class="col-xs-4" >
					<svg class="icon" aria-hidden="true">
					  <use xlink:href="#icon-paibanguanli"></use>
					</svg>
					<p>门诊排班</p>
				</router-link>
				<router-link :to="{name:'consumption'}"  class="col-xs-4" >
					<svg class="icon" aria-hidden="true">
					  <use xlink:href="#icon-xiaofeijilu"></use>
					</svg>
					<p>消费记录</p>
				</router-link>
			</div>	
		</div>

		<div class="col-xs-12 l-white l-stop health">
			<span class="col-xs-4 ">今日健康</span>
			<router-link to="" class="col-xs-8 text-right">更多</router-link>
		</div>
		<ul class="mui-table-view col-xs-12">
			<li class="mui-table-view-cell mui-media">
				<router-link :to="{name:'noExploit',query:{nav:'今日健康'}}">
					<img class="mui-media-object mui-pull-left" src="../../static/images/jiankang/1.jpg">
					<div class="mui-media-body">
						什么食物能缓解老人失眠？
						<p class='mui-ellipsis' style="margin-top:5px;">老年人经常失眠，应该要多吃促进睡眠的食物，尤其是晚上睡觉时可以喝一杯热牛奶，能够改善睡眠质量，晚上睡觉前吃饭不宜吃得太饱，应该要控制七分饱或者八分饱，不能吃得太饱，什么食物能缓解老人失眠。</p>
					</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media">
				<router-link :to="{name:'noExploit',query:{nav:'今日健康'}}">
					<img class="mui-media-object mui-pull-left" src="../../static/images/jiankang/2.jpg">
					<div class="mui-media-body">
						股骨头坏死吃什么如何决定？
						<p class='mui-ellipsis' style="margin-top:5px;">股骨头坏死吃什么，决定或者是对于股骨头坏死患者的饮食上应该是有几个方面需要得到我们对于这样的一些认同，有的时候我们应该去发现和对于吃什么进行好更多的参考，而且也应该按照这样的机会好好发展。</p>
					</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media">
				<router-link :to="{name:'noExploit',query:{nav:'今日健康'}}">
					<img class="mui-media-object mui-pull-left" src="../../static/images/jiankang/3.jpg">
					<div class="mui-media-body">
						小儿哮喘的主要过敏源有哪些呢？
						<p class='mui-ellipsis' style="margin-top:5px;">小儿之所以会有哮喘，通常和小儿的过敏体质有关，如果想要远离哮喘，我们除了要改善小儿的体质外，还应该让小儿尽量远离身边的过敏源，这样才可以治好小儿哮</p>
					</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media">
				<router-link :to="{name:'noExploit',query:{nav:'今日健康'}}">
					<img class="mui-media-object mui-pull-left" src="../../static/images/jiankang/4.jpg">
					<div class="mui-media-body">
						精神病患者该如何自我调理？
						<p class='mui-ellipsis' style="margin-top:5px;">面对着生活中的种种压力和负面的影响，健康受损，生活降低，我们需要重视自我调理。精神病患者也需要学习自我调理，那么“精神病患者该如何自我调理”，下面我们就来一起学一学吧</p>
					</div>
				</router-link>
			</li>
		</ul>
		</div>

	</div>		
</template>
<script>
export default{
	name:'home',
	data(){
		return {
				 
		}
	},
	mounted(){
	},
	methods:{
	}
}
</script>
<style scoped>
.mint-swipe{height: 200px;}
.mint-swipe img{height: 100%;width: 100%;}
.icon{font-size: 50px;}
.health span{color: #AEAEB2;font-size: 14px;padding: 5px 0;}
.health a{color: #AEAEB2;font-size: 14px;padding: 5px 0;}
</style>