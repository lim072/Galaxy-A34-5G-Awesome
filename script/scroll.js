let sections = document.querySelectorAll("body>section")
let sectionArr = Array.from(sections);
let header = document.querySelector("header");
let btns = header.querySelector(".btns")
let moreCons = document.querySelectorAll("#contentMore>article")
let moreConArr = Array.from(moreCons);
const moreBtn = document.querySelectorAll(".frame .on a");
console.log(moreBtn)

let posArr = [];
let morePosArr = [];

setPos();
setPos2();
function setPos() {
    posArr = [];
    for (let el of sections) {
        posArr.push(el.offsetTop);
    }
}
// console.log(posArr);
//[0, 968, 3198, 8038, 12700, 13628]


function setPos2() {
    morePosArr = [];
    for (let el of moreCons) {
        morePosArr.push(el.offsetTop);
    }
}
// console.log(morePosArr);
//[3198, 4166, 5134, 6102, 7070]


window.addEventListener("scroll", () => {
    if (window.pageYOffset < 800 || window.pageYOffset > 3146) {
        btns.style.display = "none";
    } else {
        btns.style.display = "block";
    }
})

moreBtn.forEach((el, index) => {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        moveScroll(index)
    })
})


function moveScroll(index) {
    window.scrollTo({ top: morePosArr[index], behavior: "smooth" })
}