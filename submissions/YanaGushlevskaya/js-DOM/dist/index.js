class cuisine {
  constructor(title, src, alt, description) {
    this.title = title;
    this.src = src;
    this.alt = alt;
    this.description = description;
  }
}

const dataBase = [
  new cuisine(
    'Американская кухня',
    'img/american.png',
    'american cuisine',
    'Вопреки всем отрицаниям наличия в Америке самобытной национальной американской кухни, напомним, что ни одна страна в мире в такой степени не повлияла на характер питания и ежедневный рацион во всем мире, как США. Традиционная американская еда – это незатейливые хот-доги, гамбургеры и обилие томатного кетчупа, приготовление которых не требует много времени и фантазии. Но при этом не стоит забывать, что США – это страна многих этнических групп, которые сделали все возможное, чтобы их национальные блюда или изысканные фамильные рецепты присутствовали в общем рационе американских обывателей. Поэтому так часто в американских ресторанах можно встретить элементы европейской кухни, соединенные с продуктами и приемами индейской кухни.'
  ),
  new cuisine(
    'Белорусская кухня',
    'img/belarusian.png',
    'belarusian cuisine',
    'Национальная кухня Белоруссии складывалась в течение долго времени. Она вобрала в себя различные «составляющие» кухонь народов, населявших страну издавна, и стран, которые окружали Белоруссию. Это и русская, и украинская, и прибалтийская, и еврейская кухни. Но всё же, сформировавшаяся национальная кулинария белорусского народа отличается от своих собратьев способами приготовления блюд, методами предварительной и основной обработки, ключевыми видами которой являются запекание, долгое тушение, томление. Особенностью блюд белорусской кухни является то, что продукты используются, в основном, «соло»: только из картофеля, капусты или моркови, из одного вида крупы, из одного вида фруктов или ягод с небольшими добавлениями других ингредиентов, изменяющих и оттеняющих вкус основного составляющего.'
  ),
  new cuisine(
    'Грузинская кухня',
    'img/georgian.png',
    'georgian cuisine',
    'Чанахи, харчо, лобио, чахохбили, соус ткемали, хачапури, цыплята табака, мацони, имеретинский сыр. Одно лишь это (конечно же, неполное) перечисление блюд и продуктов намекает на то, что речь пойдёт о грузинской кухне. Знаменитые блюда грузинского народа, почитаемые не только местными жителями, но завоевавшие любовь едоков всего мира, нельзя спутать, пожалуй, ни с какими другими. Употребление в пищу мяса разных сортов (говядины, баранины, свинины, мяса кур и индеек), чуть меньшее употребление рыбы характерны как для западной, так и восточной грузинской кухни. Широкое применение различных соусов делает блюда, приготовленные, казалось бы, из одинаковых продуктов, совершенно разными. И это – ещё одна особенность грузинской кухни, наравне с непременным употреблением свежих овощей, пряных трав и специй.'
  ),
  new cuisine(
    'Итальянская кухня',
    'img/italian.png',
    'georgian cuisine',
    'Разные области Италии привнесли и разные блюда в то их многообразие, что мы привыкли называть «итальянской кухней». Путешествуя по этой чудесной стране, можно отведать знаменитую пасту и равиоли, ризотто и удивительный итальянский десерт – тирамису. Блюда из свежей рыбы, овощные супы, большое количество маслин и, конечно же, разнообразные сорта сыра. Без добавления сыра, пожалуй, не обходится ни одно значимое блюдо итальянского обеда. Различные морепродукты, фрукты, приправы и душистые травы, рис, мясо и оливковое масло. Всего не перечесть!'
  )
];

const cuisineTemplate = ({ title, src, alt, description }) => {
  return `<h2 class="description__title">${title}</h2>
      <figure>
        <img src="${src}" alt="${alt}" class="decription__img" />
        <figcaption>
          <p class="description__img-description">
          ${description}
          </p>
        </figcaption>
      </figure>`;
};

const nav = document.querySelector('.nav');
const menu = document.querySelector('.nav__list');
const description = document.createElement('div');
let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

menu.addEventListener('click', createElement);

function createElement({ target }) {
  let button = target.textContent;
  dataBase.forEach(cuisineItem => {
    if (cuisineItem.title === button && windowWidth > 768) {
      nav.after(description);
      const child = cuisineTemplate(cuisineItem);
      description.innerHTML = child;
    } else if (cuisineItem.title === button && windowWidth < 768) {
      target.after(description);
      const child = cuisineTemplate(cuisineItem);
      description.innerHTML = child;
    }
  });
  description.classList = 'description';
}

function addMenuDescription() {
  let menuLocation;
  windowWidth > 768
    ? (menuLocation = 'слева') && nav.after(description)
    : (menuLocation = 'снизу') && nav.before(description);
  let menuDescription = `<img src='img/map.jpg' class='basic-img' alt='map'/>
  <p class='basic-description'> Выберите страну, о кухне которой хотите узнать больше, в меню ${menuLocation}. </p>`;
  description.innerHTML = menuDescription;
  description.classList = 'description description--basic';
}

addMenuDescription();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLz0gc3JjL2NvbXBvbmVudHMvSGVyby9oZXJvLmpzXHJcbiJdLCJmaWxlIjoiaW5kZXguanMifQ==
