import React from 'react'
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className=' flex sm:flex-col sm:gap-40'>
      <div className=' flex sm:flex-col '>
        <button className='flex item-center  hover:bg-orange-500 rounded-lg px-4 py-3 gap-2 w-full'onClick={() => navigate('/')}>
        <lord-icon
            src="https://cdn.lordicon.com/cnpvyndp.json"
            trigger="hover"
            colors="primary:#ffffff">
        </lord-icon>
        Home
        </button>
        <button className='flex item-center  hover:bg-orange-500 rounded-lg px-4 py-3 gap-2 w-full'onClick={() => navigate('/lokshabha')}>
        <lord-icon
            src="https://cdn.lordicon.com/aojaypmj.json"
            trigger="hover"
            colors="primary:#ffffff,secondary:#ffffff">
        </lord-icon>
          Lok Shabha
        </button>
        <button className='flex item-center  hover:bg-orange-500 rounded-lg px-4 py-3 gap-2 w-full'onClick={() => navigate('/vidhanshabha')}>
        <lord-icon
            src="https://cdn.lordicon.com/qbyeneqd.json"
            trigger="hover"
            colors="primary:#ffffff,secondary:#ffffff">
        </lord-icon>
          Vidhan Shabha
        </button>
        <button className='flex item-center  hover:bg-orange-500 rounded-lg px-4 py-3 gap-2 w-full'onClick={() => navigate('/panchayat')}>
        <lord-icon
            src="https://cdn.lordicon.com/hicajugo.json"
            trigger="hover"
            colors="primary:#ffffff,secondary:#ffffff">
        </lord-icon>
          Panchayat
        </button>
        <button className='flex item-center  hover:bg-orange-500 rounded-lg px-4 py-3 gap-2 w-full'onClick={() => navigate('/voter')}>
        <lord-icon
            src="https://cdn.lordicon.com/bgebyztw.json"
            trigger="hover"
            colors="primary:#ffffff,secondary:#ffffff">
        </lord-icon>
          Voter
        </button>
      </div>
    
      <div>
        <button className='flex item-center  hover:bg-orange-500 rounded-lg px-4 py-3 gap-2 w-full'onClick={() => navigate('/setting')}>
        <lord-icon
            src="https://cdn.lordicon.com/lecprnjb.json"
            trigger="hover"
            colors="primary:#ffffff">
        </lord-icon>
          Setting
        </button>
      </div>
    </div>
  )
}

export default Sidebar