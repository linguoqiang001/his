<template>
	<div>
	<p class=" text-left " style="font-size:20px;margin-top:15px;">医生中心 >> 医生录入</p>		
	<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="addDoctorWrap">

	  <el-form-item label="医生姓名" prop="name" >
	    <el-input v-model="ruleForm.name" placeholder="长度在 3 到 5 个字符"></el-input>
	  </el-form-item>
	
	  <el-form-item label="设置密码" prop="password" >
	    <el-input type="password" v-model="ruleForm.password" placeholder="长度在 5 到 15 个字符"></el-input>
	  </el-form-item>

	  <el-form-item label="确认密码" prop="checkPassword" >
	    <el-input type="password" v-model="ruleForm.checkPassword" placeholder="长度在 5 到 15 个字符"></el-input>
	  </el-form-item>

	  <el-form-item label="医生性别" prop="gender">
	    <el-radio-group v-model="ruleForm.gender">
	      <el-radio label="1" value="1">男</el-radio>
	      <el-radio label="0" value="0">女</el-radio>
	    </el-radio-group>
	  </el-form-item>
	
    <el-form-item label="医生职称" prop="title">
      <el-select v-model="ruleForm.title" placeholder="请选择职称">
        <el-option :label="item.titleName" :value="item.id" v-for="item in title"></el-option>
      </el-select>
    </el-form-item>

	  <el-form-item label="所属科室" prop="keShi">
	    <el-select v-model="ruleForm.keShi" placeholder="请选择科室">
	      <el-option :label="item.name" :value="item.id" v-for="item in keShi"></el-option>
	    </el-select>
	  </el-form-item>
	  <el-form-item label="出生日期" required>
	      <el-form-item prop="date">
	        <el-date-picker type="date" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="ruleForm.date" style="width: 100%;"   ></el-date-picker>
	      </el-form-item>
	  </el-form-item>
	  <el-form-item label="医生擅长" prop="good">
	    <el-input type="textarea" v-model="ruleForm.good" placeholder="100字以内"></el-input>
	  </el-form-item>
	  <el-form-item label="医生简介" prop="introduce">
	    <el-input type="textarea" v-model="ruleForm.introduce" placeholder="100字以内"></el-input>
	  </el-form-item>
	  
    
	  <el-form-item label="医生头像" prop="head" >
      <el-input v-model="ruleForm.head" placeholder="长度在 3 到 5 个字符" style="display:none;"></el-input>
      <div class="head">
  	    <el-upload 
        ref="upload"  
    		class="avatar-uploader"
    		action="http://47.95.210.82/medicalManage/getDoctor/addDoctor"
        list-type="picture-card"
        :on-remove="remove"
        :auto-upload="false"
        :file-list="filelist"
        :limit="1"
        :show-file-list="true"
    		:on-success="handleAvatarSuccess"
    		:before-upload="beforeAvatarUpload"
        :on-change="change"
        :data="ruleForm"
        >
  		<img v-if="ruleForm.imageUrl" :src="imageUrl" class="avatar">
  		<i v-else class="el-icon-plus avatar-uploader-icon" ></i>
  		</el-upload>
      </div>
	  </el-form-item>
	   
	<el-form-item>
	    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
	    <el-button @click="resetForm('ruleForm')">重置</el-button>
	  </el-form-item>   
</el-form>

  </div>
</div>
</template>
<script>
  export default {
	data() {
		var validatePass = (rule, value, callback) => {
		if (value === '') {
		  callback(new Error('请输入密码'));
		} else {
		  if (this.ruleForm.checkPassword !== '') {
		    this.$refs.ruleForm.validateField('checkPassword');
		  }
		  callback();
		}
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        tianjia:false,
        keShi:[],
        title:[],
        show:true,
        filelist:[],
        imageUrl: '',
        ruleForm: {
          name: '',
          password:'',
          checkPassword:'',
          gender:'',
          date:'',
          good:'',
          introduce:'',
          keShi:'',
          head:'',
          title:''
        },
        rules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 2, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password:[
          	{validator: validatePass, trigger: 'blur' },
            { required: true, trigger: 'blur' },
          	{min: 5,max:15,message:'长度在 5 到 15 个字符',trigger: 'blur'}
          ],
          checkPassword:[
          	{validator: validatePass2, trigger: 'blur' },
          	{min: 5,max:15,message:'长度在 5 到 15 个字符',trigger: 'blur'},
            { required: true, trigger: 'blur' }
          ],
          keShi: [
            { required: true, message: '请选择科室', trigger: 'change' }
          ],
          date: [
            { required: true, message: '请选择日期', trigger: 'blur' }
          ],
          gender: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          good:[
          	{ required: true, message: '请输入医生擅长', trigger: 'blur' },
            {min: 0,max:100,message:'长度在一百字以内',trigger: 'blur'}
          ],
          introduce:[
            { required: true, message: '请输入简介', trigger: 'blur' },
            {min: 0,max:100,message:'长长度在一百字以内',trigger: 'blur'}
          ],
          head:[
            { required: true, message: '请上传头像', trigger: 'blur' }
          ],
          title:[
            { required: true, message: '请选择职称', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$refs.upload.submit();
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
         this.filelist=[];
      },
       handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        this.$message({
          message: '添加成功，您的工号为'+res,
          type: 'success',
          duration:0,
          center:true,
          showClose: true
        });
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isPNG = file.type === 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!(isJPG || isPNG)) {
          this.$message.error('上传头像图片只能是 JPG或png 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }

        return (isJPG || isPNG) && isLt2M;
        
      },
      change(){
        this.ruleForm.head='1';
      },  
      remove(){
        this.ruleForm.head='';
       
      }
    },
    mounted(){
      this.$axios.get('keshi').then(res=>this.keShi=res.data).catch(err=>alert("请求超时"))
      this.$axios.get('title/getList').then(res=>this.title=res.data).catch(err=>alert("请求超时"))

    }
  }
</script>
<style scoped>
	.addDoctorWrap{width:60%; margin-left:5%;margin-top: 40px;}
  .head{height: 156px !important;width: 188px !important;overflow: hidden;}
</style>