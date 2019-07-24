import { fetchPeople } from './src/fetch.js';
import { createHtmlList } from './src/createHtmlList.js';
import { sort } from './src/sort.js';

let usersOnPage = 20;
let filterForm = document.querySelector('form');
let resetButton = document.querySelector('.button');
let main = document.querySelector('.main');

fetchPeople()
    .then(list => createHtmlList(list))
    .then(html => {
        render(html);
        filterForm.addEventListener('change', (e) => { 
            sort(e, html, render);
        });
        filterForm.addEventListener('keyup', (e) => { 
            sort(e, html, render);
        });
        resetButton.addEventListener('click', () => {  
            reset();
            render(html);
        });
        
    });
           
function reset() {
    let items = filterForm.elements;
    for (let i in items) {
        if (items[i].type === 'select-one' || items[i].type === 'text') {
            items[i].value = "";
        }
    };
};

function render(usersHtml, page = 1) {
    
    let pagesHtml = paginate(usersHtml, usersOnPage);
    if (pagesHtml.length === 0) {
        pagesHtml.push(`<div class='emptyList'>Not found</div>`);
    }
    main.innerHTML = pagesHtml[page - 1];
    
    if (pagesHtml.length > 1) {
        let pages = document.createElement('div');
        pages.className = 'pages';
        for (let i = 1; i <= pagesHtml.length; i++) {
            if (Number(page) === i) {
                pages.innerHTML += `<button class='active' value=${i}>${i}</a>`;
            } else {
                pages.innerHTML += `<button value=${i}>${i}</a>`;
            }
        }
        main.insertAdjacentElement('beforeend', pages);
        pages.addEventListener('click', e => {
            render(usersHtml, e.target.value);
        })
    }     
}

function paginate(array, itemsOnPage) {
    let sets = {};
    let set = [];
    let setCounter = 0;
    

    for (let i = 0; i < array.length; i++) {
        set.push(array[i]);
        if((i + 1) % itemsOnPage === 0 || (i + 1) >= array.length) {
            setCounter++;
            sets['' + setCounter] = set;
            set = [];
        }
    }
    let pagesHtml = Object.values(sets).map(arr => {
        return arr.map(e => e.textHtml).join('');
    });

    return pagesHtml;
}
