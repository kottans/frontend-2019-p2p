const cat = {
    appearance: 'cat',
    name: 'Garfield',
    legs: 4,
    hands: 0,
    gender: 'male',
    shout: 'I love lazagna!',
};
const catWoman = {
    appearance: 'cat-woman',
    name: 'Selina',
    legs: 2,
    hands: 2,
    gender: 'female',
    shout: cat['shout']
};
const dog = {
    appearance: 'dog',
    name: 'Jerry',
    gender: 'male',
    legs: 4,
    hands: 0,
    shout: 'Woof!'
};
const human = {
    appearance: 'human',
    name: 'Sansa',
    gender: 'female',
    legs: 2,
    hands: 2,
    shout: 'Winter is coming'
};

human.friends = [ dog.name,'Rob', cat.name ];
dog.friends = [ human.name, 'Snoop Dog' ];
catWoman.friends = [ human.name, cat.name ];
cat.friends = [ human.name, catWoman.name] ;


[ cat, dog, human,catWoman ].forEach(obj => {
    print(  [
        `Hi, my name is <strong>${obj['name']}</strong>.`,
        `I am <em>${obj['gender']} ${obj['appearance']}</em>.`,
        `I have ${obj['legs']} legs and ${obj['hands']} hands.`,
        `My friends are ${obj['friends'].join(', ')}.`,
        `And you know what? ${obj['shout']}`].join(''),'div');
});
