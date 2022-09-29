import React, { createRef, useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
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

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedActivity = activities.find(activity => activity.id === id);
            // console.log(addedActivity);

            if (addedActivity) {
                const quantity = storedCart[id];
                addedActivity.quantity = quantity;
                savedCart.push(addedActivity);
            }
        }
        setCart(savedCart);

    }, [activities])
    const handleAddToList = (activity) => {
        // console.log(activity);
        let newCart = [];
        const exists = cart.find(selectedActivity => selectedActivity.id === activity.id);
        if (!exists) {
            activity.quantity = 1;
            newCart = [...cart, activity];
        }
        else {
            const rest = cart.filter(selectedActivity => selectedActivity.id !== activity.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        // const newCart = [...cart, activity];
        setCart(newCart);
        addToDb(activity.id);
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Work;