var listUser = [];
var showlogin = new Array;
var i = -1;
var json = localStorage.getItem("localuser");
if (json != null)
  listUser = JSON.parse(json)
if (listUser == "") {
  var item = {
    email: "Apple",
    password: "123",
    firstname: "Hello",
    lastname: "ADMIN"
  }
  this.listUser.push(item)
  localStorage.setItem("localuser", JSON.stringify(listUser));
}
function dangky() {
  var smslogin = ""
  var firstname = document.getElementById("firstname").value;
  var password = document.getElementById("password").value;
  var checkpassword = document.getElementById("checkpassword").value;
  var email = document.getElementById("email").value;
  var lastname = document.getElementById("lastname").value;
  if (password == checkpassword) {
    if (email == "" || password == "" || checkpassword == "" || firstname == "" || lastname == "") {
      smslogin = "Bạn phải nhập đầy đủ thông tin."
    } else {
      getData()
      item = {
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname
      };
      if (i==-1) {      
            this.listUser.push(item)
            smslogin = "Đăng ký thành công."
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
            document.getElementById("checkpassword").value = "";
            document.getElementById("firstname").value = "";
            document.getElementById("lastname").value = "";     
      } else {
        // console.log("i update:"+i);
        listUser[i] = item;
        i = -1;
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("checkpassword").value = "";
        document.getElementById("firstname").value = "";
        document.getElementById("lastname").value = "";
        smslogin = "Cập nhật thành công."
        var hidden1 = document.getElementById('show1');
        var hidden2 = document.getElementById('show2');
        if (hidden1.style.display == 'none')
          hidden1.style.display = 'block';
        if (hidden2.style.display == 'block')
          hidden2.style.display = 'none';
          document.getElementById("show3").innerHTML = '<a href="#" onclick="reset()" class="btn btn-primary btn-user btn-block">Reset Password</a>'
      }
      localStorage.setItem("localuser", JSON.stringify(listUser));
    }
  } else {
    smslogin = "Mật khẩu và mật khẩu xác nhận phải giống"
  }
  document.getElementById("smslogin").innerHTML = smslogin;
}
function getData() {
    listUser = JSON.parse(localStorage.getItem("localuser"))
}
function login() {
  var userlogin = document.getElementById("userlogin").value;
  var passwordlogin = document.getElementById("passwordlogin").value;
  var sms = "";
  var x;
  listUser = JSON.parse(localStorage.getItem("localuser"))
  listUser.forEach(function (e) {
    if (userlogin == "Apple" && passwordlogin == "123") {
      location.href = "index.html";
      var login = localStorage.getItem("locallogin");
        if (login != null)
        showlogin = JSON.parse(login)
      showlogin = "Hello ADMIN";
      localStorage.setItem("locallogin", JSON.stringify(showlogin));
    } else {
      if (e.email == userlogin) {
        sms = ""
        if (e.password == passwordlogin) {
          location.href = "home.html";
          var login = localStorage.getItem("locallogin");
          if (login != null)
            showlogin = JSON.parse(login)
          showlogin = (e.firstname + "  " + e.lastname);
          localStorage.setItem("locallogin", JSON.stringify(showlogin));
        } else {
          sms = "Mật khẩu không đúng."
        }
      } else {
        if (userlogin == "" && passwordlogin == "") {
          sms = "Bạn chưa nhập tài khoản hoặc mật khẩu đăng nhập."
        } else if (userlogin == "") {
          sms = "Bạn chưa nhập tài khoản."
        } else {
          sms = "Tên tài khoản không tồn tại."
        }
      }
    }
  });
  document.getElementById("sms").innerHTML = sms;
}
function reset(s) {
  var x = document.getElementById("email").value;
  getData()
  if (x == "") {
    document.getElementById("smslogin").innerHTML = "Bạn phải điền tên tài khoản cần tìm."
  } else {
    i=-1;
    listUser.forEach(function (e) {
      i++;
      if (e.email != x) {
        document.getElementById("smslogin").innerHTML = "Tên tài khoản không tồn tại."
      } else if (e.email == x) {
        var hidden1 = document.getElementById('show1');
        var hidden2 = document.getElementById('show2');
        if (hidden1.style.display == 'block')
          hidden1.style.display = 'none';
        if (hidden2.style.display == 'none')
          hidden2.style.display = 'block';
        // console.log("i trong:"+i);
        item = listUser[i];
        // console.log(item);
        
        document.getElementById("show3").innerHTML = '<a href="#" onclick="dangky()" class="btn btn-primary btn-user btn-block">Reset Password</a>'
        document.getElementById("email").value = listUser[i].email;
        document.getElementById("password").value = listUser[i].password = "";
        document.getElementById("checkpassword").value = "";
        document.getElementById("firstname").value = listUser[i].firstname;
        document.getElementById("lastname").value = listUser[i].lastname;
        document.getElementById("smslogin").innerHTML = ""
      }
    });
  }
}
window.onload =checklogin();
function checklogin(){
  showlogin = JSON.parse(localStorage.getItem("locallogin"))
  if (showlogin!="") {
    document.getElementById("mess1").innerHTML = '<a style="color:#fff;text-decoration: none;" id="mess" href="#" style="text-decoration: none;">' + showlogin + '</a>'
    document.getElementById("mess2").innerHTML= '<a class="text-danger" id="mess" href="#" style="text-decoration: none;">'+showlogin+'</a>'
    document.getElementById("mess3").innerHTML='<a class="text-muted" style="text-decoration:none;" onclick="dangxuat()" href="#"><i class="fa fa-user"></i><span> Đăng xuất</span></a>'
  }else if(showlogin==""){
    document.getElementById("mess1").innerHTML = '<a style="color:#fff;text-decoration: none;" id="mess" href="#" style="text-decoration: none;">Login</a>'
    document.getElementById("mess2").innerHTML= '<a class="text-danger" id="mess" href="#" style="text-decoration: none;"  data-toggle="modal" data-target="#login">Đăng nhập</a>'
      document.getElementById("mess3").innerHTML='<a class="text-muted" style="text-decoration:none;" href="register.html"><i class="fa fa-user"></i><span> Đăng kí tài khoản</span></a>';
  }
}
function dangxuat(){
  showlogin = JSON.parse(localStorage.getItem("locallogin"))
  showlogin=""
  localStorage.setItem("locallogin", JSON.stringify(showlogin));
  if (showlogin=="") {
     document.getElementById("mess1").innerHTML = '<a style="color:#fff;text-decoration: none;" id="mess" href="#" style="text-decoration: none;">Login</a>'
    document.getElementById("mess2").innerHTML= '<a class="text-danger" id="mess" href="#" style="text-decoration: none;"  data-toggle="modal" data-target="#login">Đăng nhập</a>'
      document.getElementById("mess3").innerHTML='<a class="text-muted" style="text-decoration:none;" href="register.html"><i class="fa fa-user"></i><span> Đăng kí tài khoản</span></a>';
  }
}



