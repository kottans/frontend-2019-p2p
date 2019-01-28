"use strict";

const nav = document.getElementById("navbar");
const text = document.getElementById("text");
const burger = document.getElementsByClassName("burger2")[0];
/**
 * закриває меню якщо ми натискаємо на пункт меню 
 * коли ширина екрана менша 900px
 * author: Rostyk Broslavsky
 * email: broslavsky.rostislaw@gmail.com
 */
function hideBurgerMenu(target) {
    let computedStyle = getComputedStyle(burger);

    if (computedStyle.left == "15px") {
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
    let a = Array.from(nav.children);

    a.forEach((el) => {
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
    let textChild = Array.from(text.children);

    textChild.forEach((el) => {
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

    if (target.tagName == "A") {//перевіряємо чи елемент на який ми натиснули це пункт меню
        for (let i = 0; i < nav.children.length; i++) {
            if (nav.children[i] == target) {//визначаємо на який пункт меню ми натиснули
                if (!text.children[i].children.length) {//перевіряємо div на пустоту 31 line in html
                    //в майбутньому всі div-и будуть заповнені контентом, тому нічого в них не буде 
                    //додаватись, Ми будемо показувати div з відповідним id а інші ховати дивитись showStory();
                    text.children[i].innerHTML = stories[i + 1];//якщо він пустий додаємо туди історію
                    delete stories[i + 1];//видаляємо її з обєкту в якому вони зберігаються
                }

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
