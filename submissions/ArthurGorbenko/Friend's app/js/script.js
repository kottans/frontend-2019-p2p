const CONSTS = {
  LIST_OF_CARDS: document.querySelector(".list"),
  DM_FORM: document.querySelector(".directMessage"),
  FORM: document.querySelector(".form"),
  SEND_BUTTON: document.querySelector(".sendOnClick"),
  SEARCH_FIELD: document.querySelector("#searchField"),
  RADIO_AGE_FORM: document.querySelector(".wrapperRadioAge"),
  RADIO_GENDER_FORM: document.querySelector(".wrapperRadioGender"),
  EMAIL_FIELD: document.querySelector(".emailField"),
  TEXT_AREA: document.querySelector(".textArea"),
  ALERT_MESSAGE: document.querySelector(".alertMessage"),
  RESET_BUTTON: document.querySelector(".reset"),
  HAMBURGER: document.querySelector(".inputButton"),
  THEME_WRAPPER: document.querySelector(".wrapperThemeChange"),
  BODY: document.querySelector(".default"),
  CARDS: document.getElementsByClassName("card"),
  MENU: document.querySelector(".menu"),
  BUTTONS: document.getElementsByClassName("button"),
  DARK_INPUT : document.getElementById("dark")
};

let FILTERED_BY_GENDER = false;
let radioButtons = document.querySelectorAll(".defaultRadio");
let usersConst;
let users;

const append = (parent, child) => {
  return parent.appendChild(child);
};

const letterToUpperCase = word => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const refreshDMWindow = () => {
  CONSTS.FORM.classList.remove("remove");
  CONSTS.ALERT_MESSAGE.classList.add("remove");
  CONSTS.TEXT_AREA.value = "";
};

const moveContent = () => {
  CONSTS.LIST_OF_CARDS.classList.toggle("moveBottom");
};

const writeLetter = ({ target }) => {
  let mediaQuery = window.matchMedia("(max-width: 610px)");
  if (CONSTS.FORM.classList.contains("remove")) {
    refreshDMWindow();
  }
  if (target.classList.contains("sendMessage")) {
    CONSTS.DM_FORM.classList.remove("hideDM");
    CONSTS.EMAIL_FIELD.value = target.parentElement.dataset.email;
    if (mediaQuery.matches) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (CONSTS.HAMBURGER.checked) {
        CONSTS.HAMBURGER.checked = false;
        moveContent();
      }
    }
  }
};

const messageSend = () => {
  CONSTS.FORM.classList.add("remove");
  CONSTS.ALERT_MESSAGE.classList.remove("remove");
};

const addLiElements = parent => {
  let props = {
    name: document.createElement("li"),
    age: document.createElement("li"),
    phone: document.createElement("li")
  };
  for (prop in props) {
    props[prop].classList.add("infoFriend");
    append(parent, props[prop]);
  }
  return props;
};

const createBlock = (tag, classAdd) => {
  element = document.createElement(tag);
  element.classList.add(...classAdd);
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

  [img, listInfo, sendLetter].forEach(el => append(li, el));

  let properties = addLiElements(listInfo);

  properties.age.innerHTML = "<strong>Age : </strong>" + user.dob.age;
  properties.name.innerHTML =
    "<strong>Name : </strong>" +
    letterToUpperCase(user.name.first) +
    " " +
    letterToUpperCase(user.name.last);
  properties.phone.innerHTML = "<strong>Phone : </strong>" + user.phone;

  append(CONSTS.LIST_OF_CARDS, li);
};

const refreshButtons = () => {
  CONSTS.LIST_OF_CARDS.addEventListener("click", writeLetter);
};

const makeDarkBackground = () => {
  CONSTS.BODY.classList.toggle("bodyDark");
  CONSTS.MENU.classList.toggle("menuDark");
  CONSTS.DM_FORM.classList.toggle("directMessageDark");
};

const changeColorCards = () => {
  for (let key = 0; key < CONSTS.CARDS.length; key++) {
    CONSTS.CARDS[key].classList.toggle("cardDark");
  }
  for (let index = 0; index < CONSTS.BUTTONS.length; index++) {
    CONSTS.BUTTONS[index].classList.toggle("buttonDark");
  }
};

const createNewList = people => {
  CONSTS.LIST_OF_CARDS.innerHTML = "";
  people.forEach(man => createCard(man));
  if (CONSTS.DARK_INPUT.checked) {
    for (let key = 0; key < CONSTS.CARDS.length; key++) {
      CONSTS.CARDS[key].classList.add("cardDark");
    }
    for (let index = 0; index < CONSTS.BUTTONS.length; index++) {
      CONSTS.BUTTONS[index].classList.add("buttonDark");
    }
  }
  refreshButtons();
};

CONSTS.SEND_BUTTON.addEventListener("click", messageSend);

const processCards = subString => {
  if (!subString || subString === " ") {
    return null;
  }
  if (!FILTERED_BY_GENDER) {
    users = usersConst;
  }
  subString = subString.toLowerCase();
  let usersFound = users.filter(
    user => user.name.first.match(subString) || user.name.last.match(subString)
  );
  createNewList(usersFound);
};

let query = "";

CONSTS.SEARCH_FIELD.addEventListener("keyup", function() {
  query = this.value.toLowerCase();
  processCards(query);
});

const showGender = genderType => {
  if (FILTERED_BY_GENDER) {
    users = usersConst;
  }
  users = users.filter(user => user.gender === genderType);
  createNewList(users);
  FILTERED_BY_GENDER = true;
  if (query) {
    processCards(query);
  }
};

const genderFilter = ({ target }) => {
  if (target.checked) {
    if (target.dataset.gender === "male") {
      showGender(target.dataset.gender);
    } else if (target.dataset.gender === "female") {
      showGender(target.dataset.gender);
    }
  }
};

CONSTS.RADIO_GENDER_FORM.addEventListener("change", genderFilter);

const sortingProcess = typeOfSort => {
  const runSort = (a, b) => a.dob.age - b.dob.age;
  if (typeOfSort === "ascending") {
    users.sort(runSort);
  } else {
    users.sort((a, b) => runSort(b, a));
  }
  createNewList(users);
  processCards(query);
};

const ageSort = ({ target }) => {
  if (target.checked) {
    if (target.dataset.render === "descending") {
      sortingProcess("descending");
    } else {
      sortingProcess("ascending");
    }
  }
};

CONSTS.RADIO_AGE_FORM.addEventListener("change", ageSort);

const resetRadio = allButtons => {
  for (let key = 0; key < allButtons.length; key++) {
    allButtons[key].checked = false;
  }
};

const resetAll = () => {
  CONSTS.SEARCH_FIELD.value = "";
  query = "";
  resetRadio(radioButtons);
  createNewList(usersConst);
};

CONSTS.RESET_BUTTON.addEventListener("click", resetAll);

CONSTS.HAMBURGER.addEventListener("change", moveContent);

const switchTheme = ({ target }) => {
  if (target.checked) {
    makeDarkBackground();
    changeColorCards();
  }
};

CONSTS.THEME_WRAPPER.addEventListener("change", switchTheme);

fetch(
  "https://randomuser.me/api/?results=40&inc=gender,name,email,phone,dob,picture"
)
  .then(resp => resp.json())
  .then(function(data) {
    usersConst = data.results;
    users = usersConst;
    return createNewList(users);
  })

  .catch(function(error) {
    console.log(error);
  });
