"use strict";

let burger = document.querySelector(`.burger`);
let menu = document.querySelector(`.menu__list`);
burger.addEventListener("click", function () {
    menu.classList.toggle("active");
    burger.classList.toggle("open");
});