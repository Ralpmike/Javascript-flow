const showModalButton = document.getElementById('show_modal');
const closeModalButton = document.querySelector('.close_modal');
const modal = document.querySelector(".modal")
const overLay = document.querySelector('.over_lay');
const modalContent = document.querySelector(".p_color")


//? add, remove, toggle
showModalButton.addEventListener('click', function() {
modal.classList.remove("hidden")
})



// closeModalButton.addEventListener('click', () => {
//     modal.classList.add('hidden')
// })

modalContent.style.cssText = `
color: red;
font-size: 32px;
`

modal.addEventListener('click', function(e){
    const target = e.target
    console.log(target.classList.contains("modal"))
    if (target.classList.contains("modal") || target.tagName === "SPAN"){
        modal.classList.toggle("hidden")


    }
})


// overLay.addEventListener('click', () => {
//     modal.classList.remove("hidden")
//     console.log("overy clicked")
// })

//? Event bubbling and Delegation

// document.querySelector("#handler_1").addEventListener("click", (e) =>{
// console.log("event 1 fired")
//     const event = e.target
//     console.log("this was clicked", event.tagName)
// })

// document.querySelector("#target_object").addEventListener("click", (e) => {
//     // e.stopPropagation()
//     const event = e.target
//     console.log("this was clicked", event.tagName)
// })




// document.querySelector("#handler_2").addEventListener("click", (e) => {
//     console.log("event 2 fired")
//     const event = e.target
//     console.log("this was clicked", event.tagName)

// })

// document.getElementById("body_listener").addEventListener("click", (e)=>{
//     console.log(e.target.tagName)
// })


document.addEventListener("keydown", function(e){
    if (e.key === "Escape"){
        modal.classList.add("hidden")
    }
    console.dir(e.key)
})