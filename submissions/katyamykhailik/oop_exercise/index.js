"use strict";

class Inhabitant {
    constructor (name, gender, says, species) {
        this.name = name;
        this.gender = gender;
        this.species = species;
        this.says = says;
    }

    toString(){
        let inhabitantProfile = [this.name, this.species, this.gender, this.says, ""];
        return inhabitantProfile.join(", ");
    }
}

class Human extends Inhabitant {
    constructor (name, gender, says) {
        super(name, gender, says, "human");
        this.hands = 2;
        this.legs = 2;
    }

    toString(){
        let inhabitantProfile = [`hands: ${this.hands}`, `legs: ${this.legs}`];
        return super.toString() + inhabitantProfile.join(", ");
    }
}

class Animal extends Inhabitant {
    constructor (name, gender, says) {
        super(name, gender, says, "animal");
        this.paws = 4;
    }

    toString(){
        let inhabitantProfile = [`paws: ${this.paws}`];
        return super.toString() + inhabitantProfile.join(", ");
    }
}

class Dog extends Animal {
    constructor(name, gender){
        super(name, gender, "bow-wow");
    }
}

class Cat extends Animal {
    constructor(name, gender) {
        super(name, gender, "meow");
    }
}

class CatWoman extends Human {
    constructor(name, gender, says){
        super(name, gender, says);
        this.says = `${new Cat().says} & ${says}`;
        this.species = "humananimal";
    }
}

let catwoman = new CatWoman ("Irena", "female", "Hello!");
let cat = new Cat ("Tom", "male");
let dog = new Dog ("Spike", "male");
let boy = new Human ("Dmitriy", "male", "I am happy!");
let girl = new Human ("Maria", "female", "I am here!");

let inhabitants = Array.of(catwoman, cat, dog, boy, girl);

inhabitants.forEach(inhabitant => print(inhabitant));