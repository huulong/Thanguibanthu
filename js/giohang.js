let showgh = document.getElementById('showgh');
let tongg = document.getElementById('tongdonhang');
let showgh_2 = document.getElementById('showgh_2');
ArrayCart = JSON.parse(localStorage.getItem("localgiohang"))
window.onload = loadProduct(ArrayCart);
function loadProduct(ArrayCart) {
  let products = "";
  ArrayCart = JSON.parse(localStorage.getItem("localgiohang"))
  var i = -1;
  let tong = 0;
  ArrayCart.forEach(function (p) {
    i++
    let quantity = parseInt(p.price) * parseInt(p.amount);
    tong += quantity;
    products += `
      </tr>
      <td scope="col"><button class='close text-center' onclick='detelegh(${i})' type='button' > 
      <span style='fontsize:20px;' class='text-center' aria-hidden='true'>×</span></button></td>
      <td style='width: 100px;'><img  class="img " style="width: 100px;height: 100px;" src="img/${p.img}"></img></td>
      <td>${p.name}</td> 
      <td>${p.price}</td> 
      <td id="price">${p.priceold}</td> 
      <td >
      <input type="number" name="amount" style='width: 40px;' id="amount" min="1" max="5" value="${p.amount}">
      </td> 
      <td id="total" >${quantity}đ</td>
      </tr>`
  })
  showgh.innerHTML = products;
  tongg.innerHTML = tong + " đ";
};
let amount_input = document.querySelectorAll('#amount');
amount_input.forEach(element => {
  element.addEventListener('change', () => actChangeAmout());
})
function actChangeAmout() {
  ArrayCart = JSON.parse(localStorage.getItem("localgiohang"))
  tongdonhang = 0;
  amount_input.forEach((element, index) => {
    ArrayCart[index].amount = element.value;
    ArrayCart[index].tong = element.value * ArrayCart[index].price;
    element.parentNode.nextElementSibling.textContent = ArrayCart[index].tong + "đ";
    tongdonhang += ArrayCart[index].tong;
    localStorage.setItem("localgiohang", JSON.stringify(ArrayCart));
  })
  tongg.innerHTML = tongdonhang + " đ";
}
function detelegh(i) {
  ArrayCart = JSON.parse(localStorage.getItem("localgiohang"))
  addgiohang = JSON.parse(localStorage.getItem("addgiohang"))
  item = ArrayCart[i];
  for (let index = 0; index < addgiohang.length; index++) {
    if (ArrayCart[i].name == addgiohang[index]) {
      this.addgiohang.splice(index, 1);
    }
  }

  this.ArrayCart.splice(i, 1);
  localStorage.setItem("addgiohang", JSON.stringify(addgiohang));
  localStorage.setItem("localgiohang", JSON.stringify(ArrayCart));
  loadProduct()
}

let payment = document.getElementById('payment');
payment.addEventListener('click', () => OK());
function OK() {
  var hidden1 = document.getElementById('giohang');
  var hidden2 = document.getElementById('thanhtoan');
  if (hidden1.style.display == 'none')
    hidden1.style.display = 'block';
  else hidden1.style.display = 'none';
  if (hidden2.style.display == 'none')
    hidden2.style.display = 'block';
  document.getElementById("checkshow").innerHTML = "Đặt mua";
  document.getElementById("checkshow1").innerHTML = `<a href="#" id="cancel" class="btn btn-outline-success " style="margin-left: 20px;" onclick="Cancel()"><b>Quay Lại Giỏ Hàng</b></a>`
}
let cancel = document.getElementById('cancel');
cancel.addEventListener('click', () => Cancel());
function Cancel() {
  var ss = document.getElementById('giohang');
  var ss1 = document.getElementById('thanhtoan');
  if (ss.style.display == 'none')
    ss.style.display = 'block';
  if (ss1.style.display == 'block')
    ss1.style.display = 'none';
  document.getElementById("checkshow").innerHTML = "Giỏ hàng";
  document.getElementById("checkshow1").innerHTML = `<a href="home.html"  class="btn btn-outline-success " style="margin-left: 20px;" onclick="Cancel()">Tiếp Tục Xem Sản Phẩm</a>`
}

//thanh toan

let select = document.getElementById('select');

select.addEventListener('change', selecttt);

function selecttt() {
  let tongtt1 = document.getElementById('tongtt1');
  let gg = document.getElementById('gg');
  let tongtt2 = document.getElementById('tongtt2');
  tongtt2.textContent = (tongtt1.textContent / 100) * (100 - parseInt(select.value));
  gg.textContent = (tongtt1.textContent - tongtt2.textContent) + " (" + select.value + "%)";
}
window.onload = loadCard()
function loadCard(ArrayCart) {
  let products = "";
  ArrayCart = JSON.parse(localStorage.getItem("localgiohang"))
  let tong = 0;
  ArrayCart.forEach(function (p) {
    let quantity = parseInt(p.price) * parseInt(p.amount);
    tong += quantity;
    products += `
      </tr>
      <td ><img  class="img " style="width: 50px;height: 50px;" src="img/${p.img}"></img></td>
      <td >${p.name}</td>
      <td>${p.amount}</td> 
      <td  id="total" >${quantity}đ</td>
      </tr>`
  })
  products += `
        <tr>
            <th scope="row">Tạm Tính</th>
            <td></td>
            <td></td>
            <td id="tongtt1">${tong}</td>
        </tr>
        <tr>
            <th scope="row">Giảm Giá</th>
            <td></td>
            <td></td>
           <td id="gg" class="text-success"></td>
        </tr>
        <tr>
            <th scope="row">Tổng Cộng</th>
            <td></td>
            <td></td>
           <td id="tongtt2"></td>
        </tr>`
  showgh_2.innerHTML = products;
  selecttt()
}
var ArrayBanHang = [];
function tttt() {
  var jsonbh =localStorage.getItem("localbanhang");
    if (jsonbh != null)
    ArrayBanHang=JSON.parse(jsonbh)
  showlogin = JSON.parse(localStorage.getItem("locallogin"))
  var itemsArray = localStorage.getItem('addgiohang') ? JSON.parse(localStorage.getItem('addgiohang')) : [];
  let usd2 = document.getElementById('tongtt2');
  let usd1 = document.getElementById('tongtt1');
  if (showlogin == "") {
    alert("Vui lòng đăng nhập để tiếp tục.")
  } else {
    alert("Thanh toán thành công.")
    document.getElementById("checkshow1").innerHTML = `<a href="home.html" id="cancel" class="btn btn-outline-success " style="margin-left: 20px;"><b>Tiếp tục mua hàng</b></a>`
    var  item2 = { name: showlogin, hd: usd1.textContent, tt: usd2.textContent, thoigian: Date() };
    this.ArrayBanHang.push(item2);
    localStorage.setItem("localbanhang", JSON.stringify(ArrayBanHang));



    ArrayCart = JSON.parse(localStorage.getItem("localgiohang"))
    itemsArray = localStorage.getItem('addgiohang') ? JSON.parse(localStorage.getItem('addgiohang')) : [];
    while (itemsArray.length) {
      itemsArray.pop();
    }
    while (ArrayCart.length) {
      ArrayCart.pop();
    }
    localStorage.setItem('addgiohang', JSON.stringify(itemsArray));
    localStorage.setItem("localgiohang", JSON.stringify(ArrayCart));
  }
}





