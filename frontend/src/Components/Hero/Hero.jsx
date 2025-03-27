import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon  from '../Assets/arrow.png'
import shoe1 from '../Assets/shoe1.png'
const Hero = () => {
  return (
    <div className='hero'>
    <div className="hero-left">
      <h2>Boost Your Speed</h2>
      <div>
      <div className="hero-hand-icon">
      <p>Stylish</p>
      <img src={hand_icon} alt="" />
      </div>
      <p>Shoe</p>
      <p>For Everyone</p>
    </div>
    <div className="hero-latest-button">
      <div>Latest Products</div>
      <img src={arrow_icon} alt="" />
    </div>
    </div>
    <div className="hero-right"> 
        <img src={shoe1} alt="" /> 
    </div>
  </div>
  )
}

export default Hero
