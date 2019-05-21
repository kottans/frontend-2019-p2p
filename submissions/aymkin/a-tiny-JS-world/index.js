/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details

Code repository: https://github.com/aymkin/a-tiny-JS-world
Web app: https://aymkin.github.io/a-tiny-JS-world/
   */
// ======== OBJECTS DEFINITIONS ========

const dog = {
  species: 'dog',
  name: 'Charly',
  gender: 'male',
  legs: 4,
  hands: 0,
  say: () => 'woof-woof',
  friends: ['man', 'cat']
};

const cat = {
  species: 'cat',
  name: 'Benjamin',
  gender: 'male',
  legs: 4,
  hands: 0,
  say: () => 'meow-meow',
  friends: ['woman', 'dog']
};

const woman = {
  species: 'human',
  name: 'Galyna',
  gender: 'female',
  legs: 2,
  hands: 2,
  say: () => 'Dear, do you love me?',
  friends: ['man', 'cat']
};

const man = {
  species: 'human',
  name: 'Aymkin',
  gender: 'male',
  legs: 2,
  hands: 2,
  say: () => 'Honey, I love borscht.'
};

const getFriends = inhabitant => {
  return inhabitant.hasOwnProperty('friends')
    ? `I have friends: ${inhabitant.friends.join(', ')}`
    : `I have no friends`;
};

const getBio = inhabitant => {
  return `I'am a ${inhabitant.species}, my name is <strong>${
    inhabitant.name
  }</strong>.\nI have ${inhabitant.legs} legs and ${
    inhabitant.hands
  } hands.${getFriends(inhabitant)}. \nEvery day I say:  ${inhabitant.say()}`;
};

// ========== OUTPUT ===========

[woman, man, dog, cat].forEach(inhabitant => {
  print(getBio(inhabitant));
});
