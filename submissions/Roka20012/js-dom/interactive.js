"use strict";

const nav = document.getElementById("navbar");
const text = document.getElementById("text");
const burger = document.getElementsByClassName("burger2")[0];
const menuItem = nav.querySelectorAll("a");

function hideBurgerMenu(target) {
    if (burger.classList.contains("open")) {
        nav.classList.toggle("menu-open");
        burger.classList.toggle("open");
    }
}

function setColorForElement(target) {
    menuItem.forEach(el => {
        el.classList.remove("check");
    });
    target.classList.add("check");
}

function showStory(index) {
    let textChild = text.querySelectorAll('div');

    textChild.forEach(el => {
        el.id = "";
    });
    textChild[index].id = "animeText";
}

function checkStory({ target }) {
    if (target.closest("#navbar > a")) {
        for (let i = 0; i < menuItem.length; i++) {
            if (menuItem[i] === target) {
                showStory(i);
            }

            setColorForElement(target);
            hideBurgerMenu(target);
        }
    }
}

nav.addEventListener("click", checkStory);

function hideOpenBurgerMenu(e) {
    nav.classList.toggle("menu-open");
    burger.classList.toggle("open");
}

let burgerButton = document.getElementsByClassName("burger")[0];

burgerButton.addEventListener("click", hideOpenBurgerMenu);
