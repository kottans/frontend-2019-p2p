"use strict";

const nav = document.getElementById("navbar");
const text = document.getElementById("text");
const burger = document.getElementsByClassName("burger2")[0];
const menuItem = nav.querySelectorAll("a");

/**
 * закриває меню якщо ми натискаємо на пункт меню 
 * коли ширина екрана менша 900px
 * author: Rostyk Broslavsky
 * email: broslavsky.rostislaw@gmail.com
 */
function hideBurgerMenu(target) {

    if (burger.classList.contains("open")) {
        nav.classList.toggle("menu-open");
        burger.classList.toggle("open");
    }
}

/**
 * додає колір для вибраного елемента
 * author: Rostyk Broslavsky
 * email: broslavsky.rostislaw@gmail.com
 */
function setColorForElement(target) {
    menuItem.forEach(el => {
        el.classList.remove("check");
    });
    target.classList.add("check");
}

/**
 * при виборі пункта меню показує відповідний текст
 * author: Rostyk Broslavsky
 * email: broslavsky.rostislaw@gmail.com
 */
function showStory(index) {
    let textChild =  text.querySelectorAll('div');

    textChild.forEach(el => {
        el.id = "";
    });
    textChild[index].id = "animeText";
}

/**
 * Заповнює елементи контентом і показує 
 * author: Rostyk Broslavsky
 * email: broslavsky.rostislaw@gmail.com
 */
function checkStory({ target }) {

    if (target.closest('#navbar')) {//перевіряємо чи елемент на який ми натиснули це пункт меню
        for (let i = 0; i < menuItem.length; i++) {
            if (menuItem[i] === target) {//визначаємо на який пункт меню ми натиснули
                showStory(i);//показуємо її
            }
        }

        setColorForElement(target);//додаємо пункту меню відповідний колір
        hideBurgerMenu(target);//ховаємо navbar якщо екран менше 900 px;
    }
}

nav.addEventListener("click", checkStory);

/**
 * Відкриває закриває меню при натисканні на бургер
 * author: Rostyk Broslavsky
 * email: broslavsky.rostislaw@gmail.com
 */
function hideOpenBurgerMenu(e) {
    nav.classList.toggle("menu-open");
    burger.classList.toggle("open");
}

let burgerButton = document.getElementsByClassName("burger")[0];

burgerButton.addEventListener("click", hideOpenBurgerMenu);
