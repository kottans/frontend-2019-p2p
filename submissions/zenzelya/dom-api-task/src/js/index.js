// another js file (example)
import store from './store.js'

const APIKEY = 'c478c3a9059337c563a4af7f91dc0c01',
	  IMAGEURL = 'http://image.tmdb.org/t/p/';
	  

document.addEventListener("DOMContentLoaded", function(event) { 
	
	const moviesList = document.getElementById('js-hook--movies-list');
	
	displayMovies();

	moviesList.addEventListener('click', getList);
	
});


function createCard(item){
	let card = document.createElement('div');
	card.classList.add("card");
	card.style.background = `url('${IMAGEURL}w185${item.poster_path}') no-repeat center`;
	return card;
}

function displayMovies(movie = 'popular'){
	
	let cardsListFragment = document.createDocumentFragment();
	const CARDS = document.getElementsByClassName('js-hook--card-wrapper')[0];
 
 	store[movie].results.forEach(function(item) {
    	cardsListFragment.appendChild(createCard(item));
	});

	CARDS.innerHTML = '';
	CARDS.appendChild(cardsListFragment);
}

function getList(){
	event.preventDefault();
	let prevSelected = this.getElementsByClassName('movies-list__item--selected')[0];
	if (event.target.dataset.list != prevSelected.dataset.list ){
		prevSelected.classList.remove('movies-list__item--selected');
		event.target.classList.add('movies-list__item--selected');
		displayMovies(event.target.dataset.list);
	}
}


