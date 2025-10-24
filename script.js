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
// w = w + 1;

console.log(++w); // pre-increment value is 2
console.log(w++); //post-increment value is 1

// for (Initialization; Condition; Increment) {
//   //what should happen
// }




for(let y = 0;  y <= 5; y++){
  console.log(y);
}

/**
 * y = 0, y = 0, y =1
 * y = 1, y = 1, y =2
 * y= 2, y = 2, y= 3
 * y= 3, y = 3, y = 4
 * y= 4, y = 4, y = 5
 * y = 5, y  = 5, y = 6
 * y = 6, y=6
 */