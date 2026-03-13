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

document.getElementById("todo-form").addEventListener("submit", (e) => {
    e.preventDefault(e)

    const formData = new FormData(e.target)
    const todo = formData.get("todo")

    const todoItem = {
        todo,
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
    const todoItems = todos.map(todo => {

        return (`
            <li data-id=${todo.id} class="todo-item">
                <h3 class="todo-text">${todo.todo}</h3>
                <div class="todo-actions">

                <button class="edit-btn">edit</button>
                <button class="delete-btn" data-id=${todo.id}>Delete</button>
                <input type="checkbox" class="checkbox" />
                
</div>
            </li>`)
    })
    todoList.insertAdjacentHTML("afterbegin", todoItems.join(""))
}
displayTodos()







todoList.addEventListener("click", (e) => {
    const { id } = e.target.dataset

    deleteTodo(Number(id))
})

function deleteTodo(todoId) {
    todos = todos.filter(todo => todo.id !== todoId)
    localStorage.setItem("todos", JSON.stringify(todos))
    displayTodos()
}