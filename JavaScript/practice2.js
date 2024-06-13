//Kelvin Weather
//293K temperature is assigned to variale kelvin
const kelvin = 0;
//1 degree celsius = (Kelvin - 273)
const celsius = kelvin - 273;
//To convert celsius to fahrenheit we can use below formula
let fahrenheit = celsius * (9 / 5) + 32;
//The result from the above case is rounded off using '.floor()' method
fahrenheit = Math.floor(fahrenheit);
//prints the converted temperature in kelvin using string interpolation
console.log(`The temperatue is ${fahrenheit} degrees Fahrenheit.`);
//Formula to convert celsius to newton
let newton = celsius * (33 / 100);
//output is rounded off
newton = Math.floor(newton);
//prints the value in Newton
console.log(`The temperature is ${newton} degrees Newton.`)

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
