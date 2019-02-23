/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here

class Character{
  constructor(name, gender, saying) {
  this.name = name;
  this.gender = gender;
  this.saying = saying;
  }
}
class Animal extends Character {
  constructor(name, gender, saying){
    super(name, gender, saying);
    this.legs = 4;
  }
}
class Cat extends Animal {
  constructor(name, gender, saying){
    super(name, gender, saying);
    this.specie = "cat";
  }
}
class Dog extends Animal {
  constructor(name, gender, saying){
    super(name, gender, saying);
    this.specie = "dog";
  }
}
class Humanoid extends Character {
  constructor(name, gender, saying){
    super(name, gender, saying);
    this.hands = 2;
    this.legs = 2;
  }
}
class Human extends Humanoid {
  constructor(name, gender, saying) {
    super(name, gender, saying);
    this.specie = "human";
  }
}
class Rat extends Humanoid {
  constructor(name, gender, saying) {
    super(name, gender, saying);
    this.specie = "rat"
  }
}
  Character.prototype.sentence = function() {
    let sentence = [
        `Hey there, my name is <strong>${this.name}</strong> `,
        `and I am a ${this.specie}! `,
        `My gender is ${this.gender}, `,
        `in addition I have ${this.legs} legs`,
        ` and ${this.hands} hands.`,
        ` Wait a minute... ${this.saying}`
    ]
    if(!this.hands){
      sentence[4] = "."
    }
   return sentence.join('');
};

  const dog = new Dog("Paolo", "male", "Bark!");
  const cat = new Cat("Sophie", "female", "Mur-meow?");
  const man = new Human("Pablito", "male",  "It seems that we got a strange rat here...");
  const rat = new Rat("Twitch", "male", "Oh, HELLO!");
  const catWoman = new Human("Binokia", "female", cat.saying)

let characters = [dog, cat, man, rat, catWoman];
// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

   [dog, cat, man, rat, catWoman].forEach(char => print(char.sentence(char)));


/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */
