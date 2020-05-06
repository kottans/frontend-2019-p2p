/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here
const dog = {
    species: 'dog',
    name: 'Buddy',
    gender: 'male',
    legs: 4,
    hands: 0,
    saying: "woof-woof"
};
const cat = {
    species: 'cat',
    name: 'Daisy',
    gender: 'female',
    legs: 4,
    hands: 0,
    saying: "meow-meow"
};
const man = {
    species: 'human',
    name: 'Jack',
    gender: 'male',
    legs: 2,
    hands: 2,
    saying: "What's up?"
};
const woman = {
    species: 'human',
    name: 'Ann',
    gender: 'female',
    legs: 2,
    hands: 2,
    saying: 'Have a nice day'
};
const catWoman = {
    species: 'half human half cat',
    name: 'Selina',
    gender: 'female',
    legs: 2,
    hands: 2,
    saying: cat.saying
};

function convertObject(obj) {
    return Object.entries(obj)
    .map(([keys,value]) => `${keys}:<strong>${value}</strong>`)
    .join("; ");
}

[dog,cat,man,woman,catWoman].forEach(item => print(convertObject(item)));

// print(keys(cat))
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
