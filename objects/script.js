//? Object literal

const object = new Object();

const person = {
  name: "Daniel",
  age: 30,
  occupation: "Driver",
  isAlive: true,
}

//*How to retrieve the value of an object
//? 1. Dot notation
const name = person.name

console.log(name)

//? 2. Bracket notation

const occupation = person["occupation"]

console.log(occupation)


const carModel = {
  make: "Honda",
  model: "Civic",
  year: 2022,
  color: "Black",
  isAutomatic: true,
  isElectric: false,
}


//* How to modify the value of an object

//? 1. Dot notation
carModel.make = "Camry"

console.log(carModel)

//? 2. Bracket notation
carModel["color"] = "blue"

console.log(carModel)

//* How to retrieve the value of an object by passing dynamic keys
const userInput = "model";

const isAutomatic = carModel[userInput];

console.log(isAutomatic);

//*  How to Delete an object property

//? 1. Dot notation
delete carModel.color  

//? 2. Bracket notation
delete carModel["year"]
console.log(carModel)


//* How to add a new object property

//? 1. Dot notation
carModel.year = 2025;

//? 2. Bracket notation
carModel["color"] = "Pink";

console.log(carModel);