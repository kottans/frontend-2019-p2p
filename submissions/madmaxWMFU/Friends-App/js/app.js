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

const loadJson = () => {
    return fetch(`https://randomuser.me/api/?results=${allFriends.numberOfFriends}`)
    .then(response => {
        if(response.ok) return response.json();
            throw new Error(response.status);
    })
    .then(data => dat.results);
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

const errorMessage = () => friendZone.insertAdjacentHTML("beforeEnd", '<h4 class="friends-zone__error">No internet connection. Please try again!)</h4>');

const renderFriendsList = (allFriends) => allFriends.forEach(friend => drawFriendsCards(friend));

const functionFilterList = {
    filterByGender: (list, {gender}) => gender !== "all" ? list.filter((person) => person.gender === gender) : allFriends.currentList,
    filterByAge: (list, {ageTill, ageTo}) => list.filter((person) => ageTill <= person.dob.age && person.dob.age <= ageTo),
    filterByName: (list, {name}) => name != "" ? list.filter((person) => new RegExp(name, 'i').test(person.name.first)) : null
}

const getFilterList = () => {
    sorts.value = "none";
    allFriends.changeList = [...allFriends.currentList];
    searchValue.name = document.querySelector(".search-input-name").value;
    searchValue.gender = document.querySelector("[name='search-input-gender']:checked").value;
    searchValue.ageTill = document.querySelector(".search-input-age-start").value;
    searchValue.ageTo = document.querySelector(".search-input-age-end").value;

    Object.keys(functionFilterList).forEach((filter) => {
        const newArray = functionFilterList[filter](allFriends.changeList, searchValue);
        if(newArray != null) allFriends.changeList = newArray;
    });

    cleanFriendsZone();
    renderFriendsList(allFriends.changeList);  
}

const getSortList = ({target}) => {
    switch(target.value) {
        case "nameAsc":
            allFriends.changeList = allFriends.changeList.sort((a, b) => a.name.first < b.name.first ? -1 : 1);
            break;
        case "nameDesc":
            allFriends.changeList = allFriends.changeList.sort((a, b) => a.name.first > b.name.first ? -1 : 1);
            break;
        case "ageAsc":
            allFriends.changeList = allFriends.changeList.sort((a, b) => a.dob.age - b.dob.age);
            break;
        case "ageDesc":
            allFriends.changeList = allFriends.changeList.sort((a, b) => b.dob.age - a.dob.age);
            break;
    }
    cleanFriendsZone();
    renderFriendsList(allFriends.changeList);
};

const resetSearchValues = () => {
    sorts.value = "none";
    document.querySelector(".search-input-name").value = "";
    document.querySelector(".search-input-age-start").value = allFriends.minAge;
    document.querySelector(".search-input-age-end").value = allFriends.maxAge;
    document.querySelector("[name='search-input-gender'][value='all']").checked = true;
    renderFriendsList(allFriends.currentList);
};

const init = async () => {
    try {
        allFriends.currentList = await loadJson();
        allFriends.changeList = [...allFriends.currentList]; 
        sorts.addEventListener("click", getSortList);
        filters.addEventListener("change", getFilterList);
        resetFilters.addEventListener("click", resetSearchValues);
        cleanFriendsZone();
        renderFriendsList(allFriends.currentList);
    } catch {
        errorMessage();
    }
}

window.onload = function() {
    init();
}
