


let bar = document.querySelector("#bar");

let navbar = document.querySelector("#navbar");
let closeNav =document.querySelector("#close-nav");
let content =   document.querySelector("#conentProduct");





    bar.onclick = function(){
        navbar.style.cssText = "display: block;"
    }
    closeNav.onclick = function(){
        navbar.style.cssText = "display: none;"
    }





    var datpro;
    fetch('https://ahmedtarek536.github.io/EcommerceApp/data.json')
    .then(response => response.json())
    .then(data => {
        datpro = data
        
        let table ='';
        for(let i =0 ; i< datpro.length; i++){
         
          table += `
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
     //    document.querySelector(".conent").appendChild(document.createTextNode(table));

     content.innerHTML = table;
    })
    


        






function showproduct(i){
    localStorage.setItem("numproduct",i)

    setTimeout(() => {
        window.open("file:///D:/web/E%20comrce/product.html","_self"); 
    }, 1000);
 

}









function searchData(value) {

    let table = '';
 
  
  
      for(let i =0 ; i < datpro.length ;i++){
   
        if(  datpro[i].title.toUpperCase().includes(value.toUpperCase()) || datpro[i].category.toUpperCase().includes(value.toUpperCase())){
            table += `
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
  
  
  
    content.innerHTML = table;
  };
  
  





  
  document.querySelector(".numofCart").innerHTML = JSON.parse( localStorage.cartdata).length ;