import React, { useEffect, useState } from 'react';


import './Cart.css'


const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const activity of cart) {
        total = total + activity.time;
    }
    // const notify = () => {
    //     toast('Successfully completed the activities')
    // }

    return (
        <div className='cart'>
            <h3>Md. Ashraful Morsalin </h3>
            <div className='info'>
                <div>
                    <h2>75</h2>
                    <p>Weight</p>
                </div>
                <div>
                    <h2>6.5</h2>
                    <p>Height</p>
                </div>
                <div>
                    <h2>25</h2>
                    <p>Age</p>
                </div>
            </div>
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
            <h4>Break time </h4>
            <button className='btn'><p>Activity Completed</p></button>
        </div >
    );
};

export default Cart;