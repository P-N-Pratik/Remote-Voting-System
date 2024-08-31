import React from 'react'
import { Link } from 'react-router-dom'

const Lokshabha=()=> {
  return (
    
    <div className='px-4'>
      <h1 className='font-mono text-2xl font-semibold '>Lokshabha Election</h1>

      <div className='grid grid-cols-2 sm:flex sm:justify-between mt-8'>
       <Link to="/ecdashboard/lokshabha/candidate">
        <button className='flex item-center  hover:bg-orange-500 rounded-lg px-4 py-3 gap-2 w-fit'>
          Candidate
        </button>
        </Link>

        <Link to="/ecdashboard/lokshabha/constituency">
        <button className='flex item-center  hover:bg-orange-500 rounded-lg px-4 py-3 gap-2 w-fit'>
            Constituency
        </button>
        </Link>
        <Link to="/ecdashboard/lokshabha/electionselection">
        <button className='flex item-center  hover:bg-orange-500 rounded-lg px-4 py-3 gap-2 w-fit'>
            Election
        </button>
        </Link>
        <Link to ="/ecdashboard/lokshabha/result">
        <button className='flex item-center  hover:bg-orange-500 rounded-lg px-4 py-3 gap-2 w-fit'>
            Result 
        </button>
        </Link>
      </div>

      <div className='mt-36'>
        <h1 className='font-mono font-semibold '>Election History</h1>
        <div>
          <table class="table-fixed w-full">
            <thead>
              <tr >
                <th className='text-left w-4/5 p-3 '>Election</th>
                <th className='text-right p-3'>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td >Lokshabaha election 4</td>
                <td className='text-right p-2'>2024</td>
              </tr>
              <tr>
                <td>Lokshabaha election 3</td>
                <td className='text-right p-2'>2019</td>
              </tr>
              <tr>
                <td>Lokshabaha election 2</td>
                <td className='text-right p-2'>2014</td>
              </tr>
              <tr>
                <td>Lokshabaha election 1</td>
                <td className='text-right p-2'>2009</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    
    </div>
    
  )
  
}

export default Lokshabha