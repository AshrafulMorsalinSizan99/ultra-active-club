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
            <h3>Md. Ashraful Morsalin </h3>
            <h4>Add A Break</h4>
            <div>
                <button
                >10s</button>
                <button>20s</button>
                <button>30s</button>
                <button>40s</button>
                <button>50s</button>
            </div>
            <h4>Activity Details</h4>
            <p>Activity time {total}</p>
        </div>
    );
};

export default Cart;