


// let price = document.querySelectorAll("table tr td span");
// let totalPrice = document.querySelectorAll("table tr td P");
// let numproduct = document.querySelectorAll("table tr td input");
// let icon     = document.querySelectorAll("table tr td i");
// let tr     = document.querySelectorAll("table tr ");
// let table = document.querySelector("table");
// let alltotalprice = document.querySelector("#topr");
// let lastprice = document.getElementById("last");





// for(let i=0; i<price.length ;i++){
      
//       totalPrice[i].innerHTML = parseInt(numproduct[i].value) *  parseInt(price[i].innerHTML);

//   numproduct[i].onchange =function(){
//       if(numproduct[i].value < 0){
//             totalPrice[i].innerHTML =0;
//       }
//       else{
//             totalPrice[i].innerHTML = parseInt(numproduct[i].value) *  parseInt(price[i].innerHTML);
//       }

  


// }


// alltotalprice.innerHTML = parseInt(alltotalprice.innerHTML) + parseInt( totalPrice[i].innerHTML) ;
// lastprice.innerHTML =alltotalprice.innerHTML;



//  icon[i].onclick = function(){
//       tr[i+1].remove();
//       alltotalprice.innerHTML = parseInt(alltotalprice.innerHTML) - parseInt( totalPrice[i].innerHTML) ;
//       lastprice.innerHTML =alltotalprice.innerHTML;
//       totalPrice[i].innerHTML =0;
//  }



//  table.onchange =function(){
//       alltotalprice.innerHTML =0;
//       for(let d =0 ;d< totalPrice.length; d++){
//             console.log(totalPrice[d].innerHTML);
//         alltotalprice.innerHTML = parseInt(alltotalprice.innerHTML) + parseInt( totalPrice[d].innerHTML) ;
//         lastprice.innerHTML =alltotalprice.innerHTML;
//       }

// }


// }



    


let datpro =[];

if(localStorage.cartdata != null){
    datpro = JSON.parse(localStorage.cartdata);
}else{
    datpro =[];
}



//    show data
function showData(){

let tableee ='';

for(let i =0 ; i< datpro.length; i++){
  tableee += `
  
  <tr >
  <td></td>
<td><i class="fa-solid fa-xmark" onclick="deletItem(${i})"></i></td>
<td><img src="${datpro[i].img}" alt=""></td>
<td>${datpro[i].title}</td>
<td>$<span>${datpro[i].price}</span></td>
<td><input type="number" onchange="changetotal(this , ${i})"  value="${datpro[i].quantitey }"></td>
<td>$<P>${ Math.trunc(datpro[i].price * datpro[i].quantitey) }</P></td>
  
</tr>

`;
}






let cartTabel=   document.querySelector(".Addtbody");
cartTabel.innerHTML =tableee;

}
showData();




///     delet item
function deletItem(i){
      datpro.splice(i,1);
    localStorage.cartdata = JSON.stringify(datpro);
    showData();
    getTotal ()
}




//   get total
let topValue =document.querySelector("#topValue");
let lastValue =document.querySelector("#lastValue");

function getTotal (){
  let totalPrice = 0;
for(let i =0 ; i< datpro.length; i++){
 totalPrice +=  Math.trunc(+datpro[i].price * +datpro[i].quantitey);
}
console.log(totalPrice);

topValue.innerHTML = Math.trunc(totalPrice);
lastValue.innerHTML = Math.trunc(totalPrice );

}

getTotal();



function changetotal(e , n) {

  if(e.value >0){
    datpro[n].quantitey = e.value ;
  }else{
    datpro[n].quantitey = 1;
  }

    localStorage.cartdata = JSON.stringify(datpro);
    showData();
    getTotal();
}