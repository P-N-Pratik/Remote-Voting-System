import React from 'react'
import { Link } from 'react-router-dom';

const Signin = () => {
    
  return (
    <div className='flex flex-col sm:flex-row min-h-screen bg-black gap-4 p-10 text-white '>
        <div className=' bg-emerald-400 basis-1/2 rounded-2xl'>
        <h1 className='mt-8 font-mono text-3xl font-semibold text-center'>
            Remote Voting System with Fingureprint Authentication and Blockchain
        </h1>
          <img className='mt-32 ml-48' src="logo.png" alt="" />
        </div>
        <div className=' basis-1/2 text-emerald-400 '>
            <h1 className='mt-4 font-mono text-3xl font-semibold text-center'>
                Choose the Option
            </h1>
            <div className='flex flex-row m-5 gap-5 justify-between mt-10'>
                <button  className='border-emerald-400 hover:bg-white border-2 px-4 py-2 rounded-full w-fit'>
                 <Link to='/ecdashboard'>  Election Commission</Link> 
                </button>
                <button  className='border-emerald-400 hover:bg-white  border-2 px-4 py-2 rounded-full w-48'>
                  <Link to='/voterdashboard' >Voter</Link>
                </button>
            </div>
            <div className=' justify-center'>
                <input className='m-5 rounded-full border border-green-500 w-3/4 p-4 py-1 bg-black' type="text" placeholder='username' />
                <input className='m-5 rounded-full border border-green-500 w-3/4 p-4 py-1 bg-black' type="text" placeholder='password' />
                <button onClick={() => navigate('#')} className='m-5 border-emerald-400 hover:bg-white  border-2 px-4 py-2 rounded-full w-48'>
                    Log In
                </button>
            </div>
        </div>
    </div>
  )
}

export default Signin