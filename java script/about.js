let video = document.querySelector("video");


let bar = document.querySelector("#bar");

let navbar = document.querySelector("#navbar");
let closeNav =document.querySelector("#close-nav");






    bar.onclick = function(){
        navbar.style.cssText = "display: block;"
    }
    closeNav.onclick = function(){
        navbar.style.cssText = "display: none;"
    }




window.onscroll =function(){
    if(window.scrollY > 500){
        console.log("done");
        video.play();
    }
    else{
        video.pause();
    }
}





document.querySelector(".numofCart").innerHTML = JSON.parse( localStorage.cartdata).length ;
