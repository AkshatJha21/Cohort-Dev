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

class MyComponent extends React.Component {
  componentDidMount() {
    console.log("Component Mounted");
  }

  componentWillUnmount() {
    console.log("Component Unmounted");
  }

  render() {
    return (
      <div>
        Component is here
      </div>
    )
  }
}

export default App
