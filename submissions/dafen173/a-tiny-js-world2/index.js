

class Creatures {
  constructor(name, saying, gender, legs) {
    this.name = name;
    this.saying = saying;
    this.gender = gender;
    this.legs = legs;  
  } 

  say() {
    return 'Hi! I am ' + this.species + '. My name is ' + this.name + '. My gender is ' + this.gender 
        + '. I have ' + this.legs + ' legs' + '. I want to say ' + this.saying + '.' ; 
  }
}

class Animal extends Creatures {
  constructor(name, saying, gender, legs = 4) {
    super(name, saying, gender, legs);
  }
}

class Dog extends Animal {
  constructor(name, saying, gender, legs) {
    super(name, saying, gender, legs);
    this.species = 'dog';
  }
}

class Cat extends Animal {
  constructor(name, saying, gender, legs) {
    super(name, saying, gender, legs);
    this.species = 'cat';
  }
}

class Person extends Creatures {
  constructor(name, saying, gender, legs = 2) {
    super(name, saying, gender, legs);
    this.hands = 2;
    this.species = 'human';
  }
}

class Man extends Person {
  constructor(name, saying, gender, legs) {
    super(name, saying, gender, legs);
    this.gender = 'male';
  }
}

class Woman extends Person {
  constructor(name, saying, gender, legs) {
    super(name, saying, gender, legs);
    this.gender = 'female';
  }
}

let allCreatures = [new Dog('Perlin', 'Wohw-wohw', 'male' ), 
          new Cat('Marta', 'Meow-meow', 'female'),
          new Woman('Courtney','Hello'), 
          new Woman('Halle', 'Meow'),
          new Man('Kurt', 'Hello')]


allCreatures.forEach(el => {
  print(el.say());
})




