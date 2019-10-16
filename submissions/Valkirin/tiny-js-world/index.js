/* 
   Code repository: https://github.com/Valkirin/frontend-2019-p2p/tree/tiny-world-task/submissions/Valkirin/tiny-js-world
   Web app: https://valkirin.github.io/a-tiny-JS-world/
   */

"use strict";

class Inhabitant {
  constructor(type, name, legs, hands, say) {
    this.type = type;
    this.name = name;
    this.legs = legs;
    this.hands = hands;
    this.say = say;
  }
}

// ======== OBJECTS DEFINITIONS ========

const dog = new Inhabitant("dog", "Rex", 4, 0, '"Woff!"');

const cat = new Inhabitant("cat", "Buba", 4, 0, '"Meow!"');

const woman = new Inhabitant(
  "woman",
  "Katalin",
  2,
  2,
  '"need make up my nails"'
);

const man = new Inhabitant(
  "man",
  "Bob",
  2,
  2,
  '"Everything will be done. But tomorrow."'
);

const joinMethod = (arg) => {
  return [arg.type, arg.name, arg.legs, arg.hands, arg.say].join(", ");
};

// ======== OUTPUT ========

[dog, cat, woman, man].forEach(el => print(joinMethod(el)));
