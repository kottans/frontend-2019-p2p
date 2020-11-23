const contentMenu = [
  {
    nameClassFromArr: "menu-item-1",
    contentGoods:
      '<img class="img-content" src=./img/audi.png> <p> Audi в нынешнем виде является наследником концерна Auto Union, образованного в результате объединения четырёх компаний, выпускавших автомобили и мотоциклы под марками DKW, Horch, Audi и Wanderer. </p><p>Всем известно, что главными конкурентами Audi на автомобильном рынке являются компании Mercedes-Benz и BMW, так называемая «Немецкая Тройка». </p>',
  },
  {
    nameClassFromArr: "menu-item-2",
    contentGoods:
      '<img class="img-content" src=./img/mersedes.jpg><p> Является одним из самых узнаваемых автомобильных брендов во всём мире. Штаб-квартира Mercedes-Benz находится в Штутгарте, Баден-Вюртемберг, Германия. </p><p>В 2018 году бренд Mercedes-Benz оценивался в 48,601 млрд долларов, удерживая второе место (после Toyota) среди компаний-производителей автомобилей и восьмое место среди всех брендов мира.</p>',
  },
  {
    nameClassFromArr: "menu-item-3",
    contentGoods:
      '<img class="img-content" src=./img/BMW.png><p> Девиз компании — «Freude am Fahren», с нем. — «С удовольствием за рулём». Для англоязычных стран был придуман также девиз «The Ultimate Driving Machine» (с англ. — «Идеальная машина для вождения»). </p><p>Основные производственные мощности компании сосредоточены в Германии (Дингольфинг, Регенсбург, Лейпциг, Мюнхен).</p>',
  },
  {
    nameClassFromArr: "menu-item-4",
    contentGoods:
      '<img class="img-content" src=./img/nisan.jpg><p> Nissan Motor Co., Ltd.  — японский автопроизводитель, один из крупнейших в мире. Компания основана в 1933 году.</p><p>Эмблема выглядит как название марки в кругу, который означает восходящее солнце, символизирующее искренность.</p>',
  },
  {
    nameClassFromArr: "menu-item-5",
    contentGoods:
      '<img class="img-content" src=./img/tesla.jpg><p> Tesla (ранее Tesla Motors) — американская компания, производитель электромобилей и (через свой филиал SolarCity) решений для хранения электрической энергии.</p><p>Tesla разворачивает сеть «Суперзарядок» (англ. Supercharger) — станций для зарядки электромобилей, разработанных для того, чтобы на автомобилях Tesla можно было совершать длительные поездки. </p>',
  },
];

const menu = document.querySelector(".menu-list");

const whatContentShow = function () {
  menu.addEventListener("click", function ({ target }) {
    const item = target.closest("li");
    if (!item) return;
    if (!menu.contains(item)) return;
    showContent(item.classList[0]); //нормальная практика? Или может что подскажешь?
    selectedItem(item);
  });
};

function selectedItem(menuItem) {
  if (menu.querySelector(".selected-item") !== null) {
    menu.querySelector(".selected-item").classList.remove("selected-item");
  }
  menuItem.classList.add("selected-item");
}

const element = document.querySelector("#content");

function showContent(nameClass) {
  while (element.firstChild) {
    element.innerHTML = "";
  }

  const fragment = document.createDocumentFragment();
  const div = document.createElement("div");
  div.classList.add("content", "content-style");

  contentMenu.forEach((el) => {
    if (el.nameClassFromArr === nameClass) {
      div.innerHTML = el.contentGoods;
    }
  });

  fragment.appendChild(div);

  element.appendChild(fragment);
}
whatContentShow();
