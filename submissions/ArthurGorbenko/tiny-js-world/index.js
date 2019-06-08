/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here

const dog = {
    type : "dog",
    name : "Barley",
    gender : "male",
    legs : 4,
    hasTail : true,
    saying : "gav-gav"
}

const cat = {
    type : "cat",
    name : "Rude",
    gender : "male",
    legs : 4,
    hasTail : true,
    saying : "Kottans are the best!"
}

const man = {
    type : "human",
    name : "Alex",
    gender : "male",
    legs : 2,
    hasTail : false,
    saying : "I want to start learning frontend development!"
}

const woman = {
    type : "human",
    name : "Meggy",
    gender : "female",
    legs : 2,
    hasTail : false,
    saying : "Hello,Alex."
}

const womanCat = {
    type : "human-cat",
    name : "woman Cat",
    gender : "female",
    legs : 2,
    hasTail : true,
    saying : "Meow,Kottans are the best of the best!"
}

function objectsToString (obj){
    let objectAsString = "";
    for (prop in obj){
        if (prop === "saying"){
            objectAsString +=prop + " : \"" + obj[prop]+ "\"";
            break;
        } else if (prop === "hasTail" || prop === "legs"){
        objectAsString += prop + " : " + obj[prop] + ", ";
        continue;
        }
        objectAsString += obj[prop] + ", ";
    }
    return objectAsString + ";";
}
print(objectsToString(dog));
print(objectsToString(cat));
print(objectsToString(man));
print(objectsToString(woman));
print(objectsToString(womanCat));


// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */


