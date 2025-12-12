const menuToggle = document.getElementById("menuToggle")
const navLinks = document.getElementById("navLinks")


menuToggle.addEventListener("click", function(){
    console.log("Button clicked")
    if(!navLinks.classList.contains("active")){
        menuToggle.textContent = "✖️"
        navLinks.classList.add('active')
    }else{

        menuToggle.textContent = "≡"
        navLinks.classList.remove("active")
    }
    // navLinks.classList.toggle("active")
})