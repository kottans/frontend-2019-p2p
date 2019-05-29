// ======== OBJECTS DEFINITIONS ========
class Creature {
  constructor(species, gender, name, age, hobby, legs) {
    this.species = species;
    this.gender = gender;
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.hobby = hobby;
  };
}

class Human extends Creature {
  constructor(gender, name, age, hobby, legs = 2, hands = 2) {
    super('human', gender, name, age, hobby, legs);
    this.hands = hands;
  }
}

class Man extends Human {
  constructor(name, age, hobby) {
    super('male', name, age, hobby);
  }
  greeting() {
    return `\tHello! My name is <strong>${this.name}</strong>. I'm ${this.age}. Little about me:
    I'm a ${this.species}, ${this.gender}. I have ${this.hands} hands and ${this.legs} legs. My hobby is ${
      this.hobby
    }.`;
  }
}

class Woman extends Human {
  constructor(name, age, hobby) {
    super('female', name, age, hobby);
  }
  greeting() {
    return `\tHi! I am <strong>${this.name}</strong>. I'm ${this.age}. I'm a ${this.species}, ${this.gender}.
    I have ${this.hands} hands and ${this.legs} legs. I'm enjoy of ${this.hobby}.`;
  }
}

class Animal extends Creature {
  constructor(species, gender, name, age, skinColor, hobby, legs = 4) {
    super(species, gender, name, age, hobby, legs);
    this.skinColor = skinColor;
  }
  greeting() {
    return `\tThis is a ${this.species}, ${this.gender}. Its name is <strong>${this.name}</strong>. Age: ${
      this.age
    }.
    It has ${this.skinColor} fur and ${this.legs} legs. It enjoy of ${this.hobby}.`;
  }
}

class Cat extends Animal {
  constructor(gender, name, age, skinColor, hobby) {
    super('cat', gender, name, age, skinColor, hobby);
  }
}

class Dog extends Animal {
  constructor(gender, name, age, skinColor, hobby) {
    super('dog', gender, name, age, skinColor, hobby);
  }
}

const john = new Man('John', 28, 'fishing');
const anny = new Woman('Anny', 23, 'shoping');
const rex = new Dog('male', 'Rex', 3, 'white with black spots', 'diging bones');
const sida = new Cat('female', 'Sida', 1.5, 'lightgrey', 'sleeping');

// // ======== OUTPUT ========
[john, anny, rex, sida].forEach(item => print(item.greeting()));
