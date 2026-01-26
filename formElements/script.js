// console.log(document.forms.secondForm..area);

console.log(document.myForm.name)

const nameElem = document.myForm.name;


nameElem.onfocus = function(e){
  console.dir( e.target.name)
  nameElem.classList.add("onfocus")
}

nameElem.onblur = function(e){
  console.log(e.target.value)
  nameElem.classList.remove("onfocus")
}


document.forms.myForm.addEventListener("submit", function(e){
  e.preventDefault()
  const form = new FormData(e.target)

  const [name, value] = form.entries()
  const {firstName, password} = Object.fromEntries(form)
  console.log(firstName, password)

  console.log(name, value)

  console.log(form.get("password"));
  // if (form.get("password").length > 6){
  //   alert("Password too long")
  //   return
  // }
    // for(let [key, value] of form.entries()){
    //   console.log(key, value)
    // }
    console.log(Object.fromEntries(form));
  // console.log(form.entries())
})
