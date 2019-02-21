"use strict";

const getUsers = () => {
    const url = new URL("https://randomuser.me/api/?results=30");
    let xhr = new XMLHttpRequest();

    xhr.open('GET', url, false);
    xhr.send();
    if (xhr.status != 200) console.log(xhr.status + ': ' + xhr.statusText);
    else return JSON.parse(xhr.responseText).results;
};

let users = getUsers();
let container = document.querySelector(".container");

const addUsers = (users, container) => {
    let usersContainer = document.createElement("div");
    usersContainer.classList.add("users-container");

    users.forEach((el, i, array) => {
        let vstavka = `<div class="user ${el.gender}"><img class="photo" src="${el.picture.large}">`;
        vstavka += `<span class="fullName">${el.name.first[0].toUpperCase()}`;
        vstavka += `${el.name.first.slice(1, el.name.first.length)} `;
        vstavka += `${el.name.last[0].toUpperCase()}`;
        vstavka += `${el.name.last.slice(1, el.name.last.length)}</span>`;
        vstavka += `<span class="age">${el.dob.age}</span><span class="email">${el.phone}</span></div>`;
        let user = document.createElement("div");

        usersContainer.innerHTML += vstavka;
    });

    container.appendChild(usersContainer);
};

const showAllUsers = (users) => {
    let hideUsers = users || [...document.querySelectorAll(".hide")];
    hideUsers.forEach(el => el.classList.remove("hide"));
};

const getSelectedUsers = () => {
    checkGender.forEach(el => {
        if (el.checked) {
            visibleUsers = [...document.querySelectorAll(`div.${el.classList[0]}`)];
            visibleUsersNames = [...document.querySelectorAll(`.${el.classList[0]} .fullName`)];
        }
    });

    usersFirstName = visibleUsersNames.map(el => el.textContent.split(" ")[0]);
};

const checkByGender = ({ target }) => {
    if (target === showMale) {
        female.forEach(el => {
            el.classList.add("hide");
        });
        searchByName();
    } else if (target === showFemale) {
        male.forEach(el => {
            el.classList.add("hide");
        });
        searchByName();
    } else if (target === showAll) searchByName();
};

addUsers(users, container);
let menu = document.querySelector(".menu");
let female = [...document.querySelectorAll("div.female")];
let male = [...document.querySelectorAll("div.male")];
let allUsers = document.querySelectorAll("div.user");

const sortNameByIncrease = document.querySelector(".name-up");
const sortNameByDecrease = document.querySelector(".name-down");
const sortAgeByIncrease = document.querySelector(".age-up");
const sortAgeByDecrease = document.querySelector(".age-down");
const reset = document.querySelector(".reset");
const searchByNameInput = document.querySelector(".search-by-name");
const showFemale = document.querySelector(".female");
const showMale = document.querySelector(".male");
const showAll = document.querySelector(".all");
const checkGender = [...document.querySelectorAll("input[name='gender']")];

let visibleUsers;
let visibleUsersNames;
let usersFirstName;

let usersContainer = document.querySelector(".users-container");

const resetUsers = () => {
    let buttons = [...document.querySelectorAll("input[type='radio']")];
    buttons.forEach((el) => {
        el.checked = false;
    });

    buttons[buttons.length - 1].checked = true;
    searchByNameInput.value = "";

    usersContainer.innerHTML = "";
    allUsers.forEach(el => usersContainer.appendChild(el));

    showAllUsers();
};

let targetNameAge = true;

const sortByNameAge = ({ target }) => {
    if(targetNameAge === false || targetNameAge === target) return;
    if (target === sortAgeByIncrease || target === sortAgeByDecrease ||
        target === sortNameByIncrease || target === sortNameByDecrease) {
        sortNameByDecrease.checked = false;
        sortNameByIncrease.checked = false;
        sortAgeByDecrease.checked = false;
        sortAgeByIncrease.checked = false;

        targetNameAge = target;
        target.checked = true;


        let allUsers = [...document.querySelectorAll("div.user")];
        let sortedUsers;

        if (target === sortAgeByIncrease || target === sortAgeByDecrease) {
            sortedUsers = allUsers.sort((a, b) => {
                a = +a.childNodes[2].textContent;
                b = +b.childNodes[2].textContent;

                return a - b;
            });
        } else {
            sortedUsers = allUsers.sort((a, b) => {
                a = a.childNodes[1].textContent.split(" ")[0];
                b = b.childNodes[1].textContent.split(" ")[0];

                if (a < b) return -1;
                if (a > b) return 1;

                return 0;
            });
        }

        if (target === sortAgeByDecrease || target === sortNameByDecrease) sortedUsers.reverse();

        usersContainer.innerHTML = "";
        sortedUsers.forEach((el) => usersContainer.appendChild(el));
    }
}; 

const searchByName = () => {
    setTimeout(() => {
        let inputText = searchByNameInput.value;
        getSelectedUsers();

        if (!inputText) showAllUsers(visibleUsers);
        else {
            if (!inputText) return;
            visibleUsersNames.forEach((el, i) => {
                if (inputText !== usersFirstName[i].slice(0, inputText.length))
                    visibleUsers[i].classList.add("hide");
                else
                if (visibleUsers[i].classList.contains("hide"))
                    visibleUsers[i].classList.remove("hide");
            });
        }
    }, 0);
}

menu.addEventListener("click", checkByGender);
reset.addEventListener("click", resetUsers);
menu.addEventListener("click", sortByNameAge);

searchByNameInput.addEventListener("keydown", searchByName);

document.getElementById("search_submit").onclick = () => false;
