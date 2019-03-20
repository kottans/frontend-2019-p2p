const menuItem = document.querySelector(".menu-wrap-list-item");
const main = document.querySelector(".main-content");
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
            const arrayHero = randomArray('characters');
            Promise.all(arrayHero.map(url =>
                fetch(url).then(resp => resp.json())
            )).then(json => {
                hideLoad();
                json.map(item => drawHero(item.data.results));
            });

            break;
        case "comics":
            removeItems();
            showLoad();
            const arrayComics = randomArray('comics');
            Promise.all(arrayComics.map(url =>
                fetch(url).then(resp => resp.json())
            )).then(json => {
                hideLoad();
                json.map(item => drawComics(item.data.results));
            });

            break;
    }
});

const randomArray = type => {
    let arrayLinks = [];
    while (arrayLinks.length < 10) {
        let number = Math.floor((Math.random() * 1491) + 1);
        if (arrayLinks.indexOf(number) === -1)
            str = `https://gateway.marvel.com/v1/public/${type}?ts=1&limit=1&offset=${number}&apikey=0cc0bbc55224cb8f34ec109ab692c2cb&hash=4e7f342316da627d9a966768f39d0702`;
        arrayLinks.push(str);
    }
    return arrayLinks;
}

const removeItems = () => { document.querySelectorAll(".removeItems").forEach((val, key) => val.remove()) }

const showLoad = () => { document.querySelector(".load-data").classList.add("showLoad") }

const hideLoad = () => { document.querySelector(".load-data").classList.remove("showLoad") }

const drawHero = arrayHero => {
    const hero = arrayHero[0];
    let heroName = hero.name;
    let heroImg = `${hero.thumbnail.path}/portrait_incredible.${hero.thumbnail.extension}`;
    let heroComics = checkUrl(hero.urls, "comiclink");
    let heroWrap = templateWrap(heroImg, heroName, heroComics, "Comics zone");
    main.insertAdjacentHTML("beforeEnd", heroWrap);
}

const drawComics = arrayComics => {
    const comics = arrayComics[0];
    let comicsTitle = comics.title;
    let comicsImg = `${comics.thumbnail.path}/portrait_incredible.${comics.thumbnail.extension}`;
    let linkComics = checkUrl(comics.urls, "detail");
    let comicsWrap = templateWrap(comicsImg, comicsTitle, linkComics, "Detail");
    main.insertAdjacentHTML("beforeEnd", comicsWrap);
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

const checkUrl = (arr, type) => {
    let link;
    arr.forEach(val => {
        if (val.type == type)
            link = val.url;
    });
    return link;
}

const templateWrap = (img, title, link, about) => {
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

