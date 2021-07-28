const inhabitans = [
  {
    species: "dog",
    name: "Toy",
    gender: "male",
    tail: 1,
    legs: 4,
    hands: 0,
    friends: "no one",
    say: "woof-woof",
  },
  {
    species: "cat",
    name: "Vasya",
    gender: "male",
    tail: 1,
    legs: 4,
    hands: 0,
    friends: "woman Jane",
    say: "moew-moew",
  },
  {
    species: "man",
    name: "Alex",
    gender: "male",
    tail: 0,
    legs: 2,
    hands: 2,
    friends: "dog Toy",
    say: "Jane, what are your plans for the weekend?",
  },
  {
    species: "woman",
    name: "Jane",
    gender: "female",
    tail: 0,
    legs: 2,
    hands: 2,
    friends: "cat Vasya",
    say: "Alex, i wanted to spend the weekend at home.",
  },
  {
    species: "bird",
    name: "Coco",
    gender: "male",
    tail: 1,
    legs: 2,
    hands: 0,
    friends: "woman Jane",
    say: "Cr-crrrr, cr-crrrrr",
  },
];

inhabitans.forEach(printResult);

function printResult(inhabitan) {
  print(
    ["species", "name", "gender", "legs", "hands", "tail", "friends", "say"]
      .map((propertyName) => inhabitan[propertyName])
      .join("; ")
  );
}

