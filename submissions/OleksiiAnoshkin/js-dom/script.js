"use strict";

//--------------------------------------------
const DATA = [
  ["ferrari", 
    [`  Ferrari S.p.A. is an Italian luxury sports car manufacturer based in Maranello, Italy.
    Founded by Enzo Ferrari in 1939 from the Alfa Romeo racing division as Auto Avio Costruzioni, 
    the company built its first car in 1940, and produced its first Ferrari-badged car in 1947.`,
        
    `Fiat S.p.A. acquired 50% of Ferrari in 1969 and expanded its stake to 90% in 1988. In October 2014, 
    Fiat Chrysler Automobiles announced its intentions to separate Ferrari S.p.A. from FCA; as of the 
    announcement FCA owned 90% of Ferrari. The separation began in October 2015 with a restructuring 
    that established Ferrari N.V. as the new holding company of the Ferrari S.p.A. group, and the 
    subsequent sale by FCA of 10% of the shares in an IPO and concurrent listing of common shares 
    on the New York Stock Exchange. Through the remaining steps of the separation, FCA's interest 
    in Ferrari's business was distributed to shareholders of FCA, with 10% continuing to be owned by 
    Piero Ferrari. The spin-off was completed on the 3rd of January 2016.`,

    `Throughout its history, the company has been noted for its continued participation in racing,
    especially in Formula One, where it is the oldest and most successful racing team, holding the
    most constructors' championships and having produced the highest number of drivers' championship wins.
    Ferrari road cars are generally seen as a symbol of speed, luxury and wealth. Ferrari cars are built
    at the 165,000 square-metre Maranello factory. In 2014 Ferrari was rated the world's most powerful
    brand by Brand Finance. As of 2021, Ferrari is the 10th-largest car manufacturer by market capitalisation,
    with $52.21 billion.`,],  
    ["./images/ferrari-1.jpg", "./images/ferrari-2.jpg", "./images/ferrari-3.jpg", "./images/ferrari-4.jpg",],
  ],
  ["lamborghini",
    [`Automobili Lamborghini S.p.A. is an Italian brand and manufacturer of luxury automobiles. 
    Lamborghini's production facility and headquarters are located in Sant'Agata Bolognese, Italy. 
    Italian manufacturing magnate Ferruccio Lamborghini founded the company in 1963 with the objective 
    of producing a refined grand touring car to compete with offerings from established marques such as 
    Ferrari. The company's first models were introduced in the mid-1960s and were noted for their 
    refinement, power and comfort. Lamborghini gained wide acclaim in 1966 for the Miura sports coupé, 
    which established rear mid-engine, rear wheel drive as the standard layout for high-performance 
    cars of the era.`,
      
    `Lamborghini grew rapidly during its first decade, but sales plunged in the wake of the 1973 
    worldwide financial downturn and the oil crisis. Ferruccio Lamborghini sold ownership of the 
    company to Georges-Henri Rossetti and René Leimer and retired in 1974. The company went bankrupt 
    in 1978, and was placed in the receivership of brothers Jean-Claude and Patrick Mimran in 1980, 
    who purchased the company for US$3 million, renaming it Nuova Automobili Lamborghini SpA. As CEO 
    and President, Patrick Mimran invested heavily in the company's expansion, and was later credited 
    as being the man who saved Lamborghini. Under his management, Lamborghini's model line was expanded 
    from the Countach to include the Jalpa entry-level sports car and the LM002 high performance 
    off-road vehicle.`,

      `Patrick Mimran sold Lamborghini to the Chrysler Corporation in 1987 for US$25 million. After 
    replacing the Countach with the Diablo and discontinuing the Jalpa and the LM002, Chrysler sold
    Lamborghini to Malaysian investment group Mycom Setdco and Indonesian group V'Power Corporation
    in 1994. In 1998, Mycom Setdco and V'Power sold Lamborghini to the Volkswagen Group where it was
    placed under the control of the group's Audi division. New products and model lines were introduced
    to the brand's portfolio and this increased productivity for the brand.`,],
    ["./images/lamborghini-1.jpg", "./images/lamborghini-2.jpg", "./images/lamborghini-3.jpg", "./images/lamborghini-4.jpg",],],
  ["mercedes",
    [`Mercedes-Benz commonly referred to as Mercedes and sometimes as Benz, is a German luxury and 
    commercial vehicle automotive brand established in 1926. Mercedes-Benz AG (a Mercedes-Benz 
    Group subsidiary established in 2019) is headquartered in Stuttgart, Baden-Württemberg, Germany. 
    Mercedes-Benz AG produces consumer luxury vehicles and commercial vehicles badged as Mercedes-Benz.`,
    
    `From November 2019 onwards, Mercedes-Benz-badged heavy commercial vehicles are managed by Daimler 
    Truck, a former part of the Mercedes-Benz Group turned into an independent company in late 2021. 
    In 2018, Mercedes-Benz was the largest brand of premium vehicles in the world, having sold 2.31 
    million passenger cars.`,

      `The brand's origins lie in Daimler-Motoren-Gesellschaft's 1901 Mercedes and Carl Benz's 1886 
    Benz Patent-Motorwagen, which is widely regarded as the first internal combustion engine in a
    self-propelled automobile. The slogan for the brand is "the best or nothing".`,],
    ["./images/mercedes-1.jpg", "./images/mercedes-2.jpg", "./images/mercedes-3.jpg", "./images/mercedes-4.jpg",],],
  ["porsche",
    [`The Porsche name has become synonymous with sports cars and race cars because that is what 
    company founders Ferdinand Porsche and his son Ferdinand (“Ferry”) set out to build when they 
    first set up shop with 200 workers in 1948. While it is currently a thriving brand under the 
    Volkswagen Automotive Group, standing alongside Lamborghini, Audi, and Bugatti this car company 
    has a colorful history and iconic cars list that goes way deeper than most Cayenne, Macan and 
    Panamera buyers will ever know.`,

    `Ferdinand Porsche’s first iconic vehicle was not under his own marque, but what we all know 
    as “Volkswagen” or “The People’s Car”. The Volkswagen Beetle was his creation and was the 
    stepping stone to a racing history with the 911 as a cornerstone. World War II changed things 
    and the man was ousted out of the Volkswagen company, forcing him and his son to form their 
    own car company, Porsche.`,

    `There first hit was the 356. Though sporting just 40 horsepower from a rear-mounted, slightly 
    souped-up Beetle engine, the first Porsche quickly made its mark with agile handling, as well as
    attributes almost unknown among sportscars of the day — comfort and reliability. Porsche introduced
    its own engines in the mid-1950s, along with more powerful versions of the 356. After the 356
    came a true legend among modern automobiles, the Porsche 911. Ahead of its time when introduced
    in 1964, the rear-engine 911 has continued to evolve since then and is considered by most the
    ultimate sports car.`,],
    ["./images/porsche-1.jpg", "./images/porsche-2.jpg", "./images/porsche-3.jpg", "./images/porsche-4.jpg",],],
  ["dodge",
    [`Dodge is an American brand of automobiles and a division of Stellantis, based in Auburn Hills, 
    Michigan. Dodge vehicles have historically included performance cars, and for much of its 
    existence Dodge was Chrysler's mid-priced brand above Plymouth. Founded as the Dodge Brothers 
    Company machine shop by brothers Horace Elgin Dodge and John Francis Dodge in the early 1900s, 
    Dodge was originally a supplier of parts and assemblies to Detroit-based automakers like Ford. 
    They began building complete automobiles under the "Dodge Brothers" brand in 1914, predating the 
    founding of Chrysler Corporation. The factory located in Hamtramck, Michigan was the Dodge main 
    factory from 1910 until it closed in January 1980. John Dodge died from the Spanish flu in 
    January 1920, having lungs weakened by tuberculosis 20 years earlier. Horace died in December 
    of the same year, perhaps weakened by the Spanish flu, but the cause of death was cirrhosis of 
    the liver. Their company was sold by their families to Dillon, Read & Co. in 1925 before being 
    sold to Chrysler in 1928.`,

    `Dodge's mainstay vehicles were trucks, full-sized passenger cars through the 1970s, and it 
    also built compact cars such as the 1963–76 Dart and midsize as well as such as the "B-Body" 
    Coronet and Charger from 1965–78. The 1973 oil embargo caused American "gas guzzler" sales to 
    slump, prompting Chrysler to develop the Dodge Aries K platform compact and midsize cars for 
    the 1981 model year. The K platform and its derivatives are credited with reviving Chrysler's 
    business in the 1980s. One example was the Dodge Caravan. During the 1990s the Dodge Stratus 
    found many buyers along with the larger Dodge Intrepid.`,

      `The Dodge brand endured multiple ownership changes at Chrysler from 1998 to 2009, including 
    its merger with Daimler-Benz AG from 1998 to 2007, its subsequent sale to Cerberus Capital
    Management, its 2009 bailout by the United States government, and its subsequent Chapter 11
    bankruptcy and acquisition by Fiat. In 2011, Dodge and its sub-brands, Dodge Ram and Dodge
    Viper, were separated. Dodge announced that the Viper was to be an SRT product, and Ram a
    standalone marque. In 2014, SRT was merged back into Dodge. Later that year, the Chrysler
    Group was renamed FCA US LLC, coinciding with the merger of Fiat S.p.A. and the Chrysler
    Group into the corporate structure of Fiat Chrysler Automobiles. Subsequently, another merger
    occurred on January 16, 2021, between FCA and the PSA Group (Stellantis), making the
    Dutch-domiciled automaker the second largest in Europe, after Volkswagen.`,],
    ["./images/dodge-1.jpg", "./images/dodge-2.jpg", "./images/dodge-3.jpg", "./images/dodge-4.jpg",],],
  ["lotus",
    [`Lotus Cars Limited is a British automotive company headquartered in Norfolk, England which 
    manufactures sports cars and racing cars noted for their light weight and fine handling 
    characteristics. Lotus was previously involved in Formula One racing, via Team Lotus, 
    winning the Formula One World Championship seven times.`,

    `Lotus Cars was founded and owned for many years by Colin Chapman. After his death and a 
    period of financial instability, it was bought by General Motors, then Romano Artioli and 
    DRB-HICOM through its subsidiary Proton. It is currently majority owned by Chinese multinational 
    Geely, with Etika Automotive as a minority shareholder.`,

    `The engineering consultancy firm Lotus Engineering, an offshoot of Lotus Cars, has facilities in
    the United Kingdom, United States, China, and Malaysia. Notable Lotus cars include the Lotus
    Seven, the Lotus Esprit and the Lotus Elan.`,],
    ["./images/lotus-1.jpg", "./images/lotus-2.jpg", "./images/lotus-3.jpg", "./images/lotus-4.jpg",],],
];
//--------------------------------------------

function getKey(str) {
  let key;

  switch (true) {
    case str.includes("ferrari"):
    key = "ferrari";
    break;

    case str.includes("lamborghini"):
    key = "lamborghini";
    break;

    case str.includes("mercedes"):
    key = "mercedes";
    break;

    case str.includes("porsche"):
    key = "porsche";
    break;

    case str.includes("dodge"):
    key = "dodge";
    break;

    case str.includes("lotus"):
    key = "lotus";
    break;
  };

  return key;
};

function createContent(key, arr) {
  let arrOfContent = arr.filter(item => item.includes(key))[0];

  let result = `<div class="content__bg">
                <h1 class="content__title">${arrOfContent[0].toUpperCase()}</h1>
                <p class="content__text">${arrOfContent[1][0]}</p>
                <p class="content__text">${arrOfContent[1][1]}</p>
                <p class="content__text">${arrOfContent[1][2]}</p>
                <ul class="content__items">
                  <li class="content__item">
                    <img
                      class="content__img"
                      src="${arrOfContent[2][0]}"
                      alt="car"
                      width="400"
                      height="300" />
                  </li>
                  <li class="content__item">
                    <img
                      class="content__img"
                      src="${arrOfContent[2][1]}"
                      alt="car"
                      width="400"
                      height="300" />
                  </li>
                  <li class="content__item">
                    <img
                      class="content__img"
                      src="${arrOfContent[2][2]}"
                      alt="car"
                      width="400"
                      height="300" />
                  </li>
                  <li class="content__item">
                    <img
                      class="content__img"
                      src="${arrOfContent[2][3]}"
                      alt="car"
                      width="400"
                      height="300" />
                  </li>
                </ul>
                </div>`;
  
  return result;
};

//--------------------------------------------
const WRAP = document.querySelector(".wrap");
const SIDEBAR = document.querySelector(".sidebar");
const ARROW = document.querySelector(".sidebar__arrow");
const MENU = document.querySelector(".sidebar__menu");
const BTNS = document.querySelectorAll(".sidebar__item");
const CONTENT = document.querySelector(".content__container");
let KEY;

// arrow btn
ARROW.addEventListener("click",
  function (event) {
    // hidden
    SIDEBAR.classList.toggle("hidden");
    WRAP.classList.toggle("hidden");
  }
);

ARROW.addEventListener("keydown",
  function (event) {
    // hidden
    if (event.code === "Space" || event.code === "Enter") {
      SIDEBAR.classList.toggle("hidden");
      WRAP.classList.toggle("hidden");
    };
  }
);

// brands btn
MENU.addEventListener("click",
  function (event) {
    if ((event.target.className.includes("sidebar__item")
      || event.target.className.includes("sidebar__img")
      || event.target.className.includes("sidebar__text"))
      && CONTENT.innerHTML.length === 0) {
      KEY = getKey(event.target.className);
      CONTENT.insertAdjacentHTML("afterbegin", createContent(getKey(event.target.className), DATA));
    } else if (CONTENT.innerHTML.length > 0 && KEY === getKey(event.target.className)) {
      CONTENT.innerHTML = ``;
    } else if (CONTENT.innerHTML.length > 0 && KEY !== getKey(event.target.className)) {
      CONTENT.innerHTML = ``;
      KEY = getKey(event.target.className);
      CONTENT.insertAdjacentHTML("afterbegin", createContent(getKey(event.target.className), DATA));
    };

    for (let btn of BTNS) {
      if (btn.className.includes(getKey(event.target.className)) && !btn.className.includes("active")) {
        btn.classList.add("active");
      } else if (btn.className.includes(getKey(event.target.className)) && btn.className.includes("active")) {
        btn.classList.remove("active");
      } else if (!btn.className.includes(getKey(event.target.className)) && btn.className.includes("active")) {
        btn.classList.remove("active");
      }
    };
  }
);

MENU.addEventListener("keydown",
  function (event) {
    if (event.code === "Space" || event.code === "Enter") {
      if ((event.target.className.includes("sidebar__item")
        || event.target.className.includes("sidebar__img")
        || event.target.className.includes("sidebar__text"))
        && CONTENT.innerHTML.length === 0) {
        KEY = getKey(event.target.className);
        CONTENT.insertAdjacentHTML("afterbegin", createContent(getKey(event.target.className), DATA));
      } else if (CONTENT.innerHTML.length > 0 && KEY === getKey(event.target.className)) {
        CONTENT.innerHTML = ``;
      } else if (CONTENT.innerHTML.length > 0 && KEY !== getKey(event.target.className)) {
        CONTENT.innerHTML = ``;
        KEY = getKey(event.target.className);
        CONTENT.insertAdjacentHTML("afterbegin", createContent(getKey(event.target.className), DATA));
      };

      for (let btn of BTNS) {
        if (btn.className.includes(getKey(event.target.className)) && !btn.className.includes("active")) {
          btn.classList.add("active");
        } else if (btn.className.includes(getKey(event.target.className)) && btn.className.includes("active")) {
          btn.classList.remove("active");
        } else if (!btn.className.includes(getKey(event.target.className)) && btn.className.includes("active")) {
          btn.classList.remove("active");
        }
      };
    };
  }
);