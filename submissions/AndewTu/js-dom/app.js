let paws = [
	{id:'marshall', img:'img/marshall.png', name:'Marshall', description:'Marshall is the team’s brave firedog – an excitable, all-action, six-year-old Dalmatian pup. He’s always ready to roll, but sometimes he gets too excited and can be a little clumsy.'},
	{id:'chase', img:'img/chase.png', name:'Chase', description:'This German Shepherd police pup is a natural leader. Athletic, smart, and ‘by the book’ organized, seven-year old Chase can herd traffic down the right detour, block off dangerous roads, and solve any mystery. He can help sniff out anything, but he happens to be allergic to both cats and feathers.'},
	{id:'rubble', img:'img/rubble.png', name:'Rubble', description:'Rubble is a construction Bulldog – a tough, gruff five-year-old pup with a heart of gold. Not only is he strong and eager to help, he’s funny and unexpectedly sweet! He loves to skateboard, snowboard, and get covered in mud, but he also loves warm baths at Katie’s Pet Parlor..'},
	{id:'skye', img:'img/skye.png', name:'Skye', description:'At seven years old, Skye is a cute, smart Cockapoo puppy. She is a fearless daredevil who will try anything with grace and a smile. She’s smart, loyal, and quick with a quip, sometimes gently teasing the bigger dogs who can’t seem to keep up! She loves to get paw-dicures and look good. When there’s no mission for the PAW Patrol, she can be found snowboarding or playing her favorite videogame, Pup Pup Boogie.'},
	{id:'zuma', img:'img/zuma.png', name:'Zuma', description:'Zuma is a playful, water-loving Labrador pup, and the team’s water rescue dog. At five years old, he’s the youngest PAW Patrol member – a happy, energetic beach puppy who loves to laugh and surf. He’s always trying to get the more serious pups like Chase and Rubble to “lighten up.”'},
	{id:'rocky', img:'img/rocky.png', name:'Rocky', description:'Rocky is a six-year-old Mixed Breed recycling pup. He is a creative canine, has a thousand ideas, and someone else’s trash is often his treasure. Rocky can usually find just the right thing to solve a problem. Rocky can get a little scruffy; he’s not a fan of baths and doesn’t like getting wet at all.'},
	{id:'everest', img:'img/everest.png', name:'Everest', description:'The most recent pup to join the PAW Patrol, Everest is a fearless and feisty eight-year-old Husky pup and the team’s amazing forest ranger. She’s completely at home in the wild and is a big help to Jake up on his mountain. Everest comes down to join the team for any rescue in the snow or the woods.'}]


function show (e){
	let result = paws.filter(obj => {
  	return obj.id === e.target.id
})
	document.querySelector(".name").innerHTML = result[0].name
	document.querySelector(".pic").src = result[0].img
	document.querySelector(".desc").innerHTML = result[0].description
}

butts = document.querySelectorAll('button')
butts.forEach( function(element) {
	element.addEventListener('click', show)
});
