// "use strict";
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

//? Object methods

const student = {
  name: "David mendie",
  age: 25,
  nationality: "Nigerian",
  school: "Unversity of Uyo",
  state: "Akwa Ibom",
  // greet: function() {
  //   console.log("Good evening")
  // }
  greet(){
    console.log(`Good evening ${student.name} from ${student.state} and studying at ${student.school}`)
  }
}

student.greet()

//? stringified object
const me = {
  "name": "Daniel",
  "age": 30,
  "occupation": "Driver",
}

//? Converting object to string
const studentStringified = JSON.stringify(student)


//?

console.log(studentStringified)


//* Converting string to object
const studentObjectified = JSON.parse(studentStringified)

console.log(studentObjectified);




let myName = "Daniel"


let personName = myName

personName = "David"


let schoolName = {
  school: "University of Uyo",
}

let mySchoolName = schoolName

console.log(personName, myName)

mySchoolName.school = "Federal University of Technology Owerri"

console.log(mySchoolName, schoolName)


//? the this keyword
console.log(this)



{

const student = {
  name: "David mendie",
  age: 25,
  nationality: "Nigerian",
  school: "Unversity of Uyo",
  state: "Akwa Ibom",
  // greet: function() {
  //   console.log("Good evening")
  // }
  greet: function(){
    console.log("the this keyword", this)
    return `Good evening ${this.name} from ${this.state} and studying at ${this.school}`
  },
//?An arrow does not have the this keyword
  // running: function(){
  //   return () => {
  //     console.log(`${this.name} is running fast`)
  //   }

  // }
  running:  () => {
      console.log(`${this.name} is running fast`)
    }

  }
  



student.greet()




const studentCopy = student

const geet = studentCopy.greet()

// const running  = studentCopy.running()
studentCopy.running()

// running()

console.log(geet);




}

//?Object destructuring

{


const student = {
  name: "David mendie",
  age: 25,
  nationality: "Nigerian",
  school: "Unversity of Uyo",
  state: "Akwa Ibom",
  greet: function(){
    console.log("the this keyword", this)
    return `Good evening ${this.name} from ${this.state} and studying at ${this.school}`
  },
}


//* Destructuring assignment

const {school, name, age:myage, nationality, } = student

console.log(name, myage, school, nationality);





}