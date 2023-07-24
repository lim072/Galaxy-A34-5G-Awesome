let sections = document.querySelectorAll("body>section")
let header = document.querySelector("header");
let btns = header.querySelector(".btns")


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
})

