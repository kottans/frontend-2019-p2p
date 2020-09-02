/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here


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
const cat = {
  species: "cat",
  name: "Expert",
  gender: "male",
  legs: 4,
  saying: "meow!",
};

const dog = {
  species: "dog",
  name: "Joker",
  gender: "male",
  legs: 4,
  saying: "woof-woof!",
  friends: [cat.name],
};

const man = {
  species: "human",
  name: "Mark",
  gender: "male",
  legs: 2,
  hands: 2,
  saying: "What's up?",
};

const woman = {
  species: "human",
  name: "Alice",
  gender: "female",
  legs: 2,
  hands: 2,
  saying: "Hi!",
  friends: [cat.name, dog.name, man.name],
};
const catWoman = {
  species: "human",
  name: "Wonder Alice",
  gender: "female",
  legs: 2,
  hands: 2,
  __proto__: cat,
};

function preparePrint(obj) {
  return `
   <strong>${obj.species}</strong>;
   name: <strong>${obj.name}</strong>;
   gender: ${obj.gender}; 
   legs: ${obj.legs};
   ${obj.hasOwnProperty("hands") ? `hands: ${obj.hands};` : ""}
   saying: ${obj.saying};
   ${
     obj.hasOwnProperty("friends") && obj.friends.length > 0
       ? `friends: ${obj.friends};`
       : ""
   }`;
}

[cat, dog, man, woman, catWoman].forEach((item) =>
  print(preparePrint(item), "div")
);
