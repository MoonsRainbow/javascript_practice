const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");

const TODO_KEY = "todos";

let todos = [];

function saveTodos() {
	localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}

function removeTodoItem(e) {
	const li = e.currentTarget.parentElement;
	todos = todos.filter((obj) => {
		return String(obj.id) !== li.id;
	});
	saveTodos();
	li.remove();
}

function addTodoItem(newTodoObj) {
	const li = document.createElement("li");
	li.id = newTodoObj.id;
	const span = document.createElement("span");
	const button = document.createElement("button");
	const button_icon = document.createElement("i");
	span.innerText = newTodoObj.text;
	button_icon.className = "icon-trash-2";
	button.appendChild(button_icon);
	button.addEventListener("click", removeTodoItem);
	li.appendChild(span);
	li.appendChild(button);
	todoList.prepend(li);
}

todoForm.addEventListener("submit", function (e) {
	e.preventDefault();
	const newTodoObj = { id: Date.now(), text: e.target.newTodoItem.value };
	addTodoItem(newTodoObj);
	todos.push(newTodoObj);
	e.target.reset();
	saveTodos();
});

const savedTodos = localStorage.getItem(TODO_KEY);
if (savedTodos !== null) {
	const parsedTodo = JSON.parse(savedTodos);
	parsedTodo.forEach(addTodoItem);
	todos = parsedTodo;
}
