import { print } from './js/lib.js';
/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details

   Code repository: https://github.com/yazdrahobycha/a-tiny-JS-world
   */

// ======== OBJECTS DEFINITIONS ========

class Inhabitant {
    constructor(name, species, gender, saying) {
        this.name = name;
        this.species = species;
        this.gender = gender;
        this.saying = saying;
    }

    introduce() {
        return ['name', 'species', 'gender', 'saying']
            .map((prop) => `${prop}: ${this[prop]}`)
            .join('; ');
    }
}

class Humanoid extends Inhabitant {
    constructor(name, species, gender, saying) {
        super(name, species, gender, saying);
        this.legs = 2;
        this.hands = 2;
    }

    introduce() {
        return (
            super.introduce() +
            '; ' +
            ['legs', 'hands'].map((prop) => `${prop}: ${this[prop]}`).join('; ')
        );
    }
}

class HomoSapiens extends Humanoid {
    constructor(name, gender, saying) {
        super(name, 'human', gender, saying);
    }
}

class Man extends HomoSapiens {
    constructor(name, saying) {
        super(name, 'male', saying);
    }
}

class Women extends HomoSapiens {
    constructor(name, saying) {
        super(name, 'female', saying);
    }
}

class Animal extends Inhabitant {
    constructor(name, species, gender, saying) {
        super(name, species, gender, saying);
        this.legs = 4;
    }

    introduce() {
        return super.introduce() + '; legs: ' + this.legs + '; ';
    }
}

class Dog extends Animal {
    constructor(name, gender) {
        super(name, 'dog', gender, Dog.saying());
    }

    static saying() {
        return 'Woof!';
    }
}

class Cat extends Animal {
    constructor(name, gender) {
        super(name, 'cat', gender, Cat.saying());
    }

    static saying() {
        return 'Meow!';
    }
}

class CatWoman extends Humanoid {
    constructor(name) {
        super(name, 'cat-women', 'female', Cat.saying());
    }
}

const man = new Man('Grisha', 'Bruh!');
const woman = new Women('Liza', 'Iu!');
const dog = new Dog('Dina', 'female');
const cat = new Cat('Pukch', 'male');
const catWoman = new CatWoman('Sasha');

const friendships = [
    { inhabitant: man, friends: [dog, catWoman] },
    { inhabitant: woman, friends: [cat, catWoman] },
    { inhabitant: dog, friends: [man, woman] },
    { inhabitant: cat, friends: [] },
    { inhabitant: catWoman, friends: [man, cat] },
];

friendships.forEach(({ inhabitant, friends }) => {
    print(
        `<i>${inhabitant.introduce()}; friends: ${
            friends.length > 0
                ? friends.map(({ name }) => name).join(', ')
                : `No friends yet:(`
        }</i>`
    );
});
