import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center'>
      <div style={{backgroundColor: "red"}}>yo</div>
      <div style={{backgroundColor: "blue"}}>yo</div>
      <div style={{backgroundColor: "green"}}>yo</div>
    </div>
  )
}

export default App
