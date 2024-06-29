//Loops
//Repeating Tasks Manually

let vacationSpots = ['Paris', 'Liverpool', 'Tokyo'];

console.log(vacationSpots[0]); // prints Paris
console.log(vacationSpots[1]); // prints Liverpool
console.log(vacationSpots[2]); // prints Tokyo

//The For Loop
for (let count = 5;count <= 10;count++){
    console.log(count);
  }
// prints 5 6 7 8 9 10  

//Looping in Reverse
for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
  }
// prints 3 2 1 0

//Looping through Arrays
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i++){
  console.log('I would love to visit ' + vacationSpots[i]);
}
// prints I would love to visit Bali
//prints I would love to visit Paris
//prints I would love to visit Tulum

/*Using String concatenation
for (let i = 0; i < vacationSpots.length; i++){
     console.log(`I would love to visit ${vacationSpots[i]}.`);
   } */

//Nested Loops
let bobsFollowers = ['Lana', 'Hary', 'Mia', 'Dale'];

let tinasFollowers = ['Emily', 'Lana', 'Mia'];

let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++){
  for(let j = 0; j < tinasFollowers.length; j++){
    if (bobsFollowers[i] === tinasFollowers[j]){
     mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

console.log(mutualFollowers); //prints [ 'Lana', 'Mia' ]


  