"use strict"

const obj = {}


console.log(obj)

function getSpeed(speed) {
    console.log(speed)
}

getSpeed(100)


const myName = "John".slice(0, 2)

{
    const person = {
        name: "Princewill",
        age: 40,
        getDetails() {
            console.log(`My name is ${this.name} and I am ${this.age} years old`)
        }
    }
    const person1 = {
        name: "David",
        age: 60,
        getDetails() {
            console.log(`My name is ${this.name} and I am ${this.age} years old`)
        }
    }
    const person2 = {
        name: "Aniel",
        age: 70,
        getDetails() {
            console.log(`My name is ${this.name} and I am ${this.age} years old`)
        }
    }


    person.getDetails()
    person1.getDetails()
    person2.getDetails()
}


///? Constructor function

//? by convention, constructor functions are always capitalized
//? to invoke a constructor function, we use the 'new' keyword


function Person(name, age) {
    //? the this keyword "this={}"
    this.name = name
    this.age = age
    this.getDetails = function() {
        console.log(`My name is ${this.name} and I am ${this.age} years old`)
    }
}

const DavidObj = new Person("David", 60 )
const AnielObj = new Person("Aniel", 70)



console.log(DavidObj)
console.log(AnielObj)

const value = new Number(90)
console.log(value.toFixed(5))


const str  = new String("Hello World")
console.log(str)

const srr = [1, 2, 3, 4, 5].filter(num => num > 2)
console.log(srr)


//https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes
//?https://javascript.info/constructor-new
//? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor`