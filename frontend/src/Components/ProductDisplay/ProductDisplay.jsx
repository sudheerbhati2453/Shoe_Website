import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
       
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(22)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">Rs {product.old_price}</div>
            <div className="productdisplay-right-price-new">Rs {product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
            Introducing our sleek Black Shoe adorned with subtle golden accents, a fusion of elegance and sophistication.
            Elevate your style with this striking blend of timeless charm and modern luxury.
        </div>
            <div className="productdisplay-right-size">
                <h1>Choose Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                    <div>10</div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>Add To Cart</button>
                <p className='product-right-category'><span>Category :</span>Male,Shoe,Sneakers</p>
                <p className='product-right-category'><span>Tags :</span>Newest, Trendiest</p>
                <br />
                
                

            </div>
      </div>
    </div>
  )
}

export default ProductDisplay 