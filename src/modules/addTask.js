// Importing the Task class from './task.js'
import Task from './taskList.js';

// addTask function
// This function takes a taskInput (presumably an HTML input element) and an array of tasks.
// It extracts the trimmed value from the taskInput, representing the task name.
// It generates a unique id for the new task by adding 1 to the length of the tasks array.
// If the task name is not an empty string, it creates a new Task object with the name,
// status (false for not completed), and id.
// The new task is then added to the tasks array using the push method.
// Finally, the updated tasks array is returned.
function addTask(taskInput, tasks) {
  const taskName = taskInput.value.trim();
  const id = tasks.length + 1;
  if (taskName !== '') {
    const task = new Task(taskName, false, id);
    tasks.push(task);
  }
  return tasks;
}

// Exporting the addTask function as the default export for use in other parts of the code.
export default addTask;
