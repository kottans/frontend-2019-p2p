let cat = {
    appearance: "cat",
    name: "Garfield",
    legs: 4,
    hands: 0,
    gender: "male",
    shout: "I love lazagna!",
    friends:['Selina', 'Jeremy']
};
let cat_woman = {
    appearance:"cat-woman",
    name:"Selina",
    legs:2,
    hands:2,
    gender: "female",
    shout:cat['shout'],
    friends: [cat['name'],'Sansa']
};
let dog = {
    appearance:"dog",
    name: "Jerry",
    gender: "male",
    legs: 4,
    hands: 0,
    shout: "Woof!",
    friends: ["Sansa","Snoop Dog", "Balto", "Goofy"]
};
let human = {
    appearance:"human",
    name:"Sansa",
    gender:"female",
    legs:2,
    hands:2,
    shout:"Winter is coming",
    friends:[dog['name'], "Robb", "Arya", "Bran", "Rickon"]
};

let arr = [cat, dog, human,cat_woman];

arr.forEach(obj => {
    let friends = obj['friends'].join(', ');
    print(`Hi, my name is <strong>${obj['name']}</strong>. I am <em>${obj['gender']} ${obj['appearance']}</em>.I have ${obj['legs']} legs and ${obj['hands']} hands. My friends are ${friends}. And you know what? ${obj['shout']}`);
})
