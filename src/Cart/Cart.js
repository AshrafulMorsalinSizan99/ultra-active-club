import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const activity of cart) {
        total = total + activity.time;
    }
    return (
        <div className='cart'>
            <h3>Md. Ashraful Morsalin</h3>
            <p>Activity time {total}</p>
        </div>
    );
};

export default Cart;