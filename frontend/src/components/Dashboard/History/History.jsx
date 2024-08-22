import React from 'react'

const History=()=>{
  return (
    <div className='m-2'>
      <h1 className='font-mono text-lg font-medium '>
        History
      </h1>
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
                <td >Lokshabaha election 1</td>
                <td className='text-right p-2'>2024</td>
              </tr>
              <tr>
                <td>Bihar  election 1</td>
                <td className='text-right p-2'>2023</td>
              </tr>
              <tr>
                <td>Gujrat  election 1</td>
                <td className='text-right p-2'>2022</td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  )
}

export default History