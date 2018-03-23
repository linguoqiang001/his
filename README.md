## 医院信息系统

## 概述

  本系统开始于2017年9月份结束于2018年1月份，由于当时忙着期末考，就没有继续完善此系统了，所以系统还有部分功能未实现。本项目的前端是基于Vue2.0，后台使用SpringMvc进行架构。项目的主要面向人群为医院工作人员和患者，目的在于减少医院工作人员工作量和简化患者看病流程。由于项目是前后端分离的，所以分为三部分：医生端（pc端）前端（文件夹his_pc），患者端（app）前端（文件夹his_mobile），后台（提供api）（文件夹medicalManage）。我将三部分的源码都放在这个文件夹内。

## 免责声明

  本项目为开源项目，如有雷同，纯属巧合。

## 项目已实现功能

### 患者：

- 预约挂号
- 查看医院门诊医生
- 预约取药
- 查看待办事项
- 在线缴费
- 消费记录查询
- 医生评价

### 医院工作人员：

- 新增患者
- 新增医生
- 医生门诊叫号
- 医生开药
- 门诊排班设置

## 部分截图

### pc端:

<p>
	<img width="49%" src="https://github.com/linguoqiang001/his/blob/master/his_pc/resources/images/sample/demo01.png">
	<img width="49%" src="https://github.com/linguoqiang001/his/blob/master/his_pc/resources/images/sample/demo02.png">
	<img width="49%" src="https://github.com/linguoqiang001/his/blob/master/his_pc/resources/images/sample/demo03.png">
	<img width="49%" src="https://github.com/linguoqiang001/his/blob/master/his_pc/resources/images/sample/demo04.png">
</p>

### 移动端：

<p>
	<img width="49%" src="https://github.com/linguoqiang001/his/blob/master/his_mobile/src/static/sample/demo01.jpg">
	<img width="49%" src="https://github.com/linguoqiang001/his/blob/master/his_mobile/src/static/sample/demo02.jpg">
	<img width="49%" src="https://github.com/linguoqiang001/his/blob/master/his_mobile/src/static/sample/demo03.jpg">
	<img width="49%" src="https://github.com/linguoqiang001/his/blob/master/his_mobile/src/static/sample/demo04.jpg">
	<img width="49%" src="https://github.com/linguoqiang001/his/blob/master/his_mobile/src/static/sample/demo05.jpg">	
</p>

## 技术栈

### pc端

- vue-cli
- vue2
- vue-router
- axios
- webpack
- bootstrap
- jquery
- element UI

### 移动端

- vue-cli
- vue2
- vue-router
- axios
- webpack
- muse-ui
- Mint

### 后端

- springmvc
- myBatis


## 运行这个项目

### pc端和移动端：

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

### 后端

后台用tomcat搭建服务器，在此就不做介绍了。

## 登录（分别提供一组医生和患者登录的帐号）

医生：
- 帐号：1063
- 密码：123456

患者：
- 帐号：2018
- 密码：123456

## 项目地址

https://github.com/linguoqiang001/his.git

## 项目部署到线上，地址

http://www.zilii.top/medicalManage/

