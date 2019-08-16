var ulElement = document.querySelector("#app ul");
var btnElement = document.querySelector("#app button");
var todo = document.querySelector("#app input");

var todos = JSON.parse(localStorage.getItem("list_todos")) || [];

renderTodos(todos);

function renderTodos(todos) {
  ulElement.innerHTML = "";
  for (const todo of todos) {
    var liELement = document.createElement("li");
    var liText = document.createTextNode(todo);

    var linkElement = document.createElement("a");
    var linkText = document.createTextNode("Excluir");
    linkElement.appendChild(linkText);
    linkElement.setAttribute("href", "#");

    var pos = todos.indexOf(todo);
    linkElement.setAttribute("onclick", "deleteTodo(" + pos + ")");

    liELement.appendChild(liText);
    liELement.appendChild(linkElement);
    ulElement.appendChild(liELement);
  }
}

btnElement.onclick = function() {
  inserirTodo();
};

function inserirTodo() {
  if (todo.value != "") {
    todos.push(todo.value);
    saveToStorage();
    todo.value = "";
    renderTodos(todos);
  }
}

function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos(todos);
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("list_todos", JSON.stringify(todos));
}
