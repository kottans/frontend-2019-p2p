/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details

Code repository: https://github.com/aymkin/a-tiny-JS-world
Web app: https://aymkin.github.io/a-tiny-JS-world/
   */

function Inhobitant(species, name, gender, say, friends = []) {
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
	return this.hasOwnProperty('friends') && this.friends.length > 0
		? `I have friends: ${this.friends.join(', ')}.`
		: `I have no friends`;
};

Inhobitant.prototype.getBio = function() {
	return `I am ${this.species}, my name is <strong>${
		this.name
	}</strong>. ${this.getLimbs()}. ${this.getFriend()} \nEvery day I say: ${this.makeSound()}.`;
};

Inhobitant.prototype.getLimbs = function() {
	let limbs = 'The limbs are not defined on my constructor';
	if (this.hasOwnProperty('legs')) {
		limbs = `I have ${this.legs} legs`;
	}
	if (this.hasOwnProperty('hands')) {
		limbs += ` and ${this.hands} hands`;
	}
	return limbs;
};

function Animal(species, name, gender, say, friends) {
	Inhobitant.call(this, species, name, gender, say, friends);
	this.legs = 4;
}

Animal.prototype = Object.create(Inhobitant.prototype);

function Human(name, gender, say, friends) {
	Inhobitant.call(this, name, gender, say, friends);
	this.legs = 2;
	this.hands = 2;
	this.species = 'human';
}

Human.prototype = Object.create(Inhobitant.prototype);

function Bird(species, name, gender, say) {
	Inhobitant.call(this, species, name, gender, say);
	this.legs = 2;
	this.wings = 2;
}

Bird.prototype = Object.create(Inhobitant.prototype);

Bird.prototype.getLimbs = function() {
	return Inhobitant.prototype.getLimbs.call(this) + ` and ${this.wings} wings`;
};

const woman = new Human('', 'Galyna', 'female', 'Dear, do you love me?', [
	'man',
	'cat',
]);

const man = new Human('', 'Alex', 'male', 'Dear, I love borscht', [
	'woman',
	'cat',
]);

const cat = new Animal('cat', 'Benjamin', 'male', 'meow-meow', [
	'woman',
	'dog',
]);

const dog = new Animal('dog', 'Charly', 'male', 'woof-woof');

const a = new Inhobitant('rhino', 'Asswell', 'malefe', 'bla-bla-bla', [
	'Barmaley',
	'Kakadu',
]);

const blueBird = new Bird('parrot', 'Kakadu', 'female', 'popka-durak');

[woman, man, dog, cat, a, blueBird].forEach(inhabitant => {
	print(inhabitant.getBio());
});
