let tabBtn = document.querySelectorAll(".tab>li");
let tabBox = document.querySelectorAll(".tabBoxs>.tabBox");

tabBtn.forEach((el, index) => {
    el.addEventListener('click', (e) => {
        e.preventDefault()
        for (let el of tabBtn) {
            el.classList.remove("on");
            tabBtn[index].classList.add("on");
        }
        for (let el of tabBox) {
            el.classList.remove("on");
            tabBox[index].classList.add("on");
        }
    })
})