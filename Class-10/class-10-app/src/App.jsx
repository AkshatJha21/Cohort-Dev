import { useState, memo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Header from './components/Header'

let counter = 4;

function App() {
  const [title, setTitle] = useState("My name is Unga Bunga");
  const onRandomClick = () => {
    const rand = Math.random();
    setTitle(`My name is ${rand}`);
  }

  const [todos, setTodos] = useState([
    {
      title: "Go to gym",
      description: "At 7am",
      id: 1
    },
    {
      title: "Get grocery",
      description: "At 7pm",
      id: 2
    },
    {
      title: "Make bed",
      description: "At 5 am",
      id: 3
    }
  ]);

  const addTodo = () => {
    setTodos([...todos, {
      id: counter++,
      title: Math.random(),
      description: Math.random()
    }])
  }
  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((todo) => 
        <Todo key={todo.id} title={todo.title} description={todo.description}/>
      )}
    </div>
  )
}

const Header = memo(function ({title}) {
  return <div>
    {title}
  </div>
})

function Todo({title, description}) {
  return (
  <div>
    <h2>{title}</h2>
    <h4>{description}</h4>
  </div>
)}

export default App
