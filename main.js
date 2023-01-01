

const product = [
    {
        id: 0,
        title: "Microsoft Surface Laptop Studio",
        image: "./image/61UGE9cZVlL._AC_SL1500_.jpg",
        price: 205,

    },
    {
        id: 1,
        title: "Laptop hp",
        image: "./image/4z211pa-hp-15-6-inch-i5-1155g7-8gb-256gb-ssd-laptop-6.jpg",
        price: 125,
    },
    {
        id: 2,
        title: "HP Laptop 15s-eq1026nk",
        image: "./image/065rv6nxdAEcCzvE3Qb8T3v-1.webp",
        price: 199,
    },
    {
        id: 3,
        title: "Apple MacBook Air (M1, Late 2020)",
        image: "./image/image1.png",
        price: 210,

    },
]



let i = 0;
document.getElementById("root").innerHTML = product.map((item) => {
    var image = item.image;
    var title = item.title;
    var price = item.price;
    var id = item.id;
    return ` 
    <div class="box">
    <div class="box-image">
  <img src= ${image} class="image"/>
    </div>

  
    <div class="buttom">
   <p>${title}</p>  <i class="fa-sharp fa-solid fa-heart id="iconstyle"" onclick='style.color="red"'   > </i >
  
   <h2>${price}.00 $ </h2> <button onclick='addToCart(${id})'> Add To Cart</button> 
         </div >

    </div > `
}).join("")

var cart = [];

function addToCart(id) {
    //  if (cart.find(ele => ele.id == id)) {
    //   cart.find(ele => ele.id == id && (ele.qty = (++ele.qty), true))
    //    console.log(cart);
    //   } else {
    //  const qty = 0;

    let myProduct = product.find(el => el.id == id);
    myProduct.qty = 1;
    cart.push(myProduct);
    console.log(cart);
    displayCart();
    // }


}
function delElement(a) {


    cart.splice(a, 1);
    displayCart();


}





function displayCart(a) {
    let total = 0, j = 0;
    document.getElementById("count").innerHTML = cart.length;
    document.getElementById("total").innerHTML = "$ " + 0 + ".00";
    if (cart.length === 0) {
        document.getElementById("cartitem").innerHTML = "Your Cart item is empty";
    } else {
        document.getElementById("cartitem").innerHTML = cart.map((item) => {
            var image = item.image;
            var title = item.title;
            var price = item.price;
            var id = item.id;
            var qty = item.qty;

            total = total + price;
            document.getElementById("total").innerHTML = "$ " + total + ".00";
            return `
            <div class="cartItemS">

            <div class="rowImage">
            <img src= ${image} class="rawing"/> 
           
            </div>

            <p id="plus" >+</p>
            <div id="increment">1</div>
         

            <p id="moin">-</p>
           <p class="font-size:10px">${title}</p> 
          
           <h2 class="font-size:15px"">${price}.00 $ </h2>` + "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'> </i>" + `
              </div >
        
            </div >`

        }).join("")
    }
}

let plus = document.getElementById("plus");
let increment = document.getElementById("increment");
let moin = document.getElementById("moin");
let count = 1;
console.log(count);
console.log(increment);
const handleIncrement = () => {
    count++;

    increment.innerHTML = count;
};
const handleDecrement = () => {
    count--;
    increment.innerHTML = count;
};


plus.addEventListener("click", handleIncrement);
moin.addEventListener("click", handleDecrement);
