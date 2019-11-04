const allFriends = {
    currentList: [],
    changeList: [],
    numberOfFriends: 52,
    minAge: 0,
    maxAge: 150
};

const searchValues = {
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
const searchGender = Array.from(document.querySelectorAll("[name='search-input-gender']"));
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

const showErrorMessage = () => friendZone.insertAdjacentHTML("beforeEnd", '<h4 class="friends-zone__error">Something went wrong...</h4>');

const renderFriendsList = (allFriends) => allFriends.forEach(drawFriendsCards);

const getFilterList = {
    filterByGender: (list, {gender}) => {
        if(gender !== "all") {
          return list.filter((person) => person.gender === gender); 
        } else {
            return allFriends.currentList;
        }
    },
    filterByAge: (list, {ageTill, ageTo}) => {
        return list.filter((person) => ageTill <= person.dob.age && person.dob.age <= ageTo);
    },
    filterByName: (list, {name}) => {
        if(name != "") {
            return list.filter((person) => person.name.first.toLowerCase().includes(name));
        } else {
            return allFriends.changeList;
        }
    }
}

const getGenderValue = () => searchGender.find(item => item.checked === true).value;

const applyFilters = () => {
    Object.keys(getFilterList).forEach((filter) => {
        allFriends.changeList = getFilterList[filter](allFriends.changeList, searchValues);
    });
}

const renderFilterList = () => {
    sorts.value = "none";
    allFriends.changeList = [...allFriends.currentList];
    searchValues.name = searchName.value;
    searchValues.gender = getGenderValue();
    searchValues.ageTill = searchAgeTill.value;
    searchValues.ageTo = searchAgeTo.value;
   
    applyFilters();
    cleanFriendsZone();
    renderFriendsList(allFriends.changeList);  
}

const sortByName = (a, b) => a.name.first < b.name.first ? -1 : 1;

const getSortByNameList = (option) => {
    return allFriends.changeList.sort((firstPerson, secondPerson) => {
        if(option === "nameAsc") {
            return sortByName(firstPerson, secondPerson);
        } else {
            return sortByName(secondPerson, firstPerson);
        }
    });
} 

const sortByAge = (a, b) => a.dob.age - b.dob.age;

const getSortByAgeList = (option) => {
    return allFriends.changeList.sort((firstPerson, secondPerson) => {
        if(option === "ageAsc") {
            return sortByAge(firstPerson, secondPerson); 
        } else {
            return sortByAge(secondPerson, firstPerson);
        }
    });
}

const renderSortFriendList = ({target}) => {
    if(target.value != "none")
        allFriends.changeList = target.value.includes("name") ? getSortByNameList(target.value) : getSortByAgeList(target.value);
        cleanFriendsZone();
        renderFriendsList(allFriends.changeList);
}

const resetSearchValues = () => {
    sorts.value = "none";
    searchName.value = "";
    searchAgeTill.value = allFriends.minAge;
    searchAgeTo.value = allFriends.maxAge;
    searchGender.find(item => item.value === "all").checked = true;
    renderFriendsList(allFriends.currentList);
};

const init = async () => {
    try {
        allFriends.currentList = await loadFriends();
        allFriends.changeList = [...allFriends.currentList]; 
        sorts.addEventListener("click", renderSortFriendList);
        filters.addEventListener("change", renderFilterList);
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
