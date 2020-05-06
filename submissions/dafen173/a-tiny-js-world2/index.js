/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here


class Person {
  constructor(gender, name, species) {
    this.species = species;
    this.gender = gender;
    this.name = name;  
  } 
  setFriends(friends){
    this.friends = friends;
  } 
  
  sayAsAnimal(){
    if (this.species === 'cat') {
      this.speach = 'Meow';
    } else if (this.species === 'cat-woman') {
      this.speach = 'Meow'
    } else {
      this.speach = 'Wohw whow whow'
    }
  }
}

class Human extends Person {
  constructor(gender, name, species){
    super(gender, name, species);
    this.species = species || 'human';
    this.hands = 2;
    this.legs = 2;
    this.speach = 'Hello, people!';
  }
}

class Animal extends Person {
  constructor(gender, name, species){
    super(gender, name, species);
    this.hands = 0;
    this.legs = 4;
  }
}

var man = new Human('male', 'Kurt');
var woman = new Human('female', 'Courtney');
var catwoman = new Human('female', 'Halle', 'cat-woman');
var cat = new Animal('female', 'Marta', 'cat');
var dog = new Animal('male', 'Perlin', 'dog');

man.setFriends([woman, catwoman, dog]);
woman.setFriends([man, cat]);
catwoman.setFriends([cat, man, woman]);
dog.setFriends([man, woman]);
cat.setFriends([catwoman, woman]);
dog.sayAsAnimal();
cat.sayAsAnimal();
catwoman.sayAsAnimal();

[man, woman, dog, catwoman, cat].forEach(el => {
  print(`Hi! I am ${el.species}; My name is ${el.name};
    My gender is ${el.gender}; I have ${el.legs} legs;
    I have ${el.hands} hands; I want to say ${el.speach} to my friends ${el.friends.map(fr => fr.name).join(', ')}`);
});


// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */


