import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to gym",
      description: "From 7-9pm",
      completed: false
    },
    {
      title: "Study DSA",
      description: "From 9-11pm",
      completed: true
    }
  ]);

  function addTodo() {
    setTodos([...todos, {
      title: "New Todo",
      description: "Desc of new todo"
    }]);
  }

  return (
    <div>
      <button onClick={addTodo}>Add New Todo</button>
      {todos.map(function(todo) {
        return <Todo title={todo.title} description={todo.description}/>
      })}
    </div>
  )
}

function Todo(props) {

  return <div>
    <h1>{props.title}</h1>
    <p>{props.description}</p>
  </div>
}

export default App
