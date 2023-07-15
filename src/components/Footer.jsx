import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {RiInstagramFill} from 'react-icons/ri'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="firstcon">
        <div className="social">
          <div className="social_icon"><BsLinkedin/></div>
          <div className="social_icon"><RiInstagramFill/></div>
          <div className="social_icon"><AiFillTwitterSquare/></div>
          <div className="social_icon"><AiFillFacebook/></div>
        </div>
        <div>2023 Mentorbridge. All Rights Reserved.</div>
    </div>
    <div className="secondcon">
      <div className="wref">
        <a href="/">Contact us</a>
        <a href="/">Privacy policy</a>
        <a href="/">Terms of use</a>
      </div>
      <div className="whref">
        <a href="/">Help center</a>
        <a href="/">About us</a>
        <a href="/">FAQs</a>
      </div>
    </div>
    </div>
  )
}

export default Footer