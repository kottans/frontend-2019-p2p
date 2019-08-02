
// Menu button
const menubtn = document.getElementById('menubtn');
const dropchild = document.getElementById('dropchild');
menubtn.addEventListener("click", function(){
  dropchild.classList.toggle('open');
});  


let inst = [{id:'section1', name:'6500 ANSI Lm на улице', description:'Работает проектор типа HITACHI CP-WX8265 3LCD  Lamp  1280х800   WXGA 6500lm  3600уе на экран шириной 3 м.', img:'img/first.png', img2:'img/0697.png'},
			{id:'section2', name:'Сшивка двух ультракороткофокусных проекторов', description:'Работают два проектора типа OPTOMA X320UST	Lamp	1024x768	XGA	4000lm   1395уе (за 1шт). Видеосервер для сшивки изображений порядка 1500уе. С дистанции установки в 66 см получаем проекцию шириной 400 cм.', img:'img/543.png', img2:'img/'},
			{id:'section3', name:'Спарка двух проекторов по 6500 ANSI Lm', description:'Работает спарка из двух проекторов типа HITACHI CP-WX8265	3LCD	Lamp	1280х800   WXGA	6500lm	   3600уе (за 1шт) на фасад здания. Ширина проекции примерно 6 м.', img:'img/sparka-proj.png', img2:'img/sparka-proj-2.png'},
			{id:'section4', name:'Видеостена на базе трех проекторов', description:'Видеостена на базе трех проекторов. Проекторы от 1500 уе за шт. Видеосервер порядка 1800уе. Центральная проекция шириной 360см, фланговые проекции по 450 см шириной каждая.', img:'img/videowall-proj.png', img2:'img/videowall-proj2.png'}]




function show (e){
	let res = inst.filter( obj => {
  	return obj.id === e.target.id
})
	document.querySelector(".headline").innerHTML = res[0].name
	document.querySelector(".container").innerHTML = res[0].description
	document.querySelector(".pic").src = res[0].img
	document.querySelector(".pic2").src = res[0].img2
}




const sect = document.querySelectorAll('.installations')
sect.forEach( function(elem) {
	elem.addEventListener('click', show)
})





/*



const section1 = document.querySelector('#section1');
section1.addEventListener("click", function() {
	document.querySelector('.headline').innerHTML = inst[0].name;
	document.querySelector('.container').innerHTML = inst[0].description;
	document.querySelector('.pic').src = inst[0].img;
});  


const section2 = document.querySelector('#section2');
section2.addEventListener("click", function() {
	document.querySelector('.headline').innerHTML = inst[1].name;
	document.querySelector('.container').innerHTML = inst[1].description;
	document.querySelector('.pic').src = inst[1].img;
});  












let paws = [
	{id:'marshall', img:'img/marshall.png', name:'Marshall', description:'Marshall is the team’s brave firedog – an excitable, all-action, six-year-old Dalmatian pup. He’s always ready to roll, but sometimes he gets too excited and can be a little clumsy.'},
	{id:'chase', img:'img/chase.png', name:'Chase', description:'This German Shepherd police pup is a natural leader. Athletic, smart, and ‘by the book’ organized, seven-year old Chase can herd traffic down the right detour, block off dangerous roads, and solve any mystery. He can help sniff out anything, but he happens to be allergic to both cats and feathers.'},
	{id:'rubble', img:'img/rubble.png', name:'Rubble', description:'Rubble is a construction Bulldog – a tough, gruff five-year-old pup with a heart of gold. Not only is he strong and eager to help, he’s funny and unexpectedly sweet! He loves to skateboard, snowboard, and get covered in mud, but he also loves warm baths at Katie’s Pet Parlor..'},
	{id:'skye', img:'img/skye.png', name:'Skye', description:'At seven years old, Skye is a cute, smart Cockapoo puppy. She is a fearless daredevil who will try anything with grace and a smile. She’s smart, loyal, and quick with a quip, sometimes gently teasing the bigger dogs who can’t seem to keep up! She loves to get paw-dicures and look good. When there’s no mission for the PAW Patrol, she can be found snowboarding or playing her favorite videogame, Pup Pup Boogie.'},
	{id:'zuma', img:'img/zuma.png', name:'Zuma', description:'Zuma is a playful, water-loving Labrador pup, and the team’s water rescue dog. At five years old, he’s the youngest PAW Patrol member – a happy, energetic beach puppy who loves to laugh and surf. He’s always trying to get the more serious pups like Chase and Rubble to “lighten up.”'},
	{id:'rocky', img:'img/rocky.png', name:'Rocky', description:'Rocky is a six-year-old Mixed Breed recycling pup. He is a creative canine, has a thousand ideas, and someone else’s trash is often his treasure. Rocky can usually find just the right thing to solve a problem. Rocky can get a little scruffy; he’s not a fan of baths and doesn’t like getting wet at all.'},
	{id:'everest', img:'img/everest.png', name:'Everest', description:'The most recent pup to join the PAW Patrol, Everest is a fearless and feisty eight-year-old Husky pup and the team’s amazing forest ranger. She’s completely at home in the wild and is a big help to Jake up on his mountain. Everest comes down to join the team for any rescue in the snow or the woods.'}]

paws[0].name;








function show() {
	const container = document.querySelector('.container');
	const fragment = document.createDocumentFragment(); 
	const newElement = document.createElement('p');
	newElement.innerText = 'This is paragraph number';
	fragment.appendChild(newElement);
	container.appendChild(fragment);

}

const section = document.getElementById('section');
section.addEventListener("click", show);  





function show() {
	
	let res = 'kjkjkjkjk';

	return res;

	document.querySelector('.container').innerHTML = res;
}





document.querySelector(".desc").innerHTML = result[0].description


function show() {
	const container = document.querySelector('.container');
	const fragment = document.createDocumentFragment(); 
	const newElement = document.createElement('p');
	newElement.innerText = 'This is paragraph number';
	fragment.appendChild(newElement);
	container.appendChild(fragment);

	section1.removeEventListener('click', show);
}

const section1 = document.getElementById('section1');
section1.addEventListener("click", show);  











const fragment = document.createDocumentFragment(); 
const newElement = document.createElement('p');
newElement.innerText = 'This is paragraph number ';
fragment.appendChild(newElement);
document.body.appendChild(fragment);






  


  menubtn.addEventListener("click", function(){
  dropchild.classList.toggle('open');
}); 


menubtn.addEventListener("click", function(){
  dropchild.style.display = 'block';
  menubtn.style.color = 'black';
});  

*/


