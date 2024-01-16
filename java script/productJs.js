let bar = document.querySelector("#bar");

let navbar = document.querySelector("#navbar");
let closeNav =document.querySelector("#close-nav");

bar.onclick = function(){
    navbar.style.cssText = "display: block;"
}
closeNav.onclick = function(){
    navbar.style.cssText = "display: none;"
}







let pop = document.querySelector(".src-pop");
let child1 = document.querySelector(".src-child1");
let child2 = document.querySelector(".src-child2");
let child3 = document.querySelector(".src-child3");
let child4 = document.querySelector(".src-child4");



function child (e){
    e.parentElement.previousElementSibling.src = e.src;
// console.log(e.parent.previousElementSibling.src)
console.log(e.parentElement);
console.log(e.src)
}






let number = localStorage.getItem("numproduct");
var datpro;
fetch('https://ahmedtarek536.github.io/EcommerceApp/data.json')
.then(response => response.json())
.then(data => {
    datpro = data  








let table ='';

 
  table += `
  <div class="show">
  <img src="${datpro[number].imgMain}" alt="" class="src-pop">
  <div class="image">
      <img src="${datpro[number].imgMain}" alt="" onclick="child(this)" class="src-pop">
      <img src="${datpro[number].imgOne}"  alt="" onclick="child(this)"  class="src-child1">
      <img src="${datpro[number].imgTwo}"  alt="" onclick="child(this)"  class="src-child2">
      <img src="${datpro[number].imgThree}"alt="" onclick="child(this)"  class="src-child3">
  </div>
  </div>
  <div class="info">
  <div>Home /${datpro[number].category}</div>
  <h4>${datpro[number].title}</h4>
  <h2>$${datpro[number].price}</h2>
  <select >
  <optgroup label="Select Size">
      <option value="">Small</option>
      <option value="">Large</option>
      <option value="">XL</option>
      <option value="">XXL</option>
  </optgroup>
</select>
    <div class="formcart">
      <input type="number" onchange="restInput(this)" class="num" value="1">
      <button  class="add" onclick="setdataCart(this)">Add To Cart</button>
    </div>

  <h4>Product Details</h4>
  <p>${datpro[number].textarea}</p>
  </div>
  `;



let content =   document.querySelector("#productshow");
content.innerHTML =table;
searchData()

})




let arrCart;

if(localStorage.cartdata != null){

    arrCart= JSON.parse(localStorage.cartdata);

}else{
     arrCart = [];
}


function restInput(e) {
 if(e.value < 1){
  e.value = 1 ;
 }

 }


function setdataCart(q){


    if(q.previousElementSibling.value < 1 ) {
        q.previousElementSibling.value =1;
    }  


    let objdataCart ={
        img: datpro[number].imgMain,
        title: datpro[number].title,
        price: datpro[number].price,
        quantitey: q.previousElementSibling.value 
      }
     arrCart.push(objdataCart);
    localStorage.setItem("cartdata", JSON.stringify(arrCart));
    document.querySelector(".numofCart").innerHTML = JSON.parse( localStorage.cartdata).length ; 
    showAlert();



}





function showAlert (){
   
    document.querySelector(".alert").style.cssText = "display: block ;";
    document.body.style.cssText = "  background-color: #45454547;";

    document.querySelector(".alert button").onclick = function (){
        document.querySelector(".alert").style.cssText = "display: none ;";
        document.body.style.cssText = "  background-color: transparent;";
    }
}














function searchData() {

    let showCategory = '';

      for(let i =0 ; i < datpro.length ;i++){
   
        if(  datpro[i].title.includes(datpro[number].category) || datpro[i].category.includes(datpro[number].category)){
            showCategory += `
            <div class="fe-box">
            <img src="${datpro[i].imgMain}" alt="">
            <p>adidas</p>
               <h5>${datpro[i].title}</h4>
              <div class="info">
               <div class="price">
                   <div class="icon">
                    <i class="fa-solid fa-star" style="color: #f0e800;"></i>
                    <i class="fa-solid fa-star" style="color: #f0e800;"></i>
                    <i class="fa-solid fa-star" style="color: #f0e800;"></i>
                    <i class="fa-solid fa-star" style="color: #f0e800;"></i>
                   <i class="fa-solid fa-star" style="color: #f0e800;"></i>
             </div>
                <span>$${datpro[i].price}</span>
            </div>
            <i class="fa-solid fa-cart-shopping" onclick="showproduct(${i})" ></i>
           </div>
        </div>      `;
          
          
        }
           
    }
  
  
  
    document.querySelector(".fe-productses  .content").innerHTML =showCategory;
  };
  





  function showproduct(i){
    
    localStorage.setItem("numproduct",i)

    setTimeout(() => {
        window.open("https://ahmedtarek536.github.io/Ecommerce-App/product.html" ,"_self"); 
    }, 100);
 

}










document.querySelector(".numofCart").innerHTML = JSON.parse( localStorage.cartdata).length ;





// console.log(JSON.parse(localStorage.cartdata));
