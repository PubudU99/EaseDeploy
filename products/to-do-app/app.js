// Create Title
const title = document.createElement("h1");
title.textContent = "My To-Do List";
document.body.appendChild(title);

// Create Input
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Add a new task";
input.id = "taskInput";
document.body.appendChild(input);

// Create Button
const addButton = document.createElement("button");
addButton.textContent = "Add";
document.body.appendChild(addButton);

// Create Task List
const ul = document.createElement("ul");
ul.id = "todo-list";
document.body.appendChild(ul);

// Add Task Function
function addTask() {
  const taskText = input.value.trim();
  if (!taskText) return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;
  span.onclick = () => {
    span.classList.toggle("completed");
  };

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.onclick = () => li.remove();

  li.appendChild(span);
  li.appendChild(delBtn);
  ul.appendChild(li);
  input.value = "";
}

// Add styles directly (you can move this to style.css if you prefer)
document.body.style.fontFamily = "Arial";
document.body.style.margin = "40px";
addButton.onclick = addTask;

// Optional: Mark completed
const style = document.createElement("style");
style.textContent = `
  li { margin: 5px 0; }
  button { margin-left: 10px; }
  .completed {
    text-decoration: line-through;
    color: gray;
  }
`;
document.head.appendChild(style);
