import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-center'>
        <div className='bg-red-500'>yo</div>
        <div className='bg-blue-500'>yo</div>
        <div className='bg-green-500'>yo</div>
      </div>
      <div className='grid grid-cols-5'>
        <div className='bg-pink-500 col-span-2'>grid</div>
        <div className='bg-violet-500 col-span-2'>grid</div>
        <div className='bg-rose-500'>grid</div>
      </div>
    </>
  )
}

export default App
