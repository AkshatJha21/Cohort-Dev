import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Header title={"Hi I am Akshat"}/>
    // <Header title={"Hi I am Akshat"}/>
  )
}

export default App
