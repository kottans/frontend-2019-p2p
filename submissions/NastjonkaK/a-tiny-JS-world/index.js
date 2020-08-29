/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:
   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here

const dog = {
  type: "dog",
  name: "Charlie",
  gender: "male",
  legs: 4,
  hands: 0,
  hasTail: true,
  saying: "woof-woof"
};

const cat = {
  type: "cat",
  name: "Luna",
  gender: "female",
  legs: 4,
  hands: 0,
  hasTail: true,
  saying: "meow-meow"
};

const man = {
  type: "human",
  name: "Max",
  gender: "male",
  legs: 2,
  hands: 2,
  hasTail: false,
  saying: "Hello everybody!"
};

const woman = {
  type: "human",
  name: "Emma",
  gender: "female",
  legs: 2,
  hands: 2,
  hasTail: false,
  saying: "Have a nice day!"
};

const womanCat = {
  type: "human-cat",
  name: "Phoebe",
  gender: "female",
  legs: 2,
  hands: 2,
  hasTail: true,
  saying: cat.saying
};

function objToString(obj) {
  let str = "";
  for (let p in obj) {
    if (obj.hasOwnProperty(p)) {
      str += p + ": " + obj[p] + "; ";
    }
  }
  return str;
}

[dog, cat, man, woman, womanCat].forEach(el => {
  print(objToString(el));
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