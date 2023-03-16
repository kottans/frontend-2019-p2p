const articlesInfo = [
    {
        title: `THE WORLD OF SOULS`,
        text: `Dark Souls is a series of action role-playing games that take place within a dark, medieval fantasy setting, where the player's character fights against knights, dragons, phantoms, demons, and other monstrous or supernatural entities. 
The accretion, loss, and recovery of souls are central to the narrative and gameplay of Dark Souls games. 
These games are linked through their setting and an overarching cyclic narrative centering around fire, and are linked through common themes and elements, including interactions with phantoms and battles with demons. At the end of each game, characters may reignite the "first flame" or allow it to fade, recurring a choice others have made before.
Dark Souls has received critical acclaim, with the first title often cited as one of the greatest in video games, with the series as a whole being both praised and criticized for its high level of difficulty. `,
    },
    {
        title: `DEMON'S SOULS`,
        text: `Demon's Souls is a third person action role-playing game exclusively for the Playstation 3, released in Japan at 2009 and has been described as a spiritual successor to the King's Field series of games and a spiritual predecessor to Dark Souls.
Demon's Souls is set in a fictional dark fantasy world, taking part mostly in the southern medieval kingdom of Boletaria, that has been consumed by a thick, mysterious Fog that is creeping ever out to blanket the entire world. The Old One, a colossal immortal flying Demon, has been awoken and with it Demons have come forth to consume the souls of men. Only when The Old One is lulled back to eternal slumber will the fog dissipate and the world be restored.`,
    },
    {
        title: `DARK SOULS`,
        text: `A spiritual successor to Demon's Souls, the game is the first in the Dark Souls series, released at 2011 for PlayStation 3 and Xbox 360.
It’s been cited as one of the greatest video games ever made. The game takes place in the kingdom of Lordran, where players assume the role of a cursed undead character who begins a pilgrimage to discover the fate of their kind. 
Critics praised the depth of its combat, intricate level design, and use of flavor text. However, the game's difficulty received mixed reviews, with some criticizing it for being too unforgiving.`,
    },
    {
        title: `DARK SOULS II`,
        text: `Dark Souls II was released at 2014 for the PlayStation 3, Xbox 360 and PC. 
The game takes place in Drangleic, a once prosperous land under the rule of King Vendrick, which has fallen to ruin throughout the ages with the raging war between humans and giants, the sudden disappearance of the King, and the spreading of the Undead Curse. Like many others, the protagonist in search of a cure for their crippling affliction, the Curse of the Undead.
Similar to the previous title, players customize their character, in addition to choosing a starting class, which determines the stats and equipment that the player begins with, and a starting gift.`,
    },
    {
        title: `BLOODBORNE`,
        text: `Bloodborne was released in 2015 exclusively for the PlayStation 4 system.
It follows the player's character, a Hunter, through the decrepit Gothic, Victorian-era–inspired city of Yharnam, whose inhabitants are afflicted with a blood-borne disease which transforms the residents, called Yharnamites, into horrific beasts. Attempting to find the source of the plague, the player's character unravels the city's mysteries while fighting beasts and cosmic beings.
Danger, death and madness lurk around every corner of this dark and horrific world, and you must discover its darkest secrets in order to survive.`,
    },
    {
        title: `DARK SOULS III`,
        text: `Dark Souls III was released for Microsoft Windows, PlayStation 4 and Xbox One at 2016.
Set in the Kingdom of Lothric, the player is tasked to survive an oncoming apocalypse brought about by the ongoing conflict between the Age of Fire and those branded with the Darksign as with previous iterations of the series. To survive this event, the character must face the Lords of Cinder, previous heroes who linked the fire, as the cycle of Light and Dark continues and no matter what you do, darkness will return and repeat itself forever.`,
    },
    {
        title: `SEKIRO`,
        text: `Sekiro: Shadows Die Twice was released at 2019 for the PlayStation 4, Xbox One and PC. 
Sekiro is set in a Japan of the Sengoku period at the end of the 16th century, a period of constant life and death conflict. Players take on the role of the "one-armed wolf", a disgraced and disfigured warrior rescued from the brink of death, presumed dead after his lord was abducted and his arm severed by a samurai leader of Ashina Clan. 
This shinobi awakes and discovers that his arm has been replaced by a prosthesis by a mysterious busshi who calls him Sekiro, the "one-armed wolf". Armed with a katana and the prosthesis, your purpose is to rescue your lord and take revenge.`,
    },
    {
        title: `ELDEN RING`,
        text: `Elden Ring was released for PlayStation 4, 5, Windows, Xbox One, Series X/S at 2022.
The game takes place in the Lands Between, a fictional landmass ruled over by several demigods. It was previously ruled over by the immortal Queen Marika, who acted as keeper of the Elden Ring, a powerful force that manifested as the physical concept of order. 
When Marika eventually shattered the Elden Ring and disappeared, her demigod children began warring over pieces of the Ring in an event called the Shattering. 
In the game, the player character is a Tarnished, one of a group of exiles from the Lands Between who are summoned back after the Shattering. As one of the Tarnished, the player must traverse the realm to repair the Elden Ring and become the Elden Lord.`,
    },
];

// Get elements to manipulate with
const elements = {
    $nav: {},
    $main: {},
    $header: {},
    $menuBtn: {},
    $body: {},
};

function loadElements() {
    elements.$main = document.querySelector('.content');
    elements.$nav = document.querySelector('.navigation');
    elements.$header = document.querySelector('.heading');
    elements.$menuBtn = document.querySelector('.burger_wrapper');
    elements.$body = document.querySelector('body');
}

// Utility functions
const toSnakeCase = (str) => str.toLowerCase().split(' ').join('_');

function paragraphsSplit(str) {
    return str
        .split('\n')
        .map((paragraph) => `<p class="text-paragraph">${paragraph}</p>`)
        .join('\n');
}

// Toogle active classes for burger menu
function toggleMenu() {
    if (!elements.$nav.classList.contains('active')) {
        elements.$nav.scrollTo(0, 0);
    }
    elements.$nav.classList.toggle('active');
    elements.$body.classList.toggle('active');
}

// Adding and removing active classes for active links
function changeActiveLink(linkIndex) {
    const previousLink =
        document.querySelector('.active_link') || elements.$header;
    previousLink.classList.remove('active_link');
    document
        .querySelector(`[data-number="${linkIndex}"]`)
        .classList.add('active_link');
}

// Create list with buttons
function makeMenu(allArticles) {
    const [header, ...navLinks] = allArticles.map(({ title }, index) => {
        return index === 0
            ? `<h1 data-number="0" tabindex="0" class="menu_title">${title}</h1>`
            : `<li class="menu_item" data-number="${index}" tabindex="0">${title}</li>`;
    });
    elements.$header.insertAdjacentHTML('beforeend', header);
    elements.$nav.insertAdjacentHTML(
        'afterbegin',
        `<ul class="menu">${navLinks.join(' ')}</ul>`
    );
}

function selectInfoItem(event) {
    if (
        event.type === 'keydown' &&
        event.code !== 'Space' &&
        event.code !== 'Enter'
    ) {
        return;
    }
    event.preventDefault();
    const { target } = event;
    if (target.closest('.menu_item, .menu_title')) {
        elements.$main.innerHTML = '';
        elements.$body.scrollTo(0, 0);
        createAndShowInfoItem(
            elements.$main,
            articlesInfo,
            Number(target.dataset.number)
        );
        if (target.closest('.active')) {
            toggleMenu();
        }
    } else if (target.closest('.navigation.active')) {
        toggleMenu();
    }
}

// Create title, text and img HTML
function createAndShowInfoItem($container, articlesArr, index = 0) {
    changeActiveLink(index);
    const { title, text } = articlesArr[index];
    const snakeTitle = toSnakeCase(title);
    const insertContent = `<div class="text_container">${paragraphsSplit(
        text
    )}</div>
    <img class="${snakeTitle} content_img" src="img/${snakeTitle}.png">`;
    $container.insertAdjacentHTML('afterbegin', insertContent);
    if (index !== 0) {
        $container.insertAdjacentHTML(
            'afterbegin',
            `<h2 class="content_title">${title}</h2>`
        );
    }
}

// Put everything together
loadElements();
makeMenu(articlesInfo);
['click', 'keydown'].forEach((ev) =>
    [elements.$nav, elements.$header].forEach((container) =>
        container.addEventListener(ev, selectInfoItem)
    )
);
elements.$menuBtn.addEventListener('click', toggleMenu);
createAndShowInfoItem(elements.$main, articlesInfo);
