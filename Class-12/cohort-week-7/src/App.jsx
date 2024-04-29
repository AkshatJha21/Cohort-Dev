import React, { Suspense, useState } from 'react';
import { lazy } from 'react';
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
const Dashboard = lazy(() => import('./components/Dashboard'));
const Landing = lazy(() => import('./components/Landing'));

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Count count={count}/>
      <Buttons count={count} setCount={setCount}/>
    </div>
  )
}

function Count({ count }) {
  return (
    <div>
      {count}
    </div>
  )
}

function Buttons({ count, setCount}) {
  return (
    <div>
      <button onClick={() => {
        setCount(count + 1);
      }}>+</button>
      <button onClick={() => {
        setCount(count - 1)
      }}>-</button>
    </div>
  )
}

export default App
