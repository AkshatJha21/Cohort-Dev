import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [render, setRender] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setRender(r => !r);
    }, 10000);
  }, []);
  return (
    <>
      {render ? <MyComponent /> : "Component left"}
    </>
  )
}

function MyComponent() {
  useEffect(() => {
    console.log("Component Mounted")

    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  return (
    <div>
      Component is here
    </div>
  )
}

export default App
