class Creature {
  constructor(type, gender, name, saying) {
    this.type = type,
    this.gender = gender,
    this.name = name,
    this.saying = saying
  }

  getIntroducing() {
     return `\Hello! I am a ${this.type}, ${this.gender}. My name is ${this.name}.`
    }

  getSaying(){
    return `\And I want to say: "${this.saying}".`
  }
}

class Animal extends Creature {
  constructor(type, gender, name, paws, saying) {
    super(type, gender, name, saying);
    this.paws = paws
  }

  getGreeting() {
    return `\ ${this.getIntroducing()} I have ${this.paws} paws and a tail. ${this.getSaying()}`;
  }
}

class Human extends Creature {
  constructor(name, gender, legs, hands, saying) {
    super('human', gender, name, saying);
    this.legs = legs,
    this.hands = hands
  }

  getGreeting() {
    return `\ ${this.getIntroducing()}  I have ${this.legs} legs and ${this.hands} hands. ${this.getSaying()}`;
  }
}

class Man extends Human {
  constructor(name, saying, legs = 2, hands = 2) {
    super(name, 'male', legs, hands, saying);
  }
}

class Woman extends Human {
  constructor(name, saying, legs = 2, hands = 2) {
    super(name, 'female', legs, hands, saying);
  }
}


class Dog extends Animal {
  constructor(name, gender, paws = 4) {
    super('dog', gender, name, paws, 'woof-woof');
  }
}

class Cat extends Animal {
  constructor(name, gender, paws = 4) {
    super('cat', gender, name, paws, 'meow-meow');
  }
}

class WomanCat extends Cat {
  constructor(name, gender = 'female', legs = 2, hands = 2, saying) {
    super(name, gender, saying);
    this.legs = legs,
    this.hands = hands,
    this.type = 'woman-cat'
  }

  getGreeting() {
    return `\ ${this.getIntroducing()} I have ${this.legs} legs, ${this.hands} hands and a tail. ${this.getSaying()}`;
  }
}

const dog = new Dog('Charlie', 'male', 3);
const cat = new Cat('Luna', 'female');
const man = new Man('Max','Hello everybody!');
const woman = new Woman('Emma', 'Have a nice day!');
const womanCat = new WomanCat('Phoebe');

[dog, cat, man, woman, womanCat].forEach(el => print(el.getGreeting()));
