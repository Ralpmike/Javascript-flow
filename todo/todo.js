"use strict"

// document.getElementById("todo-form").addEventListener("click", (e)=>{
//     e.preventDefault(e)

//     const formData = new FormData(e.target)
//     const todo = formData.get("todo")

//     const todoItem = {
//         todo,
//         isCompleted: false,
//         id: Date.now().toFixed(4)

//     }
//     todos.push(todoItem)
//     document.querySelector("#todo-input").value = ""
// })
// document.getElementById("submit").addEventListener("click", function(e){
//     e.preventDefault()
//     const todo = document.getElementById("todo-input").value

//     const todoItem = {
//             todo,
//             isCompleted: false,
//             id: Date.now()

//         }

//     localStorage.setItem("todos", JSON.stringify(todoItem))
//     todos.push(todoItem)
//     console.log(todos)
//     document.querySelector("#todo-input").value = ""
// })

const todoList = document.getElementById("todo-list")
let todos = JSON.parse(localStorage.getItem("todos")) || []
console.log(todos)
let isEditingTodo = false
let todoToBeEdiited;


document.getElementById("todo-form").addEventListener("submit", (e) => {
    e.preventDefault(e)

    const formData = new FormData(e.target)
    const myTodo = formData.get("todo")

    if (!myTodo) {
        return;
    }

    if (isEditingTodo) {
        todos = todos.map(todoT => todoT.id === todoToBeEdiited.id ? { ...todoT, todo: myTodo } : todoT)
        localStorage.setItem("todos", JSON.stringify(todos))
        document.getElementById("todo-input").value = ""
        isEditingTodo = false
        displayTodos()
        return
    }

    const todoItem = {
        todo: myTodo,
        isCompleted: false,
        id: Date.now()

    }
    todos.push(todoItem)
    localStorage.setItem("todos", JSON.stringify(todos))
    console.log(todos)
    displayTodos()
    document.querySelector("#todo-input").value = ""
})

function displayTodos() {
    todoList.innerHTML = ""
    todos.forEach(todo => {
        todoList.innerHTML +=

            `<li data-id=${todo.id} class="todo-item">
                <h3 class="todo-text ${todo.isCompleted ? "strike-text" : ""}">${todo.todo}</h3>
                <div class="todo-actions">
                    <button class="edit-btn" data-id=${todo.id}>edit</button>
                    <button class="delete-btn" onclick="deleteTodo(${todo?.id})">Delete</button>
                    <input type="checkbox" data-id=${todo.id} class="checkbox" ${todo.isCompleted ? "checked" : ""} />             
                </div>
            </li>`


    })

}
displayTodos()


todoList.addEventListener("click", (e) => {

    if (e.target.innerHTML !== "edit" && !e.target.classList.contains("checkbox")) {
        return;
    }

    console.dir(e.target)

    if (e.target.classList.contains("checkbox")) {
        const { id } = e.target.dataset
        console.log(id)
        let todo = todos.find(todo => todo.id === Number(id))
        console.log(todo)
        // todos = todos.map(todo => todo.id === Number(id) ? { ...todo, isCompleted: !todo.isCompleted } : todo)
        todo.isCompleted = !todo.isCompleted;

        localStorage.setItem("todos", JSON.stringify(todos))
        displayTodos()
    }

    if (e.target.innerHTML === "edit") {

        const { id } = e.target.dataset
        console.dir(e.target)
        console.log(id)
        console.log(e.target.closest(".todo-item"))

        console.log("li", li)

        let todo = todos.find(todo => todo.id === Number(id))
        console.log("todo", todo)
        document.getElementById("todo-input").value = todo?.todo;

        todoToBeEdiited = todo
        isEditingTodo = true
        li.classList.add("edit")
    }

})

document.getElementById("clear").addEventListener("click", clearTodos)

function deleteTodo(todoId) {
    todos = todos.filter(todo => todo.id !== todoId)
    localStorage.setItem("todos", JSON.stringify(todos))
    displayTodos()
}


function deleteItem(todo) {
    console.log(todo)
}

function clearTodos() {
    console.log("Empty todos")
    localStorage.clear()
    todos = []
    displayTodos()
}


// function editTodo(todoId){
//     let todo = todos.find(todo => todo.id === Number(todoId))
//     document.getElementById("todo-input").value = todo.todo;

//     todoToBeEdiited = todo
//    isEditingTodo = true
//     displayTodos()
// console.log(isEditingTodo)
// console.log(todoToBeEdiited)
// }