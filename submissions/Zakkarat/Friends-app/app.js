const img = document.getElementById("imag");
const main = document.getElementsByTagName("main")[0];
const filter = document.getElementById("filter");
const modalWindow = document.getElementsByClassName("modal")[0];
const modalContent = document.getElementsByClassName("modal-content")[0];
const outer = document.getElementsByClassName("outerCont")[0];
const ascAlphabet = document.getElementById("ascAplphabet");
const descAlphabet = document.getElementById("descAlphabet");
const ascAge = document.getElementById("ascAge");
const descAge = document.getElementById("descAge");
const male = document.getElementById("male");
const female = document.getElementById("female");
const close = document.getElementById("close");
let staticPeople;
let people;

fetch("https://randomuser.me/api/?results=30&nat=us")
  .then(function(response) {
    if (response.ok) {
      return response.json();
    }
  })
  .then(function(data) {
    staticPeople = data.results;
    people = staticPeople;
    AddCard(staticPeople);
  });

filter.addEventListener("click", function() {
  popUp();
});

outer.addEventListener("click", function(element) {
  detectFunction(element);
});

function alphabet(target) {
  people = people.sort(function(a, b) {
    if (a.name.first < b.name.first) {
      return -1;
    } else if (a.name.first > b.name.first) {
      return 1;
    } else if (a.name.last < b.name.last) {
      return -1;
    } else if (a.name.last > b.name.last) {
      return 1;
    }
    return 0;
  });
  if (target == descAlphabet) {
    people = people.reverse();
  }
  render(people);
}
function age(target) {
  let sortedArr = people.sort(function(a, b) {
    return a.dob.age - b.dob.age;
  });
  if (target == descAge) {
    sortedArr = sortedArr.reverse();
  }
  render(sortedArr);
}

function genderFilter(target) {
  if (target == male) {
    people = staticPeople.filter(elem => elem.gender == "male");
  } else {
    people = staticPeople.filter(elem => elem.gender == "female");
  }
  render(people);
}
function AddCard(people) {
  people.forEach(function(info) {
    CapitalNames(info);
    info.location.city = CapitalFirst(info.location.city);
    main.innerHTML += `<div class="card">
      <img src="${info.picture.large}" id="imag" />
      <h1>${info.name.first} ${info.name.last}</h1>
      <h3>Age: ${info.dob.age}</h3>
      <h3>Location: ${info.location.city}</h3>
      <h4>Email: ${info.email}</h4>
      <h3>Phone: ${info.phone}</h3>
    </div>`;
  });
}

function CapitalFirst(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function CapitalNames(info) {
  info.name.first = CapitalFirst(info.name.first);
  info.name.last = CapitalFirst(info.name.last);
}

function search(people) {
  let search = new RegExp(document.getElementById("searchMob").value, "ig");
  people = staticPeople.filter(
    char =>
      char.name.first.toLowerCase().match(search) ||
      char.name.last.toLowerCase().match(search)
  );
  render(people);
}

function render(filtered) {
  main.innerHTML = "";
  AddCard(filtered);
}

function detectFunction(a) {
  let target = a.target;
  while (target != outer) {
    if (target.tagName == "BUTTON") {
      switch (target) {
        case ascAlphabet:
        case descAlphabet:
          alphabet(target);
          break;
        case ascAge:
        case descAge:
          age(target);
          break;
        case male:
        case female:
          genderFilter(target);
          break;
        case reset:
          render(staticPeople);
          people = staticPeople;
          break;
        case close:
          popUp();
          break;
      }
      return;
    }
    target = target.parentNode;
  }
}

function popUp() {
  modalWindow.classList.toggle("modal-up");
  modalContent.classList.toggle("modal-content-up");
}
