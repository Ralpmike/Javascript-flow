//?Arrays

const arr = [2,3,"Aniel", 4, false, undefined, "samuel", "emediong"]

//?Retrieving values from an array
console.log(arr[arr.length-1])

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


if(carModels.includes(model)){
    console.log("We have " + model );

}else{
    console.log("We do not have this model: " + model)
}


console.log(carModels.indexOf("Mercedez BenZ"));
console.log(carModels)


carModels.length = 0

console.log(carModels)