window.addEventListener("DOMContentLoaded",()=>{
    const todoForm = document.querySelector("#todo_form");
    const todoInput = document.querySelector(".input_todo");
    const todoList = document.querySelector("#todo_list");

    const TODOS_KEY = "todos";


    let toDos;

    function saveToDos(){
        localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    }

    function deleteTodo(event){
        const delLi = event.target.parentElement;
        delLi.remove();
        toDos = toDos.filter((toDo)=> toDo.id !== parseInt(delLi.id));
        saveToDos();
    }


    function handleTodoSubmit(event){
        event.preventDefault();
        const newTodo = todoInput.value;
        todoInput.value = "";
        const newToDoObj = {
            text : newTodo,
            id : Date.now(),
        };
        toDos.push(newToDoObj);
        paintToDo(newToDoObj);
        saveToDos();
    }

    function paintToDo(newTodo){
        const li = document.createElement("li");
        li.id = newTodo.id;
        const span = document.createElement("span");
        span.innerText = newTodo.text;
        const button = document.createElement("button");
        button.innerText = `✖️`;
        button.addEventListener("click", deleteTodo)
        li.appendChild(span);
        li.appendChild(button);
        todoList.appendChild(li);
    }
    
    todoForm.addEventListener("submit", handleTodoSubmit);


    
    const savedToDos = localStorage.getItem(TODOS_KEY);
    
    if(saveToDos){
        const parsedToDos = JSON.parse(savedToDos);
        toDos = parsedToDos;
        parsedToDos.forEach(paintToDo);
    }

})