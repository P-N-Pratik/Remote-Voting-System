import React from 'react'
import { Outlet} from 'react-router-dom';
import Navbox from './Navebox/Navbox'
import Sidebar from './Sidebar/Sidebar'
import Count from './Count/Count'
import History from './History/History'



const Dashboard = () => {
  return (
    <div className='flex flex-col sm:flex-row min-h-screen bg-black gap-3 p-3 text-white '>
        <div className='flex flex-col basis-1/5 gap-3 '>
           <div className='bg-zinc-900 h-1/5 rounded-lg p-2 ' >
              <Navbox/>
           </div>
           <div className='bg-zinc-900 h-4/5 rounded-lg p-2'>
               <Sidebar/>
           </div>
        </div>

        
        <div className='basis-7/12 bg-zinc-900 rounded-lg p-2' >
          <Outlet/>
        </div>


        <div className='flex flex-col basis-1/4 gap-3 '>
           <div className='bg-orange-400 h-1/5 rounded-lg p-2'>
              <Count/>
           </div>
           <div className='bg-zinc-900 h-4/5 rounded-lg p-2'>
             <History/>
           </div>
        </div>
    </div>

  )
}

export default Dashboard