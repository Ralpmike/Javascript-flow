//?Arrays

const arr = [2, 3, "Aniel", 4, false, undefined, "samuel", "emediong"]

//?Retrieving values from an array
console.log(arr[arr.length - 1])

// console.log(arr)÷

//?Adding an item to an array

//1? Adding an item to the of an array
arr.push("daniel")




//?Adding an item to the beginning of an array
arr.unshift("David")

console.log(arr)


//?Removing an item from an array

//1? Removing an item from the end of an array
arr.pop()

//2? Removing an item from the beginning of an array
arr.shift()

console.log(arr)



//?Modifying an array

arr[1] = "Raphael"

console.log(arr);


const carModels = ["RollsRoyce", "Lamborghini", "Ferrari", "Mercedez Benz", "BWM", "Bentley", "Toyota", "Audi", "Lexus"]


//?includes

const model = "toyota"


if (carModels.includes(model)) {
    console.log("We have " + model);

} else {
    console.log("We do not have this model: " + model)
}

//? indexOf returns the index of an item in an array
console.log(carModels.indexOf("Mercedez BenZ"));
console.log(carModels)


carModels.length = 0

console.log(carModels)

// carModels[0]
// carModels[1]
// carModels[2]
// carModels[3]
// carModels[4]
// carModels[5]
// carModels[6]
// carModels[7]
// carModels[8]

//? Iterationg through an array

const fruits = ["Mango", "Banana", "Orange", "Pineapple", "Grapes", "Apple", "Watermelon", "Kiwi", "Strawberry", "Blueberry", "Guava", "Papaya", "Peach", "Pear", "Plum", "Raspberry", "Cranberry", "Coconut", "Lemon", "Limes"]

console.log(fruits.length)

for(let index = 0; index < fruits.length; index++){
    if(fruits[index] === "Grapes"){
        //?contatenation
        // fruits[index] = fruits[index] + " (My favorite fruit)"
        //?Template literals
        fruits[index] = `${fruits[index]} ✅`
    }
    console.log(fruits[index]);

} 


const popularFootballer = ["Harzard", "Messi", "Neymar", "Mbappe", "Osimhen", "Kanu", "Boniface", "Saka", "Ekong"]

//?array.forEach(callbackFn)

const result1 = popularFootballer.forEach(function(footballer, index){
        console.log(`I love watching ${footballer} ${index}`)
})

console.log(result1)

//?Array.map(callbackFn)

const pets = ["Dog", "Cat", "Owl", "Snake", "Pig", "Fowl", "Rabbit", "Duck", "Parrot", "Goat", "Monkey", "Lamb", "Guinea Pig", ]

const myPets = pets.map((pet, index) => {
    console.log(pet)
    return `${pet} ${index}`
}

).filter((item)=> item.includes("at"))

console.log(pets)
console.log(myPets)


//?Array.filter(TestFunction)

const numbers = [1,2,4,5,6,7,8,9,10,11]

const evenNumbers = numbers.filter(function(number){
    if(number % 2  === 0){
        console.log(`${number} is even`)
        return number
    }

    console.log(`${number} is not even`)
})

console.log(evenNumbers)
