let sections = document.querySelectorAll("body>section")
let header = document.querySelector("header");
let btns = header.querySelector(".btns");
// const tablet = window.matchMedia("screen and (max-width : 800px)");

let posArr = [];

setPos();

function setPos() {
    posArr = [];
    for (let el of sections) {
        posArr.push(el.offsetTop);
    }
}
// console.log(posArr);
//[0, 968, 3198, 8038, 12700, 13628]


window.addEventListener("scroll", () => {
    if (window.pageYOffset < 800 || window.pageYOffset > 2900) {
        btns.style.display = "none";
    } else {
        btns.style.display = "block";
    }

    const con1 = document.querySelectorAll('.con1');
    const trigger1 = 1100;
    const con2 = document.querySelectorAll('.con2');
    const trigger2 = 1150;
    const con3 = document.querySelectorAll('.con3');
    const trigger3 = 1200;
    const con4 = document.querySelectorAll('.con4');
    const trigger4 = 1400;
    const con5 = document.querySelectorAll('.con5');
    const trigger5 = 1450;
    const con6 = document.querySelectorAll('.con6');
    const trigger6 = 1600;
    const con7 = document.querySelectorAll('.con7');
    const trigger7 = 1700;
    const con8 = document.querySelectorAll('.con8');
    const trigger8 = 1650;
    const num = 1;
    const con = [con1,con2,con3,con4,con5,con6,con7,con8];

    
    const scrollPosition = window.scrollY;
    console.log(scrollPosition)


    for(let index of con){
        for(let el of index){
            if(scrollPosition > trigger1){
                el.style.opacity = 1;
            }else{
                el.style.opacity = 0.2;
            }
        }
    }

})

