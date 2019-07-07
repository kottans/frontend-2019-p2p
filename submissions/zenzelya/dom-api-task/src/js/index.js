// another js file (example)
import store from './store.js'

const APIKEY = 'c478c3a9059337c563a4af7f91dc0c01',
	  IMAGEURL = 'http://image.tmdb.org/t/p/';
	  let fragmetsStore = {};

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
	const CARDS = document.getElementsByClassName('js-hook--card-wrapper')[0];

	if (fragmetsStore[movie]){
		CARDS.innerHTML = '';
		CARDS.appendChild(fragmetsStore[movie]);
	} else{

		let cardsListFragment = document.createDocumentFragment();
	 
 		store[movie].results.forEach(function(item) {
    		cardsListFragment.appendChild(createCard(item));
		});

 		fragmetsStore[movie] = cardsListFragment;

		CARDS.innerHTML = '';
		CARDS.appendChild(fragmetsStore[movie]);
		console.log(fragmetsStore[movie]);
	}
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


