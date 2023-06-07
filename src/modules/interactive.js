// Importing the addTask function from './addTask.js'
import addTask from './addTask.js';

// Importing the removeTask function from './removeTask.js'
import removeTask from './removeTask.js';

// Importing the clearCompletedTask, toggleTaskStatus,
// and editTask functions from './clearToggleEditTask.js'
import { clearCompletedTask, toggleTaskStatus, editTask } from './clearToggleEditTask.js';

// TaskList class
// This class represents a task list and manages the functionality related to tasks.
class TaskList {
  constructor() {
    // Initializing the tasks array by retrieving it from localStorage,
    // or creating an empty array if it doesn't exist.
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Getting references to various elements in the DOM.
    this.taskForm = document.getElementById('task-form');
    this.taskInput = document.getElementById('task-input');
    this.taskList = document.getElementById('task-list');
    this.clearCompletedBtn = document.getElementById('clear-completed');
    this.resetBtn = document.getElementById('reset');

    // Adding an event listener to the task form's submit event.
    // When the form is submitted, a new task is added to the tasks array,
    // and the tasks are saved and displayed.
    this.taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.tasks = addTask(this.taskInput, this.tasks);
      this.saveTasks();
      this.displayTasks();
      this.taskInput.value = '';
    });

    // Adding an event listener to the clear completed button's click event.
    // When the button is clicked, completed tasks are cleared from the tasks array,
    // and the tasks are saved and displayed.
    this.clearCompletedBtn.addEventListener('click', () => {
      this.tasks = clearCompletedTask(this.tasks);
      this.saveTasks();
      this.displayTasks();
    });

    // Adding an event listener to the reset button's click event.
    // When the button is clicked, all tasks are removed from the tasks array,
    // and the tasks are saved and displayed.
    this.resetBtn.addEventListener('click', () => {
      this.tasks = [];
      this.saveTasks();
      this.displayTasks();
    });

    // Displaying the tasks initially.
    this.displayTasks();
  }

  // editTask method
  // This method allows editing a task by calling the editTask function and
  // passing the necessary arguments.
  // The tasks array is updated, and then the tasks are saved and displayed.
  editTask(id, newName) {
    editTask(id, newName, this.tasks, this.saveTasks.bind(this), this.displayTasks.bind(this));
  }

  // removeTask method
  // This method removes a task by calling the removeTask function
  // and passing the necessary arguments.
  // The tasks array is updated, and then the tasks are saved and displayed.
  removeTask(id) {
    this.tasks = removeTask(id, this.tasks);
    this.saveTasks();
    this.displayTasks();
  }

  // toggleTaskStatus method
  // This method toggles the status of a task by calling the toggleTaskStatus
  // function and passing the necessary arguments.
  // The tasks array is updated, and then the tasks are saved and displayed.
  toggleTaskStatus(id) {
    this.tasks = toggleTaskStatus(id, this.tasks);
    this.saveTasks();
    this.displayTasks();
  }

  // resetTasks method
  // This method removes all tasks from the tasks array.
  // The tasks are saved and displayed.
  resetTasks() {
    this.tasks = [];
    this.saveTasks();
    this.displayTasks();
  }

  // saveTasks method
  // This method saves the tasks array to localStorage by
  // converting it to a JSON string.
  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  // displayTasks method
  // This method updates the task list in the DOM based on the tasks array.
  // It iterates over the tasks array and creates DOM elements for each task,
  // including checkboxes, task names, and buttons.
  // Event listeners are attached to the checkboxes, edit buttons,
  // and delete buttons for task manipulation.
  // The updated task list is appended to the task list container in the DOM.
  displayTasks() {
    this.taskList.innerHTML = '';
    for (let i = 0; i < this.tasks.length; i += 1) {
      const task = this.tasks[i];
      const taskElement = document.createElement('li');
      taskElement.innerHTML = `
        <input type='checkbox' ${task.status ? 'checked' : ''}>
        <span ${task.status ? 'style="text-decoration: line-through"' : ''}>
          ${task.name}
        </span>
        <button class="edit-btn">Edit</button>
        <button class='delete-btn'>X</button>
      `;

      const checkbox = taskElement.querySelector('input[type=checkbox]');
      checkbox.addEventListener('change', () => this.toggleTaskStatus(task.id));

      const editBtn = taskElement.querySelector('.edit-btn');
      editBtn.addEventListener('click', () => {
        const newName = prompt('Enter new task name:', task.name);
        if (newName !== null && newName.trim() !== '') {
          this.editTask(task.id, newName.trim());
        }
      });

      const deleteBtn = taskElement.querySelector('.delete-btn');
      deleteBtn.addEventListener('click', () => this.removeTask(task.id));

      this.taskList.appendChild(taskElement);
    }
  }
}

// Exporting the TaskList class as the default export for use in other parts of the code.
export default TaskList;
