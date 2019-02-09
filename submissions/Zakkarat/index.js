/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here

const INHABITANT = {
    species: {
        human: 'human'
    },
    genders: {
        male: 'male',
        female: 'female'
    }
};
const Character = function (name, species, gender, legs, saying) {
  this.name = name;
  this.species = species;
  this.gender = gender;
  this.legs = legs;
  this.saying = saying;
  }
  Character.prototype.sentence = function() {
    let sentence = [
        `Hey there, my name is <strong>${this.name}</strong>`,
        `and I am a ${this.species}!`,
        `My gender is ${this.gender},`,
        `in addition I have ${this.legs} legs`,
        `and ${this.hands} hands.`,
        `Wait a minute... ${this.saying}`
    ]
    if(this.hands == null){
      sentence.splice(4, 1);
      sentence[3] = sentence[3].split("");
      sentence[3].push(".");
      sentence[3] = sentence[3].join("");
    }
   return sentence.join(' ');
};
  const Humanoid = function (name, species, gender, legs, hands, saying) {
    Character.call(this, name, species, gender, legs, saying)
      this.hands = hands;
  }
  Humanoid.prototype = Object.create(Character.prototype);
  const dog = new Character("Paolo", "dog", INHABITANT.genders.male, 4, "Bark!");
  const cat = new Character("Sophie", "cat", INHABITANT.genders.female, 4, "Mur-meow?");
  const man = new Humanoid("Pablito", INHABITANT.species.human, INHABITANT.genders.male, 2, 2,  "It seems that we got a strange rat here...");
  const rat = new Humanoid("Twitch", "rat", INHABITANT.genders.male, 2, 2, "Oh, HELLO!");
  const catWoman = new Humanoid("Binokia", INHABITANT.species.human, INHABITANT.genders.female, 2, 2, cat.saying)

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
