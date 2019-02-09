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

const fmg = 'female';
const mg = 'male';
const manSay = 'Life is beautiful';
const womSay = 'I like that guy';

class Habitans {
    constructor(species, name, gender, legs, hands, saying){
       this.species = species;
       this.name = name;
       this.gender = gender;
       this.legs = legs;
       this.hands = hands
       this.saying = saying;
    };

};

class SuperHabit extends Habitans {
    constructor(species, name, gender, legs, hands, clawed, saying){
        super(species, name, gender, legs, hands, saying);
        this.clawed = clawed;
    }
}

const dog = new Habitans('dog', 'Dina', fmg, 4, 0, 'woof-woof!'); 
const cat = new Habitans('cat', 'Sirko', mg, 4, 0, 'meow');

const man = new Habitans('human', 'Peter', mg, 2, 2, manSay);
const woman = new Habitans('human', 'Julia', fmg, 2, 2, womSay);

const catWoman = new SuperHabit('superhuman', 'Jess', fmg, 2, 2, true, cat.saying);

const getParameters = ({species, name, gender, legs, hands, saying}) =>{
    return `Hi! I am ${species}; My name is <strong>${name}</strong>;
    My gender is <em>${gender}</em>; I have ${legs} legs;
    I have ${hands} hands; I want to say ${saying};`
};

[dog, cat, woman, man, catWoman].forEach(el => {
    print(getParameters(el));
});
