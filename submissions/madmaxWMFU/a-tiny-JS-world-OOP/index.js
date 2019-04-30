/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
class Objects {
    constructor(name, gender, species, greeting) {
        this.name = name;
        this.gender = gender;
        this.species = species;
        this.greeting =greeting;
    }

    say() {
        return this.greeting;
    }

    allAbout() {
        return [
            this.species,
            `<strong>${this.name}</strong>`,
            this.gender,
            `<em>${this.say()}</em>`
        ];
    }
}

class Human extends Objects {
    constructor(name, gender, species, hands, legs, greeting) {
        super(name, gender, species, greeting);
        this.hands = hands;
        this.legs = legs;
    }

    allAbout() {
        let allAbout = super.allAbout();
        let firstPart = allAbout.slice(0, 3);
        let secondPart = allAbout.slice(3, 4);
        return [...firstPart, this.hands, this.legs, ...secondPart].join("; ");
    }
}

class Animal extends Objects {
    constructor(name, gender, species, wings, paws, greeting) {
        super(name, gender, species, greeting);
        this.wings = wings;
        this.paws = paws;
    }

    allAbout() {
        let allAbout = super.allAbout();
        let firstPart = allAbout.slice(0, 3);
        let secondPart = allAbout.slice(3, 4);
        return [...firstPart, this.wings, this.paws, ...secondPart].join("; ");
    }    
}

const man = new Human('Max', 'human', 'male', 2, 2, 'Hallo!'); 
const woman = new Human('Lena', 'human', 'female', 2, 2, 'Bonjour!'); 
const dog = new Animal('Adolf', 'male', 'dog', 0, 4, 'Woof!'); 
const cat = new Animal('Klara', 'female', 'cat', 0, 4, 'Meeow!'); 

// ======== OUTPUT ========
[man, woman, dog, cat].forEach(arr => print(arr.allAbout(), 'div'));
