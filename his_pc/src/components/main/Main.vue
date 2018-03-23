<template>
  <div id="app">
    <div class="container">
        <div class="head">
          <div class="logo col-md-4"></div>        
        </div>   
        <div class="bottom col-md-12 mp">
            <!-- 左边区域 -->
            <div class="left mp col-md-2" >
                <ul class="mp">
                <li><router-link :to="{name:'introduce'}"><i class="iconfont icon-wxbzhuye"></i>系统首页<i class="iconfont icon-more"></i></router-link>              
                </li>
                <li><a href="javascript:void(0);" @click="sublist(1)"><i class="iconfont icon-yisheng"></i>医生中心<i class="iconfont icon-more"></i></a>
                <div class="sub" v-show="show[1]">
                <router-link :to="{name:'daiZhen'}"><i class="iconfont icon-form"></i>待诊患者</router-link>
                <router-link :to="{name:'addDoctor'}"><i class="iconfont icon-form"></i>添加医生</router-link>
                </div>
                </li>                
                <li><a href="javascript:void(0);" @click="sublist(2)"><i class="iconfont icon-search"></i>药房<i class="iconfont icon-more"></i></a>
                <div class="sub" v-show="show[2]">
                  <router-link :to="{name:'jiaoHao'}"><i class="iconfont icon-form"></i>叫号</router-link>
                </div>
                </li>
                <li><a href="javascript:void(0);" @click="sublist(3)"><i class="iconfont icon-qiantai"></i>前台<i class="iconfont icon-more"></i></a>
                <div class="sub" v-show="show[3]">
                  <router-link :to="{name:'addPatient'}"><i class="iconfont icon-form"></i>患者录入</router-link>
                  <router-link :to="{name:'addMoney'}"><i class="iconfont icon-form"></i>缴费</router-link>
                </div>
                </li>
                <li><a href="javascript:void(0);" @click="sublist(4)"><i class="iconfont icon-set"></i>设置<i class="iconfont icon-more"></i></a>
                <div class="sub" v-show="show[4]">
                <router-link :to="{name:'menZhenPaiBan'}"><i class="iconfont icon-form"></i>门诊排班</router-link>               
                </div>
                </li>
                </ul>
            </div>
            <!-- 右边区域 -->
            <div class="right col-md-10 mp">
              <div class="nav-wrap container-fluid  mp navbar navbar-default">
                <div class="navbar-header" >
                  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav" aria-expanded="false">
                      <span class="sr-only" ></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                  </button>
                  <router-link :to="{name:'introduce'}" class="navbar-brand" style="color:white;font-weight:bold;font-size:16px;  ">系统首页</router-link>
                </div>
                <div class="collapse navbar-collapse" id="nav">
                  <ul class="nav navbar-nav">
                    <li class="dropdown " >
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" >系统管理<span class="caret"></span></a>
                    <ul class="dropdown-menu">
                    <li><router-link :to="{name:'changePsw'}">修改密码</router-link></li>
                    <li><a href="#">修改信息</a></li>
                    <li><a href="#">退出</a></li>
                    </ul>
                    </li>
                    <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" >信息管理<span class="caret"></span></a>
                    <ul class="dropdown-menu">
                    <li><router-link to="/doctor">医生</router-link></li>
                    <li><a href="#">病人</a></li>
                    <li><a href="#">门诊信息</a></li>
                    </ul>
                    </li>
                    <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" >统计查询<span class="caret"></span></a>
                    <ul class="dropdown-menu">
                    <li><router-link to="">门诊统计</router-link></li>
                    <li><a href="#">修改信息</a></li>
                    <li><a href="#">退出</a></li>
                    </ul>
                    </li>
                  </ul>
                </div> 
              </div> 
              <!-- 显示区域 -->
              <div class="right_bottom col-md-12" id="wrap">
                  <router-view ></router-view>
              </div>
            </div>
        </div> <!--bottom -->
    </div>  <!--container --> 
  </div>


</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      patient:'',
      doctor:'',
      show:[false,false,false,false,false]
    }
  },
  methods:{
    sublist:function(n){
      this.show[n]=!this.show[n];
      this.show=[this.show[0],this.show[1],this.show[2],this.show[3],this.show[4]];
    }
  },
  mounted(){
    $(".dropdown").click(function(event) {
    $(".dropdown-toggle").css({backgroundColor:"#1B668E"});
    $(".dropdown-toggle").eq($(this).index()).css({backgroundColor:"#105478"});
    });
  }
}
</script>

<style scoped>
.dropdown-toggle{background:#1B668E;}
.dropdown:hover{background:#105478;}
.container{width: 85%;}
.mp{margin: 0;padding: 0;}
.head{height: 80px;;margin-top: 20px;position: relative;   } 
.head .logo{background: url(../../../resources/images/logo.png) no-repeat;height: 80px;background-size: 150% 80%;} 
.head>.head_right{height: 20px;position:absolute;right: 0;top:40px;} 
.head>.head_right>span{color:#1B668E;font-size:17px;font-weight: 500;margin-right: 10px; } 
.head>.head_right>i{display:inline-block;width: 30px;height: 30px;color:#1B668E;font-weight: bold;margin-left: 30px;cursor: pointer;} 
.bottom{height: 650px;margin-top:10px;border:1px solid black;} 
.bottom .left{height: 650px;background:#2B2E35;}
.bottom .left>ul>li{overflow: hidden;position: relative;}
.bottom .left>ul>li>a{height: 40px;border-top: 1px solid #798086; border-bottom: 1px solid #000007;background: #2B2E35;color: #9A9DA2;line-height: 40px;display: block;}
.bottom .left>ul>li>a>i{width: 30px;height: 30px;font-size: 20px;font-weight: bold;margin-right: 10px;margin-left: 10px;}
.bottom .left>ul>li>div{padding-top:5px;background:#363B41;}
.bottmm .left>ul>li>div>a{width:150px;height: 30px;background:#363B41;color:#9A9DA2;font-size:15px;cursor: pointer;display: block; }
.bottom .left .sub{padding-bottom: 5px;}
.bottom .left .sub>a{display: block;color:#9A9DA2;text-indent: 40px;margin-top: 5px;}
.bottom .left .sub>a:hover{color: white;}
.bottom .left .sub>a>i{margin-right: 10px;}
.bottom .right .nav-wrap{height:53px;border-radius:0;background: #1B668E;border: 1px solid #1B668E;} 
.dropdown{background: white;margin:0 15px;z-index: 10;}
.nav-wrap #nav>ul>li>a{color: white;font-weight: 600;} 
.right .right_bottom{height: 595px;}
#wrap{overflow: auto;margin: 0;padding: 0;}
</style>

