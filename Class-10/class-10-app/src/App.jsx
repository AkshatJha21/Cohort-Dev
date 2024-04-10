import { useState, memo, useEffect } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setInterval(() => {
      fetch('https://sum-server.100xdevs.com/todos').then(async function(res) {
        const json = await res.json();
        setTodos(json.todos);
      })
    }, 10000);
  }, []);
  
  return (
    <>
      {todos.map((todo) => <Todo key={todo.id} title={todo.title} description={todo.description}/>)}
    </>
  )
}

function Todo({title, description}) {
  return (
    <div>
      <h3>{title}</h3>
      <h4>{description}</h4>
    </div>
  )
}

export default App
