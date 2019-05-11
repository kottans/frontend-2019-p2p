class Inhabitant {
    constructor(props) {
        this.name = props.name;
        this.greeting = props.greeting;
    }

    say() {
        return this.greeting;
    }

    toString() {
        return [
            this.species,
            `<strong>${this.name}</strong>`,
            this.gender,
            this.hands,
            this.legs,
            `<em>${this.say()}</em>`
        ].join("; ");        
    }

    checkValue(checkNum, constNum) {
        return typeof(checkNum) != "undefined" ? checkNum : constNum;
    }
}

class Human extends Inhabitant {
    constructor(props) {
        super(props);
        this.hands = this.checkValue(props.hands, 2);
        this.legs = this.checkValue(props.legs, 2);
        this.species = "human";
    }
}

class Animal extends Inhabitant {
    constructor(props) {
        super(props);
        this.gender = props.gender;
        this.hands = this.checkValue(props.hands, 2);
        this.legs = this.checkValue(props.legs, 4);
    }   
}

class Man extends Human {
    constructor(props) {
        super(props);
        this.gender = "male";
    }
}

class Woman extends Human {
    constructor(props) {
        super(props);
        this.gender = "female";
    }
}

class Dog extends Animal {
    constructor(props) {
        super(props);
        this.species = "dog";        
    }
}

class Cat extends Animal {
    constructor(props) {
        super(props);
        this.species = "cat";
    }
}

const inhabitans = [
    new Man({name: 'Max', greeting: 'Hallo!'}),
    new Woman({name: 'Lena', greeting: 'Bonjour!'}),
    new Dog({name: 'Adolf', gender: 'male', greeting: 'Woof!', hands: 0}),
    new Cat({name: 'Klara', gender: 'female', greeting: 'Meeow!', hands: 0})
];

inhabitans.forEach(obj => print(obj, 'div'));
