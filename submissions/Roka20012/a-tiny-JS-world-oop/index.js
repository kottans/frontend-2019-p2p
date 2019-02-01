/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: https://roka20012.github.io/a-tiny-JS-world/
   Web app: https://github.com/Roka20012/kottans_frontend/tree/master/practical_task/a-tiny-JS-world
   */
'use strict';

class Creatures {
    constructor(name, saying, gender, legs) {
        this.name = name;
        this.gender = gender;
        this.saying = saying;
        this.legs = legs;
    }

    say() {
    	return [this.species, this.name, this.gender, this.legs , this.hands,
        this.saying].join("; ");
    }
}

class Animal extends Creatures {
    constructor(name, saying, gender, legs = 4) {
        super(name, saying, gender,  legs);
    }
}

class Dog extends Animal {
    constructor(name, saying, gender, legs) {
        super(name, saying, gender, legs);
        this.species = "dog";
    }
}

class Cat extends Animal {
    constructor(name, saying, gender, legs) {
        super(name, saying, gender, legs);
        this.species = "cat";
    }
}

class Person extends Creatures {
    constructor(name, saying, gender, legs = 2) {
        super(name, saying, gender, legs);
        this.hands = 2;
        this.species = "human";
    }
}

class Man extends Person {
    constructor(name, saying, gender, legs) {
        super(name, saying, gender, legs);
        this.gender = "male";
    }
}

class Woman extends Person {
    constructor(name, saying, gender, legs) {
        super(name, saying, gender, legs);
         this.gender = "female";
    }
}


let allCreatures = [new Dog("Toby", "woof-woof!", "male"), new Cat("Molly", "meow", "male"),
    new Woman("Jenny", "Hello John!"), new Man("John", "Hello Jenny!")
];

allCreatures.forEach(el => {
    print(el.say());
});
