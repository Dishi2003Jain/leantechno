import React from 'react'
import {HiHome} from 'react-icons/hi'
import {MdLocalPhone} from 'react-icons/md'
import {BiCalendar} from 'react-icons/bi'
import {HiMiniPower} from 'react-icons/hi2'
import {HiMiniGift} from 'react-icons/hi2'
import {IoMailOpen} from 'react-icons/io5'
import {BsFillPersonFill} from 'react-icons/bs'
import { NavLink } from 'react-router-dom';
import {FaMessage} from 'react-icons/fa6'
import {FaUserCog} from 'react-icons/fa'
import dp from '../assets/Dp.jpeg'
const Dashboard = ({children}) => {
    const menuItem=[
        {
          path:'/',
          name:"Home",
          icon:<HiHome/>
        },
        {
          path:'/bookings',
          name:"Bookings",
          icon:<MdLocalPhone/>
        },
        {
          path:'/queries',
          name:"Queries",
          icon:<FaMessage/>
        },
        {
          path:'/schedules',
          name:"Schedules",
          icon:<BiCalendar/>
        },
        {
          path:'/services',
          name:"Services",
          icon:<FaUserCog/>
        },
        {
          path:'/profile',
          name:"Profile",
          icon:<BsFillPersonFill/>
        },
        {
          path:'/iniviteandearn',
          name:"Invite & Earn",
          icon:<IoMailOpen/>
        },
        {
          path:'/rewards',
          name:"Rewards",
          icon:<HiMiniGift/>
        },
        {
          path:'/logout',
          name:"Logout",
          icon:<HiMiniPower/>
        },
        
      ]
  return (
    <div className='Dashcontainer'>
      <div className="sidebar">
        <div className="top_section">
          <img src={dp} alt="" srcset="" />
          <h3>Neha Bhat</h3>
        </div>
        <div className="iconlink">
        {
          menuItem.map((item,index)=>(
            <NavLink to={item.path} key={index} className='link' activeclassName='active'> 
             <div className="icon">{item.icon}</div>
             <div className="link_text">{item.name}</div>
            </NavLink>
          ))
        }
        </div>
      </div>
      <main>{children}</main>
    </div>
  )
}

export default Dashboard