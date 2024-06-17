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


