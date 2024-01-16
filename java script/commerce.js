let bar = document.querySelector("#bar");

let navbar = document.querySelector("#navbar");
let closeNav =document.querySelector("#close-nav");




    bar.onclick = function(){
        navbar.style.cssText = "display: block;"
    }
    closeNav.onclick = function(){
        navbar.style.cssText = "display: none;"
    }










    document.querySelector(".numofCart").innerHTML = JSON.parse( localStorage.cartdata).length ;

   















    


    let productData ;
    if(localStorage.cart != null){

        productData = JSON.parse(localStorage.cart);
    }else{
         productData = [];
    }

    


























    function getData(e){
        
        


   let objproductData ={
     
    img: e.parentElement.parentElement.firstElementChild.src,
    name: e.parentElement.previousElementSibling.textContent,
    price: e.parentElement.firstElementChild.lastElementChild.textContent
   }
    
productData.push(objproductData);
localStorage.setItem("cart" , JSON.stringify(productData) );
console.log(productData);
}

// localStorage.clear();
