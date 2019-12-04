class Inhabitant {
  constructor(props) {
    this.name = props.name;
    this.species = props.species;
    this.gender = props.gender;
    this.saying = props.saying;
    this.friends = [];
  }
  setFriends(friends) {
    this.friends = friends;
  }
  getFriends() {
    return this.friends.map(friend => friend.name).join(", ");
  }
  toSay() {
    return this.saying;
  }
  toString() {
    return `I'm ${this.species}; My name is ${this.name}; gender: ${this.gender}; `;
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
      } legs; Saying: ${super.toSay()}; My friends: ${super.getFriends()};`
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
      super.toString() +
      `I have ${
        this.paws
      } paws; Saying: ${super.toSay()}; My friends: ${super.getFriends()};`
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

let man = new Man({
  name: "Jack",
  saying: "I hope you're having a wonderful day"
});
let woman = new Woman({ name: "Sara", saying: "Hey Jack, good to see you!" });
let cat = new Cat({ name: "Felix", gender: "male", saying: "Meow" });
let dog = new Dog({ name: "Archi", gender: "male", saying: "Woof-woof!" });
let catWoman = new CatWoman({ name: "Selina" });
man.setFriends([cat, dog, woman, catWoman]);
woman.setFriends([man, cat]);
dog.setFriends([woman, man]);
cat.setFriends([woman]);
catWoman.setFriends([cat]);
let inhabitants = [man, woman, cat, dog, catWoman];
inhabitants.forEach(i => print(i));
