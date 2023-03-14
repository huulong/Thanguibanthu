function getData() {
  listSanPham = JSON.parse(localStorage.getItem("localsanpham"))
}
function display() {
  getData()
  listSanPham.forEach(function (e) {
    if (e.dmsp == "trái cây tươi") {
      var dtnb = document.getElementById("showdtnb");
      dtnb.innerHTML +=
        '<div class="col-3 mb-2">' +
        '<div class="card">' +
        '<div class="card-body">' +
        '<img  class="card-img-top  my-2"  src="img/' + (e.img) + '"></img>' +
        '<p class="card-text text-center" style="color:black;">' + (e.name) + '</p>' +
        '<a class="card-text ">' + '<p class="text-center">' + (e.price) + 'đ<strike class="text-muted ml-2">'
        + (e.priceold) + '</strike></p>' + '</a>' +
        '<p class="card-text text-center"><button id="cart" data-name="' + e.name + '" data-toggle="modal" data-target="#tthang" class="btn btn-outline-success"  >Đặt Mua</button></p>' +
        '</div>' +
        '</div>' +
        '</div>';
    }
    if (e.dmsp == "trái cây khô") {
      var tbnb = document.getElementById("showtbnb");
      tbnb.innerHTML +=
        '<div class="col-3 mb-2">' +
        '<div class="card">' +
        '<div class="card-body">' +
        '<img  class="card-img-top  my-2"  src="img/' + (e.img) + '"></img>' +
        '<p class="card-text text-center" style="color:black;">' + (e.name) + '</p>' +
        '<a class="card-text ">' + '<p class="text-center">' + (e.price) + 'đ<strike class="text-muted ml-2">'
        + (e.priceold) + '</strike></p>' + '</a>' +
        '<p class="card-text text-center"><button id="cart" data-name="' + e.name + '" data-toggle="modal" data-target="#tthang" class="btn btn-outline-success"  >Đặt Mua</button></p>' +
        '</div>' +
        '</div>' +
        '</div>';
    }
  });

  let carts = document.querySelectorAll('#cart');
  carts.forEach(cart => {
    cart.addEventListener('click', function () {
      document.getElementById("alert").innerHTML = this.getAttribute('data-name');
      saveData(this.getAttribute('data-name'));
    });
  });
  itemsArray = localStorage.getItem('addgiohang') ? JSON.parse(localStorage.getItem('addgiohang')) : [];
  cartItem(itemsArray.length);
}

function saveData(save) {
  itemsArray.push(save);
  localStorage.setItem('addgiohang', JSON.stringify(itemsArray));
  giohang(ArrayCart)
  cartItem(itemsArray.length);
}
function cartItem(n) {
  let cart_item = document.getElementById('cartitem');
  cart_item.textContent = ` `;
}

var ArrayCart = localStorage.getItem('localgiohang') ? JSON.parse(localStorage.getItem('localgiohang')) : [];
function giohang(ArrayCart) {
  ArrayCart = JSON.parse(localStorage.getItem("localgiohang"))
  listSanPham = JSON.parse(localStorage.getItem("localsanpham"))
  addgiohang = JSON.parse(localStorage.getItem("addgiohang"))
  ArrayCart = [];
  listSanPham.forEach(function (e) {
    for (let index = 0; index < addgiohang.length; index++) {
      if (e.name == addgiohang[index]) {
          item = { name: e.name, price: e.price, priceold: e.priceold, img: e.img, amount: 1 };
          ArrayCart.push(item)
        }
    }
  });
  console.log(ArrayCart);
  localStorage.setItem("localgiohang", JSON.stringify(ArrayCart));
}





