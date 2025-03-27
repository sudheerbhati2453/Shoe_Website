import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="description-nav-box">Details</div>
        <div className="description-nav-box fade">Reviews (22)</div>
      </div>
      <div className="descriptionbox-description">
        <p>The e-commerce shoe website offers a diverse range of top-quality footwear, 
            ensuring a seamless shopping experience with user-friendly features and reliable services. 
            Regular updates and promotions keep customers engaged, making it their preferred destination
             for stylish and dependable shoes.</p>
             <p>The e-commerce shoe website provides top-quality footwear, seamless shopping, regular updates, and hassle-free returns, making it the go-to destination for stylish shoes with confidence.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
