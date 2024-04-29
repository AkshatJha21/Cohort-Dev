import React, { Suspense } from 'react';
import { lazy } from 'react';
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
const Dashboard = lazy(() => import('./components/Dashboard'));
const Landing = lazy(() => import('./components/Landing'));

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/dashboard' element={<Suspense fallback={<Loader />}><Dashboard /></Suspense>}/>
        <Route path='/' element={<Suspense fallback={<Loader />}><Landing /></Suspense>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => {
        navigate('/dashboard');
      }}>Dashboard</button>
      <button onClick={() => {
        navigate('/');
      }}>Home</button>
    </div>
  )
}

function Loader() {
  return (
    <div>
      Loading...
    </div>
  )
}

export default App
