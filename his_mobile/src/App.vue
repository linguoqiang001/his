<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
    }
  },
  mounted(){
  	var user=this.tool.getUser();
	if(user.id==null || user.password==null){
		this.$router.push({name:'login'});
	}else{
		this.$axios.get('patient/login',{params:{id:user.id,password:user.password}})
		.then(res=>{
		if(res.data=='success'){
			this.$router.push({name:'home'});
		}else{
			this.mui.alert("密码过期，请重新登录","提示");
			this.$router.push({name:'login'});
		}
		}).catch(err=>{this.mui.alert("请求超时","提示")});
	}
  }
}
</script>

<style scoped>
#app{width: 100%;height: 100%;position:absolute;}
</style>
