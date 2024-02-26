/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(tasks) {
    this.tasks = [];
  }

  add(todo) {
    this.tasks.push(todo);
  }

  remove(index) {
    if (index > -1 && index < this.tasks.length){
      this.tasks.splice(index, 1);
    } else {
      console.log("Index not found");
    }
  }

  update(index, update) {
    if (index > -1 && index < this.tasks.length) {
      this.tasks.splice(index, 1, update);
    } else {
      console.log("Index not found");
    }
  }

  getAll() {
    for (let i = 0; i < this.tasks.length; i++) {
      console.log(this.tasks[i]);
    }
  }

  get(index) {
    if (index > -1 && index < this.tasks.length) {
      console.log(this.tasks[index]);
    } else {
      console.log("Index not found");
    }
  }

  clear() {
    this.tasks = [];
  }

}

const todo = new Todo();
todo.add("Task 1");
todo.add("Task 2");
todo.add("Task 3");
todo.add("Task 2");
todo.getAll();