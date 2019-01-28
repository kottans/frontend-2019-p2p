
const requestURL = "https://raw.githubusercontent.com/mxmgny/DOM_Practice/master/script/data.json";
const aside = document.createElement('aside');
const main = document.createElement('main');
const body = document.querySelector('body');

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObj){
        const races = jsonObj['items'];
       
        races.forEach( (race) => {
            const navButton = createTextElement('button',race['header']);
            const raceArticle = createRaceArticle(race);
            aside.appendChild(navButton);
            main.appendChild(raceArticle);
        });

    aside.onclick = function(event) {
        changeRace.call(event.target)
    };
    aside.firstElementChild.classList.add('active');
    main.firstElementChild.classList.add('active');
    body.appendChild(aside);
    body.appendChild(main);
    })
    .catch( console.log() );

function createRaceArticle(raceInfo) {
    let article = document.createElement('article');
        article.id = raceInfo['header'];
     article.appendChild(createTextElement('h2',raceInfo['header']));
     article.appendChild(createImage(raceInfo['logo']));
     article.appendChild(createTextElement('p',raceInfo['decription-text']));
     return article;
}

function createImage(src) {
    let imgElement = document.createElement('img');
    imgElement.src = "https://raw.githubusercontent.com/mxmgny/DOM_Practice/master/"+src;
    return imgElement;
}

function createTextElement(elementTag, text){
    let element =  document.createElement(elementTag);
    element.innerText = text;
    return element;
}

function deactivate(tagName) { 
    let arrayOfElements = Array.from(document.getElementsByTagName(tagName));
    arrayOfElements.map( element => element.classList.value = "" );
}

function changeRace() {
    deactivate('article');
    deactivate('button');
    document.getElementById(this.innerText).classList.add('active');
    this.classList.add('active');
}
