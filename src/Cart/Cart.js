import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <h3>Md. Ashraful Morsalin</h3>
            <p>Activity time {cart.length}</p>
        </div>
    );
};

export default Cart;