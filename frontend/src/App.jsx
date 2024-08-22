import React from 'react'
// import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard'
// import Signin from './components/SignIn/Signin';
// import Voterdashboard from './components/VoterDashbord/Voterdashboard';
// import Errorpage from './components/ds/Errorpage';

const App =() => {
  return (
    // <Router>
    //   <Routes>
    //    <Route  path="/" element = {<Signin/>}></Route>
    //    <Route  path="/electioncommision" element = {<Dashboard/>}></Route>
    //    <Route  path="/voter" element = {<Voterdashboard/>}></Route>
    //    <Route  path="*" element = {<Errorpage/>}></Route>
    //   </Routes>
    // </Router>

    <Dashboard/>
    //  <Signin/>
    // <Voterdashboard/>
  )
}

export default App