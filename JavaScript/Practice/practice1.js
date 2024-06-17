console.log(23); //Prints 23

//Prints out 5 to the console
console.log(5);

//Prints out the string inside the quotation
console.log('Location of Codecademy headquarters: 575 Broadway, New York City');
console.log(40);

//Data Types
console.log('JavaScript'); //prints JavaScript
console.log(2011); //prints 2011
console.log('Woohoo! I love to code! #codecademy'); //prints the text inside the quotation
console.log(20.49); //prints 20.49

//Arithmetic Operators
console.log(23 + 3.5); //addition operator
console.log(2024 - 1969); //subtraction operator
console.log(65 / 240); //division operator
console.log(0.2708 * 100); //multiplication operator    

//String Concatenation
console.log('Hello' + 'World'); //prints HelloWorld (no space between two strings)
console.log('Hello' + ' ' + 'World') //prints Hello World (space between two strings)

//Properties
console.log('Teaching the world how to code'.length); //Prints 30

//Methods
console.log('Codecademy'.toUpperCase()); //prints to uppercase
console.log('    Remove whitespace   '.trim()); //Removes the leading and trailing white space from a string.

//Built-in Objects
console.log(Math.random() * 100); //.random() generates a number between 0 to 1 but multiplying it with 100 makes it between 0 to 100
console.log(Math.floor(Math.random() * 100)); //.floor() Returns the greatest integer less than or equal to its numeric argument
console.log(Math.ceil(43.8)); //.ceil() Returns the smallest integer greater than or equal to its numeric argument
console.log(Number.isInteger(2017)); //.isInteger() Returns true if the value passed is an integer, false otherwise.

//Create a Variable: var
var favoriteFood = 'pizza'; //A string named pizza is assigned to the variable name favoriteFood.
var numOfSlices = 8; //A number 8 is assigned to the variable name numOfSlices.
console.log(favoriteFood); //prints out pizza
console.log(numOfSlices); //prints 8

//Create a Variable: let : It allows us to re-assign the value in the same variable
let changeMe = true; //A Boolean value true is assigned to the variable name changeMe
changeMe = false; //A Boolean value false is re-assigned to the variable name changeMe
console.log(changeMe); //prints false

//Create a Variable: const :It does not alloe to re-assign the value in the same variable
const entree = 'Enchiladas'; //A string Enchiladas is assigned to the variable name entree
console.log(entree); //prints Enchiladas
//These above two returns errors
//entree = 'Tacos' 
//const testing;

//Mathematical Assignment Operators
let levelUp = 10; //10 is assigned to variable levelUp
levelUp += 5; //increases the value of levelUp by 5

let powerLevel = 9001; //9001 is assigned to variable powerLevel
powerLevel -= 100; //decreases the value of powerLevel by 100

let multiplyMe = 32; //32 is assigned to variable multiplyMe
multiplyMe *= 11; //multiplies the value of multiplyMe by 11

let quarterMe = 1152; //1152 is assigned to variable quarterMe
quarterMe /= 4; //divides the value of quarterMe by 4

console.log('The value of levelUp:', levelUp); //prints 15
console.log('The value of powerLevel:', powerLevel); //prints 8901 
console.log('The value of multiplyMe:', multiplyMe); //prints 352
console.log('The value of quarterMe:', quarterMe); //prints 288

//The Increment and Decrement Operator
let gainedDollar = 3; //3 is assigned to gainedDollar
gainedDollar ++; //increases the value of gainedDollar by 1
console.log(gainedDollar); //prints 4

let lostDollar = 50; //50 is assigned to lostDollar
lostDollar --; //decreases the value of lostDollarr by 1
console.log(lostDollar); //prints 49

//String Concatenation with Variables
let favoriteAnimal = 'Dog'; //A string 'Dog' is assigned to variable favoriteAnimal
console.log('My favorite animal: ' + favoriteAnimal); //prints My favorite animal: Dog

//String Interpolation :template literals use backticks ` and ${} to interpolate values into a string.
let myName = 'Sushant'; //A string 'Sushant' is assigned to variable myName
let myCity = 'Paris'; //A string 'Paris' is assigned to variable myCity
console.log(`My name is ${myName}. My favorite city is ${myCity}.`); //prints My name is Sushant. My favorite city is Paris.

//typeof operator :It returns the datatypes of the variables
let newVariable = 'Playing around with typeof.'; //A string is assigned to newVariable
console.log(typeof newVariable); //prints string
newVariable = 1; //1 is re-assigned to newvariable
console.log(typeof newVariable); //prints number

