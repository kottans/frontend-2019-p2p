class inhobitant{
  constructor(name,gender,phrase){
    this.name = name;
    this.gender = gender;
    this.sayPhrase = phrase;
  }
  saying(){
    print(this.sayPhrase);
  }
}

class pet extends inhobitant {
  constructor(name,gender,phrase,isHungry){
    super(name,gender,phrase);
    this.isHungry = isHungry;
  }
  askForFood(){
    print("I want to eat!");
  }
}

class human extends inhobitant {
  constructor(name,gender,phrase,dish){
    super(name,gender,phrase);
    this.favoriteDish = dish;
  }
  giveFoodToPet(petObj){
    if(petObj.isHungry === true){
      petObj.isHungry = false;
    } else {
      print("You are not hungry!")
    }
  }
}

class metaHuman extends inhobitant {
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
  new pet("Rude","male","Meeeooow!",true),
  new pet("Barley","male","Gav-gav",true),
  new human("Alex","male","I am studying frontend at Kottans!","Pizza"),
  new human("Meggy","female","Kottans - one love!","Ice сream"),
  new metaHuman("woman-Cat","female","Meow, can i join Kottans?","Invisibilty")
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
  