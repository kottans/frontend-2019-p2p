const CLASS = {
	BLOCK: 'container',
	leftPart: 'menu',
	rightPart: 'frame',
	ul: 'menu-list',
	li: 'menu-row',
	a: 'menu-link',
	figure: 'brand',
	img: 'brand-link',
	home: 'home',
	background: 'background'
}

const automobiles = [ 
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

const drawBrands = (arr) => {
	arr.forEach((item) => {
		const mainFrame =  document.querySelector('.frame');
		const logo = document.createElement('figure');
		const img = document.createElement('img');
		logo.classList.add(CLASS.figure);
		img.src = `img/${item}.png`;
		img.alt = `logo ${item}`;
		img.classList.add(CLASS.img);
		logo.append(img);	
		mainFrame.append(logo);	
	})
}

const deleteImg = () => document.querySelector(".frame").innerHTML="";

const showBrands = ({target}) => {
	if(!target.classList.contains(CLASS.home)) {
		automobiles.forEach((item) => {
			if(target.innerText === item.concern) {
				deleteImg();
				drawBrands(item.brand);
			}
		})	
	} else {
		showHome();
	} 
}

const showHome = () => {
	deleteImg();

	const frame = document.querySelector('main');
	frame.insertAdjacentHTML('afterbegin', `<h6 class="info">Today's car market is filled with a variety of brands. But not everyone knows that most automobile brands do not exist independently, and almost every major automobile concern is behind it. Do you know?</h6>`);
}

const drawMenuList = () => {
	const fragment = [];

	automobiles.forEach((linkMenu) => {
		const rowList = document.createElement('li');
		const link = document.createElement('a');
		
		rowList.classList.add(CLASS.li);
		link.classList.add(CLASS.a);		
		link.href = '#';
		link.innerText = linkMenu.concern;
		rowList.append(link);	
		fragment.push(rowList);	
	})

	return fragment;
}

const drawBodyContent = () => {
	const body = document.querySelector('body');
	const container = document.createElement('div');
	const menu = document.createElement('nav');
	const list = document.createElement('ul');
	const frame = document.createElement('main');
	const rowList = document.createElement('li');
	const link = document.createElement('a');	

	container.classList.add(CLASS.BLOCK);
	menu.classList.add(CLASS.leftPart);
	list.classList.add(CLASS.ul);
	frame.classList.add(CLASS.rightPart);
	body.classList.add(CLASS.background);

	container.append(menu);
	container.append(frame);
	menu.append(list);
	rowList.classList.add(CLASS.li);
	link.classList.add(CLASS.a);		
	link.classList.add(CLASS.home);		
	link.href = '#';
	link.innerText = "INFORMER";
	rowList.append(link);
	list.append(rowList);
	list.append(...drawMenuList());
	body.append(container);
}

const init = () => {
	drawBodyContent();
	showHome();
	const menuLink = document.querySelector('.menu-list');
	menuLink.addEventListener("click", showBrands);
}

window.onload = () => {
	init();
}
