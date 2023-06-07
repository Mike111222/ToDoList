// clearCompletedTask function
// This function takes an array of tasks and filters out the completed tasks.
// It returns a new array containing only the tasks that have a status of false (not completed).
function clearCompletedTask(tasks) {
  return tasks.filter((task) => !task.status);
}

// toggleTaskStatus function
// This function takes an id and an array of tasks.
// It maps over the tasks array and toggles the status of the task with the given id.
// If the task's id matches the given id, its status is negated
// (true becomes false, and vice versa).
// The function returns a new array with the updated task statuses.
function toggleTaskStatus(id, tasks) {
  return tasks.map((task) => {
    if (task.id === id) {
      return {
        ...task,
        status: !task.status,
      };
    }
    return task;
  });
}

// editTask function
// This function takes an id, a new name, an array of tasks,
// and two additional functions: saveTasks and displayTasks.
// It searches for the task with the given id in the tasks array
// and updates its name to the new name.
// After that, it calls the saveTasks and displayTasks functions to save
// the changes and update the display.
function editTask(id, newName, tasks, saveTasks, displayTasks) {
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex !== -1) {
    tasks[taskIndex].name = newName;
    saveTasks();
    displayTasks();
  }
}

// Exporting the functions for use in other parts of the code.
export { clearCompletedTask, toggleTaskStatus, editTask };
