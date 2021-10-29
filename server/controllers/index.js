module.exports = {
  auth: require("./get/auth"),
  bookmark: require("./get/bookmark"),
  codi: require("./get/codi"),
  home: require("./get/home"),
  map: require("./get/map"),
  mypage: require("./get/mypage"),
  readpost: require("./get/readpost"),
  login: require("./post/login"),
  signout: require("./post/signout"),
  post: require("./post/post"),
  password: require("./put/password"),
  userinfo: require("./put/userinfo"),
  userphoto: require("./put/userphoto"),  
  editpost: require("./put/editpost"), 
  deletepost: require("./del/deletepost"),
  removeuser: require("./del/removeuser"),  
  sociallogin: require("./post/sociallogin"),
  usersController: require("./users"),
}  
