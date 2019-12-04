class Inhabitant {
  constructor(props) {
    this.name = props.name;
    this.species = props.species;
    this.gender = props.gender;
    this.saying = props.saying;
    // this.friends = []
  }
  toSay() {
    return this.saying;
  }
  toString() {
    return `I'm ${this.species}, my name is ${this.name}; gender: ${this.gender}. `;
  }
}
const SayCatMixin = superclass =>
  class extends superclass {
    constructor(props) {
      super(props);
      this.saying = props.saying || "Meow";
    }
  };
class Human extends Inhabitant {
  constructor(props) {
    super(props);
    this.species = props.species || "Human";
    this.hands = 2;
    this.legs = 2;
  }
  toString() {
    return (
      super.toString() +
      `I have ${this.hands} hands and ${
        this.legs
      } legs. Saying: ${super.toSay()} `
    );
  }
}
class Man extends Human {
  constructor(props) {
    super(props);
    this.gender = props.gender || "male";
  }
}
class Woman extends Human {
  constructor(props) {
    super(props);
    this.gender = props.gender || "female";
  }
}
class Animal extends Inhabitant {
  constructor(props) {
    super(props);
    this.paws = 4;
  }
  toString() {
    return (
      super.toString() + `I have ${this.paws} paws. Saying: ${super.toSay()} `
    );
  }
}
class Dog extends Animal {
  constructor(props) {
    super(props);
    this.species = props.species || "Dog";
  }
}
class Cat extends SayCatMixin(Animal) {
  constructor(props) {
    super(props);
    this.species = props.species || "Cat";
  }
}
class CatWoman extends SayCatMixin(Woman) {
  constructor(props) {
    super(props);
  }
}
let inhabitants = [
  new Man({ name: "Jack", saying: "I hope you're having a wonderful day" }),
  new Woman({ name: "Sara", saying: "Hey Jack, good to see you!" }),
  new Cat({ name: "Felix", gender: "male", saying: "Meow" }),
  new Dog({ name: "Archi", gender: "male", saying: "Woof-woof!" }),
  new CatWoman({ name: "Selina" })
];

inhabitants.forEach(i => print(i));
