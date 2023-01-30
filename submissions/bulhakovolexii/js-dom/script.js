const animals = [
    {
        id: 'thanator',
        name: "Thanator (Na'vi Name: Palulukan)",
        img: './images/1.jpg',
        descr: "Thanator is the most terrible predator of the tropical forest. Resembling an earth panther, this huge, powerful omnivore is unique in its ability to dominate its territory and strike fear into Pandora's largest and fiercest creatures.The predator's senses are so developed that it can detect prey at a distance of up to 8 miles (13 km). While their extremely powerful jaws filled with long, razor-sharp teeth are perfect for ripping flesh, its armored tail can deliver just as deadly blows. In a matter of seconds, his six paws can accelerate up to 64 km/h, and he is also incredibly agile"
    },
    {
        id: 'hexapede',
        name: "Hexapede (Na'vi Name: Yerik)",
        img: './images/2.jpg',
        descr: "This beautiful, docile herbivore has some natural defenses, such as highly attuned senses, but few strategies to ward off predators. The agile hexapede are moderately fast runners, although they can weave, bob and turn with the best prey. When startled or alerted, retractable fans on the top of the hexapede's head open out to distract attackers and add extra height. From fan-tip to toe, adult hexapedes stand up to 7 ft 6 in (2.3 m). Traditionally, the hexapede is the first animal that a would-be Na’vi warrior is allowed to kill, marking their transition from child to adult."
    },
    {
        id: 'tulkun',
        name: "Tulkun (Na'vi Name: Tulkun)",
        img: './images/3.jpg',
        descr: "The tulkun share a unique interspecies kinship with all of the various marine reef clans. Each Na’vi is paired with a brother or a sister tulkun calf for life. The Na'vi communicate with the whale-like creatures using a constructed sign language. The RDA have set their sights on the tulkun after the discovery of a naturally occurring substance in the creature’s brains known as amrita.The substance has the medical power to stop human aging.Since this discovery, the RDA have deployed tulkun hunting squads to capture and harvest the material."
    },
    {
        id: 'direhorse',
        name: "Direhorse (Na'vi Name: Pa’li)",
        img: './images/4.jpg',
        descr: "A common mount on which the Na'vi can move quickly through the dense forest, carrying large loads and moving many kilometers away from the settlement. An extremely large animal, reaching more than four meters in length and slightly less in height, thus only slightly inferior to the largest African elephants. Six-legged, with powerful bodies covered with thick chitinous armor, lutecones seem like clumsy creatures, but in fact, despite their respectable dimensions, they are able to move completely silently if they wish, without attracting the attention of possible predators. The neural connection between the rider and the horse does not lead to a lifetime, the exclusive connection between the Na'vi and the animal; although riders have their favorite mounts, it is possible and permissible to ride another clan member's main horse."
    },
    {
        id: 'woodsprites',
        name: "Woodsprites (Na'vi Name: Atokirina)",
        img: './images/5.jpg',
        descr: "Known to the Na’vi as atokirina, the Woodsprites are seeds from the Tree of Souls. The Na’vi revere the woodsprites and consider them bearers of omens and signs of sanctity. While woodsprites have the appearance of Earth jellyfish, they float in the wind similar to dandelion seeds."
    },
    {
        id: 'hammerheadTitanothere',
        name: "Hammerhead Titanothere</br>(Na'vi Name:Angtsìk)",
        img: './images/6.jpg',
        descr: "A large beast with a hammer-like growth on its head stays in packs. Because of the hammer, the titanotherium sees poorly, like the terrestrial rhinoceros, but replaces this lack with sharp hearing and a delicate sense of smell. Titanotherium is a herbivore, and, judging by its beak-like mouth, it does not graze, eating grass, but prefers to eat branches and other tough vegetation. When fighting predators or other males, the titanotherium strikes with hard knobbed hammer edges and usually aims them directly at the opponent's eye to incapacitate them. The beast marks the boundaries of its land with extensive destruction: fallen trees, deep marks on the rocks and huge heaps of droppings that rise above the ground, like boundary pillars."
    },
    {
        id: 'akula',
        name: "Akula (Na'vi Name: Akula))",
        img: './images/7.jpg',
        descr: "The Akula is the largest reef marine predator, complete with razor sharp teeth, segmented body armor, and an unholy appetite. Because it does not breathe air, it can lie in wait far below in an ambush strategy, like a Terran Great White shark. The ultimate challenge for sublittoral and pelagic Na’vi hunters is to drive off, or kill, a large adult akula that has decided to include their village in its hunting range."
    },
    {
        id: 'prolemuris',
        name: "Prolemuris (Na'vi Name: Syaksyuk)",
        img: './images/8.jpg',
        descr: "This unaggressive tree dweller stands approximately 5 ft (1.5 m) tall, but weighs no more than 14 lb (6 kg). Flaps of skin between its outstretched limbs help it to glide from branch to branch. This allows the animal to fall for over twelve meters without risk of injury. An adept herbivore, the prolemuris' teeth are adapted to cut through the tensile strength of Pandora flora. Some scientists believe the chattering prolemuris marks an evolutionary step between most six-limbed, four-eyed Pandoran animals and the four-limbed, two-eyed Na’vi."
    }
];
const sidebar = document.querySelector('.sidebar__body');
const sidebarBg = document.querySelector('.sidebar__bg');
const burgerBtn = document.querySelector('.burger-btn');
const content = document.querySelector('.animal');
const bg = document.querySelector('.bg');
const title = document.querySelector('.content__title');

burgerBtn.addEventListener('click', showSidebar);
sidebarBg.addEventListener('click', showSidebar);
sidebar.addEventListener('click', insertContent)

function showSidebar() {
    sidebar.classList.toggle('visible');
    if (sidebar.classList.contains('visible')) {
        burgerBtn.classList.add('active');
        sidebarBg.classList.add('active');
    } else {
        burgerBtn.classList.remove('active');
        sidebarBg.classList.remove('active');
    }
}

function insertContent(event) {
    const animal = animals.filter(animal => animal.id === event.target.id)[0];

    content.innerHTML =

        `<div class="animal__info">
            <h2 class="animal__name">${animal.name}</h2>
            <img src="${animal.img}" alt="" class="animal__img">
        </div>
        <p class="animal__descr">${animal.descr}</p>`;

    for (let i = 1; i <= sidebar.childElementCount - 1; i++) {
        sidebar.children[i].classList.remove('active');
    }

    event.target.classList.add('active');

    if (sidebar.classList.contains('visible')) {
        showSidebar();
    }

    content.classList.remove('cover');
    bg.classList.remove('cover');
    title.classList.remove('cover');
}
