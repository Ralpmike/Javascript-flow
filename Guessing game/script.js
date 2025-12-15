"use strict"

let seccretNumber = Math.floor(Math.random() * 20) + 1;
let chances = 10 ;
let message = document.querySelector(".message")
document.querySelector("#chances").innerHTML = `You have <span class="chance">${chances}</span> chances to guess the number`



// console.log(message.style.fontSize = " 100px");
// message.style.color = "green";
// message.style.backgroundColor = "pink"
// message.style.padding = "20px"
// message.style.borderRadius = "15px"
// message.style.display = "none"
console.log("Seccret number is: ", seccretNumber);



document.querySelector(".submit").addEventListener("click", function() {
    const numberGuessed = Number(document.querySelector("#number").value);
    console.log("Number guessed is: ",  numberGuessed);

    if(numberGuessed === 0){
        message.textContent  = "Number is required 😵";  
        
    }else if(numberGuessed > seccretNumber){
        if(chances > 1 ){
            chances--;
            document.querySelector(".submit").disabled = false;
        }else{
            chances--;
            document.querySelector(".submit").disabled = true;
            document.querySelector("#chances").innerHTML = `You have <span class="chance">${chances}</span> chances to guess the number`
            message.textContent  = `Game  over! ☠️ ☠️ ☠️`;

            return
        }

        message.textContent  = "Guess Too high 📈";
        document.querySelector("#chances").innerHTML = `You have <span class="chance">${chances}</span> chances to guess the number`


        message.style.display = "block"
    }else if(numberGuessed < seccretNumber){
        if (chances > 1) {
            chances--;
            document.querySelector(".submit").disabled = false;
        }else{
            chances--;
            document.querySelector("#chances").innerHTML = `You have <span class="chance">${chances}</span> chances to guess the number`
            document.querySelector(".submit").disabled = true;
            message.textContent = `Game  over! 💥 💥 💥`;
            return
        }

        message.textContent  = "Guess Too low 📉";
        document.querySelector("#chances").innerHTML = `You have <span class="chance">${chances}</span> chances to guess the number`


    }else if(numberGuessed === seccretNumber){
        message.textContent  = "Congratulations! You guessed it right 🎉🎊";
        document.querySelector(".show_secret_number").textContent = seccretNumber;
        document.body.style.backgroundColor = "#164a07ff";
    }

})

document.querySelector(".reset").addEventListener("click", function() {
  seccretNumber = Math.floor(Math.random() * 20) + 1;
    message.textContent = ""
    document.body.style.backgroundColor = '#222'
    document.querySelector("#number").value = ""
    document.querySelector(".show_secret_number").textContent = "?"
    document.querySelector(".submit").disabled = false;
    chances = 5;
    document.querySelector("#chances").innerHTML = `You have <span class="chance">${chances}</span> chances to guess the number`

})


// Coding Challenge #1

/* 
Implement a game reset functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'reset' class and attach a click event handler
2. In the handler function, restore initial values of the secretNumber variable
3. Restore the initial conditions of the message, number, and guess input field
4. Also restore the original background color (#222)

GOOD LUCK 
*/


//?

console.log(document.body.TEXT_NODE);