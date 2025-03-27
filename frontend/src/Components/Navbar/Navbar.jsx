import React,{useContext, useRef, useState} from 'react'
import './Navbar.css'
import newlogo from '../Assets/newlogo.jpeg'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
  const[menu,setMenu]=useState("shop");
 const {getTotalCartItems}=useContext(ShopContext);

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={newlogo} alt="" />
            <p>MILEAGE</p>
            </div>
            
            <ul  className='nav-menu'>
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}}to='/'>Store</Link> {menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}}to='/mens'>Male</Link>{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}}to='/womens'>Female</Link> {menu==="womens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}}to='/kids'>Children</Link> {menu==="kids"?<hr/>:<></>}</li>
               
            </ul>
            <div className='nav-login-cart'>
              {localStorage.getItem('auth-token')
              ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>:
                <Link to='/login'><button>Sign-Up</button></Link> }
                <Link to='/cart'><img src={cart_icon} alt="" /></Link> 
                <div className='nav-cart-count'>{getTotalCartItems()}</div>
            </div>
    </div>
  )
}

export default Navbar
