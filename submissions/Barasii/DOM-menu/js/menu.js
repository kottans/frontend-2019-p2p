const CLASS = {
	BLOCK: 'container',
	leftPart: 'menu',
	rightPart: 'frame',
	ul: 'menu-list',
	li: 'menu-row',
	a: 'menu-link',
	figure: 'brand',
	img: 'brand-link'
}

const automobile = [ 
	{
		concern: "INFORMER",
		brand: "Today's car market is filled with a variety of brands. But not everyone knows that most automobile brands do not exist independently, and almost every major automobile concern is behind it. Do you know?"
	},
	{
		concern: "VOLKSWAGEN AUTO GROUP (VAG)",
		brand: ["volkswagen", "audi", "seat", "skoda", "bentley", "lamborghini", "porshe", "bugatti", "scania", "man"]
	},
	{
		concern: "TOYOTA MOTOR CORP.",
		brand: ["toyota", "daihatsu", "scion", "hino", "lexus", "subaru"]
	},
	{
		concern: "GENERAL MOTORS",
		brand: ["gm", "chevrolet", "buick", "cadillac", "holden", "gmc", "daewoo"]
	},
	{
		concern: "FIAT",
		brand: ["fiat", "alfa romeo", "ferrari", "chrysler", "masserati", "ram", "jeep", "lancia", "dodge"]
	},
];

const insertWelcome = () => {
	let brand =  document.querySelector('.frame');
	brand.insertAdjacentHTML('afterbegin', `<h6 class="info">${automobile[0].brand}</h6>`);
}

const deleteImg = () => {
	document.querySelector(".frame").innerHTML="";
}

document.body.style.backgroundImage = "url('img/fiogrid.jpg')";

const container = document.createElement('div');
const menu = document.createElement('nav');
const frame = document.createElement('main');
const list = document.createElement('ul');

container.classList.add(CLASS.BLOCK);
menu.classList.add(CLASS.leftPart);
frame.classList.add(CLASS.rightPart);
list.classList.add(CLASS.ul);

window.document.body.appendChild(container);
container.appendChild(menu);
container.appendChild(frame);
menu.appendChild(list);
insertWelcome();


const appendLiA = automobile.forEach(e => {
	const rowList = document.createElement('li');
	const link = document.createElement('a');	
	rowList.classList.add(CLASS.li);
	link.href = '#';
	link.classList.add(CLASS.a);
	link.insertAdjacentHTML('afterbegin', `${e.concern}`);			
	list.appendChild(rowList);	
	let menuRow = document.querySelectorAll('.menu-row');
	Array.from(menuRow).forEach(e => {
			e.appendChild(link);			
	});
});
 

let menuLink = document.querySelectorAll('.menu-link');
const appendFigureImg = Array.from(menuLink).forEach(e => {	
	e.addEventListener("click", (event) => {
		let target = event.target;
		for (let i=1; i<automobile.length; i++){
			if (target.innerHTML == automobile[i].concern) {
				deleteImg();
				automobile[i].brand.forEach(b => {
					let brand =  document.querySelector('.frame');
					const logo = document.createElement('figure');
					const img = document.createElement('img');
					logo.classList.add(CLASS.figure);
					img.src = `img/${b}.png`;
					img.alt = `logo ${b}`;
					img.classList.add(CLASS.img);
					logo.appendChild(img);	
					brand.appendChild(logo);	
				});
			}
			else if (target.innerHTML == automobile[0].concern) {
				deleteImg();
				insertWelcome();
			};
		};
	});
});
