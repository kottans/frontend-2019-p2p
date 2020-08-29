class Creature {
  constructor(name, saying) {
    this.name = name,
    this.saying = saying
  }
}

class Animals extends Creature {
  constructor(name, gender, saying) {
    super(name, saying);
    this.gender = gender,
    this.paws = 4
  }

  greeting() {
    return `\ Hello! I am a ${this.type}, ${this.gender}. My name is ${this.name}. I have ${this.paws} paws and a tail. And I like to say: "${this.saying}".`;
  }
}

class Human extends Creature {
  constructor(name, saying) {
    super(name, saying)
    this.type = "human",
    this.legs = 2,
    this.hands = 2
  }

  greeting() {
    return `\ Hello! I am a ${this.type}, ${this.gender}. My name is ${this.name}. I have ${this.legs} legs and ${this.hands} hands. And I want to say: "${this.saying}".`;
  }
}

class Man extends Human {
  constructor(name, saying) {
    super(name, saying);
    this.type = 'man',
    this.gender = 'male'
  }
}

class Woman extends Human {
  constructor(name, saying) {
    super(name, saying);
    this.type = 'woman',
    this.gender = 'female'
  }
}


class Dog extends Animals {
  constructor(name, gender) {
    super(name, gender);
    this.type = "dog",
    this.saying = "woof-woof"
  }
}

class Cat extends Animals {
  constructor(name, gender) {
    super(name, gender);
    this.type = "cat",
    this.saying = "meow-meow"
  }
}

class HumanCat extends Woman {
  constructor(name, saying) {
    super(name, saying);
    this.type = "human-cat",
    this.gender = "female"
  }

  greeting() {
    return `\ Hello! I am a ${this.type}, ${this.gender}. My name is ${this.name}. I have ${this.legs} legs, ${this.hands} hands and a tail. And I want to say: "${this.saying}".`;
  }
}

const dog = new Dog('Charlie', 'male');
const cat = new Cat('Luna', 'female');
const man = new Man('Max', 'Hello everybody!');
const woman = new Woman('Emma', 'Have a nice day!');
const womanCat = new HumanCat('Phoebe', cat.saying);

[dog, cat, man, woman, womanCat].forEach(el => print(el.greeting()));
