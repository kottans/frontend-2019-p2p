/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here
const dog = {
  name: "Paolo",
  species: "dog",
  gender: 'male',
  legs: 4,
  hands: 0,
  saying: "Bark!"
}
const cat = {
  name: "Sophie",
  species: "cat",
  gender: 'female',
  legs: 4,
  hands: 0,
  saying: "Mur-meow?"
}
const human = {
  name: "Pablito",
  species: "human",
  gender: 'male',
  legs: 2,
  hands: 2,
  saying: "It seems that we got a strange rat here..."
}
const rat = {
  name: "Twitch",
  species: "rat",
  gender: 'male',
  legs: 2,
  hands: 2,
  saying: "Oh, HELLO!"
}
const cat_woman = {
  name: "Binokia",
  species: "human",
  gender: 'female',
  legs: 2,
  hands: 2,
  saying: cat.saying
}

let characters = [dog, cat, human, rat, cat_woman]
// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

characters.forEach(function(char) {
  if(char.hands > 0){
  print(`Hey there, my name is <strong>${char.name}</strong> and I am a ${char.species}! My gender is ${char.gender}, in addition I have ${char.legs} legs and ${char.hands} hands. Wait a minute... ${char.saying}`)
} else {
  print(`Hey there, my name is <strong>${char.name}</strong> and I am a ${char.species}! My gender is ${char.gender}, in addition I have ${char.legs} legs. Wait a minute... ${char.saying}`)
}
})


/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */
