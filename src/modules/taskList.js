// Task class
// This class represents a task object with a name, status, and id.
class Task {
  constructor(name, status, id) {
    // Initializing the properties of the task object.
    this.name = name; // The name of the task.
    this.status = status; // The status of the task (whether it is completed or not).
    this.id = id; // The unique identifier of the task.
  }
}

// Exporting the Task class as the default export for use in other parts of the code.
export default Task;
