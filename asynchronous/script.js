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