document.addEventListener('DOMContentLoaded', ()=>{
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    const content = document.querySelector('.content');
    
    const beastsData = {
        'Augurey' : 'The Augurey, also known as the Irish Phoenix, is a thin and mournful looking bird, somewhat like a small underfed vulture in appearance, with greenish black feathers and a sharp beak. Its diet consists of insects, fairies and flies, which it hunts for in the heavy rain. Intensely shy, the Augurey lives in a tear-shaped nest in thorn and brambles',
        'Niffler': 'A Niffler was a creature with a long snout and a coat of black, fluffy fur. They were attracted to shiny things, which made them wonderful for locating treasure, but this also means that they could wreak havoc if kept (or set loose) indoors. Nifflers in general were usually harmless.',
        'Bowtruckle': 'The Bowtruckle is a hand-sized, insect-eating tree dweller with long sharp fingers (two on each hand), brown eyes, and a general appearance of a flat-faced stick figure made of bark and twigs, which serves well as camouflage in its natural habitat. They are immensely difficult to spot.',
        'Nundu' : 'The Nundu is a large East African beast that resembles a leopard. It moves silently, despite its "gigantic" size and is considered by some to be the most dangerous creature alive. The breath of the Nundu is toxic and filled with disease so potent that it can wipe out entire villages of people',
        'Jarvey' : 'The Jarvey resembles an overgrown ferret, and is commonly found in Great Britain, Ireland, and North America. The Jarvey is capable of Human speech, although true conversation with a Jarvey is impossible. The creature uses short, usually rude, statements and phrases in an almost constant stream.',
        'Murtlap' : 'The Murtlap is a marine beast resembling a rat with a growth on its back resembling a sea anemone, found on the coastal areas of Britain.'
    };

    const beastsImages = {
        'Augurey' : 'img/Augurey.jpg',
        'Niffler': 'img/niffler.png',
        'Bowtruckle': 'img/Bowtruckle.png',
        'Nundu' : 'img/nundu_by_bear_drool_dbd2elu-pre.png',
        'Jarvey' : 'img/Jarvey.png',
        'Murtlap' : 'img/Murtlap.jpg'
    };

    const namesData = Object.keys(beastsData);
    const beastsNames = document.createDocumentFragment();
    const beastsDescriptionsFrag = document.createDocumentFragment();

    namesData.forEach((name)=>{
        // create menu-items
        let beastNameDiv = document.createElement('div');
        beastNameDiv.textContent = name;
        beastNameDiv.classList.add('menu-item');
        beastsNames.appendChild(beastNameDiv);

        //create descriptionsItems
        let beastItem = document.createElement('div');
        beastItem.classList.add('content-item');
        // description text
        let beastDescription = document.createElement('div');
        beastDescription.textContent = beastsData[name];
        beastDescription.classList.add('content-item_text');
        // and photo
        let beastPhoto = document.createElement('img');
        beastPhoto.src = beastsImages[name];
        beastPhoto.classList.add('content-item_image');

        beastItem.appendChild(beastDescription);
        beastItem.appendChild(beastPhoto);

        beastsDescriptionsFrag.appendChild(beastItem);
    });

    menu.appendChild(beastsNames);
    content.appendChild(beastsDescriptionsFrag);

    const contentItem = document.querySelectorAll('.content-item');
    const menuItem = document.querySelectorAll('.menu-item');

    burger.addEventListener('click', ()=>{
        burger.classList.toggle('change');
        menu.classList.toggle('open');
    });
    let active;

    switchActive=(i)=>{
        contentItem.forEach(item => item.classList.remove('active'));
        contentItem[i].classList.toggle('active');
        menuItem.forEach(item => item.classList.remove('chosen'));
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
})
