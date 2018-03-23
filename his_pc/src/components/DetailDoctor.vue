<template >
	<div class="col-md-12" style="overflow:scroll;height: 595px;">
		<h2 class="col-md-12 text-info text-center">个人信息表</h2>
		<table class="table table-bordered text-center">
			<tr>
				<td style="width:120px;">姓名</td>
				<td>林国强</td>
				<td>编号</td>
				<td>1001</td>
				<td rowspan="4" >&nbsp;头像&nbsp;</td>
				<td rowspan="4" ><img src="../../resources/images/1001.jpg" id="headimg" class="mp"></td>
			</tr>
			<tr>
				<td>出生日期</td>
				<td>1996.08.12</td>
				<td>籍贯</td>
				<td>福建泉州</td>
			</tr>
			<tr>
				<td>身份证号码</td>
				<td>350526199408125010</td>
				<td>性别</td>
				<td>男</td>
			</tr>
			<tr>
				<td>国籍</td>
				<td>中国</td>
				<td>居住地</td>
				<td>福建泉州</td>
			</tr>
			<tr>
				<td>婚姻状况</td>
				<td>未婚</td>
				<td>政治面貌</td>
				<td>团员</td>
				<td>学历</td>
				<td>本科</td>
			</tr>
			<tr>
				<td>联系方式</td>
				<td>17720808331</td>
				<td>Email</td>
				<td>1317915039@qq.com</td>
				<td>家庭电话</td>
				<td>0595-23500331</td>
			</tr>
			<tr>
				<td>职称</td>
				<td>主治医师</td>
				<td>所属科室</td>
				<td>内科</td>
				<td>擅长</td>
				<td>心血管</td>
			</tr>

			<tr >
				<td >个人简介</td>
				<td colspan="5"><div id="jianjie" class="text-left
				">我是一名应届毕业生，来自湖北武汉，农村生活铸就了我淳朴、诚实、善良的性格，培养了我不怕困难挫折，不服输的奋斗精神。我深知学习机会来之不易，在校期间非常重视计算机基础知识的学习，取得了良好的成绩。基本上熟悉了pc机的原理与构造，能熟练地应用各种机床操作系统，通过了劳动部《模具设计师》高级级认证。 在学习专业知识的同时，还十分重视培养自己的动手实践能力，利用暑假参加了长江融达企业给予的宝贵实习机会，了解的各式机床的操作，以及简单数控机床的编程及操作。 我冒昧向贵企业毛遂自荐，给我一个机会，给您一个选择，我相信您是正确的。 祝贵企业蓬勃发展，您的事业蒸蒸日上! 此致敬礼。</div></td>
			</tr>
			<tr>
				<td rowspan="3">个人荣誉</td>
				<td>时间</td>
				<td>2000.10.10</td>
				<td>简介</td>
				<td colspan="2">省医疗实践一等奖</td>
			</tr>
			<tr>
				<td>时间</td>
				<td>2000.10.10</td>
				<td>简介</td>
				<td colspan="2">省医疗实践一等奖</td>
			</tr>
			<tr>
				<td>时间</td>
				<td>2000.10.10</td>
				<td>简介</td>
				<td colspan="2">省医疗实践一等奖</td>
			</tr>
			<tr>
				<td rowspan="2">教育/培训经历</td>
				<td>时间</td>
				<td>2001.10.02</td>
				<td>简介</td>
				<td colspan="2">福建中医药本科四年</td>
			</tr>
			<tr>
				<td>时间</td>
				<td>2001.10.02</td>
				<td>简介</td>
				<td colspan="2">福建中医药本科四年</td>
			</tr>
			<tr>
				<td rowspan="2">工作经历</td>
				<td>公司名称</td>
				<td>福建省第一人名医院</td>
				<td>简介</td>
				<td colspan="2">从事麻醉工作</td>
			</tr>
		</table>
	</div>
</template>
<script type="text/javascript">
export default {
  name: 'app',
  data () {
    return {
    	lists:[]
    }
  },
  methods:{

  }
}
</script>
<style scoped>
.table-bordered th,
.table-bordered td {border: 1px solid #ddd ;}
.table th,td{padding: 8px;}
#headimg{width: 120px;height: 160px;}
</style>