import React from 'react'
import './Footer.css'
import  newlogo from '../Assets/newlogo.jpeg'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={newlogo} alt="" />
            <p>MILEAGE</p>
        </div>
        <ul className='footer-links'>
            <li>Mileage</li>
            <li>Shoes</li>
            <li>Shop</li>
            <li>About-Us</li>
            <li>Contact-Us</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={pintester_icon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
            <div className="footer-copyright">
                <hr />
                <p>Mileage.All Rights Reserved @ 2024</p>
            </div>
      </div>
    
  )
}

export default Footer
