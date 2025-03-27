import React from 'react'
import './Offers.css'
import shoew9 from '../Assets/shoew9.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Mind-boggling</h1>
            <h1>Offers For You</h1>
            <p>Check-out The Best Selling Products</p>
            <button>Look-out</button>
        </div>
        <div className="offers-right">
            <img src={shoew9} alt="" />

        </div>
      
    </div>
  )
}

export default Offers
