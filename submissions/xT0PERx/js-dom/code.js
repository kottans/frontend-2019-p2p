var contentArr = [
  {
    nameClassFromArr: 'menu-item-1',
    contentGoods:
      '<img class="img-content" src=https://5.allegroimg.com/s1440/033c6a/7bb6a97f479692fc249cfcfe4db5> <p> Audi в нынешнем виде является наследником концерна Auto Union, образованного в результате объединения четырёх компаний, выпускавших автомобили и мотоциклы под марками DKW, Horch, Audi и Wanderer. </p><p>Всем известно, что главными конкурентами Audi на автомобильном рынке являются компании Mercedes-Benz и BMW, так называемая «Немецкая Тройка». </p>',
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
      '<img class="img-content" src=https://za-rulem.org/wp-content/uploads/2014/10/znachki-marok-avtomobilej-nissan-1024x795.jpg><p> Nissan Motor Co., Ltd.  — японский автопроизводитель, один из крупнейших в мире. Компания основана в 1933 году.</p><p>Эмблема выглядит как название марки в кругу, который означает восходящее солнце, символизирующее искренность.</p>',
  },
  {
    nameClassFromArr: 'menu-item-5',
    contentGoods:
      '<img class="img-content" src=data:image/png;base64,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><p> Tesla (ранее Tesla Motors) — американская компания, производитель электромобилей и (через свой филиал SolarCity) решений для хранения электрической энергии.</p><p>Tesla разворачивает сеть «Суперзарядок» (англ. Supercharger) — станций для зарядки электромобилей, разработанных для того, чтобы на автомобилях Tesla можно было совершать длительные поездки. </p>',
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
  let element = document.querySelector('#content');
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  let newDiv = document.createElement('div');
  element.className = 'content content-style';
  for (let index in contentArr) {
    if (contentArr[index].nameClassFromArr === nameClass) {
      newDiv.innerHTML = contentArr[index].contentGoods;
    }
  }

  element.appendChild(newDiv);
}
