/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here
const cat = {
   species: 'cat',
   name: 'Mars',
   hands: undefined,
   gender: 'male',
   legs: 4,
   saying: 'mmeeow',
}
const dog = {
   species: 'dog',
   name: 'Lord',
   hands: undefined,
   gender: 'male',
   legs: 4,
   saying: 'woofff!!!',
}
const man = {
   species: 'human',
   name: 'Ron',
   hands: 2,
   gender: 'male',
   legs: 2,
   saying: 'ahoj!',
}
const women = {
   species: 'human',
   name: 'Hermione',
   hands: 2,
   gender: 'female',
   legs: 2,
   saying: 'hello!',
}
dog.friendly = [man.name, women.name];
cat.friendly = [women.name];
women.friendly = [man.name, dog.name, cat.name];
man.friendly = [dog.name, women.name];


const creatures = [man, dog, women, cat];

const propertyOfInhabitants = ['species','name', 'hands', 'gender', 'legs', 'saying', ]

const output = creatures.map(inhabitant => 
   propertyOfInhabitants.map(property => inhabitant[property]
      ).filter(element => element !== undefined).join('; ')
      ).join('\n');
      
print(output);


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


