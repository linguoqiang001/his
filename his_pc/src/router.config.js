import 	Main from './components/main/Main.vue'
import  ChangePsw from './components/ChangePsw.vue'
import  Doctor from './components/Doctor.vue'
import  DetailDoctor from './components/DetailDoctor.vue'
import  Registration from './components/patients/Registration.vue'
import  Rooms from './components/patients/Rooms.vue'
import  Todo from './components/patients/Todo.vue'		
import  DaiZhen from './components/doctors/DaiZhen.vue'			
import  WenZhen from './components/doctors/WenZhen.vue'	
import  KaiYao from './components/doctors/KaiYao.vue'		
import  MenZhenPaiBan from './components/setting/MenZhenPaiBan.vue'		
import  AddPatient from './components/agency/AddPatient.vue'	
import  AddMoney from './components/agency/AddMoney.vue'
import  Login from './components/login/Login.vue' 
import  AddDoctor from './components/doctors/AddDoctor.vue'
import  JiaoHao from './components/drugstore/JiaoHao.vue'
import  Introduce from './components/main/Introduce.vue'

export default{
	routes:[
		
		{path:'/',redirect:{name:'login'}},
		{name:'login',path:'/login', component:Login},
		{name:'main',path:'/main',component:Main,children:[
			{path:'/',redirect:{name:'introduce'}},
			{name:'introduce',path:'/introduce',component:Introduce},
			{name:'changePsw',path:'/changePsw', component:ChangePsw},
			{name:'doctor',path:'/doctor', component:Doctor},
			{name:'detailDoctor',path:'/doctor/detailDoctor', component:DetailDoctor},
			{name:'registration',path:'/patients/registration', component:Registration},
			{name:'rooms',path:'/patients/rooms', component:Rooms},
			{name:'todo',path:'/patients/todo', component:Todo},
			{name:'wenZhen',path:'/doctors/wenzhen', component:WenZhen},
			{name:'daiZhen',path:'/doctors/daizhen', component:DaiZhen},
			{name:'kaiYao',path:'/doctors/kaiYao', component:KaiYao},
			{name:'menZhenPaiBan',path:'/setting/menZhenPaiBan', component:MenZhenPaiBan},
			{name:'addPatient',path:'/agency/addpatient', component:AddPatient},
			{name:'addMoney',path:'/agency/addmoney', component:AddMoney},
			{name:'addDoctor',path:'/doctor/addDoctor',component:AddDoctor},
			{name:'jiaoHao',path:'/drugstore/jiaoHao',component:JiaoHao}
		]}
	]
}	