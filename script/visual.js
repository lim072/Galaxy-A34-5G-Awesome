let AwesomeImg = document.querySelectorAll(".AwesomeImg>li");
let AwesomePop = document.querySelectorAll(".AwesomePop>div");
let AwesomePopOn = document.querySelectorAll(".AwesomePop>.on");
let close = document.querySelectorAll(".close");



close.forEach((el, index) => {
    el.addEventListener("click", (e) => {
        AwesomePop[index].classList.remove("on")
    })
})

AwesomeImg.forEach((el, index) => {
    for (let el of AwesomePop) {
        AwesomePop[index].classList.remove("on")
    }
    el.addEventListener("click", () => {
        AwesomePop[index].classList.add("on");
    })
})
