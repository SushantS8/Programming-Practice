// SCOPE
// Blocks and Scope
const city = 'New York City';

function logCitySkyline(){
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
}

console.log(logCitySkyline());

//Global Scope
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

const callMyNightSky = () => {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy; 
}

console.log(callMyNightSky());

//Block Scope
const logVisibleLightWaves = () => {
    const lightWaves = 'Moonlight';
    console.log(lightWaves); 
  }
  
logVisibleLightWaves(); // prints Moonlight
  
// console.log(lightWaves); // throws a ReferenceError

//Scope Pollution
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';

	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky()); // prints Night Sky: The Moon, Sirius, The Milky Way

console.log(stars); // prints Sirius

//Practice Good Scoping
const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
      let region = 'The Arctic';
    // Add if statement here:
    if (region === 'The Arctic') {
      let lightWaves = 'Northern Lights';
      console.log(lightWaves); // prints Northern Lights
    }  
    console.log(lightWaves);
  };
  
logVisibleLightWaves(); // prints Moonlight