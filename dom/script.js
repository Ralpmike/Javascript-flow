console.log(document.querySelector("#text-description").textContent = "Hello World from DOM");

document.querySelector("#text-description").style.color = "blue";

console.log(document.querySelector("#text-description").style.fontSize = "64px");


//?Traversing the DOM
// console.log(document.body.tagName)
//? getElementById

console.log(document.getElementById("my_name").innerText = "David")

console.log(document.getElementsByClassName("lorem"));
console.log(document.querySelectorAll(".lorem").forEach(el => el.textContent))

console.log(document.getElementById("text-description").closest(".immediate_parent"))