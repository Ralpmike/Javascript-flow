const seccretNumber = Math.floor(Math.random() * 20) + 1;
const message = document.querySelector(".message")

console.log(message);
console.log("Seccret number is: ", seccretNumber);




document.querySelector(".submit").addEventListener("click", function() {
    const numberGuessed = Number(document.querySelector("#number").value);
    console.log("Number guessed is: ",  numberGuessed);

    if(numberGuessed === 0){
        message.textContent  = "Number is required 😵";    
    }else if(numberGuessed > seccretNumber){
        message.textContent  = "Guess Too high 📈";
    }else if(numberGuessed < seccretNumber){
        message.textContent  = "Guess Too low 📉";
    }else if(numberGuessed === seccretNumber){
        message.textContent  = "Congratulations! You guessed it right 🎉🎊";
        document.querySelector(".show_secret_number").textContent = seccretNumber;
        document.body.style.backgroundColor = "#60b347";
    }

})


// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'reset' class and attach a click event handler
2. In the handler function, restore initial values of the secretNumber variable
3. Restore the initial conditions of the message, number, and guess input field
4. Also restore the original background color (#222)

GOOD LUCK 
*/