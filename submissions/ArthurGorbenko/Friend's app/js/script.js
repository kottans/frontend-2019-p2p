const CONSTS = {
  LIST_OF_CARDS: document.querySelector(".list"),
  DIRECT_MESSAGE_FORM: document.querySelector(".direct-message"),
  FORM: document.querySelector(".form"),
  SEND_BUTTON: document.querySelector(".send-on-click-button"),
  SEARCH_FIELD: document.querySelector(".search-field"),
  RADIO_AGE_FORM: document.querySelector(".wrapper-radio-age"),
  RADIO_GENDER_FORM: document.querySelector(".wrapper-radio-gender"),
  EMAIL_FIELD: document.querySelector(".email-field"),
  TEXT_AREA: document.querySelector(".textarea"),
  ALERT_MESSAGE: document.querySelector(".alert-message"),
  RESET_BUTTON: document.querySelector(".reset"),
  HAMBURGER: document.querySelector(".hamburger.hamburger--slider"),
  THEME_WRAPPER: document.querySelector(".wrapper-theme-change"),
  BODY: document.querySelector(".default"),
  MENU: document.querySelector(".menu"),
  WRAPPER_MENU: document.querySelector(".wrapper-menu")
};

const MOBILE_RESOLUTION = "(max-width: 599px)";
const SORT_BY_ASCENDING = "ascending";
const CARD_CLASS = "card";
const BUTTON_CLASS = "button";
const DARK_INPUT_ID = "dark";
const ADDRESS =
  "https://randomuser.me/api/?results=40&inc=gender,name,email,phone,dob,picture";

let filteredByGender = false;
let radioButtons = document.querySelectorAll(".visually-hidden");
let usersConst;
let users;
let query = "";
let menuToggled = false;

const letterToUpperCase = word => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const refreshDMWindow = () => {
  CONSTS.FORM.classList.remove("visually-hidden");
  CONSTS.ALERT_MESSAGE.classList.add("visually-hidden");
  CONSTS.TEXT_AREA.value = "";
};

const moveContent = () => {
  CONSTS.LIST_OF_CARDS.classList.toggle("move-bottom");
  CONSTS.HAMBURGER.classList.toggle("is-active");
  CONSTS.WRAPPER_MENU.classList.toggle('menu-move-bottom');
  menuToggled = false;
};

const writeLetter = ({ target }) => {
  let mediaQuery = window.matchMedia(MOBILE_RESOLUTION);
  if (CONSTS.FORM.classList.contains("visually-hidden")) {
    refreshDMWindow();
  }
  if (target.classList.contains("sendMessage")) {
    CONSTS.DIRECT_MESSAGE_FORM.classList.remove("hide-direct-message");
    CONSTS.EMAIL_FIELD.value = target.parentElement.dataset.email;
    if (mediaQuery.matches) {
      CONSTS.HAMBURGER.classList.remove("visually-hidden");
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (!menuToggled) {
        moveContent();
        menuToggled = true;
      }
    }
  }
};

const messageSend = () => {
  CONSTS.FORM.classList.add("visually-hidden");
  CONSTS.ALERT_MESSAGE.classList.remove("visually-hidden");
};

const addLiElements = parent => {
  let props = {
    name: document.createElement("li"),
    age: document.createElement("li"),
    phone: document.createElement("li")
  };
  for (prop in props) {
    props[prop].classList.add("infoFriend");
    parent.append(props[prop]);
  }
  return props;
};

const createBlock = (tag, classList) => {
  element = document.createElement(tag);
  element.classList.add(...classList);
  return element;
};

const createCard = user => {
  let li = createBlock("li", ["card"]);
  li.dataset.email = user.email;

  let img = createBlock("img", ["photo"]);
  img.src = user.picture.large;

  let listInfo = createBlock("ul", ["listInfo"]);

  let sendLetter = createBlock("input", ["button", "sendMessage"]);
  sendLetter.type = "button";
  sendLetter.value = "Send letter";

  [img, listInfo, sendLetter].forEach(el => li.append(el));

  let properties = addLiElements(listInfo);

  properties.age.innerHTML = `<strong>Age : </strong> ${user.dob.age}`;
  properties.name.innerHTML = `<strong>Name : </strong>
    ${letterToUpperCase(user.name.first)}
    ${letterToUpperCase(user.name.last)}`;
  properties.phone.innerHTML = `<strong>Phone : </strong> ${user.phone}`;

  CONSTS.LIST_OF_CARDS.append(li);
};

const toogleAppTheme = () => {
  CONSTS.BODY.classList.toggle("body-mod-dark");
  CONSTS.MENU.classList.toggle("menu-mod-dark");
  CONSTS.DIRECT_MESSAGE_FORM.classList.toggle("direct-messageDark");
};

const changeColorCards = (cardsClass, buttonsClass) => {
  let cards = document.getElementsByClassName(cardsClass);
  cards = [...cards];
  cards.forEach(card => card.classList.toggle("card-dark"));
  let buttons = document.getElementsByClassName(buttonsClass);
  buttons = [...buttons];
  buttons.forEach(button => button.classList.toggle("button-dark"));
};

const createNewList = (people, darkId, cardsClass, buttonsClass) => {
  CONSTS.LIST_OF_CARDS.innerHTML = "";
  people.forEach(person => createCard(person));
  if (document.getElementById(DARK_INPUT_ID).checked) {
    let cards = document.getElementsByClassName(cardsClass);
    cards = [...cards];
    cards.forEach(card => card.classList.add("card-dark"));
    let buttons = document.getElementsByClassName(buttonsClass);
    buttons = [...buttons];
    buttons.forEach(button => button.classList.add("button-dark"));
  }
  CONSTS.LIST_OF_CARDS.addEventListener("click", writeLetter);
};

const searchPeople = subString => {
  if (!subString || subString === " ") {
    return null;
  }
  if (!filteredByGender) {
    users = usersConst;
  }
  subString = subString.toLowerCase();
  let usersFound = users.filter(
    user => user.name.first.match(subString) || user.name.last.match(subString)
  );
  createNewList(usersFound, DARK_INPUT_ID, CARD_CLASS, BUTTON_CLASS);
};


const showGender = genderType => {
  if (filteredByGender) {
    users = usersConst;
  }
  users = users.filter(user => user.gender === genderType);
  createNewList(users, DARK_INPUT_ID, CARD_CLASS, BUTTON_CLASS);
  filteredByGender = true;
  if (query) {
    searchPeople(query);
  }
};

const genderFilter = ({ target }) => {
  if (target.checked) {
    showGender(target.dataset.gender);
  }
};

const sortingProcess = typeOfSort => {
  const runSort = (a, b) => a.dob.age - b.dob.age;
  if (typeOfSort === SORT_BY_ASCENDING) {
    users.sort(runSort);
  } else {
    users.sort((a, b) => runSort(b, a));
  }
  createNewList(users, DARK_INPUT_ID, CARD_CLASS, BUTTON_CLASS);
  searchPeople(query);
};

const ageSort = ({ target }) => {
  if (target.checked) {
    let sortType = target.dataset.render;
    sortingProcess(sortType);
  }
};

const resetRadio = allButtons => {
  let buttons = [...allButtons];
  buttons.forEach(button => (button.checked = false));
};

const resetAllOptions = () => {
  CONSTS.SEARCH_FIELD.value = "";
  query = "";
  resetRadio(radioButtons);
  createNewList(usersConst, DARK_INPUT_ID, CARD_CLASS, BUTTON_CLASS);
};

const switchTheme = ({ target }) => {
  if (target.checked) {
    toogleAppTheme();
    changeColorCards("card", "button");
  }
};

const start = () => {
  CONSTS.HAMBURGER.addEventListener("click", moveContent);
  CONSTS.SEND_BUTTON.addEventListener("click", messageSend);
  CONSTS.RADIO_GENDER_FORM.addEventListener("change", genderFilter);
  CONSTS.RADIO_AGE_FORM.addEventListener("change", ageSort);
  CONSTS.RESET_BUTTON.addEventListener("click", resetAllOptions);
  CONSTS.THEME_WRAPPER.addEventListener("change", switchTheme);
  CONSTS.SEARCH_FIELD.addEventListener("keyup", function() {
    query = this.value.toLowerCase();
    searchPeople(query);
  });
};

const processPeople = usersData => {
  usersConst = usersData;
  users = usersConst;
  createNewList(users, DARK_INPUT_ID, CARD_CLASS, BUTTON_CLASS);
  start();
};

const getData = url => {
  fetch(url).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(res.statusText);
  }).then(({results}) =>{
    processPeople(results);
  })
};

getData(ADDRESS);
 