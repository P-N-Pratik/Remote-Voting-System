import React from 'react'

const Navbox = () => {
  return (
    <div className='flex sm:flex-col  gap-4'>
      <div className='flex justify-center items-center gap-2 '>
        <img className='w-7 sm:w-12 ' src="logo.png" alt="" /> 
      </div>
      <div className='font-mono text-lg font-semibold text-center'>
         Remote Voting System
      </div>
    </div>
  )
}

export default Navbox