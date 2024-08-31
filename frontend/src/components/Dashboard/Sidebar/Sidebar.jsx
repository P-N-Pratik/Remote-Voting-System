import React from 'react'
import {Link} from 'react-router-dom';

const Sidebar = () => {
  
  return (
    <div className=' flex flex-row  sm:flex-col sm:gap-40'>
      <div className=' flex flex-row sm:flex-col '>
        <Link to='/ecdashboard/home'>
        <button  className='flex items-center  hover:bg-orange-500 rounded-lg sm:px-4 px-1 sm:py-3 py-1  gap-2 sm:w-full w-12'>
        <lord-icon
            src="https://cdn.lordicon.com/cnpvyndp.json"
            trigger="hover"
            colors="primary:#ffffff">
        </lord-icon>
        <span className='hidden sm:block'>Home</span>
        </button>
        </Link>

        <Link to='/ecdashboard/lokshabha'>
        <button  className='flex item-center  hover:bg-orange-500 rounded-lg sm:px-4 px-1 sm:py-3 py-1 gap-2 sm:w-full w-12'>
        <lord-icon
            src="https://cdn.lordicon.com/aojaypmj.json"
            trigger="hover"
            colors="primary:#ffffff,secondary:#ffffff">
        </lord-icon>
        <span className='hidden sm:block'>Lok Shabha</span>
        </button>
        </Link>

        <Link to='/ecdashboard/vidhanshabha'>
        <button  className='flex item-center  hover:bg-orange-500 rounded-lg sm:px-4 px-1 sm:py-3 py-1 gap-2 sm:w-full w-12'>
        <lord-icon
            src="https://cdn.lordicon.com/qbyeneqd.json"
            trigger="hover"
            colors="primary:#ffffff,secondary:#ffffff">
        </lord-icon>
        <span className='hidden sm:block'>Vidhan Shabha</span>
        </button>
        </Link>

        <Link to='/ecdashboard/panchayat'>
        <button  className='flex item-center  hover:bg-orange-500 rounded-lg sm:px-4 px-1 sm:py-3 py-1 gap-2 sm:w-full w-12'>
        <lord-icon
            src="https://cdn.lordicon.com/hicajugo.json"
            trigger="hover"
            colors="primary:#ffffff,secondary:#ffffff">
        </lord-icon>
        <span className='hidden sm:block'>Panchayat</span>
        </button>
        </Link>

        <Link to='/ecdashboard/voterdeatil'>
        <button  className='flex item-center  hover:bg-orange-500 rounded-lg sm:px-4 px-1 sm:py-3 py-1 gap-2 sm:w-full w-12'>
        <lord-icon
            src="https://cdn.lordicon.com/bgebyztw.json"
            trigger="hover"
            colors="primary:#ffffff,secondary:#ffffff">
        </lord-icon>
        <span className='hidden sm:block'>Voter</span>
        </button>
        </Link>
      </div>


    
      <div>
        <Link to='/ecdashboard/setting'>
        <button  className='flex item-center  hover:bg-orange-500 rounded-lg sm:px-4 px-1 sm:py-3 py-1 gap-2 sm:w-full w-12'>
        <lord-icon
            src="https://cdn.lordicon.com/lecprnjb.json"
            trigger="hover"
            colors="primary:#ffffff">
        </lord-icon>
        <span className='hidden sm:block'>Setting</span>
        </button>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar