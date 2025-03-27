import React, { useState, useContext, useEffect } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
    const [showCheckoutModal, setShowCheckoutModal] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [shippingDetails, setShippingDetails] = useState({
        name: '',
        contactNumber: '',
        address: ''
    });
    const [selectedSize, setSelectedSize] = useState({}); // State for selected size

    const handleCheckout = () => {
        setShowCheckoutModal(true);
    };

    const handleSubmitOrder = () => {
        setTimeout(() => {
            setShowSuccessMessage(true);
            setShowCheckoutModal(false);
        }, 1000);
    };

    useEffect(() => {
        let successTimer;
        if (showSuccessMessage) {
            successTimer = setTimeout(() => {
                setShowSuccessMessage(false);
                window.location.href = '/'; // Redirect to home page after message disappears
            }, 3000);
        }
        return () => clearTimeout(successTimer);
    }, [showSuccessMessage]);

    const handleSizeChange = (e, productId) => {
        const size = e.target.value;
        setSelectedSize({ ...selectedSize, [productId]: size });
    };

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
    <p>Items</p>
    <p>Name</p>
    <p>Size</p>
    <p>Cost</p>
    <p>Amount</p>
    <p>Sum</p>
    <p>Delete</p>
</div>

            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt="" className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <select
    value={selectedSize[e.id] || ''}
    onChange={(event) => handleSizeChange(event, e.id)}
>
    <option value="">Select size</option>
    {[...Array(8)].map((_, index) => ( // Create an array of 8 elements (0 to 7)
        <option key={index + 3} value={index + 3}>{index + 3}</option> // Map over the array to generate options from 3 to 10
    ))}
</select>


                                <p>Rs {e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>Rs {e.new_price * cartItems[e.id]}</p>
                                <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Total Cost</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Sub-total</p>
                            <p>Rs {getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Delivery Charge</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>Rs {getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button onClick={handleCheckout}>CHECK-OUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a Coupon-Code, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='Coupon-Code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
            {showCheckoutModal && (
                <div className="checkout-modal">
                    <h2>Shipping Details</h2>
                    <input
                        type="text"
                        placeholder="Name"
                        value={shippingDetails.name}
                        onChange={(e) => setShippingDetails({ ...shippingDetails, name: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Contact Number"
                        value={shippingDetails.contactNumber}
                        onChange={(e) => setShippingDetails({ ...shippingDetails, contactNumber: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Address"
                        value={shippingDetails.address}
                        onChange={(e) => setShippingDetails({ ...shippingDetails, address: e.target.value })}
                    />
                    <button onClick={handleSubmitOrder}>Submit Order</button>
                </div>
            )}
            {showSuccessMessage && (
                <div className="success-message">
                    <p>Your order has been successfully placed!</p>
                </div>
            )}
        </div>
    );
};

export default CartItems;


