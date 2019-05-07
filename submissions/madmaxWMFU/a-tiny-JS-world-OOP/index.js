/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
class Inhabitant {
    constructor(name, gender, greeting, species) {
        this.name = name;
        this.gender = gender;
        this.greeting =greeting;
        this.species = species;
    }

    say() {
        return this.greeting;
    }

    toString() {
        return [
            this.species,
            `<strong>${this.name}</strong>`,
            this.gender,
            `<em>${this.say()}</em>`
        ];
    }
}

class Human extends Inhabitant {
    constructor(name, gender, hands, legs, greeting, species = "human") {
        super(name, gender, greeting, species);
        this.hands = hands;
        this.legs = legs;
    }

    toString() {
        let allAbout = super.toString();
        let firstPart = allAbout.slice(0, 3);
        let secondPart = allAbout.slice(3, 4);
        return [...firstPart, this.hands, this.legs, ...secondPart].join("; ");
    }
}

class Animal extends Inhabitant {
    constructor(name, gender, wings, paws, greeting, species) {
        super(name, gender, greeting, species);
        this.wings = wings;
        this.paws = paws;
    }

    toString() {
        let allAbout = super.toString();
        let firstPart = allAbout.slice(0, 3);
        let secondPart = allAbout.slice(3, 4);
        return [...firstPart, this.wings, this.paws, ...secondPart].join("; ");
    }    
}

const inhabitans = [
    new Human('Max', 'male', 2, 2, 'Hallo!'),
    new Human('Lena', 'female', 2, 2, 'Bonjour!'),
    new Animal('Adolf', 'male', 0, 4, 'Woof!', 'dog'),
    new Animal('Klara', 'female', 0, 4, 'Meeow!', 'cat')
];
// ======== OUTPUT ========
inhabitans.forEach(arr => print(arr, 'div'));
