import React, { createRef, useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Work.css'
const Work = () => {
    const [activities, setActivities] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, []);
    const handleAddToList = (activity) => {
        console.log(activity);
        const newCart = [...cart, activity];
        setCart(newCart);
    }
    return (
        <div className='work-container'>
            <div className="activities-container">
                {
                    activities.map(activity => <Activity
                        key={activity.id}
                        activity={activity}
                        handleAddToList={handleAddToList}
                    >
                    </Activity>)
                }
            </div>
            <div className="cart-container">
                <h3>Md. Ashraful Morsalin</h3>
                <p>Activity time {cart.length}</p>
            </div>
        </div>
    );
};

export default Work;