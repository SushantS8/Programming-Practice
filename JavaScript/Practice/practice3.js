// Functions
// Function Declarations

function getReminder() {
    console.log('Water the plants.'); 
  };
  
function greetInSpanish() {
    console.log('Buenas tardes.');
  };

//Calling a Function
function sayThanks() {
    console.log('Thank you for your purchase! We appreciate your business.');
  };
  
sayThanks(); //function call
sayThanks();
sayThanks();

//Parameters and Arguments
//name is passed as parameters in the function sayThanks()
function sayThanks(name) {
    console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
  };
  
sayThanks('Cole'); // calling the function sayThanks() by passing 'Cole' as a parameter

//Default Parameters
//default values are passed in item1, item2 and item3 in the parameters of the function makeShoppingList() 
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  };
  
makeShoppingList();

//Return
function monitorCount(rows, columns) {
  return rows * columns; 
};

const numOfMonitors = monitorCount(5, 4);

console.log(numOfMonitors);  //prints 20

//Helper Functions
function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost); // prints 4000

//Function Expressions
const plantNeedsWater = function(day) {
  if (day == 'Wednesday'){
    return true;
  }
  else{
    return false;
  }
};

plantNeedsWater('Tuesday');

console.log(plantNeedsWater('Tuesday'));

//Arrow Functions
/*const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

//Concise Body Arrow Functions
const plantNeedsWater = day => day === 'Wednesday' ? true : false;