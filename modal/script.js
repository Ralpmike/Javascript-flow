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

const handler = document.getElementById("handler_1")
handler.addEventListener("click", function(e){
    //? e event object
    console.dir(e.target)
})


//? How add content to the DOM

const header_2 = document.createElement("h2")
// header_2.textContent = "<span>Obi has returned</span>"
header_2.innerHTML = "<span style='color:red;'>Obi has returned</span>"
// header_2.hidden = true
handler.prepend(header_2)

console.dir(header_2)

//? Anchor

const anchortag = document.createElement("a")
anchortag.href = "https://www.youtube.com"
anchortag.textContent = "Youtube"

handler.append(anchortag)

console.dir(anchortag)

const inputElem = document.createElement("input")
inputElem.placeholder = "Enter your name"
// inputElem.style.padding = "20px"
inputElem.style.cssText = `
color: green;
border: solid green 1px;
padding: 5px 30px
`
inputElem.type = "number"
inputElem.id = "number-elem"
document.body.append(inputElem)

console.log(inputElem.outerHTML)


const elem = document.getElementById("add_content") 
const ulElem = document.createElement("ul")
// const liElem = document.createElement("li")
// liElem.textContent = "Banana"
elem.append(ulElem)
// ulElem.append(liElem)
ulElem.insertAdjacentHTML("afterend", "<li>Banana</li> <li>Orange</li>")

// handler.append(ulElem)


const pElem = document.querySelector("#add_content p")
console.log(pElem)
pElem.className = "pElem"

pElem.setAttribute("id", "david")
pElem.setAttribute("boy", "joshua")
const value = pElem.getAttribute("boy")
console.log(value);

pElem.removeAttribute("id")