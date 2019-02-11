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
const manSay = 'Life is beautiful';
const womSay = 'I like that guy';

const Habitans = {
    species: {
        human: 'human',
        dog: 'dog',
        cat: 'cat',
        superhuman: 'superhuman'
    },
    gender:{
        male: 'male',
        female: 'female'
    }
};

const dog = {
    species : Habitans.species.dog, 
    name: 'Dina',
    gender: Habitans.gender.female,
    legs : 4,
    hands: 0,
    saying : 'woof-woof!'
};

const cat = {
    species : Habitans.species.cat, 
    name: 'Sirko',
    gender: Habitans.gender.male,
    legs : 4,
    hands: 0,
    saying : 'meow'
};

const man = {
    species : Habitans.species.human, 
    name: 'Peter',
    gender: Habitans.gender.male,
    legs : 2,
    hands: 2,
    saying : manSay
};

const woman = {
    species : Habitans.species.human, 
    name: 'Julia',
    gender: Habitans.gender.female,
    legs : 2,
    hands: 2,
    saying : womSay
};

const catWoman = {
    species : Habitans.species.superhuman, 
    name: 'Jess',
    gender: Habitans.gender.female,
    legs : 2,
    hands: 2,
    saying : cat.saying
};

const getParameters = ({species, name, gender, legs, hands, saying}) =>{
    return `Hi! I am ${species}; My name is <strong>${name}</strong>;
    My gender is <em>${gender}</em>; I have ${legs} legs;
    I have ${hands} hands; I want to say ${saying};`
};

[dog, cat, woman, man, catWoman].forEach(el => {
    print(getParameters(el));
});
