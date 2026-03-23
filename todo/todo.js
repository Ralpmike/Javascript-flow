"use strict"

const todoList = document.getElementById("todo-list")
let todos = JSON.parse(localStorage.getItem("todoItems")) || []
let addTodoBtn = document.getElementById("submit")
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
        setTodoToStorage(todos)
        document.getElementById("todo-input").value = ""
        isEditingTodo = false
         addTodoBtn.innerHTML = "Add Todo" 
        displayTodos()
        return
    }

    const todoItem = {
        todo: myTodo,
        isCompleted: false,
        id: Date.now()

    }
    todos.push(todoItem)
    setTodoToStorage(todos)
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

    //?Mark a todo as completed
    if (e.target.classList.contains("checkbox")) {
        const todo = getTodoItem(e.target.dataset)
        // todos = todos.map(todo => todo.id === Number(id) ? { ...todo, isCompleted: !todo.isCompleted } : todo)
        todo.isCompleted = !todo.isCompleted;
        setTodoToStorage(todos)
        displayTodos()
    }

    //?Edit a todo
    if (e.target.innerHTML === "edit") {

        addTodoBtn.innerHTML = "Update Todo"

        const todo = getTodoItem(e.target.dataset)
        let li = e.target.closest(".todo-item")
        const todoItems = document.querySelectorAll(".todo-item")
    

        if (!todoItems) {
            return
        }

        if (todoItems) {
            todoItems.forEach(todo => {
                if (todo.classList.contains("edit")) {
                    todo.classList.remove("edit")
                }
            })
        }

        document.getElementById("todo-input").value = todo?.todo;

        todoToBeEdiited = todo
        isEditingTodo = true
        li.classList.add("edit")
    }

})

document.getElementById("clear").addEventListener("click", clearTodos)

function deleteTodo(todoId) {
    todos = todos.filter(todo => todo.id !== todoId)
    setTodoToStorage(todos)
    displayTodos()
}

function clearTodos() {
    localStorage.clear()
    todos = []
    displayTodos()
}

function setTodoToStorage(todos) {
    localStorage.setItem("todoItems", JSON.stringify(todos))
}

function getTodoItem(todoId) {
    const { id } = todoId

    if (!id) {
        return;
    }

    const todo = todos.find(todo => todo.id === Number(id))

    return todo
}