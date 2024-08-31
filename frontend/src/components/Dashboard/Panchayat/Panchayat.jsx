import React from 'react'

const Panchayat=()=> {
  return (
    <div>
      <div>
       <div className='px-4'>
      <h1 className='font-mono text-2xl font-semibold '>Panchayat Election</h1>

      <div className='flex justify-between mt-8'>
        <button className='flex item-center  hover:bg-orange-500 rounded-lg px-4 py-3 gap-2 w-fit'>
            Candidate 
        </button>
       
        <button className='flex item-center  hover:bg-orange-500 rounded-lg px-4 py-3 gap-2 w-fit'>
            Election
        </button>
        <button className='flex item-center  hover:bg-orange-500 rounded-lg px-4 py-3 gap-2 w-fit'>
            Result 
        </button>
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
                <td >Area 1 election 1</td>
                <td className='text-right p-2'>2023</td>
              </tr>
              <tr>
                <td>Area 2 election 1</td>
                <td className='text-right p-2'>2023</td>
              </tr>
              <tr>
                <td>Area 3 election 1</td>
                <td className='text-right p-2'>2023</td>
              </tr>
              <tr>
                <td>Area 4 election 1</td>
                <td className='text-right p-2'>2023</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Panchayat