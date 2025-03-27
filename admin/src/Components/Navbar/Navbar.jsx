import React from 'react'
import './Navbar.css'
import adminpannel from '../../assets/adminpannel.png'
import dropicon from '../../assets/dropicon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={adminpannel} alt="" className="nav-logo" />
      <img src={dropicon} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar
