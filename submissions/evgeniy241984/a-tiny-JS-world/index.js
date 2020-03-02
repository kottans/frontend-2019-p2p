/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here
"use strict";

class Animals {
  constructor(gender, name, saying) {
    this.gender = gender;
    this.name = name;
    this.saying = saying;
  }

  say() {
    return `i'm ${this.species}; My name is: <strong> ${this.name} </strong>; My gender: ${this.gender}; Saying: <em> ${this.saying} </em>`;
  }
}

class Carnivora extends Animals {
  constructor(gender, name, saying, paws) {
    super(gender, name, saying, paws);
    this.paws = paws || 4;
  }
  say() {
    return super.say() + `; I have ${this.paws} paws`;
  }
}

class Dog extends Carnivora {
  constructor(name, saying, gender, paws) {
    super(gender, name, saying, paws);
    this.species = "dog";
  }
}

class Cat extends Carnivora {
  constructor(name, saying, gender, paws) {
    super(gender, name, saying, paws);
    this.species = "cat";
  }
}

class Homo extends Animals {
  constructor(gender, name, sayinng, legs, hands) {
    super(gender, name, sayinng, legs, hands);
    this.hands = hands || 2;
    this.legs = legs || 2;
    this.species = "human";
  }
  say() {
    return super.say() + `; I have ${this.hands} legs, ${this.legs} hands`;
  }
}

class Man extends Homo {
  constructor(name, saying, gender, legs, hands) {
    super(gender, name, saying, legs, hands);
    this.gender = "male";
  }
}

class Woman extends Homo {
  constructor(name, saying, gender, legs, hands) {
    super(gender, name, saying, legs, hands);
    this.gender = "female";
  }
}

const inhabitans = [
  new Dog("Cobby", "woof-woof", "Male"),
  new Cat("Liyen", "meow", "Female"),
  new Man("Jack", "Hello guys"),
  new Woman("Jane", "meow")
];

inhabitans.forEach(el => {
  print(el.say());
});

// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */
