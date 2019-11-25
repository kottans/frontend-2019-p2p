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
