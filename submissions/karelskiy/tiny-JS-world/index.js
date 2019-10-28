const population = [
    {
        species: 'dog',
        name: 'Toby',
        gender: 'male',
        legs: 4,
        hands: 0,
        saying: 'woof-woof!'
    },
    {
        species: 'cat',
        name: 'Mrs. Velasquez',
        gender: 'female',
        legs: 4,
        hands: 0,
        saying: 'meow-meow!'
    },
    {
        species: 'human',
        name: 'Enrico',
        gender: 'male',
        legs: 2,
        hands: 2,
        saying: 'Holla'
    },
    {
        species: 'human',
        name: 'Angel',
        gender: 'female',
        legs: 2,
        hands: 2,
        saying: 'Ehi, buongiorno'
    }
    
];

population.forEach(el => {
    print(`${el['species']}; ${el['name']}; ${el['gender']}; ${el['legs']}; ${el['hands']}; ${el['saying']}`);
})