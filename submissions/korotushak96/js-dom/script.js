const initAnimalsApp = ()=>{
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    const content = document.querySelector('.content');
    const beastsData = [
        {
            id: 1,
            name: 'Augurey',
            description:  'The Augurey, also known as the Irish Phoenix, is a thin and mournful looking bird, somewhat like a small underfed vulture in appearance, with greenish black feathers and a sharp beak. Its diet consists of insects, fairies and flies, which it hunts for in the heavy rain. Intensely shy, the Augurey lives in a tear-shaped nest in thorn and brambles',
            image: 'img/Augurey.jpg'
        },
        {
            id: 2,
            name: 'Niffler',
            description: 'A Niffler was a creature with a long snout and a coat of black, fluffy fur. They were attracted to shiny things, which made them wonderful for locating treasure, but this also means that they could wreak havoc if kept (or set loose) indoors. Nifflers in general were usually harmless.' ,
            image: 'img/niffler.png'
        },
        {
            id: 3,
            name: 'Bowtruckle',
            description: 'The Bowtruckle is a hand-sized, insect-eating tree dweller with long sharp fingers (two on each hand), brown eyes, and a general appearance of a flat-faced stick figure made of bark and twigs, which serves well as camouflage in its natural habitat. They are immensely difficult to spot.',
            image: 'img/Bowtruckle.png'
        },
        {
            id: 4,
            name: 'Nundu',
            description: 'The Nundu is a large East African beast that resembles a leopard. It moves silently, despite its "gigantic" size and is considered by some to be the most dangerous creature alive. The breath of the Nundu is toxic and filled with disease so potent that it can wipe out entire villages of people',
            image: 'img/nundu_by_bear_drool_dbd2elu-pre.png'
        },
        {
            id: 5,
            name: 'Jarvey',
            description: 'The Jarvey resembles an overgrown ferret, and is commonly found in Great Britain, Ireland, and North America. The Jarvey is capable of Human speech, although true conversation with a Jarvey is impossible. The creature uses short, usually rude, statements and phrases in an almost constant stream.',
            image: 'img/Jarvey.png'
        },
        {
            id: 6,
            name: 'Murtlap',
            description: 'The Murtlap is a marine beast resembling a rat with a growth on its back resembling a sea anemone, found on the coastal areas of Britain.',
            image: 'img/Murtlap.jpg'
        },
    ]

    let menuHTML = '';
    let descriptionHTML = '';

    beastsData.forEach((beast)=>{
        const {id, name, description, image} = beast;
        // create menu-items
        menuHTML += `<div class='menu-item' data-id='${id}'>${name}</div>`;
        // and description
        descriptionHTML += 
            `<div class='content-item'>
                <div class='content-item_text'>${description}</div>
                <img class='content-item_image' src='${image}'></img>
            </div>`
    });

    menu.insertAdjacentHTML('afterbegin', menuHTML);
    content.insertAdjacentHTML('afterbegin', descriptionHTML);

    const contentItem = document.querySelectorAll('.content-item');
    const menuItem = document.querySelectorAll('.menu-item');

    burger.addEventListener('click', ()=>{
        burger.classList.toggle('change');
        menu.classList.toggle('open');
    });

    switchActive=(i)=>{
        let chosen = document.querySelector('.chosen');
        if (chosen) {
            let activeId = chosen.dataset.id - 1;
            menuItem[activeId].classList.remove('chosen');
            contentItem[activeId].classList.remove('active')
        }
        // menuItem[idx].classList.remove('chosen');
        contentItem[i].classList.toggle('active');
        menuItem[i].classList.toggle('chosen');
    };

    switchActive(1);

    menu.addEventListener('click', (event)=>{
        let {target} = event;
        menuItem.forEach((item, i)=>{
            if (target == item){
                switchActive(i);
            }
        })
    })
}

document.addEventListener('DOMContentLoaded', initAnimalsApp)
