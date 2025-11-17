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

//?sorting, searching, transforming arrays

const scores = [300, 450, 150, 600, 750, 200, 900, 1000, 50, 400]

console.log(scores)

//?sort() method sorts array elements in place and returns the sorted array
// scores.sort()

const sortedNumbers = scores.sort((a, b) => b - a )

console.log(sortedNumbers)
console.log(scores)


//?searching an array

const cities = ["Lagos", "Abuja", "Port Harcourt", "Kano", "Ibadan", "Benin", "Enugu", "Aba", "Jos", "Maiduguri", "Zaria", "Ilorin"]

let cityToFind = "New Jersey"
const searchedCity = cities.find((city) => city === cityToFind)
console.log(searchedCity)

if(searchedCity){
    console.log(`We have ${searchedCity} in our list of cities`)
} else {
    console.log("City not found")
}

cityToFind = "Makurdi"
const indexOfCity = cities.findIndex((city) => city === cityToFind)
console.log(indexOfCity)

if(indexOfCity !== -1){
    console.log(`We have ${cities[indexOfCity]} in our list of cities at index ${indexOfCity}`)
} else {
    console.log("City not found")
}

//? reduce method executes a reducer function on each element of the array, resulting in a single output value.

const expenses = [500, 1000, 1500, 2000, 2500, 3000]

const totalExpense = expenses.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(`Total Expense: ${totalExpense}`)

let totalExpense2 = 0

for(let i = 0; i < expenses.length; i++){
    // totalExpense2 = totalExpense2 +  expenses[i]
    totalExpense2 += expenses[i]
}

console.log(`Total Expense using for loop: ${totalExpense2}`)


//? Slice and Splice

const animals = ["Lion", "Tiger", "Elephant", "Giraffe", "Zebra", "Cheetah", "Leopard", "Rhinoceros", "Hippopotamus", "Buffalo"]

const slicedAnimals = animals.slice(4, 5)

console.log(animals)
console.log(slicedAnimals)


const splicedAnimals = animals.splice(2, 4)

console.log(animals)
console.log(splicedAnimals)


//? Joining arrays concat()

const firstArray = [1,2,3,4,5]
const secondArray = [6,7,8,9,10]

const joinedArray = firstArray.concat(secondArray)
const joinedArray2 = [...firstArray, ...secondArray] //?spread operator

console.log(joinedArray)
console.log(joinedArray2)

//? unpacking arrays 
const colors = ["Red", "Green", "Blue", "Yellow", "Purple"]
const firxstColor = colors[0]

//?Array destructuring
const [firstColor, secondColor, thirdColor, ...otherColors] = colors //?rest operator

console.log(firstColor)
console.log(secondColor)
console.log(thirdColor)
console.log(otherColors)