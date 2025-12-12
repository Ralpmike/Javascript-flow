const togglerElem = document.querySelectorAll(".toggler")
const accordionItem = document.querySelectorAll(".accordion_item")

console.log(togglerElem)

togglerElem.forEach(elem => {
    elem.addEventListener("click", function(e){
    //    console.log(e.target.parentElement.parentElement)
        console.log(e.target.closest(".accordion_item"))
        const accordItem = e.target.closest(".accordion_item")

        if (accordItem.classList.contains("active")){
            accordItem.classList.remove("active")
            return
        }
    
        accordionItem.forEach(item => {
            if(item.classList.contains("active")){
                item.classList.remove("active")
            }
        })

        if (accordItem){
            accordItem.classList.add("active")

        }

    })

})


//! Assignment 
// //? Event delegation
// const accordionWrapper = document.getElementById("accordion_wrapper")

// accordionWrapper.addEventListener("click", function(event){
//     console.dir(event.target)
//     if(event.target.tagName === "SPAN"){
//         console.log("Butoon clicked")
//     }
// })

