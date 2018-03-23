let tool={};

var storage=window.localStorage;

tool.setUser=function(id,password){
	storage["id"]=id;
	storage["password"]=password;
}
tool.getUser=function(){
	return {id:storage.id,password:storage.password}
}
export default tool;