import './App.css'

interface Todo {
  title: string;
  description: string;
  done: boolean;
}

function App() {

  return (
    <>
      <Todos title='Todo 1' description='this is todo 1' done={false}/>
    </>
  )
}


function Todos({title, description, done}: Todo) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <p>{done ? "Done" : "Mark as done"}</p>
    </div>
  )
}

export default App
