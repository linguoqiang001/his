<template>
	 <div id="wrap" style="height:100%">
  	<header id="header" class="mui-bar mui-bar-nav">
  		<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" href="javascript:void(0)"></a>
  		<h1 class="mui-title">{{name}}</h1>
  		<a href="javascript:void(0)"><i class="iconfont icon-wode"></i></a>
  		<a href="javascript:void(0)"><i class="iconfont icon-icon32206"></i></a>
  	</header>
    <div id="chat" ref="chat">
         <div class="dialog" v-for="item in list" >
          <div :class="{'content_left':item.id==2000,'content_right':item.id==2001}">
          <a href="javascript:void(0)"><img :src="imgName"></a>
          <span class="message">{{item.message}} </span>
          </div>
        </div> 
    </div>
    
    <div class="footer" ref="footer">
          <div class="top">
            <mu-text-field ref="input" hintText="输入文字"  v-model="value" @keyup.enter.native="sendValue" />
            <mu-icon-button icon="send" @click="sendValue"   />
          </div>
          <div class="bottom">
            <mu-icon-button icon="mic_none" />
            <mu-icon-button icon="photo_size_select_actual" />
            <mu-icon-button icon="tag_faces" />
            <mu-icon-button icon="switch_video" />
            <mu-icon-button icon="cloud_queue" />
            <mu-icon-button icon="photo_camera" />
          </div>
      </div> 


  </div>


</template>
<script>
import 'muse-ui/dist/muse-ui.css'
	export default{
		name:'dialog',
		data(){
			return {
        name:this.$route.query.name,
        imgName:this.$route.query.imgName,
        value:'',
				list:[{id:'2000',message:'欢迎咨询'}]
			}
		},
		mounted(){
      $("#chat").height($("body").height()-50-$(".footer").height());
      this.$refs.chat.scrollTop= this.$refs.chat.scrollHeight;
      var vm=this;
			window.onresize = function() {
        $("#chat").height($("body").height()-50-$(".footer").height());
        vm.$refs.chat.scrollTop= vm.$refs.chat.scrollHeight;
      };
		},
    methods:{
      sendValue:function(){
        var t={id:'2001',message:this.value}
        if(this.value!=''){
        this.list.push(t);
        this.value='';
        this.$nextTick(function(){
               this.$refs.chat.scrollTop= this.$refs.chat.scrollHeight;
         })}
        this.$refs.input.focus();
      }
    }
	}
</script>
<style scoped>
a{color: #49A0FF;}
#wrap{height: 100%;}
#header{background: white;}
.icon-icon32206{font-size: 25px;line-height: 44px;float: right;}
.icon-wode{font-size: 28px;font-weight: bold;line-height: 44px;float: right;margin-left: 10px;color: #0A7FFF;}
#chat{overflow: scroll;width:100%;position:relative;margin-top:45px;float: left;}
.dialog{margin-top:  20px;float: left;width: 100%;}
.dialog .content_left{margin-left:15px;float: left;}
.dialog .content_left a{float: left;}
.dialog .content_left img{width:40px;height: 40px;border-radius: 20px;}
.dialog .content_left .message{margin:0 5px;padding: 10px;float: left;border-radius: 10px;background: white;display: inline-block;max-width: 70%;}
.dialog .content_right{margin-right: 15px;float: right;}
.dialog .content_right a{float: right;}
.dialog .content_right img{width:40px;height: 40px;border-radius: 20px; }
.dialog .content_right .message{margin:0 5px;padding: 10px;float: right;border-radius: 10px;background:#49A0FF;color:white;display: inline-block;max-width: 70%;}
.footer{position: fixed;bottom: 0;background: white;width: 100%;text-align: center;width: 100%;}
.footer .top .mu-text-field{width: 75%;}
.footer .top .mu-icon-button{display: inline-block;width: 20%;}
.bottom .mu-icon-button{width:15%;}
hr.mu-text-field-focus-lines.focus{background-color:red !important; color: red;}
</style>
