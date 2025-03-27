import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    
    <div className='newsletter'>
      <h1>Get Newest Offers On Your Email</h1>
      <p>Subscribe And Have Fun</p>
      <div >
        <input type="email" placeholder='Email id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
