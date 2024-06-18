//Converting human years to Dog Years
//My age is assigned to the variable myAge
const myAge = 23;
//A value of 2 is assigned to the variable earlyYears
let earlyYears = 2;
earlyYears = earlyYears * 10.5; // You can write like this (earlyYears *= 10.5;) also
let laterYears = myAge - 2; //The value of myAge is decreased by 2 and assigned to the variable laterYears
laterYears *= 4; // The value of laterYears is multiplied by 4 and assigned to laterYears
console.log(earlyYears);
console.log(laterYears);
myAgeInDogYears = earlyYears + laterYears; //The value of earlyYears and laterYears are added and assigned to the variable myAgeInDogYears
let myName = 'SUSHANT'.toLowerCase();//The name written in uppercase is converted to lowercase by '.toLowerCase()' method
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`) //prints the result using string interpolation
