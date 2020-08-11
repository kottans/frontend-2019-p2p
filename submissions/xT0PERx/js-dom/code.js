const contentMenu = [
  {
    nameClassFromArr: 'menu-item-1',
    contentGoods:
      '<img class="img-content" src=https://www.logobank.ru/images/ph/en/a2/audi_new.png> <p> Audi в нынешнем виде является наследником концерна Auto Union, образованного в результате объединения четырёх компаний, выпускавших автомобили и мотоциклы под марками DKW, Horch, Audi и Wanderer. </p><p>Всем известно, что главными конкурентами Audi на автомобильном рынке являются компании Mercedes-Benz и BMW, так называемая «Немецкая Тройка». </p>',
  },
  {
    nameClassFromArr: 'menu-item-2',
    contentGoods:
      '<img class="img-content" src=https://ic.pics.livejournal.com/arbuzov/7078294/434172/434172_original.jpg><p> Является одним из самых узнаваемых автомобильных брендов во всём мире[5]. Штаб-квартира Mercedes-Benz находится в Штутгарте, Баден-Вюртемберг, Германия. </p><p>В 2018 году бренд Mercedes-Benz оценивался в 48,601 млрд долларов, удерживая второе место (после Toyota) среди компаний-производителей автомобилей и восьмое место среди всех брендов мира.</p>',
  },
  {
    nameClassFromArr: 'menu-item-3',
    contentGoods:
      '<img class="img-content" src=http://aboutcars-ac.ru/wp-content/uploads/2013/02/BMW.png><p> Девиз компании — «Freude am Fahren», с нем. — «С удовольствием за рулём». Для англоязычных стран был придуман также девиз «The Ultimate Driving Machine» (с англ. — «Идеальная машина для вождения»). </p><p>Основные производственные мощности компании сосредоточены в Германии (Дингольфинг, Регенсбург, Лейпциг, Мюнхен).</p>',
  },
  {
    nameClassFromArr: 'menu-item-4',
    contentGoods:
      '<img class="img-content" src=https://autochrome.ru/img/marka-mashiny-s-konem_62.jpg><p> Nissan Motor Co., Ltd.  — японский автопроизводитель, один из крупнейших в мире. Компания основана в 1933 году.</p><p>Эмблема выглядит как название марки в кругу, который означает восходящее солнце, символизирующее искренность.</p>',
  },
  {
    nameClassFromArr: 'menu-item-5',
    contentGoods:
      '<img class="img-content" src=https://i1.wp.com/autogeek.com.ua/wp-content/uploads/2017/01/3f39410d0e6da7cacc8b6f4260bfd6d4-387x480.jpg?resize=387%2C480><p> Tesla (ранее Tesla Motors) — американская компания, производитель электромобилей и (через свой филиал SolarCity) решений для хранения электрической энергии.</p><p>Tesla разворачивает сеть «Суперзарядок» (англ. Supercharger) — станций для зарядки электромобилей, разработанных для того, чтобы на автомобилях Tesla можно было совершать длительные поездки. </p>',
  },
];

document.querySelector('.menu-list').addEventListener('click', function (e) {
  if (e.target && e.target.nodeName === 'LI') {
    switch (e.target.className) {
      case 'menu-item-1':
        showContent('menu-item-1');
        break;
      case 'menu-item-2':
        showContent('menu-item-2');
        break;
      case 'menu-item-3':
        showContent('menu-item-3');
        break;
      case 'menu-item-4':
        showContent('menu-item-4');
        break;
      case 'menu-item-5':
        showContent('menu-item-5');
        break;
    }
  }
});

function showContent(nameClass) {
  const element = document.querySelector('#content');

  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }

  const fragment = document.createDocumentFragment();
  const div = document.createElement('div');
  div.className = 'content content-style';

  contentMenu.forEach((el) => {
    if (el.nameClassFromArr === nameClass) {
      div.innerHTML = el.contentGoods;
    }
  });

  fragment.appendChild(div);

  element.appendChild(fragment);
}
