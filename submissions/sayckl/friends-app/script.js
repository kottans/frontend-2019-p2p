const cards = document.querySelector('.cards');
const textASC = document.querySelector('.asc');
const textDESC = document.querySelector('.desc');
const min = document.querySelector('.min');
const max = document.querySelector('.max');
const male = document.querySelector('.male');
const female = document.querySelector('.female');
const all = document.querySelector('.all');
const reset = document.querySelector('.reset');
let staticPeople;
let people;

const menu = document.querySelector('.menu-btn');
const aside = document.querySelector('aside');
menu.addEventListener('click', () => {
  menu.classList.toggle('menu-btn_active');
  aside.classList.toggle('show_aside');
});

fetch("https://randomuser.me/api/?results=40&nat=us")
  .then(function(response) {
    if (response.ok) {
      return response.json();
    }
  })
  .then(function(data) {
     staticPeople = data.results;
     people = staticPeople;
     add(staticPeople);
   });

function add(people){
  people.forEach(function(elem) {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `<img src="${elem.picture.large}">
    <span class="name">${elem.name.first} ${elem.name.last}</span>
    <span class="age">Age: ${elem.dob.age}</span>
    <span class="location">Location: ${elem.location.city}</span>
    <span class="phone">Phone: ${elem.phone}</span>`

    cards.appendChild(div);
  });
};

textASC.addEventListener('click', () => {
    const asc = people.sort((a, b) => {
      if (a.name.first > b.name.first) {
        return 1;
      }
      if (a.name.first < b.name.first) {
        return -1;
      }
      return 0;
    });
    search(asc);
  });

textDESC.addEventListener('click', () => {
    const desc = people.sort((a, b) => {
        if (a.name.first < b.name.first) {
          return 1;
        }
        if (a.name.first > b.name.first) {
          return -1;
        }
        return 0;
      });
      search(desc);
  });

min.addEventListener('click', () => {
  const younger = people.sort((a, b) => a.dob.age - b.dob.age);
  search(younger);
});

max.addEventListener('click', () => {
  const older = people.sort((a, b) => b.dob.age - a.dob.age);
  search(older);
});

male.addEventListener('click', (elem) => {
  const filtermale = people.filter(elem => elem.gender == 'male');
  search(filtermale);
});

female.addEventListener('click', (elem) => {
  const filterfemale = people.filter(elem => elem.gender == 'female');
  search(filterfemale);
});

reset.addEventListener('click', () => {
  cards.innerHTML = '';
  add(people);
  searcher.value = '';
});

const searcher = document.querySelector('.searcher');
function search(people) {
  let search = searcher.value.toLowerCase();
  people = people.filter( elem => elem.name.first.toLowerCase().match(search) || elem.name.last.toLowerCase().match(search));
  cards.innerHTML = '';
  add(people);
};
