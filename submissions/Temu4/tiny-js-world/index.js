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

//Create massage from object properties
const createMassage = obj => {
  let species = obj['species'];
  let gender = obj['gender'];
  let name = obj['name'];
  let age = obj['age'];
  let hands = obj['hands'];
  let legs = obj['legs'];
  let hobby = obj['hobby'];
  let speach = obj['speach'];

  let massage = `${speach} This is <strong>${obj.name}</strong>. `;

  if (gender === 'male') {
    return (massage += `He is a ${obj.species} (with ${obj.hands} hands and ${
      obj.legs
    } legs), age: ${obj.age}.\n He enjoy of ${obj.hobby}.`);
  } else if (gender === 'female') {
    return (massage += `She is a ${obj.species} (with ${obj.hands} hands and ${
      obj.legs
    } legs), age: ${obj.age}.\n She enjoy of ${obj.hobby}.`);
  }
  return massage;
};
// ======== OUTPUT ========
print(createMassage(man));
print(createMassage(woman));
print(createMassage(dog));
print(createMassage(cat));
