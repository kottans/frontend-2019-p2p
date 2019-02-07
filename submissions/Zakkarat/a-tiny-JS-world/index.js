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
const dog = {
  name: "Paolo",
  species: "dog",
  gender: INHABITANT.genders.male,
  legs: 4,
  hands: 0,
  saying: "Bark!"
}
const cat = {
  name: "Sophie",
  species: "cat",
  gender: INHABITANT.genders.female,
  legs: 4,
  hands: 0,
  saying: "Mur-meow?"
}
const man = {
  name: "Pablito",
  species: INHABITANT.species.human,
  gender: INHABITANT.genders.male,
  legs: 2,
  hands: 2,
  saying: "It seems that we got a strange rat here..."
}
const rat = {
  name: "Twitch",
  species: "rat",
  gender: INHABITANT.genders.male,
  legs: 2,
  hands: 2,
  saying: "Oh, HELLO!"
}
const catWoman = {
  name: "Binokia",
  species: INHABITANT.species.human,
  gender: INHABITANT.genders.female,
  legs: 2,
  hands: 2,
  saying: cat.saying
}

let characters = [dog, cat, man, rat, catWoman];
// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */
   const sentenceBuilder = char => {
        let sentence = [
            `Hey there, my name is <strong>${char.name}</strong>`,
            `and I am a ${char.species}!`,
            `My gender is ${char.gender},`,
            `in addition I have ${char.legs} legs`,
            `and ${char.hands} hands.`,
            `Wait a minute... ${char.saying}`
        ]
        if(char.hands == 0){
          sentence.splice(4, 1);
          sentence[3] = sentence[3].split("");
          sentence[3].push(".");
          sentence[3] = sentence[3].join("");
        }
       return sentence.join(' ');
   };
   [dog, cat, man, rat, catWoman].forEach(char => print(sentenceBuilder(char)));


/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */
