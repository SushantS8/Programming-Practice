// ARRAYS
// Create an Array

const hobbies = ['Playing and Watching Football' , 'Watching Movies', 'Learn to code'];

console.log(hobbies);// prints [ 'Playing and Watching Football', 'Watching Movies', 'Learn to code' ]

//Accessing Elements
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

let listItem = famousSayings[0];

console.log(listItem); //prints Fortune favors the brave.

console.log(famousSayings[2]); // prints Where there is love there is life.

console.log(famousSayings[3]); // prints undefined

//Update Elements
let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';

console.log(groceryList); // prints [ 'bread', 'avocados', 'milk' ]

// Arrays with let and const
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

condiments = ['Mayo'];

console.log(condiments); // prints [ 'Mayo' ] 

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

utensils[3] = 'Spoon';

console.log(utensils); // prints [ 'Fork', 'Knife', 'Chopsticks', 'Spoon' ]

condiments[0] = 'Mayo';

console.log(condiments); // prints [ 'Mayo' ]

// The .length property
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length); // prints 3

// The .push() Method
const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('make your bed', 'finish your meal');

console.log(chores); // prints [ 'wash dishes', 'do laundry', 'take out trash', 'make your bed', 'finish your meal' ]

// The .pop() Method
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores.pop();

console.log(chores); // prints [ 'wash dishes', 'do laundry', 'take out trash', 'cook dinner' ]

// More Array Methods
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();

groceryList.unshift('popcorn');

console.log(groceryList); // prints [ 'popcorn',
'bananas',
'coffee beans',
'brown rice',
'pasta',
'coconut oil',
'plantains' ]

console.log(groceryList.slice(1,4)); // prints [ 'bananas', 'coffee beans', 'brown rice' ]

console.log(groceryList); // prints [ 'popcorn',
'bananas',
'coffee beans',
'brown rice',
'pasta',
'coconut oil',
'plantains' ]

const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex); // prints 4

//Arrays and Functions
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept); // prints [ 'arrays', 'can', 'be', 'MUTATED' ]

const removeElement = (newArr) => {
  newArr.pop();
}

removeElement(concept);

console.log(concept); // prints [ 'arrays', 'can', 'be' ]

// Nested Arrays
const numberClusters = [[1,2], [3,4], [5,6]];

const target = numberClusters[2][1];

console.log(target); // prints 6

// Use the .length property to find the last element of an array.
const colors = ['red', 'blue', 'green'];

const arr = colors[colors.length - 1];

console.log(arr); // prints green

//Take all the elements in an array and make a string.
const ary = ['Hello', 'World'];

const joined = ary.join(' '); 

console.log(joined); // prints Hello World

// Find the return value of calling .push() on an array.
const pushed = colors.push('white');

console.log(colors); // prints [ 'red', 'blue', 'green', 'white' ]

console.log(pushed); // print 4









