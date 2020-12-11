"use strict";

function dropDown() {
    let burger = document.querySelector(`.burger`);
    let menu = document.querySelector(`.menu__list`);

    const openMenu = () => {
        menu.classList.toggle("active");
        burger.classList.toggle("open");
    };

    burger.addEventListener('click', (e) => {
        e.stopPropagation();
        openMenu();
    });

    document.addEventListener("click", (e) => {
        const target = e.target;
        const isMenuTarget = target == menu || menu.contains(target);
        const isMenuActive = menu.classList.contains("active");

        if (!isMenuTarget && isMenuActive) {
            openMenu();
        }
    });
}

dropDown();

