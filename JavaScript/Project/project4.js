//Race Day
let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let runnerAge = 18;

if(registeredEarly && runnerAge > 18){
  raceNumber += 1000;
} 

if(registeredEarly && runnerAge > 18){
  console.log(`Race starts at 9:30 am and your race number is: ${raceNumber}.`);
}
else if (runnerAge > 18 && !registeredEarly){
  console.log(`Race starts at 11:00 am and your race number is: ${raceNumber}.`);
}
else if (runnerAge < 18){
  console.log(`Race starts at 12:30 pm and your race number is: ${raceNumber}.`);
}
else{
  console.log('Please contact to registration desk, Thank you!');
}