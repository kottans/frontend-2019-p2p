const allFriends = {
    currentList: [],
    changeList: [],
    numberOfFriends: 52,
    minAge: 0,
    maxAge: 150
};

const searchValue = {
    name: "",
    gender: "all",
    ageTill: allFriends.minAge,
    ageTo: allFriends.maxAge
};

const friendZone = document.querySelector(".friends-zone");
const sorts = document.querySelector(".sort-input");
const filters = document.querySelector(".search-filter-options");
const resetFilters = document.querySelector(".reset-button");
const searchName = document.querySelector(".search-input-name");
const searchGender = document.querySelectorAll("[name='search-input-gender']");
const searchAgeTill = document.querySelector(".search-input-age-start");
const searchAgeTo = document.querySelector(".search-input-age-end");

const loadFriends = () => {
    return fetch(`https://randomuser.me/api/?results=${allFriends.numberOfFriends}`)
    .then(response => {
        if(response.ok) return response.json();
            throw new Error(response.status);
    })
    .then(data => data.results);
}     

const drawFriendsCards = (user) => {
    let temp = `<div class="user-card shadow-profile ${user.gender === "male" ? "shadow-profile__male" : "shadow-profile__female"}">
                    <div class="user-card__img">
                        <img src="${user.picture.large}" alt="My friend">
                    </div>
                    <div class="user-card__cnt">
                        <div class="profile-card__name"><span>${user.name.first}</span></div>
                        <div class="profile-card__name"><span>${user.name.last}</span></div>
                        <div class="profile-card__name"><span>${user.location.city}, ${user.nat}</span></div>
                        <div class="profile-card__name"><address>Place: ${user.location.street.name}, ${user.location.street.number}</address></div>
                    </div> 
                    <span class="user-card__age">${user.dob.age}</span>
                </div>`;
    friendZone.insertAdjacentHTML("beforeEnd", temp);
}

const cleanFriendsZone = () => friendZone.innerHTML = "";

const showErrorMessage = () => friendZone.insertAdjacentHTML("beforeEnd", '<h4 class="friends-zone__error">No internet connection. Please try again!)</h4>');

const renderFriendsList = (allFriends) => allFriends.forEach(drawFriendsCards);

const getFilterList = {
    filterByGender: (list, {gender}) => gender !== "all" ? list.filter((person) => person.gender === gender) : allFriends.currentList,
    filterByAge: (list, {ageTill, ageTo}) => list.filter((person) => ageTill <= person.dob.age && person.dob.age <= ageTo),
    filterByName: (list, {name}) => name != "" ? list.filter((person) => person.name.first.toLowerCase().indexOf(name.toLowerCase()) != -1) : []
}

const getGenderValue = () => Array.from(searchGender).find(item => item.checked === true).value;

const filterList = () => {
    sorts.value = "none";
    allFriends.changeList = [...allFriends.currentList];
    searchValue.name = searchName.value;
    searchValue.gender = getGenderValue();
    searchValue.ageTill = searchAgeTill.value;
    searchValue.ageTo = searchAgeTo.value;
   
    Object.keys(getFilterList).forEach((filter) => allFriends.changeList = getFilterList[filter](allFriends.changeList, searchValue));

    cleanFriendsZone();
    renderFriendsList(allFriends.changeList);  
}

const sortByName = (a, b) => a.name.first < b.name.first ? -1 : 1;

const getSortNameOptionList = (option) => allFriends.changeList.sort((firstPerson, secondPerson) => option === "nameAsc" ? sortByName(firstPerson, secondPerson) : sortByName(secondPerson, firstPerson));

const sortByAge = (a, b) => a.dob.age - b.dob.age;

const getSortAgeOptionList = (option) => allFriends.changeList.sort((firstPerson, secondPerson) => option === "ageAsc" ? sortByAge(firstPerson, secondPerson) : sortByAge(secondPerson, firstPerson));

const sortList = ({target}) => {
    if(target.value != "none")
        allFriends.changeList = target.value.indexOf("name") != -1 ? getSortNameOptionList(target.value) : getSortAgeOptionList(target.value);
        cleanFriendsZone();
        renderFriendsList(allFriends.changeList);
}

const resetSearchValues = () => {
    sorts.value = "none";
    searchName.value = "";
    searchAgeTill.value = allFriends.minAge;
    searchAgeTo.value = allFriends.maxAge;
    Array.from(searchGender).find(item => item.value === "all").checked = true;
    renderFriendsList(allFriends.currentList);
};

const init = async () => {
    try {
        allFriends.currentList = await loadFriends();
        allFriends.changeList = [...allFriends.currentList]; 
        sorts.addEventListener("click", sortList);
        filters.addEventListener("change", filterList);
        resetFilters.addEventListener("click", resetSearchValues);
        cleanFriendsZone();
        renderFriendsList(allFriends.currentList);
    } catch {
        showErrorMessage();
    }
}

window.onload = function() {
    init();
}
