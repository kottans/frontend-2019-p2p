/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: https://roka20012.github.io/a-tiny-JS-world/
   Web app: https://github.com/Roka20012/kottans_frontend/tree/master/practical_task/a-tiny-JS-world
   */
'use strict';

class Creatures {
    constructor(species, name, gender, legs, hands, saying) {
      this.species = species,
      this.name = name,
      this.gender = gender,
      this.legs = legs,
      this.hands = hands,
      this.saying = saying;
    }
}

Creatures.prototype.sayHello = function(){
  print(`Hi! I am ${this.species}; My name is <strong>${this.name}</strong>; My gender is <em>${this.gender}</em>;
    \nI have ${this.legs} legs;I have ${this.hands} hands;I want to say ${this.saying};`);
};

const dog = new Creatures('dog', 'Toby', 'male', 4, 0, 'woof-woof!');
const cat = new Creatures('cat', 'Molly', 'male', 4, 0, 'meow');
const woman = new Creatures('human', 'Jenny', 'female', 2, 2, 'Hello Chris!');
const man = new Creatures('human', 'John', 'male', 2, 2,' Hello Jenny!');

let allCreatures = [dog, cat, woman, man];

allCreatures.forEach(el => {
    el.sayHello();
});
