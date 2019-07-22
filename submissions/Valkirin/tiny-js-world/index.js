/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
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

const joinMethod = function(arg) {
  return [arg.type, arg.name, arg.legs, arg.hands, arg.say].join(", ");
};

// ======== OUTPUT ========

[dog, cat, woman, man].forEach(function(el) {
  print(joinMethod(el));
});
