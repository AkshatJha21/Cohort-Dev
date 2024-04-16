import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'

function App() {
  const [find, setFind] = useState(1);
  return (
    <div>
      <button onClick={() => setFind(1)}>1</button>
      <button onClick={() => setFind(2)}>2</button>
      <button onClick={() => setFind(3)}>3</button>
      <Todo id={find} />
    </div>
  )
}

function Todo({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`).then(function (res) {
      setTodo(res.data.todo);
    });
  }, [id]);
  

  return (
    <div>
      <p>Id: {id}</p>
      <h1>{todo.title}</h1>
      {todo.description}
    </div>
  )
}

export default App
