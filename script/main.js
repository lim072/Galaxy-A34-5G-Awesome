let clip = document.querySelectorAll(".btn");
let frame = document.querySelector(".frame");
let contents = frame.querySelectorAll("section");



clip.forEach((el, index) => {
  el.addEventListener("click", () => {
    for (let el of clip) {
      el.classList.remove("on");
      clip[index].classList.add("on");
    }

    for (let el of contents) {
      el.classList.remove("on");
      contents[index].classList.add("on");
    }
  });
});
