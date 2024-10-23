"use strict";
const img__boxes = Array.from(document.querySelectorAll(".testi__image__box"));
const comments = Array.from(document.querySelectorAll(".comments"));

img__boxes.forEach((img__box) => {
  img__box.addEventListener("mousedown", (e) => {
    if (e.target.closest("h2") || e.target.closest("span")) {
      e.preventDefault();
    }

  });

  img__box.addEventListener("click", (e) => {
    if (e.target !== img__box) {
      return;
    }

    //   For second box

    if (e.target.classList.contains("testi__image__box2")) {
      img__boxes[0].classList.remove("active__img__box");
      img__boxes[2].classList.remove("active__img__box");
      e.target.classList.add("active__img__box");

      show__content(comments[1], ...comments);
      console.log(e.target);
    }

    if (e.target.classList.contains("testi__image__box3")) {
      img__boxes[0].classList.remove("active__img__box");
      img__boxes[1].classList.remove("active__img__box");
      e.target.classList.add("active__img__box");

      show__content(comments[2], ...comments);
      console.log(e.target);
    }

    if (e.target.classList.contains("testi__image__box1")) {
      img__boxes[2].classList.remove("active__img__box");
      img__boxes[1].classList.remove("active__img__box");
      e.target.classList.add("active__img__box");

      show__content(comments[0], ...comments);
      console.log(e.target);
    }
  });
});

function show__content(visible, ...hidden) {
  for (let hide of hidden) {
    if (hide === visible) {
      // hide.style.transition = " opacity 400ms ease-out";
      //   hide.classList.remove("opacity__off");
      hide.classList.add("active__opacity");
    } else {
      hide.classList.remove("active__opacity");
    }
  }
}
