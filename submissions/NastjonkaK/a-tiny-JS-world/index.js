const dog = {
  type: "dog",
  name: "Charlie",
  gender: "male",
  legs: 4,
  hands: 0,
  hasTail: true,
  saying: "woof-woof"
};

const cat = {
  type: "cat",
  name: "Luna",
  gender: "female",
  legs: 4,
  hands: 0,
  hasTail: true,
  saying: "meow-meow"
};

const man = {
  type: "human",
  name: "Max",
  gender: "male",
  legs: 2,
  hands: 2,
  hasTail: false,
  saying: "Hello everybody!"
};

const woman = {
  type: "human",
  name: "Emma",
  gender: "female",
  legs: 2,
  hands: 2,
  hasTail: false,
  saying: "Have a nice day!"
};

const womanCat = {
  type: "human-cat",
  name: "Phoebe",
  gender: "female",
  legs: 2,
  hands: 2,
  hasTail: true,
  saying: cat.saying
};

function objToString(obj) {
  return Object.entries(obj)
    .map(([key, value]) => `${key}: ${value}`)
    .join("; ");
}

[dog, cat, man, woman, womanCat].forEach(el => print(objToString(el)));
