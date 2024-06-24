const phone = [ 
  {
    model: "iPhone 11 Pro",
    description: "6.5-inch Super Retina XDR OLED display. Water and dust resistant (4 meters for up to 30 minutes, IP68). Triple-camera system with 12MP Ultra Wide, Wide, and Telephoto cameras; Night mode, Portrait mode, and 4K video up to 60fps. Face ID for secure authentication and Apple Pay. A13 Bionic chip with third-generation Neural Engine. Fast charge with 18W adapter included. Wireless charging",
    cost: "Starting at $999",
    img: "./img/proM.jpeg"
  },

  {
    model: 'iPhone 11',
    description: '6.1-inch Liquid Retina HD LCD display. Water and dust resistant (2 meters for up to 30 minutes, IP68). Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps. 12MP TrueDepth front camera with Portrait mode, 4K video, and Slo-Mo. Face ID for secure authentication and Apple Pay. A13 Bionic chip with third-generation Neural Engine. Fast-charge capable. Wireless charging.',
    cost: 'Starting at $699',
    img: './img/x11.jpeg'

  },
  {
    model: "iPhone Xr",
    description: '6.1-inch Liquid Retina display (LCD). IP67 water and dust resistant (maximum depth of 1 meter up to 30 minutes). 12MP camera with OIS and 7MP TrueDepth front camera—Portrait mode, Portrait Lighting, Depth Control, and Smart HDR. Face ID for secure authentication. A12 Bionic with next-generation Neural Engine. Wireless charging—works with Qi chargers. iOS 12 with Memoji, Screen Time, Siri Shortcuts, and Group FaceTime.',
    cost: 'Starting at $649',
    img: './img/x.png'
  },

  {
    model: 'iPhone 8',
    description: '4.7-inch Retina HD display with True Tone. IP67 water and dust resistant (maximum depth of 1 meter up to 30 minutes). 12MP camera with OIS and 4K video. 7MP FaceTime HD camera with Retina Flash. Touch ID for secure authentication. A11 Bionic with Neural Engine. iOS 12 with Screen Time, Group FaceTime, and even faster performance. ',
    cost: 'Starting at $449',
    img: './img/eight.jpeg'
  }
]

const ul = document.querySelector('.ul-menu');
const container = document.querySelector('.container');


const add = ul.addEventListener('click', (event) => {

  const fragment = document.createElement('div');
  fragment.classList.add('likeafragment');


  if (event.target.nodeName === 'LI' || event.target.nodeName === 'A') {
    if (container.firstElementChild) container.firstElementChild.remove();
 
    phone.forEach((el) => {
      if (event.target.textContent == el['model']) {

        const contText = document.createElement('div');
        const description = document.createElement('div');
        const cost = document.createElement('p');
        const img = document.createElement('img');

        // split descriptions by .
        const array = el['description'].split('. ');
        for (let i = 0; i < array.length; i++) {
          array[i] = `<p>${array[i]}</p>`;
          description.innerHTML += array[i];                                                                                                                                                                      
        }

        cost.innerHTML = `<strong>${el['cost']}</strong>`;
        description.style.fontSize = '.85em';

        contText.setAttribute('class', 'descriptions')
        img.setAttribute('src', el['img'])
        contText.insertAdjacentHTML("afterbegin", `<h1>${el['model']}</h1>`);
        contText.appendChild(cost);
        contText.appendChild(description);
        fragment.appendChild(contText)
        fragment.appendChild(img)
      }
    })
    container.appendChild(fragment)
  }
})
