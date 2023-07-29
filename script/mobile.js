let mobileBtn = document.querySelector(".mobileBtn");
let mobileGnb = document.querySelector(".mobileGnb");

mobileBtn.addEventListener("click",()=>{
    if(mobileGnb.style.left !== "0px"){
        mobileGnb.style.left = "0px"
    }else{
        mobileGnb.style.left = "-500px";
    }
})
