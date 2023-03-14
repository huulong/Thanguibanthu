
var listSanPham = [];
sanpham= {dmsp:"",name:"",priceold:"",price:"",img:"",};
var jsonsp = localStorage.getItem("localsanpham");
if (jsonsp != null)
    listSanPham = JSON.parse(jsonsp)
if (listSanPham == "") {
    var listSanPham = [
        //dien thoai
        //noibat
        sanpham= {
            dmsp: "trái cây tươi",
            name: "Ớt",
            priceold: "",
            price: 30000,
            img: "tuoi1.jpg",
        },
        sanpham= {
            dmsp: "trái cây tươi",
            name: "Dâu Tây",
            priceold: "",
            price: 30000,
            img: "tuoi2.jpg",
        },
        sanpham= {
            dmsp: "trái cây tươi",
            name: "Cà Rốt",
            priceold: "",
            price: 30000,
            img: "tuoi3.jpg",
        },
        
        
    ];
    this.listSanPham.push(sanpham);
    localStorage.setItem("localsanpham", JSON.stringify(this.listSanPham));
}
