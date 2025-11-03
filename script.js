// var
// let
// const
// ?
/**
 *
 *
 * mn schjds cs
 *
 * snc dsjcksncslc'
 * 'csdcsc
 */

// specifiers
//?Primitive data types
//? Non-primitive data types
let name = "Daniel"; //String
let age = 60; //Number
let isAlive = true; //boolean
let height = null; //null
let weight = undefined; //undefined
let float = 3.14; //float

let isMarried;

console.log("ismarried", isMarried);
let school = "TopFaith";
school = "G.S.S.I";

console.log(typeof school);

// const ISMALE;
//?
// const PI = 3.142

// PI = 3

// console.log(PI)
// const perimeter = 2 * PI

// ?Math Operators
// ? +, -, *, /, %, **,

//? addition

let a = 10;
let b = 20;
let result = a + b;

console.log(result);

//? Multiplication
let o = 6;
let h = 4;

let res = o * h;

console.log(res);

//? Subtraction
let c = 20;
let d = 10;

let res1 = c - d;

console.log(res1);

//? Division
let e = 20;
let f = 10;

let res2 = e / f;

console.log(res2);

//? Modulus
let g = 5;
let z = 10;

let res3 = g % h;

console.log(res3);

//? Exponentiation
let x = 2;
let y = 3;

let res4 = x ** y;

console.log(res4);

//?Perimeter of a circle

const PI = 3.142;
let radius = 10;

const Perimter = 2 * PI * radius;

console.log(typeof Perimter);

/**
 * Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.

 * 
 */

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMI1John = massJohn / heightJohn ** 2;

console.log("BMIMark", BMIMark, "BMI1John", BMI1John);

const markHigherBMI = BMIMark > BMI1John;

console.log(markHigherBMI);

console.log(2 !== "2");

//?Comparison Operators

//?Greater then >

console.log(1 > 4);
//?Less then <

console.log(1 < 4);

//?Greater than or equal to >=

console.log(5 >= 4);

//?Less than or equal to <=

console.log(9 <= 9);

//?Equal to ==

console.log(1 == "1");

//?Not equal to !=

console.log(2 != "2");

//? Strict equal to ===

console.log(1 === "1");

//? Strict not equal to !==

console.log(2 !== "2");

//?Logical Operators
//? AND &&
//? OR ||
//? NOT !

//?A program to check that a person is eligible to vote

const nationality = "Nigerian";
let personAge = 17;

//?AND OPERATOR ||
// const isEligible = (personAge >= 18) && ( nationality === "Nigerian")

//?OR OPERATOR ||
const isEligible = personAge >= 18 || nationality === "Nigerian";
console.log(isEligible);

console.log(age >= 18 && age <= 65); //inclusive
console.log(age > 18 && age < 65); //exclusive

//nullish coalescing operator
//? ??

const unitPerCost = null;

const amount = unitPerCost ?? 0;

console.log(amount);

//?conditional statements
//? if, else if, else

//block scope

// if(expression){
//what should happen if the condition is true
// }

//?Write code to check if a number is between 10 and 20 (inclusive)

const number = 30;

if (number >= 10 && number <= 20) {
  console.log("The number is between 10 and 20");
} else if (number >= 20 && number < 30) {
  console.log("The number is between 20 and 30");
} else {
  console.log("The number is not between the range specified");
}

/**
 * student grade
 *
 * 0-39 - F
 * 40-49 - D
 * 50-59 - C
 * 60-69 - B
 * 70-100 - A
 *
 */
const STUDENT_SCORE = 110;

if (STUDENT_SCORE >= 0 && STUDENT_SCORE <= 39) {
  console.log("F");
} else if (STUDENT_SCORE >= 40 && STUDENT_SCORE <= 49) {
  console.log("D");
} else if (STUDENT_SCORE >= 50 && STUDENT_SCORE <= 59) {
  console.log("C");
} else if (STUDENT_SCORE >= 60 && STUDENT_SCORE <= 69) {
  console.log("B");
} else if (STUDENT_SCORE >= 70 && STUDENT_SCORE <= 100) {
  console.log("A");
} else {
  console.log("Invalid score");
}

//switch statement

let w = 1;

w += 1; // w = w + 1;
// w -= 1 // w = w - 1
w /= 1; // w = w / 1
w *= 1; // w = w * 1

// console.log(++w); // pre-increment value is 2
console.log(w++); //post-increment value is 1

// for (Initialization; Condition; Increment) {
//   //what should happen
// }

// let loopResult = 0 ;
// let t = 0;
// const condition = t <= 5;

// for(; condition; ++y){
//   // debugger;
//   console.log(y);
//   loopResult = loopResult + y
// }
// console.log("loopResult", loopResult);

/**
 * y = 0, y = 0, y =1
 * y = 1, y = 1, y =2
 * y= 2, y = 2, y= 3
 * y= 3, y = 3, y = 4
 * y= 4, y = 4, y = 5
 * y = 5, y  = 5, y = 6
 * y = 6, y=6
 */

// ?CLASS WORK:
//*write a program using for loop to print numbers from 1 to 10

//? The while loop

let n = 3;
while (n > 0) {
  console.log(n);
  n--;
}
//? convert string to number using the + operator/ unary operator
// const userInput = +prompt("Enter a number", "");
//? An explicit type conversion of a string to a number

// console.log(userInput);
// console.log(typeof userInput);

// let whileTrue = true;

// while (whileTrue) {
//   let userInput = Number(prompt("Enter an even number", ""));
//   if (userInput === 0) {
//     continue;
//   }

//   if (userInput % 2 === 0) {
//     console.log("You have entered an even number", userInput);
//     alert("You have entered an even number", userInput);

//     whileTrue = false;
//   }

//   continue;
// }

// let sum = 12;

// if (userInput < 1 || userInput > 20) {
//   alert("You have guessed out of range");
// }

// while (userInput >= 1 && userInput <= 20) {
//   if ((userInput = sum)) {
//     alert("You have guessed the correct number");

//     break;
//   }

// sum = sum + userInput;
// userInput--;
// }

// console.log(sum);

//?Do while loop
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);

//? tyoes of scopes
//? Global scope
//? Local scope
//? Block scope
//? Function scope

//? ?block scope
// let m = 1;
// {
//   const i = 2;
//   // var c = 3;
//   //block scopes
// }

// if(a === 10){
//   console.log("m", m)
// }

//?TDZ = temporal dead zone
// try {

// } catch (error) {

// }

let xyz = 10;
console.log(xyz);

//?

//? function declaration

function calculate(a, b, mathOperation) {
  // ? code to execute

  if ("add".includes(mathOperation)) {
    let sum = a + b;
    console.log("sum", sum);
    return sum;
  } else if ("subtract".includes(mathOperation)) {
    let difference = a - b;
    console.log("difference", difference);
    return difference;
  } else if ("multiply".includes(mathOperation)) {
    let product = a * b;
    console.log("product", product);
    return product;
  } else {
    console.log("Invalid math operation");
  }

  //? the return keyword
}
greetMe();

//? function without arguments nor parameters
function greetMe() {
  console.log("Good morning, Boss");
}

// greetMe()
// greetMe()
// greetMe()

//? We need to invoke or call the function
//?parameters
//? arguments
calculate(10, 14, "sub");

const returnResult = calculate(10, 14, "multi");

console.log("returnResult", returnResult);

console.log("samuel".startsWith("el"));

//?hoisting -- Global - creation phase and  excution phase
//? scope chain
//?TDZ

console.log("developer", developer);

var developer = "Ukpono";

console.log("developer", developer);

/**
 * GEC
 * CP:
 * this
 * developer= undefined
 *
 * EP:
 * console.log("developer", undefined)
 * var developer = "Ukpono"
 * console.log("developer", "Ukpono")
 *
 *
 *
 *
 */

{
  let AKWPOLY = "David";
  console.log("developer", developer);

  var developer = "Ukpono";

  console.log("developer", developer);
  console.log("AKWPOLY", AKWPOLY);
}

let AKWPOLY = "Emediong";
console.log("AKWPOLY", AKWPOLY);

let UCL = "Real Madrid";

function getUCLTeam() {
  console.log("UCL", UCL);
}

getUCLTeam();

let playerName = "Mbappe";
console.log("playerName", playerName);

//?closure
{
  //?FEC
  function makeCounter() {
    let count = 0;

    return function () {
      count++;
      return count;
    };
  }

  const result = makeCounter();

  const count = result();
  const count1 = result();
  const count2 = result();

  console.log("count", count);
  console.log("count1", count1);
  console.log("count2", count2);
}

//? function expression

const eatMe = function () {
  console.log("I am eating");
};
eatMe();

//?arrow function
{
  //? double line you insert the curly braces
  const eatMe = () => {
    const name = "Daniel";
    console.log("I am eating");
  };
  eatMe();

  //? single line you do not insert the curly braces
  const biteMe = () => console.log("I am biting");
  biteMe();

}

{
  function squareMe(number) {
    return function (index) {
      return number ** index;
    };
  }

  const square = squareMe(4);

  const result = square(4);
  console.log("result", result);
}
// var occupation = "Doctor";

console.log(this);

//?person object

const person = {
  name: "Daniel",
  age: 30,
  occupation: "Driver",
  isAlive: true,
  profile: () => {
    console.log(this.name, this.age, this.isAlive, this.occupation);
  }
};

person.profile();


{

var me = "Okocha";

function readMe(){
  var me = "Daniel";

  console.log(me);  
}

var she = "Ukpono";

// console.log(me);


readMe()

}

console.log(she);



{


function makeCounter() {
  let count = 0;
  return {
    increment() {
    count++;
    console.log(count);
    return count;
  },
  decrement() {
    count--;
    return count;
  },
  getCount() {
    return count;
  }
}

}


const counter = makeCounter();


counter.increment();
}