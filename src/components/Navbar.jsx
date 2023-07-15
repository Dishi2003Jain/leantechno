import React from 'react';
import navlogo from '../assets/logoo.png'
import {IoIosNotifications} from 'react-icons/io'
const Navbar = () => {
  return (
    <nav class="topnav">
    <div className="topnav_left">
    <a >
      <img src={navlogo} alt="" srcset="" />
    </a>
    <a>Filter</a>
    <a href="/about" >About Us</a>
    <a href="/blog" >Blog</a>
    </div>
    <div class="topnav-right">
      <IoIosNotifications/>
    </div>
  </nav>
  );
};

export default Navbar;
