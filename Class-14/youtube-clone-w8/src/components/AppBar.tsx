import React from 'react'
import SearchBar from './SearchBar'

const AppBar = () => {
  return (
    <div className='flex justify-between items-center m-2'>
        <div className='font-bold'>Youtube</div>
        <div>
            <SearchBar />
        </div>
        <div>Sign In</div>
    </div>
  )
}

export default AppBar