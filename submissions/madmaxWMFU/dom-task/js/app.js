const menuItem = document.querySelector(".menu-wrap-list-item");
const main = document.querySelector(".main-content");
const numbersOfHeroes = 1491;

menuItem.addEventListener("click", e => {
    document.querySelector(".active").classList.remove("active");
    e.target.parentElement.classList.add("active");
    switch (e.target.dataset.href) {
        case "home":
            removeItems();
            showLoad();
            drawMainPage();
            hideLoad();
            break;
        case "heros":
            removeItems();
            showLoad();
            getDataApi(getRandomArray('characters'))
                .then(json => {
                    hideLoad();
                    drawItems(json, "comiclink", "Comics zone");
                })
            break;
        case "comics":
            removeItems();
            showLoad();
            getDataApi(getRandomArray('comics'))
                .then(json => {
                    hideLoad();
                    drawItems(json, "detail", "Detail");
                });
            break;
    }
});

const getRandomArray = type => {
    let arrayLinks = [];
    while (arrayLinks.length < 10) {
        let number = Math.floor((Math.random() * numbersOfHeroes) + 1);
        let strLink = "";
        if (arrayLinks.indexOf(number) === -1)
            strLink = `https://gateway.marvel.com/v1/public/${type}?ts=1&limit=1&offset=${number}&apikey=0cc0bbc55224cb8f34ec109ab692c2cb&hash=4e7f342316da627d9a966768f39d0702`;
        arrayLinks.push(strLink);
    }
    return arrayLinks;
}

const getDataApi = arrLinks => {
    return new Promise(resolve => {
        Promise.all(arrLinks.map(url => fetch(url).then(resp => resp.json())))
            .then(result => resolve(result))
            .catch(() => {
                console.log('oops');
                hideLoad();
                removeItems();
                drawErrorMsg();
            })
    })
}

const removeItems = () => document.querySelectorAll(".removeItems").forEach(val => val.remove());

const showLoad = () => document.querySelector(".load-data").classList.add("showLoad");

const hideLoad = () => document.querySelector(".load-data").classList.remove("showLoad");

const drawItems = (array, type, nameLink) => {
    array.forEach(obj => {
        for (let hero of obj.data.results) {
            let title = hero.name || hero.title;
            let image = `${hero.thumbnail.path}/portrait_incredible.${hero.thumbnail.extension}`;
            let url = checkUrl(hero.urls, type);
            main.insertAdjacentHTML("beforeEnd", getTemplateWrap(image, title, url, nameLink));
        }
    })
}

const drawMainPage = () => {
    let mainPage = `
        <div class="home-page removeItems">
            <h2 class="marvel-title">Welcom to random list Marvel heros and comics!</h2>
            <p class="marvel-text">I used the Marvel Comics API. This API allows developers everywhere to access information about Marvel's vast library of comics—from what's coming up, to 70 years ago.</p>
            <p class="marvel-text">In the choice of one of the menu items, you will see a random list of ten characters or comics</p>
            <div class="marvel-link"><a href="http://marvel.com" class="marvel-link" target="_blanck">Data provided by Marvel. © 2019 MARVEL</a></div>
        </div>`;
    main.insertAdjacentHTML("beforeEnd", mainPage);
}

const drawErrorMsg = () => {
    const fragment = document.createDocumentFragment();
    const wrapError = document.createElement("div");
    const imageError = document.createElement("img");
    const titleError = document.createElement("h2");
    wrapError.classList.add("removeItems");
    wrapError.classList.add("error-wrap");
    imageError.src = "img/error.gif";
    imageError.classList.add("error-image");
    titleError.innerText = "Something went wrong, try again !!!";
    titleError.classList.add("error-title");
    wrapError.appendChild(imageError);
    wrapError.appendChild(titleError);
    fragment.appendChild(wrapError);
    main.appendChild(fragment);
}

const checkUrl = (arr, type) => {
    let link;
    arr.forEach(val => {
        if (val.type === type)
            link = val.url;
    });
    return link;
}

const getTemplateWrap = (img, title, link, about) => {
    return `
        <div class="hero-wrap removeItems">
            <div class="card-thumb-frame">
                <img src="${img}" />
            </div>
            <div class="card-body">
                <p class="card-body__headline">${title}</p>
            </div>
            <div class="comic-url">
                <a class="card-body__comicurl" href="${link}" target="_blanck">${about}</a>
            </div>
        </div>`;
}

document.addEventListener("DOMContentLoaded", drawMainPage);
