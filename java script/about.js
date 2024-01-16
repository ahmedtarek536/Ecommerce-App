let video = document.querySelector("video");




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