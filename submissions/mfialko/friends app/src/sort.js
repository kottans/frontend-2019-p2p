export const sort = ({currentTarget}, list, render) => {
    let {elements} = currentTarget;
    
    state = {
        filterGenderBy: elements.gender.value,
        sortAlphabetically: elements.sortAlphabetically.value,
        filterMinAge: elements.minAge.value,
        filterMaxAge: elements.maxAge.value,
        filterCityBy: elements.city.value,
        filterNameBy: elements.name.value
    };
     
    list = sortPeoplesByName(list);
    list = filterByGender(list);
    list = filterByAge(list, state.filterMinAge, state.filterMaxAge);
    list = filterByCity(list, state.filterCityBy);
    list = filterByName(list, state.filterNameBy);

    
    render(list);
} 

let state;

const sortPeoplesByName = peoples => {    
    const sliced = [...peoples];  
    const runSorting = (a, b) => {
        if(a.firstName.toLowerCase() < b.firstName.toLowerCase()) { return -1; }
        if(a.firstName.toLowerCase() > b.firstName.toLowerCase()) { return 1; }
        return 0;
    }
    if (state.sortAlphabetically === 'ascending') {
      sliced.sort(runSorting);
    } 
    if (state.sortAlphabetically === 'descending') {
      sliced.sort((a, b) => runSorting(b, a));
    }
    return sliced;  
};

const filterByGender = peoples =>
  state.filterGenderBy && state.filterGenderBy !== 'all'
    ? peoples.filter(({ gender }) => gender === state.filterGenderBy)
    : peoples;
    

const filterByAge = (list, minAge, maxAge) => {
    minAge ? list = list.filter(({age}) => age >= minAge): {}; 
    maxAge ? list = list.filter(({age}) => age <= maxAge): {};
    return list;
};

const filterByCity = (list, city) => {
    let search = new RegExp(city, "ig");
    list = list.filter(({city}) => city.match(search) || city.match(search));
    return list;
};

const filterByName = (list, name) => {
    let search = new RegExp(name, "ig");
    list = list.filter((e) => e.firstName.toLowerCase().match(search) || e.lastName.toLowerCase().match(search));
    return list;
};