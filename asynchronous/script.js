"use strict"

// synchronous javascript
const myName = "David Ekong"

const displayName = `Hello ${myName}`

console.log(displayName)

// blocking code
const MAX_PRIME = 1000000;

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}

const random = (max) => Math.floor(Math.random() * max);

function generatePrimes(quota) {
  const primes = [];
  while (primes.length < quota) {
    const candidate = random(MAX_PRIME);
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }
  return primes;
}

const quota = document.querySelector("#quota");
const output = document.querySelector("#output");

document.querySelector("#generate").addEventListener("click", () => {

  // setTimeout(() =>{
  const primes = generatePrimes(quota.value);
  output.textContent = `Finished generating ${quota.value} primes!`;

  console.log(primes)
  // }, 10000)

});

document.querySelector("#reload").addEventListener("click", () => {
  document.location.reload();
});



//? Asynchronous javascript 

//?settimeout

setTimeout(() => {
  console.log("Hello World")
}, 2000)



// const BASEURL = "https://api.thedogapi.com/v1";
// const API_KEY = "Ylive_f2OOioBjwGCFkwX65DbRUXfbzwR3rtCGrWvFRdvYC1sQRbLgO8ZD55EtQoxBPQLV";

// const fetchDogs = async () => {
//   try {
//     const response = await fetch(`${BASEURL}/images/search?limit=10`, { headers: { "x-api-key": API_KEY } })
//     const data = await response.json()

//     return data
//   } catch (error) {
//     console.log(error)
//   }
// }

// const container = document.querySelector(".container")

// function myDogs(){
//   fetchDogs().then((data) => {
//     console.log(data)
//     data.forEach((dog) => {
//       const img = document.createElement("img")
//       img.src = dog.url
//       img.style.width = "100%"
//       img.style.objectFit = "cover"
//       container.appendChild(img)
//     })
//   })
// }

// myDogs()

//CallBacks 

//synchro
{
  function doStep1(init) {
    return init + 1;
  }

  function doStep2(init) {
    return init + 2;
  }

  function doStep3(init) {
    return init + 3;
  }

  function doSomething() {

    let result;

    result = doStep1(1)
    result = doStep2(result)
    result = doStep3(result)


    console.log(result)
  }


  // doSomething()

}

//Callback

function doStep1(init, callback) {
  const result = init + 1;
  callback(result);
}

function doStep2(init, callback) {
  const result = init + 2;
  callback(result);
}

function doStep3(init, callback) {
  const result = init + 3;
  callback(result);
}
function doStep4(init, callback) {
  const result = init + 4;
  callback(result);
}
function doStep5(init, callback) {
  const result = init + 5;
  callback(result);
}

function doOperation() {
  doStep1(1, (result1) => {
    doStep2(result1, (result2) => {
      doStep3(result2, (result3) => {
        doStep4(result3, (result4) => {
          doStep5(result4, (result5) => {
            console.log(`my result: ${result5}`)
          })
        })
      })
    })
  })
}

doOperation()


//? API call: making network request
const BASEURL = "https://restcountries.com/v3.1"


const request = new XMLHttpRequest

request.open("GET", `${BASEURL}/all?fields=name,flags,capital`)

request.send()

request.onprogress = () => {
  console.log("loading...")
}

request.onloadend = () => {

  const data = JSON.parse(request.response)
  console.log(data.splice(0, 1))
  displayCountries(data.splice(0, 10))
}

request.addEventListener("loadend", () => {
  const data = JSON.parse(request.response)
  console.log(data.splice(0, 1))
  displayCountries(data.splice(0, 10))
})




const container = document.querySelector(".container")
function displayCountries(data) {
  container.innerHTML = ""

  data.forEach((country) => {
    const city = `
    <div>
      <img src="${country.flags.png}" alt="${country.flags.alt}">
      <h2>${country.name.common}</h2>
    </div>
   `

    container.innerHTML += city
  })

}

console.log(request)


request.onabort = () => {

}

request.addEventListener("abort", () => {
  console.log("aborted")
})


const request2 = new XMLHttpRequest

request2.open("GET", `${BASEURL}/name/nigeria`)
request2.send()

request2.onloadend = () => {
  const data = JSON.parse(request2.response)
  console.log(data)

  container.insertAdjacentHTML("beforebegin", `
    <div>
      <img src="${data[0].flags.png}" alt="${data[0].flags.alt}">
      <h2>${data[0].name.common}</h2>
    </div>
    `)
}

//? Assignment 
//? BASEURL = "https://jsonplaceholder.typicode.com"
// 1. make an api call to the endpoint "/posts" above to display 50 posts
//


//Promises

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise rejected")
    // resolve("Promise resolved successfully")
  }, 4000)
})

console.log(promise)

//.then hadlers

promise.then(
  (response) => console.log(response),
).catch((error) => console.error(error))



const myPromise = new Promise((resolve, reject) => {
  const newResponse = new XMLHttpRequest()

  newResponse.open("GET", `${BASEURL}/all?fields=name,flags,capital`)
  newResponse.send()

  newResponse.onloadend = () => {
    const data = JSON.parse(newResponse.response)
    resolve(data)
  }

  newResponse.onerror = () => {
    reject("An error occurred while fetching data")
  }
})

// myPromise.then((response) => {
//   console.log(response)
//   displayCountries(response.splice(0, 10))    
// }
// ).catch((error) => {
//   console.error(error)

// })


//? fetch api

fetch(`${BASEURL}/all?fields=flags,capital`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  },
}).then((response) => {
  if (response.status !== 200) {
    throw new Error("Network response was not ok")

  }
  // console.log(response.json())
  return response.json()
}).then((data) => {
  console.log(data)
}).catch((error) => {
  console.log("Fetch error:", error.message)
})