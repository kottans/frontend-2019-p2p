class Inhabitant {
   constructor(species, name, gender, legs, hands, saying, friends) {
      this.species = species;
      this.name = name;
      this.gender = gender;
      this.legs = legs;
      this.hands = hands;
      this.saying = saying;
      this.friends = [];
   }

   toString() {
      return Object.keys(this).map(prop => `${this[prop]}`).join('; ');
      }

   callFriends(friends) {         
      this.friends = friends;
      }
}

const Meow = superclass =>
   class extends superclass {
      constructor(species, name, gender, legs, hands, saying, friends) {
         super(species, name, gender, legs, hands, saying, friends);
         this.saying = 'mur-mur';
   }
}

class Human extends Inhabitant {
   constructor(name, gender, saying, friends) {
      super('human', name, gender, 2, 2, saying, friends);
   }
}

class Man extends Human {
   constructor(name, saying, friends) {
      super(name, 'male', saying, friends);
   }
}

class Woman extends Human {
   constructor(name, saying, friends) {
      super(name, 'female', saying, friends);
   }
}

class Animal extends Inhabitant {
   constructor(species, name, gender, saying, friends) {
      super(species, name, gender, 4, 0, saying, friends);
   }
}

class Dog extends Animal {
   constructor( name, gender, saying, friends) {
      super('dog', name, gender, saying, friends);
   }
}

class Cat extends Meow(Animal) {
   constructor(name, gender, friends) {
      super('cat', name, gender, friends);
   }
}

class CatWoman extends Meow(Human) {
   constructor(name, friends) {
      super(name, 'female', friends);
   }
}

const man = new Man('Petro', 'Zdorov!'),
      woman = new Woman('Katia', 'Pryvit)'),
      dog = new Dog('Nika','female', 'gav-gav'),
      cat = new Cat('Musia', 'female'),
      catWoman = new CatWoman('Murka');

man.callFriends(['woman', 'dog']);
woman.callFriends(['man']);
dog.callFriends(['man']);
cat.callFriends(['woman', 'catWoman']);
catWoman.callFriends(['cat']);

[man, woman, dog, cat, catWoman]
   .forEach(inhabitant => {
      print (inhabitant);
})
