class Creature {
  constructor(name, saying) {
    this.name = name,
    this.saying = saying
  }

  introduction() {
     return `\Hello! I am a ${this.type}, ${this.gender}. My name is ${this.name}.`
    }

  say(){
    return `\And I want to say: "${this.saying}".`
  }
}

class Animal extends Creature {
  constructor(name, gender, paws, saying) {
    super(name, saying);
    this.gender = gender,
    this.paws = paws
  }

  greeting() {
    return `\ ${this.introduction()} I have ${this.paws} paws and a tail. ${this.say()}`;
  }
}

class Human extends Creature {
  constructor(name, legs, hands, saying) {
    super(name, saying);
    this.type = "human",
    this.legs = legs,
    this.hands = hands
  }

  greeting() {
    return `\ ${this.introduction()}  I have ${this.legs} legs and ${this.hands} hands. ${this.say()}`;
  }
}

const MyMixin = (superclass) => class extends superclass {
    constructor(name, gender,legs, paws) {
      super(name, gender, legs, paws);
      this.saying = "meow-meow"
    }
};

class Man extends Human {
  constructor(name, legs, hands, saying) {
    super(name, legs, hands, saying);
    this.type = 'man',
    this.gender = 'male'
  }
}

class Woman extends Human {
  constructor(name, legs, hands, saying) {
    super(name, legs, hands, saying);
    this.type = 'woman',
    this.gender = 'female'
  }
}


class Dog extends Animal {
  constructor(name, gender, paws) {
    super(name, gender, paws);
    this.type = "dog",
    this.saying = "woof-woof"
  }
}

class Cat extends MyMixin(Animal) {
  constructor(name, gender, paws) {
    super(name, gender, paws);
    this.type = "cat"
  }
}

class HumanCat extends MyMixin(Woman) {
  constructor(name, gender, legs, hands) {
    super(name, gender, legs, hands);
    this.type = "human-cat"
  }

  greeting() {
    return `\ ${this.introduction()} I have ${this.legs} legs, ${this.hands} hands and a tail. ${this.say()}`;
  }
}

const dog = new Dog('Charlie', 'male', '4');
const cat = new Cat('Luna', 'female', '4');
const man = new Man('Max', '2', '2', 'Hello everybody!');
const woman = new Woman('Emma', '2', '2', 'Have a nice day!');
const womanCat = new HumanCat('Phoebe', '2', '2');

[dog, cat, man, woman, womanCat].forEach(el => print(el.greeting()));
