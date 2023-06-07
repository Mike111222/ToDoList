// removeTask function
// This function removes a task from the tasks array based on the provided id.
// It filters out the task with the matching id and
// returns a new array with the remaining tasks.
// The function also updates the ids of the tasks in the updatedTasks array
// to ensure they are sequential.

function removeTask(id, tasks) {
  // Filtering out the task with the matching id from the tasks array.
  const updatedTasks = tasks.filter((task) => task.id !== id);

  // Updating the ids of the tasks in the updatedTasks array to ensure they are sequential.
  for (let i = 0; i < updatedTasks.length; i += 1) {
    updatedTasks[i].id = i + 1;
  }

  // Returning the updatedTasks array with the removed task and updated ids.
  return updatedTasks;
}

// Exporting the removeTask function as the default export for use in other parts of the code.
export default removeTask;
