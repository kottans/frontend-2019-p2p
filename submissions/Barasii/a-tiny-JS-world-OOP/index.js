class Inhabitant {
  constructor(species, name, gender, saying, friends) {
    this.species = species;
    this.name = name;
    this.gender = gender;
    this.saying = saying;
    this.friends = [];
  }

  toString() {
    return Object.keys(this)
      .map((prop) => `${this[prop]}`)
      .join("; ");
  }

  callFriends(friends) {
    this.friends = friends;
  }
}

const INHABITANS = {
  man: "man",
  woman: "woman",
  dog: "dog",
  cat: "cat",
  catWoman: "catWoman",
};

const Meow = (superclass) =>
  class extends superclass {
    constructor(species, name, gender, friends) {
      super(species, name, gender, friends, "mur-mur");
    }
  };

class Human extends Inhabitant {
  constructor(name, gender, hands, legs, saying, friends) {
    super("human", name, gender, saying, friends);
    this.hands = hands;
    this.legs = legs;
  }
}

class Man extends Human {
  constructor(name, saying, friends) {
    super(name, "male", 2, 2, saying, friends);
  }
}

class Woman extends Human {
  constructor(name, saying, friends) {
    super(name, "female", 2, 2, saying, friends);
  }
}

class Animal extends Inhabitant {
  constructor(species, name, gender, feets, saying, friends) {
    super(species, name, gender, saying, friends);
    this.feets = feets;
  }
}

class Dog extends Animal {
  constructor(name, gender, saying, friends) {
    super(INHABITANS.dog, name, gender, 4, saying, friends);
  }
}

class Cat extends Meow(Animal) {
  constructor(name, gender, friends) {
    super(INHABITANS.cat, name, gender, 4, friends);
  }
}

class CatWoman extends Meow(Human) {
  constructor(name, friends) {
    super(name, "female", 2, 2, friends);
  }
}

const man = new Man("Petro", "Zdorov!"),
  woman = new Woman("Katia", "Pryvit)"),
  dog = new Dog("Nika", "female", "gav-gav"),
  cat = new Cat("Musia", "female"),
  catWoman = new CatWoman("Murka");

man.callFriends([INHABITANS.woman, INHABITANS.dog]);
woman.callFriends([INHABITANS.man]);
dog.callFriends([INHABITANS.man]);
cat.callFriends([INHABITANS.woman, INHABITANS.catWoman]);
catWoman.callFriends([INHABITANS.cat]);

let inhabitants = [man, woman, cat, dog, catWoman];

inhabitants.forEach((inhabitant) => {
  print(inhabitant);
});
