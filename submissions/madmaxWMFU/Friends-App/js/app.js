const allFriends = {
    currentList: [],
    changeList: [],
    countFriends: 52,
    minAge: 0,
    maxAge: 150
};

const friendZone = document.querySelector(".friends-zone");
const filters = document.querySelector(".filters-input");
const sorts = document.querySelector(".search-sort-options");
const resetFilters = document.querySelector(".reset-button");

const getDataApi = async () => {
    const response = await fetch(`https://randomuser.me/api/?results=${allFriends.countFriends}`);
    const data = await response.json();
    allFriends.currentList = data.results;
    renderFriendsList(allFriends.currentList);
}      

const drawFriendsCards = (user) => {
    let temp = `<div class="user-card shadow-profile">
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

const renderFriendsList = (allFriends) => allFriends.forEach(friend => drawFriendsCards(friend));

const funcFilterList = {
    filterByGender(list, {gender}) { return gender !== "all" ? list.filter((person) => person.gender === gender) : allFriends.currentList},
    filterByAge(list, {ageTill, ageTo}) { return list.filter((person) => ageTill <= person.dob.age && person.dob.age <= ageTo)},
    filterByName(list, {name}) { return name != "" ? list.filter((person) => new RegExp(name, 'i').test(person.name.first)) : null}
}

const getFilterList = () => {
    allFriends.changeList = [...allFriends.currentList];
    const searchValue = {
        name: document.querySelector(".search-input-name").value || "",
        gender: document.querySelector("[name='search-input-gender']:checked").value || "all",
        ageTill: document.querySelector(".search-input-age1").value || allFriends.minAge,
        ageTo: document.querySelector(".search-input-age2").value || allFriends.maxAge
    };
    let funcName = ["filterByName", "filterByGender", "filterByAge"];

    funcName.forEach((func) => {
        let newArray = funcFilterList[func](allFriends.changeList, searchValue);
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
    filters.options[0].selected = true;
    document.querySelector(".search-input-name").value = "";
    document.querySelector(".search-input-age1").value = allFriends.minAge;
    document.querySelector(".search-input-age2").value = allFriends.maxAge;
    document.querySelectorAll("[name='search-input-gender']")[2].checked = true;
    renderFriendsList(allFriends.currentList);
};

filters.addEventListener("click", getSortList);
sorts.addEventListener("change", getFilterList);
resetFilters.addEventListener("click", resetSearchValues);

window.onload = function() {
    getDataApi()
}
