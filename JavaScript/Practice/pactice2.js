//CONDITIONAL STATEMENTS
//If Statement

let sale = true; // A Boolean value 'true' is assigned to the variable sale
// Here if the condition is true then it prints log to the console 
if(sale){
  console.log('Time to buy!');
}

sale = false; // A Boolean value 'false' is re-assigned to the variable sale
// Here if the condition is falsse then it does not print log to the console 
if(sale){
  console.log('Time to buy!');
}

//If...Else Statements
//Prints 'Time to buy!' if true otherwise prints 'Time to wait for a sale.' 
if(sale) {
  console.log('Time to buy!');
}
else{
  console.log('Time to wait for a sale.');
}

//Comparison Operators
let hungerLevel = 7; // 7 is assigned to variable hungerLevel
// If hungerlevel > 7 prints 'We can eat later!' otherwise 'Time to eat!'
if(hungerLevel > 7){
  console.log('Time to eat!');
}
else{
  console.log('We can eat later!');
}

//Logical Operators
let mood = 'sleepy'; // A string 'sleepy' is assigned to the variable mood
let tirednessLevel = 6; // 6 is assigned to the variable tirednessLevel

// '&&' -> AND operator
// If both the conditions in the if statement evaluates to True 'time to sleep' is printed otherwise 'not bed time yet' is printed
if(mood === 'sleepy' && tirednessLevel > 8){
  console.log('time to sleep');
}
else{
  console.log('not bed time yet');
}

// '||' -> OR operator
// If either of the conditions in the if statement evaluates to True 'time to sleep' is printed otherwise 'not bed time yet' is printed
if(mood === 'sleepy' || tirednessLevel > 8){
    console.log('time to sleep');
  }
  else{
    console.log('not bed time yet');
  }

// '!' -> negation operator reverse or negates the Boolean value
let excited = true;
console.log(!excited); // Prints false
  
let sleepy = false;
console.log(!sleepy); // Prints true

//Truthy and Falsy
let wordCount = 4; // A truthy value is assigned to wordCount

// Since the variable wordCount has truthy value so the code block in the if statement will run
if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = ''; // A falsely value is assigned to favoritePhrase

// Since the variable favoritePhrase has falsy value so the code block in the else statement will run
if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}
  
//Truthy and Falsy Assignment
let tool = ''; // A falsey value is assigned to tool (i.e. '')

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`); // prints 'The pen is mightier than the sword.'

tool = 'marker'; // A string 'marker' is re-assigned to the variable tool
writingUtensil = tool || 'pen';
console.log(`The ${writingUtensil} is mightier than the sword.`); // prints 'The marker is mightier than the sword.'

//Ternary Operator
let isLocked = false; // A Boolean value false is assigned to variable isLocked

//The firstExpression will execute if condition is truthy. If condition is falsy then the secondExpression will execute.
isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');


let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');


let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ?  console.log('I love that!') : console.log("I don't love that!");

//Else If Statements
let season = 'summer';

Prashant Shrestha
// if/else if/else statements are read from top to bottom, so the first condition that evaluates to true from the top to bottom is the block that gets executed
// 3rd else if statement evaluates to true so the code inside the first else if statement is executed
if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} 
else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
}
else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
}
else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
}

//The switch keyword
let athleteFinalPosition = 'first place';

// If the expression’s value matches the value of the case then the string in that case is logged to the console
// If the expression’s value does not equal any value of the cases, then the string in default is logged to the console
switch(athleteFinalPosition){
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;  
}