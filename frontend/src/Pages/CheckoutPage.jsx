// CheckoutPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        address: '',
        city: '',
        // Add more fields as needed
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Process form data (e.g., send to backend)
        console.log(formData);
        // Redirect to confirmation page or further processing
        navigate('/confirmation');
    };

    return (
        <div>
            <h1>Checkout</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Address:
                    <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    City:
                    <input type="text" name="city" value={formData.city} onChange={handleChange} required />
                </label>
                <br />
                {/* Add more form fields for shipment details */}
                <button type="submit">Place Order</button>
            </form>
        </div>
    );
};

export default CheckoutPage;

