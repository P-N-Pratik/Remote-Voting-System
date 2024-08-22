import React from 'react'
// import { Route, Routes} from 'react-router-dom';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Navbox from './Navebox/Navbox'
import Sidebar from './Sidebar/Sidebar'
import Main from '../Home/Main'
import Count from './Count/Count'
import History from './History/History'
import Lokshabha from '../Home/Lokshabha/Lokshabha';
import Vidhanshabha from '../Home/Vidhanshabha/Vidhanshabha';
import Panchayat from '../Home/Panchayat/Panchayat';
import Voter from '../Home/Voter/Voter';
import Setting from '../Home/Setting/Setting';

const Dashboard = () => {
  return (
   <Router>
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
           <Routes>
              <Route exact path="/" element = {<Main/>}></Route>
              <Route exact path="/lokshabha" element = {<Lokshabha/>}></Route>
              <Route exact path="/vidhanshabha" element = {<Vidhanshabha/>}></Route>
              <Route exact path="/panchayat" element = {<Panchayat/>}></Route>
              <Route exact path="/voter" element = {<Voter/>}></Route>
              <Route exact path="/setting" element = {<Setting/>}></Route>
           </Routes>
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
    </Router>
  )
}

export default Dashboard