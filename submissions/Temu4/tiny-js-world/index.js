// ======== OBJECTS DEFINITIONS ========
const man = {
  species: 'human',
  gender: 'male',
  name: 'John',
  age: 28,
  hands: 2,
  legs: 2,
  hobby: 'fishing',
  speach: 'Hello, people!'
};

const woman = {
  species: 'human',
  gender: 'female',
  name: 'Anny',
  age: 23,
  hands: 2,
  legs: 2,
  hobby: 'cycling',
  speach: 'Hello, everybody!'
};

const dog = {
  species: 'dog',
  gender: 'male',
  name: 'Rex',
  age: 3,
  hands: 0,
  legs: 4,
  hobby: 'diging bones',
  speach: 'Wohw!'
};

const cat = {
  species: 'cat',
  gender: 'female',
  name: 'Sida',
  age: 1.5,
  hands: 0,
  legs: 4,
  hobby: 'sleaping',
  speach: 'Meow!'
};

//Create message from object properties
const createMessage = obj => {
  let person;

  obj.gender === 'male' ? (person = 'He') : (person = 'She');

  return [
    `${obj.speach} This is <strong>${obj.name}</strong>.`,
    person,
    `is a ${obj.species} (with ${obj.hands} hands and ${obj.legs} legs), age: ${obj.age}.\n`,
    person,
    `enjoy of ${obj.hobby}.`
  ].join(' ');
};
// ======== OUTPUT ========
[man, woman, dog, cat].forEach(item => print(createMessage(item)));
