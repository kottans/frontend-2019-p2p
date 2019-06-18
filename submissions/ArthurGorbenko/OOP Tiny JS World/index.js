class Inhobitant{
  constructor(name,gender,phrase){
    this.name = name;
    this.gender = gender;
    this.sayPhrase = phrase;
  }
  saying(){
    alert(this.sayPhrase);
  }
}

class Pet extends Inhobitant {
  constructor(name,gender,phrase,isHungry){
    super(name,gender,phrase);
    this.isHungry = isHungry;
  }
  askForFood(){
    alert("I want to eat!");
  }
}

class Human extends Inhobitant {
  constructor(name,gender,phrase,dish){
    super(name,gender,phrase);
    this.favoriteDish = dish;
  }
  giveFoodToPet(petObj){
    if(petObj.isHungry === true){
      petObj.isHungry = false;
    } else {
      alert("You are not hungry!")
    }
  }
}

class MetaHuman extends Inhobitant {
  constructor(name,gender,phrase,superPower){
    super(name,gender,phrase);
    this.superPower = superPower;
    this.friends = " ";
  }
  getFriend(objFriend){
    this.friends += objFriend.name;
  }
}
const inhobitants = [
  new Pet("Rude","male","Meeeooow!",true),
  new Pet("Barley","male","Gav-gav",true),
  new Human("Alex","male","I am studying frontend at Kottans!","Pizza"),
  new Human("Meggy","female","Kottans - one love!","Ice сream"),
  new MetaHuman("woman-Cat","female","Meow, can i join Kottans?","Invisibilty")
]

inhobitants.forEach(inhobitant =>
  print(objectsToString(inhobitant))
);

console.log(pet.name);
function objectsToString(obj) {
    let objectAsString = "";
    for (prop in obj) {
      if (prop === "sayPhrase"){
        objectAsString +=prop + ":\'" + obj[prop] + "!\', ";
        continue;
      }
      objectAsString += prop + " : " + obj[prop] + ", ";
    }      
    return objectAsString.slice(0,objectAsString.length - 2) + ";";
  };
 
  
