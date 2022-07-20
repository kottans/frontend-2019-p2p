const cardOfHumans = document.getElementById("allHumans");
const searchBar = document.getElementById("search");
const checkboxesGender = document.getElementById("filter_gender");

let arrFiltered;
let friends = [];
fetch("https://randomuser.me/api/?results=10")
  .then((response) => response.json())
  .then((users) => {
    friends = Array.from(users.results);
    displayUsers(friends);
    sortFriends(friends);
    selectFriends(friends);
    filterByGender(friends);
    searchFriends(friends);
  });

const displayUsers = (friends) => {
  const htmlString = friends
    .map((item) => {
      return `<div class="card_person">
    <div class="card_container">
    <img src="${item.picture.large}">
    <h3 class="card_h3">${item.name.first} ${item.name.last}</h3>
    <p class="card_age">Age: ${item.dob.age}</p>
    <p class="card_gender">Gender: ${item.gender}</p>
    </div>
    </div>`;
    })
    .join("");
  cardOfHumans.innerHTML = htmlString;
};

function increaseSortByName() {
  console.log(friends);
  let sortedIncrease = friends.sort(function (a, b) {
    if (a.name.first.toLowerCase() < b.name.first.toLowerCase()) return -1;
    if (a.name.first.toLowerCase() > b.name.first.toLowerCase()) return 1;
    return 0;
  });
  displayUser(sortedIncrease);
}
function decreaseSortByName() {
  let sortedDecrease = friends.sort(function (a, b) {
    if (a.name.first.toLowerCase() > b.name.first.toLowerCase()) return -1;
    if (a.name.first.toLowerCase() < b.name.first.toLowerCase()) return 1;
    return 0;
  });
  displayUser(sortedDecrease);
}
function sortFriends() {
  document.querySelector(".filter_menu").addEventListener("click", (event) => {
    const button = event.target.id;
    switch (button) {
      case "a-z":
        increaseSortByName();
        break;
      case "z-a":
        decreaseSortByName();
        break;
      case "0-9":
        increaseSortByAge();
        break;
      case "9-0":
        decreaseSortByAge();
        break;
    }
  });
}
function increaseSortByAge() {
  let sortedAgeIncrease = friends.sort(function (a, b) {
    return a.dob.age - b.dob.age;
  });
  displayUsers(sortedAgeIncrease);
}
function decreaseSortByAge() {
  let sortedAgeDecrease = friends.sort(function (a, b) {
    return b.dob.age - a.dob.age;
  });
  displayUsers(sortedAgeDecrease);
}
function filterByGender() {
  let checkboxes = Array.from(
    document.querySelectorAll(".gender_checkbox:checked")
  );
  arrFiltered = friends.filter((item) =>
    checkboxes.some((gender) => item.gender === gender.value)
  );
  displayUsers(arrFiltered);
}
function selectFriends() {
  filterByGender();
  if (arrFiltered.length == 0) {
    cardOfHumans.innerHTML = "";
  } else {
    displayUsers(arrFiltered);
  }
}

// SEARCH

function searchFriends() {
  searchBar.addEventListener("keyup", (e) => {
    let searchedFriend = e.target.value.toLowerCase();
    console.log(searchedFriend);
    let filteredFriends = arrFiltered.filter((item) => {
      return (
        item.name.first.toLowerCase().includes(searchedFriend) ||
        item.name.last.toLowerCase().includes(searchedFriend)
      );
    });
    displayUsers(filteredFriends);
    console.log(filteredFriends);
  });
}
