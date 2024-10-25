import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard'
import Signin from './components/Vdandsign/SignIn/Signin';
import Main from './components/Dashboard/Home/Main';
import Lokshabha from './components/Dashboard/Lokshabha/Lokshabha';
import Candidate from './components/Dashboard/Lokshabha/Candidate';
import Constituency from './components/Dashboard/Lokshabha/Constituency';
import Electionselect from './components/Dashboard/Lokshabha/Electionselect';
import Result from './components/Dashboard/Lokshabha/Result';
import Vidhanshabha from './components/Dashboard/Vidhanshabha/Vidhanshabha';
import Panchayat from './components/Dashboard/Panchayat/Panchayat';
import Voter from './components/Dashboard/Voter/Voter';
import Setting from './components/Dashboard/Setting/Setting';
import Voterdashboard from './components/Vdandsign/VoterDashbord/Voterdashboard';
import CandidateList from './components/Dashboard/Voter/Candidateslist';


const App =() => {
  return (
    <BrowserRouter>
     <Routes>
            <Route path='/' element = {<Signin/>}></Route>
            <Route path="/ecdashboard" element = {<Dashboard/>}>
               <Route  path="/ecdashboard/home" element = {<Main/>}></Route>
               <Route  path="/ecdashboard/lokshabha" element = {<Lokshabha/>}></Route>
                  <Route  path="/ecdashboard/lokshabha/candidate" element = {<Candidate/>}></Route>
                  <Route  path="/ecdashboard/lokshabha/constituency" element= {<Constituency/>}></Route>
                  <Route  path="/ecdashboard/lokshabha/electionselection" element= {<Electionselect/>}></Route>
                  <Route  path="/ecdashboard/lokshabha/result" element= {<Result/>}></Route>
               <Route  path="/ecdashboard/vidhanshabha" element = {<Vidhanshabha/>}></Route>
               <Route  path="/ecdashboard/panchayat" element = {<Panchayat/>}></Route>
               <Route  path="/ecdashboard/voterdeatil" element = {<Voter/>}></Route>
               <Route  path="/ecdashboard/setting" element = {<Setting/>}></Route> 
            </Route>
            <Route path="/voterdashboard" element = {<Voterdashboard/>}></Route>
            <Route path="/other" element = {<CandidateList/>}></Route>           
        </Routes>
     </BrowserRouter>
  )
}

export default App