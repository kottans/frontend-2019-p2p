/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here


var man = {
  species: 'human',
  gender: 'male',
  name: 'Kurt',
  hands: 2,
  legs: 2,
  speach: 'Hello, people!'
};

var woman = {
  species: 'human',
  gender: 'female',
  name: 'Courtney',
  hands: 2,
  legs: 2,
  speach: 'Hello, everybody!'
};

var dog = {
  species: 'dog',
  gender: 'male',
  name: 'Perlin',
  hands: 0,
  legs: 4,
  speach: 'Wohw'
};

var cat = {
  species: 'cat',
  gender: 'female',
  name: 'Marta',
  hands: 0,
  legs: 4,
  speach: 'Meow!'
};

var catWoman = {
    species : 'cat-woman', 
    gender: 'female',
    name: 'Halle',
    hands: 2,   
    legs : 2,
    speach: cat.speach,
};




man.friends = [catWoman, woman, dog];
woman.friends = [man, cat];
dog.friends = [man, woman];
catWoman.friends = [man, cat];
cat.friends = [woman, catWoman] ;


[dog, cat, catWoman, woman, man].forEach(el => {
  print(`Hi! I am ${el.species}; My name is ${el.name};
    My gender is ${el.gender}; I have ${el.legs} legs;
    I have ${el.hands} hands; I want to say ${el.speach} to my friends ${el['friends'].map(friend => friend.name).join(', ')}`);
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


