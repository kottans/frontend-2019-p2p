/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */
// ======== OBJECTS DEFINITIONS ========
// Define your objects here
class Inhabitant {
    constructor(species, name, gender, legs, hands, saying) {
        this.species = species;
        this.name = name;
        this.gender = gender;
        this.legs = legs;
        this.hands = hands;
        this.saying = saying
    }
}

const man = new Inhabitant('human', 'Leonid', 'male', '2', '2', 'Hello everyone!')
const woman = new Inhabitant('human', 'Daria', 'female', '2', '2', 'Good day!')
const dog = new Inhabitant('dog', 'Archi', 'male', '4', '0', 'Woof-woof')
const cat = new Inhabitant('cat', 'Co-co', 'female', '4', '0', 'Meow')
const catWoman = new Inhabitant('cat-woman', 'Kitty', 'female', '2', '2')
man.friends = [woman.name, dog.name].join(', ')
woman.friends = [cat.name]
cat.friends = [man.name, woman.name].join(', ')
dog.friends = [man.name, woman.name, cat.name].join(', ')
catWoman.saying = cat.saying;
catWoman.friends = cat.friends

const showIn = function (obj) {
    let result = ''
    for (let key in obj) {
        result += `${key}: ${obj[key]}; `
    }
    return result
}

print(showIn(man))
print(showIn(woman))
print(showIn(cat))
print(showIn(dog))
print(showIn(catWoman))
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


