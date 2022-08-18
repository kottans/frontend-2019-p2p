const cat = {
  species: 'cat',
  name: 'Mars',
  hands: undefined,
  gender: 'male',
  legs: 4,
  saying: 'mmeeow',
}
const dog = {
  species: 'dog',
  name: 'Lord',
  hands: undefined,
  gender: 'male',
  legs: 4,
  saying: 'mmeeow',
}
const man = {
  species: 'human',
  name: 'Ron',
  hands: 2,
  gender: 'male',
  legs: 2,
  saying: 'ahoj!',
}
const women = {
  species: 'human',
  name: 'Hermione',
  hands: 2,
  gender: 'female',
  legs: 2,
  saying: 'hello!',
}

const creatures = [cat, dog, man, women];
const key = ['species', 'name', 'hands', 'legs', 'gender', 'saying']

// ======== OUTPUT ========
print(cat.species + ';' + cat.name + ';' + cat.hands + ';' + cat.gender + ';' + cat.legs + ';' + cat.saying);
print(dog.species + ';' + dog.name + ';' + dog.hands + ';' + dog.gender + ';' + dog.legs + ';' + dog.saying);
print(man.species + ';' + man.name + ';' + man.hands + ';' + man.gender + ';' + man.legs + ';' + man.saying);
print(women.species + ';' + women.name + ';' + women.hands + ';' + women.gender + ';' + women.legs + ';' + women.saying);