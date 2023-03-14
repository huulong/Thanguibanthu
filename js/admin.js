function getData() {
      listSanPham = JSON.parse(localStorage.getItem("localsanpham"))
  }
var length=-1;
var listSanPham=[];
var length=-1;
function addsp(){
  var select = document.getElementById("select1");
  dmsp=select[select.selectedIndex].text;
  var name = document.getElementById("name").value;
  var price = document.getElementById("price").value;
  var priceold = document.getElementById("priceold").value;
  var img= document.getElementById("img").value;
  img=img.split('\\')[2]; 
    if (name==""||price=="") {
        alert('Bạn chưa nhập đầy đủ thông tin');
    }else{
      sanpham= {
        dmsp:dmsp,
        name:name,
        priceold:priceold,
        img:img,
        price:price
        };
        if (length==-1) {
            getData()
            this.listSanPham.push(sanpham);
            document.getElementById("name").value="";
            document.getElementById("price").value="";
            document.getElementById("priceold").value="";    
        }else{
            listSanPham[length]=sanpham;
            length=-1;
            document.getElementById("name").value="";
            document.getElementById("price").value="";
            document.getElementById("priceold").value="";
            document.getElementById("smsupdate").innerHTML="Update thành công"
        }
    }
    localStorage.setItem("localsanpham", JSON.stringify(listSanPham)); 
    displaysp()
}
let adminshowsp = document.getElementById("adminshowsp");
window.onload = displaysp(listSanPham)
function displaysp(listSanPham){
  listSanPham=JSON.parse(localStorage.getItem("localsanpham"))
  let show =""
  for (var i = 0; i < listSanPham.length; i++) {
    show += `<tr>                          
  <td><p class='text-center'>${(i+1)}</p></td>
  <td><p class='text-center mx-auto ' >${listSanPham[i].name}</p></td>
  <td><p class='text-center mx-auto '>${listSanPham[i].price}</p></td>
  <td><p class='text-center mx-auto'>${listSanPham[i].priceold}</p></td>
  <td><p class='text-center mx-auto'>${listSanPham[i].dmsp}</p></td>
  <td style='width: 100px;'><img  class="img " style="width: 100px;height: 100px;" src="img/${listSanPham[i].img}"></img></td>
  <td style='width: 100px;' class='text-center'><button class='btn btn-outline-danger' data-toggle='modal' data-target='#update'  onclick='editsp(${i})'>Edit</button></td>
  <td style='width: 100px;' class='text-center'><button class='btn btn-outline-danger'  onclick='detelesp(${i})'>Detele</button></td>
  </tr>` 
  }   
  adminshowsp.innerHTML=show;
}
function detele(i){
  listUser = JSON.parse(localStorage.getItem("localuser"))
  this.listUser.splice(i,1);
  localStorage.setItem("localuser",JSON.stringify(listUser));
  displayuser()
}
function detelesp(i){
  getData()
  this.listSanPham.splice(i,1);
  localStorage.setItem("localsanpham",JSON.stringify(listSanPham));
  displaysp()
}
function editsp(i){
  getData()
  length=i;
  sanpham =listSanPham[i];
  console.log(sanpham);
  
  document.getElementById("name").value=listSanPham[i].name;
 document.getElementById("price").value=listSanPham[i].price;
 document.getElementById("priceold").value=listSanPham[i].priceold;
 document.getElementById("smsupdate").innerHTML="Vui lòng nhập thông tin cần thay đổi "
}
console.log(length);




function dangkytk() {
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
      if (lenght == -1) {
        this.listUser.push(item)
        smslogin = "Đăng ký thành công."
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("checkpassword").value = "";
        document.getElementById("firstname").value = "";
        document.getElementById("lastname").value = "";
      } else {
        console.log("i update:"+length);
        listUser[lenght] = item;
        lenght = -1;
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
  displayuser()
}
function edittk(i) {
  getData()
  lenght=i;
  item = listUser[i]
  document.getElementById("email").value = listUser[i].email;
  document.getElementById("password").value = listUser[i].password;
  document.getElementById("checkpassword").value = "";
  document.getElementById("firstname").value = listUser[i].firstname;
  document.getElementById("lastname").value = listUser[i].lastname;
}

