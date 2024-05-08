import { useState } from 'react'
import './App.css'
import RevenueCard from './components/RevenueCard'

function App() {

  return (
    <div className='grid grid-cols-1 md:grid-cols-3'>
      <RevenueCard title={"Amount pending"} amount={24423.54} orderCount={13}/>
    </div>
  )
}

export default App
