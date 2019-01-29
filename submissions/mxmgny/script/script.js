
const requestURL = "https://raw.githubusercontent.com/mxmgny/DOM_Practice/master/script/data.json";
const aside = document.createElement('aside');
    aside.classList.add('navbar');
const main = document.createElement('main');
    main.classList.add('collection');
const body = document.querySelector('body');

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObj){
        const races = jsonObj['items'];
       
        races.forEach( (race) => {
            const navButton = createTextElement('button',race['header']);
                navButton.classList.add('navbar__button');
            const raceArticle = createRaceArticle(race);
            aside.appendChild(navButton);
            main.appendChild(raceArticle);
        });

    aside.onclick = function(event) {
        changeRace.call(event.target)
    };
    aside.firstElementChild.classList.add('navbar__button_active');
    main.firstElementChild.classList.add('article_active');
    body.appendChild(aside);
    body.appendChild(main);
    })
    .catch( console.log() );

function createRaceArticle(raceInfo) {
    let article = document.createElement('article');
        article.id = raceInfo['header'];
        article.classList.add('article')
    let header = createTextElement('h2',raceInfo['header']);
        header.classList.add('article__header');
    let paragraph = createTextElement('p',raceInfo['decription-text']);
        paragraph.classList.add('article__paragraph');
    
    article.appendChild(header);
    article.appendChild(createImage(raceInfo['logo']));
    article.appendChild(paragraph);
     return article;
}

function createImage(src) {
    let imgElement = document.createElement('img');
    imgElement.src = "https://raw.githubusercontent.com/mxmgny/DOM_Practice/master/"+src;
    imgElement.classList.add('article__image');
    return imgElement;
}

function createTextElement(elementTag, text){
    let element =  document.createElement(elementTag);
    element.innerText = text;
    return element;
}

function deactivate(className) { 
    let arrayOfElements = Array.from(document.getElementsByClassName(className));
    arrayOfElements.map( element => element.classList.value = className );
}

function changeRace() {
    deactivate('article');
    deactivate('navbar__button');
    document.getElementById(this.innerText).classList.add('article_active');
    this.classList.add('navbar__button_active');
}
