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
        btns.style.top = "-1000px"
        btns.style.opacity = "0";
    } else {
        btns.style.top = "0"
        btns.style.opacity = "1";
    }

    const windowWidth = window.innerWidth;
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

    const scrollPosition = window.scrollY;
    
    if (windowWidth > 800) {
    opacity(con1, scrollPosition, trigger1);
    opacity(con2, scrollPosition, trigger2);
    opacity(con3, scrollPosition, trigger3);
    opacity(con4, scrollPosition, trigger4);
    opacity(con5, scrollPosition, trigger5);
    opacity(con6, scrollPosition, trigger6);
    opacity(con7, scrollPosition, trigger7);
    opacity(con8, scrollPosition, trigger8);
    }else{
        opacity(con1, scrollPosition, trigger1);
        opacity(con2, scrollPosition, trigger2+400);
        opacity(con3, scrollPosition, trigger3+400);
        opacity(con4, scrollPosition, trigger4+400);
        opacity(con5, scrollPosition, trigger5+700);
        opacity(con6, scrollPosition, trigger6+700);
        opacity(con7, scrollPosition, trigger7+1500);
        opacity(con8, scrollPosition, trigger8+800);
    }
})




function opacity(con, scroll ,trigger){
    for(let el of con){
        if(scroll > trigger){
            el.style.opacity = 1;
        }else{
            el.style.opacity = 0.1;
        }
    }
}