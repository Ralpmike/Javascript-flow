"use strict";
//? Object literal

const object = new Object();

const person = {
  name: "Daniel",
  age: 30,
  occupation: "Driver",
  isAlive: true,
};

//*How to retrieve the value of an object
//? 1. Dot notation
const name = person.name;

console.log(name);

//? 2. Bracket notation

const occupation = person["occupation"];

console.log(occupation);

const carModel = {
  make: "Honda",
  model: "Civic",
  year: 2022,
  color: "Black",
  isAutomatic: true,
  isElectric: false,
};

//* How to modify the value of an object

//? 1. Dot notation
carModel.make = "Camry";

console.log(carModel);

//? 2. Bracket notation
carModel["color"] = "blue";

console.log(carModel);

//* How to retrieve the value of an object by passing dynamic keys
const userInput = "model";

const isAutomatic = carModel[userInput];

console.log(isAutomatic);

//*  How to Delete an object property

//? 1. Dot notation
delete carModel.color;

//? 2. Bracket notation
delete carModel["year"];
console.log(carModel);

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
  greet() {
    console.log(
      `Good evening ${student.name} from ${student.state} and studying at ${student.school}`
    );
  },
};

student.greet();

//? stringified object
const me = {
  name: "Daniel",
  age: 30,
  occupation: "Driver",
};

//? Converting object to string
const studentStringified = JSON.stringify(student);

//?

console.log(studentStringified);

//* Converting string to object
const studentObjectified = JSON.parse(studentStringified);

console.log(studentObjectified);

let myName = "Daniel";

let personName = myName;

personName = "David";

let schoolName = {
  school: "University of Uyo",
};

let mySchoolName = schoolName;

console.log(personName, myName);

mySchoolName.school = "Federal University of Technology Owerri";

console.log(mySchoolName, schoolName);

//? the this keyword
console.log(this);

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
    greet: function () {
      console.log("the this keyword", this);
      return `Good evening ${this.name} from ${this.state} and studying at ${this.school}`;
    },
    //?An arrow does not have the this keyword
    // running: function(){
    //   return () => {
    //     console.log(`${this.name} is running fast`)
    //   }

    // }
    running: () => {
      console.log(`${this.name} is running fast`);
    },
  };

  student.greet();

  const studentCopy = student;

  const geet = studentCopy.greet();

  // const running  = studentCopy.running()
  studentCopy.running();

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
    greet: function () {
      console.log("the this keyword", this);
      return `Good evening ${this.name} from ${this.state} and studying at ${this.school}`;
    },
  };

  //* Destructuring assignment

  const { school, name, age: myage, nationality } = student;

  console.log(name, myage, school, nationality);
}

{
  const student = {
    name: "David mendie",
    age: 25,
    nationality: "Nigerian",
    school: "Unversity of Uyo",
    state: "Akwa Ibom",
    greet: function () {
      console.log("the this keyword", this);
      console.log(
        `Good evening ${this.name} from ${this.state} and studying at ${this.school}`
      );
    },
  };

 student.greet();

  const person1 = {
    name: "Daniel Okpara",
    state: "Kwara State",
    school: "Ahmadu Bello University",
  };
person1.greet = student.greet;

person1.greet();
  // const result = student.greet;
  // result();

  // const student1 = {};
}


console.log(this);


function shootHim(){
  
  console.log(this)
}

shootHim()

{

function arrestHim(){
  console.log(`${this.name} is arrested`)
}




const person1 = {
  name: "David"
}

const person2 = {
  name: "Blessed"
}


person1.arrest = arrestHim;
person2.arrest = arrestHim;


person1.arrest();
person2.arrest();

}

{
// let myname = "David";

// let hisName = myname

// myName = "Blessed"

// console.log(myName)
// console.log(hisName);


let myName = {name: "David"}
let hisName = myName

myName.name = "Blessed"

console.log(myName.name)
console.log(hisName.name)

console.log(myName === hisName);

const object1 = {name: "David"}
const object2 = {name: "David"}


console.log(object1 === object2);
}

{
//?creating separate object from an object
//?spread operator
const inventory = {
  banana: 5,
  apple: 10,
  orange: 3,
  pear: 8,
  kiwi: 9,
  grape: 12,
};

const inventoryCopy = {...inventory}
inventory.orange = 23

console.log(inventoryCopy, inventory)


//?Object.assign(dist, source)

const profile = {
  name: "David",
  age: 30,
  occupation: "Driver",
  isAlive: true,
  address: {
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
  }
};


// const profileCopy = Object.assign({}, profile);
// let profileCopy = {}
// Object.assign(profileCopy, profile)
// profile.name = "Samuel"
// profile.address.city = "Abuja"

// console.log(profileCopy, profile)

//? deep cloning

const profileCopy = structuredClone(profile);


profile.name = "Samuel"
profile.address.city = "Abuja"
profile.address.state = "Abuja"

console.log("profileCopy",profileCopy)
console.log("profile", profile);






}



{
  //*Assignment
  //*Create a new object from an existing object using a for loop
  const profile = {
    name: "David",
    age: 30,
    occupation: "Driver",
    isAlive: true,
  };
}