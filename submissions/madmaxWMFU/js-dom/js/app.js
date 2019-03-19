const menuItem = document.querySelector(".menu-wrap-list-item");
const main = document.querySelector(".main-content");
menuItem.addEventListener("click", e => {
    document.querySelector(".active").classList.remove("active");
    e.target.parentElement.classList.add("active");
    switch (e.target.dataset.href) {
        case "home":
            removeItems();
            document.querySelector(".load-data").classList.toggle("showLoad");
            drawMainPage();
            document.querySelector(".load-data").classList.toggle("showLoad");
            break;
        case "heros":
            removeItems();
            document.querySelector(".load-data").classList.toggle("showLoad");
            const arrayHero = randomArray('characters');
            Promise.all(arrayHero.map(url =>
                fetch(url).then(resp => resp.json())
            )).then(json => {
                document.querySelector(".load-data").classList.toggle("showLoad");
                json.map(item => drawHero(item.data.results));
            });

            break;
        case "comics":
            removeItems();
            document.querySelector(".load-data").classList.toggle("showLoad");
            const arrayComics = randomArray('comics');
            Promise.all(arrayComics.map(url =>
                fetch(url).then(resp => resp.json())
            )).then(json => {
                document.querySelector(".load-data").classList.toggle("showLoad");
                json.map(item => drawComics(item.data.results));
            });

            break;
    }
});

let randomArray = type => {
    let arr = [];
    while (arr.length < 10) {
        let number = Math.floor((Math.random() * 1491) + 1);
        if (arr.indexOf(number) === -1)
            str = `https://gateway.marvel.com/v1/public/${type}?ts=1&limit=1&offset=${number}&apikey=0cc0bbc55224cb8f34ec109ab692c2cb&hash=4e7f342316da627d9a966768f39d0702`;
        arr.push(str);
    }
    return arr;
}

let removeItems = () => {
    const allContentItems = document.querySelectorAll(".removeItems");
    allContentItems.forEach((val, key) => val.remove());
}

let drawHero = arrayHero => {
    const hero = arrayHero[0];
    let heroName = hero.name;
    let heroImg = `${hero.thumbnail.path}/portrait_incredible.${hero.thumbnail.extension}`;
    let heroComics = "";
    hero.urls.forEach(val => {
        if (val.type == "comiclink")
            heroComics = val.url;
    })

    let heroWrap = `
		<div class="hero-wrap removeItems">
			<div class="card-thumb-frame">
				<img src="${heroImg}" />
			</div>
			<div class="card-body">
			    <p class="card-body__headline">${heroName}</p>
			</div>
			<div class="comic-url">
				<a class="card-body__comicurl" href="${heroComics}" target="_blanck">Comics zone</a>
			</div>
		</div>`;

    main.insertAdjacentHTML("beforeEnd", heroWrap);
}

const drawComics = arrayComics => {
    const comics = arrayComics[0];
    let comicsTitle = comics.title;
    let comicsImg = `${comics.thumbnail.path}/portrait_incredible.${comics.thumbnail.extension}`;
    let linkComics = "";
    comics.urls.forEach(val => {
        if (val.type == "detail")
            linkComics = val.url;
    })

    let comicsWrap = `
    	<div class="hero-wrap removeItems">
    		<div class="card-thumb-frame">
    			<img src="${comicsImg}" />
    		</div>
    		<div class="card-body">
                <p class="card-body__headline">${comicsTitle}</p>
    		</div>
    		<div class="comic-url">
    			<a class="card-body__comicurl" href="${linkComics}" target="_blanck">Detail</a>
    		</div>
    	</div>`;

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