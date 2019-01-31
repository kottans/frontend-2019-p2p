/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: https://roka20012.github.io/a-tiny-JS-world/
   Web app: https://github.com/Roka20012/kottans_frontend/tree/master/practical_task/a-tiny-JS-world
   */
'use strict';

class Creatures {
    constructor(name, gender, saying) {
        this.name = name;
        this.gender = gender;
        this.saying = saying;
    }

    say() {
        let about = `Hi! I am ${this.species}; `;
        about += `My name is <strong>${this.name}</strong>; `;
        about += `My gender is <em>${this.gender}</em>; `;
        about += `I have ${this.legs} legs; I have ${this.hands} hands; `;
        about += `I want to say ${this.saying}`;

        print(about);
    }
}

class Animal extends Creatures {
    constructor(name, gender, saying) {
        super(name, gender, saying);
        this.legs = 4;
        this.hands = 0;
    }
}

class Person extends Creatures {
    constructor(name, gender, saying) {
        super(name, gender, saying);
        this.legs = 2;
        this.hands = 2;
        this.species = "human";
    }
}

class Dog extends Animal {
    constructor(name, gender, saying) {
        super(name, gender, saying);
        this.species = "dog";
    }
}

class Cat extends Animal {
    constructor(name, gender, saying) {
        super(name, gender, saying);
        this.species = "cat";
    }
}

let allCreatures = [new Dog("Toby", "male", "woof-woof!"), new Cat("Molly", "male", "meow"),
    new Person("Jenny", "female", "Hello John!"), new Person("John", "male", "Hello Jenny!")
];

allCreatures.forEach(el => {
    el.say();
});
