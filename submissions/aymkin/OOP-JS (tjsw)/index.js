/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details

Code repository: https://github.com/aymkin/a-tiny-JS-world/tree/tiny-js-world-oop-aymkin
Web app: https://aymkin.github.io/a-tiny-JS-world/
   */

function Inhobitant(species, name, gender, friends, say) {
	this.species = species;
	this.name = name;
	this.gender = gender;
	this.friends = friends;
	this.say = say;
}

Inhobitant.prototype.makeSound = function() {
	return this.say;
};

Inhobitant.prototype.getFriend = function() {
	return this.hasOwnProperty('friends')
		? `I have friends: ${this.friends.join(', ')}.`
		: `I have no friends`;
};

Inhobitant.prototype.getHandLegs = function() {
	let legs = `I have ${this.legs} legs`;
	return this.hasOwnProperty('hands')
		? `${legs} and ${this.hands} hands`
		: `${legs}`;
};
Inhobitant.prototype.getBio = function() {
	return `I am ${this.species}, my name is <strong>${
		this.name
	}</strong>. ${this.getHandLegs()}. ${this.getFriend()} \nEvery day I say: ${this.makeSound()}.`;
};

function Animal(species, name, gender, friends, say) {
	Inhobitant.call(this, species, name, gender, friends, say);
	this.legs = 4;
}

Animal.prototype = Object.create(Inhobitant.prototype);

function Human(species, name, gender, friends, say) {
	Inhobitant.call(this, species, name, gender, friends, say);
	this.legs = 2;
	this.hands = 2;
}

Human.prototype = Object.create(Inhobitant.prototype);

const woman = new Human(
	'human',
	'Galyna',
	'female',
	['man', 'cat'],
	'Dear, do you love me?'
);

const man = new Human(
	'human',
	'Alex',
	'male',
	['woman', 'cat'],
	'Dear, I love borscht'
);

const cat = new Animal(
	'cat',
	'Benjamin',
	'male',
	['woman', 'dog'],
	'meow-meow'
);

const dog = new Animal('dog', 'Charly', 'male', ['man', 'cat'], 'woof-woof');

[woman, man, dog, cat].forEach(inhabitant => {
	print(inhabitant.getBio());
});
