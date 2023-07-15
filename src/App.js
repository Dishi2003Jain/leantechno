import React from 'react'
import './App.css';
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Bookings from './pages/Bookings.jsx'
import Home from './pages/Home.jsx'
import Queries from './pages/Queries.jsx'
import Schedules from './pages/Schedules.jsx'
import Services from './pages/Services.jsx'
import Profile from './pages/Profile.jsx'
import InviteandEarn from './pages/InviteandEarn.jsx'
import Rewards from './pages/Rewards.jsx'
import Logout from './pages/Logout.jsx'
import Dashboard from './components/Dashboard.jsx'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
export const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Dashboard>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/bookings' element={<Bookings/>}/>
      <Route path='/queries' element={<Queries/>}/>
      <Route path='/schedules' element={<Schedules/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/inviteandearn' element={<InviteandEarn/>}/>
      <Route path='/rewards' element={<Rewards/>}/>
      <Route path='/logout' element={<Logout/>}/>
    </Routes>
    </Dashboard>
    <Footer/>
    </BrowserRouter>
  )
}

export default App;