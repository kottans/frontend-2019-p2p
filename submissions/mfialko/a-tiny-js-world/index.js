

   /*Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */
class Inhabitant {
    constructor(species, name, gender, saying) {
        this.species = species;
        this.name = name;
        this.gender = gender;
        this.saying = saying;
        this.friends = [];
        inhabitants.push(this);
    }
    toString(){
        return Object.keys(this).map(e => {
            if (Array.isArray(this[e])) {
                return `${e}: ${this[e].join(', ')}`;
            }
            else if (this[e]) {
                if (e === 'name') {
                    return `${e}: <b>${this[e]}</b>`;
                } else {
                    return `${e}: ${this[e]}`;
                }
            } 
        }).filter(Boolean).join('; ');
    }
    addFriends(...friendObjects) {
        this.friends.push(...friendObjects.map(e => e.name));
        friendObjects.map(e => e.friends.push(this.name));
    }
}

class Human extends Inhabitant {
    constructor(name, gender, saying, legs = 2, hands = 2) {
        super('human', name, gender, saying);
        this.legs = legs;
        this.hands = hands;
    }
}

class Animal extends Inhabitant {
    constructor(species, name, gender, saying, paws) {
        super(species, name, gender, saying);
        this.paws = paws;
    }
}
class Cat extends Animal {
    constructor(name, gender, saying = 'meow') {
        super('cat', name, gender, saying, 4);
    }
}
      
class Dog extends Animal {
    constructor(name, gender, saying = 'woof') {
        super('dog', name, gender, saying, 4);
    }
}


let inhabitants = [];

const dog = new Dog('Mukhtar', 'male');
const cat = new Cat('Murchik', 'male');
const man = new Human('Yuriy', 'male', 'Privet');
const woman = new Human('Alina', 'female', 'Hello');

dog.addFriends(cat, man);
man.addFriends(woman, cat);
woman.addFriends(cat);



inhabitants.forEach(e => print(e));

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


