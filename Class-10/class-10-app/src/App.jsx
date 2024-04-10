import { useState, memo } from 'react'
import './App.css'

let counter = 4;

function App() {
  
  return (
    <div>
      <CardWrapper>
        Hello!
      </CardWrapper>
    </div>
  )
}

function TextComponent() {
  return <div>
    Hi there
  </div>
}

function CardWrapper({children}) {
  return <div style={{margin:10, padding:10, border: "solid black 2px"}}>
    {children}
  </div>
}

export default App
