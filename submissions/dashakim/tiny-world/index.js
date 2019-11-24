/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */
// ======== OBJECTS DEFINITIONS ========
// Define your objects here
class Inhabitant {
  constructor(name, gender) {
    this.resident = this.constructor.name;
    this.name = name;
    this.gender = gender;
  }
  toSring() {
    return Object.entries(this)
      .map(([prop, value]) => `${prop}: <b>${value}</b>`)
      .join("; ");
  }
}
const SayCatMixin = superclass =>
  class extends superclass {
    constructor(name, gender, saying) {
      super(name, gender, saying);
      this.saying = "Meow";
    }
  };
class Human extends Inhabitant {
  constructor(name, gender, saying) {
    super(name, gender);
    this.hands = 2;
    this.legs = 2;
    this.saying = saying;
  }
}
class Man extends Human {
  constructor(name, saying) {
    super(name, "male", saying);
  }
}
class Woman extends Human {
  constructor(name, saying) {
    super(name, "female", saying);
  }
}
class Animal extends Inhabitant {
  constructor(name, gender, saying) {
    super(name, gender);
    this.paws = 4;
    this.saying = saying;
  }
}
class Dog extends Animal {
  constructor(name, gender, saying) {
    super(name, gender, saying);
  }
}
class Cat extends SayCatMixin(Animal) {
  constructor(name, gender) {
    super(name, gender);
  }
}
class CatWoman extends SayCatMixin(Woman) {
  constructor(name, saying) {
    super(name, saying);
  }
}
let inhabitants = [
  new Man("Jack", "I hope you're having a wonderful day"),
  new Woman("Sara", "Hey Jack, good to see you!"),
  new Dog("Archi", "male", "Woof-woof!"),
  new Cat("Felix", "male"),
  new CatWoman("Selina")
];
inhabitants.forEach(i => print(i.toSring()));

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


