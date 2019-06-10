const dog = {
  type: "dog",
  name: "Barley",
  gender: "male",
  legs: 4,
  hasTail: true,
  saying: "gav-gav"
};

const cat = {
  type: "cat",
  name: "Rude",
  gender: "male",
  legs: 4,
  hasTail: true,
  saying: "Kottans are the best!"
};

const man = {
  type: "human",
  name: "Alex",
  gender: "male",
  legs: 2,
  hasTail: false,
  saying: "I want to start learning frontend development!"
};

const woman = {
  type: "human",
  name: "Meggy",
  gender: "female",
  legs: 2,
  hasTail: false,
  saying: "Hello,Alex."
};

const womanCat = {
  type: "human-cat",
  name: "woman Cat",
  gender: "female",
  legs: 2,
  hasTail: true,
  saying: "Meow,Kottans are the best of the best!"
};

[dog, cat, man, woman, womanCat].forEach(inhobitant =>
  print(objectsToString(inhobitant))
);

function objectsToString(obj) {
    let objectAsString = "";
    for (prop in obj) {
      if (prop === "saying") {
        objectAsString += prop + ' : "' + obj[prop] + '"';
        break;
      } else if (prop === "hasTail" || prop === "legs") {
        objectAsString += prop + " : " + obj[prop] + ", ";
        continue;
      }
      objectAsString += obj[prop] + ", ";
    }
    return objectAsString + ";";
  }
  