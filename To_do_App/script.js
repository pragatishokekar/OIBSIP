// Select Elements
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const pendingTasks = document.getElementById("pending-tasks");
const completedTasks = document.getElementById("completed-tasks");

// Event Listener for Adding Tasks
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  addTask(taskText);
  taskInput.value = "";
});

// Function to Add Task
function addTask(taskText) {
  const taskItem = createTaskElement(taskText, false);
  pendingTasks.appendChild(taskItem);
}

// Function to Create Task Element
function createTaskElement(taskText, isCompleted) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = taskText;

  // Buttons
  const completeBtn = document.createElement("button");
  completeBtn.textContent = isCompleted ? "Undo" : "Complete";
  completeBtn.classList.add("complete-btn");

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit-btn");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  // Append buttons to the task item
  li.appendChild(span);
  li.appendChild(completeBtn);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  // Complete Task
  completeBtn.addEventListener("click", () => {
    if (isCompleted) {
      pendingTasks.appendChild(li);
    } else {
      completedTasks.appendChild(li);
    }
    completeBtn.textContent = isCompleted ? "Complete" : "Undo";
    isCompleted = !isCompleted;
  });

  // Edit Task
  editBtn.addEventListener("click", () => {
    const newTaskText = prompt("Edit Task:", taskText);
    if (newTaskText !== null && newTaskText.trim() !== "") {
      span.textContent = newTaskText.trim();
    }
  });

  // Delete Task
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  return li;
}
