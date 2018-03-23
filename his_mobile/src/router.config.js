import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Home from './components/home/Home.vue'
import Main from './components/Main.vue'
import GuaHao from './components/home/GuaHao.vue'
import Rooms from './components/home/Rooms.vue'
import Message from './components/message/Message.vue'
import MyInfo from './components/my/MyInfo.vue'
import MyAccount from './components/my/MyAccount.vue'
import Setting from './components/my/Setting.vue'
import MyInformation from './components/my/MyInformation.vue'
import HealthyInfo from './components/home/HealthyInfo.vue'
import DoctorConsult from './components/home/DoctorConsult.vue'
import Todo from './components/home/Todo.vue'
import Schedule from './components/home/Schedule.vue'
import Consumption from './components/home/Consumption.vue'
import JiaoFei from './components/home/JiaoFei.vue'
import Chat from './components/home/Chat.vue'
import PaiBanDoctor from './components/home/PaiBanDoctor.vue'
import PaiBanRoom from './components/home/PaiBanRoom.vue'
import MessageDetail from './components/message/MessageDetail.vue'
import Contact from './components/message/Contact.vue'
import MyDoctor from './components/my/MyDoctor.vue'
import MyCollect from './components/my/MyCollect.vue'
import TodoDetail from './components/home/TodoDetail.vue'
import Dialog from './components/message/Dialog.vue'
import ToComment from './components/message/ToComment.vue'
import Comment from './components/message/Comment.vue'
import NoExploit from './components/common/NoExploit.vue'
import Test from './components/home/Test.vue'

export default{
	//linkActiveClass:'mui-active',
	routes:[	
		//{path:'/',redirect:{name:'login'}},
		{name:'login',path:'/login', component:Login},
		{name:'register',path:'/register',component:Register},
		{name:'main',path:'/main',component:Main,children:
			[
				{name:'home',path:'/home',component:Home},
				{name:'message',path:'/message',component:Message,children:
					[
						{path:'/',redirect:{name:'messageDetail'}},
						{name:'contact',path:'/contact',component:Contact},
						{name:'messageDetail',path:'/messageDetail',component:MessageDetail}
					]

				},
				{name:'myInfo',path:'/myInfo',component:MyInfo}
			]
		},
		{name:'guaHao',path:'/guaHao',component:GuaHao},
		{name:'rooms',path:'/rooms',component:Rooms},
		{name:'myAccount',path:'/myAccount',component:MyAccount},
		{name:'setting',path:'/setting',component:Setting},
		{name:'myInformation',path:'/myInformation',component:MyInformation},
		{name:'healthyInfo',path:'/healthyInfo',component:HealthyInfo},
		{name:'doctorConsult',path:'/doctorConsult',component:DoctorConsult},
		{name:'todo',path:'/todo',component:Todo},
		{name:'schedule',path:'/schedule',component:Schedule},
		{name:'jiaoFei',path:'/jiaoFei',component:JiaoFei},
		{name:'consumption',path:'/consumption',component:Consumption},
		{name:'chat',path:'/chat',component:Chat},
		{name:'paiBanDoctor',path:'/paiBanDoctor',component:PaiBanDoctor},
		{name:'paiBanRoom',path:'/paiBanRoom',component:PaiBanRoom},
		{name:'myDoctor',path:'/myDoctor',component:MyDoctor},
		{name:'myCollect',path:'/myCollect',component:MyCollect},
		{name:'todoDetail',path:'/todoDetail',component:TodoDetail},
		{name:'dialog',path:'/dialog',component:Dialog},
		{name:'toComment',path:'/toComment',component:ToComment},
		{name:'comment',path:'/comment',component:Comment},
		{name:'noExploit',path:'/noExploit',component:NoExploit},
		{name:'test',path:'/test',component:Test}
	]
}	