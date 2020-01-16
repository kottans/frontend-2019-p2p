const nav = document.querySelector("nav");
const container = document.querySelector(".container");
const bookList = document.createElement("UL");
bookList.classList.add("book-list");
nav.appendChild(bookList);
const content = document.createElement("DIV");
content.classList.add("content");
container.appendChild(content);

const createElement = function(data) {
  data.map(function(el) {
    const title = document.createElement("LI");
    title.classList.add("book-item");

    title.dataset.index = data.indexOf(el);
    const name = document.createTextNode(el.author);
    bookList.appendChild(title);
    title.appendChild(name);
  });
};

createElement(storage);

nav.appendChild(bookList).firstChild.classList.add("active");
const addContent = function(data) {
  content.innerHTML = `
        <h2>${data.title}</h2>
      <p>${data.about}<br><br><strong>Price:${data.price}</strong></p>
      <img src="${data.cover}" alt="${data.title}" class="cover-book">
      `;
};

addContent(storage[0]);

const changePage = ({ target }) => {
  if (!target || !bookList.contains(target)) return;
  if (document.querySelector(".active")) {
    document.querySelector(".active").classList.remove("active");
  }
  target.classList.add("active");
  let selected = storage[target.dataset.index];
  addContent(selected);
};

bookList.addEventListener("click", changePage);
