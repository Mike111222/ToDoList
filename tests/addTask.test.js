// Import the necessary modules for the tests
import Task from '../src/modules/taskList';
import addTask from '../src/modules/addTask';



// Test suite for the addTask function
describe('addTask function', () => {
  // Test case 1: Adding a new task to an empty array
  it('should add a new task to an empty array', () => {
    // Arrange: Create an empty array and a task input object
    const tasks = [];
    const taskInput = { value: 'Buy groceries' };

    // Act: Call the addTask function
    const result = addTask(taskInput, tasks);

    // Assert: Check that the task was added to the array
    expect(result).toEqual([new Task('Buy groceries', false, 1)]);
  });

  // Test case 2: Adding a new task to a non-empty array
  it('should add a new task to a non-empty array', () => {
    // Arrange: Create an array with one task and a task input object
    const tasks = [new Task('Buy groceries', false, 1)];
    const taskInput = { value: 'Do laundry' };

    // Act: Call the addTask function
    const result = addTask(taskInput, tasks);

    // Assert: Check that the task was added to the array
    expect(result).toEqual([
      new Task('Buy groceries', false, 1),
      new Task('Do laundry', false, 2),
    ]);
  });

  // Test case 3: Not adding a new task if the input is empty
  it('should not add a new task if the input is empty', () => {
    // Arrange: Create an array and an empty task input object
    const tasks = [];
    const taskInput = { value: '' };

    // Act: Call the addTask function
    const result = addTask(taskInput, tasks);

    // Assert: Check that the array is still empty
    expect(result).toEqual([]);
  });
});
