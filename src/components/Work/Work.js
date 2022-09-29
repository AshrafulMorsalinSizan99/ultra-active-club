import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Work.css'
const Work = () => {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])
    return (
        <div className='work-container'>
            <div className="activities-container">
                {
                    activities.map(activity => <Activity
                        key={activity.id}
                        activity={activity}

                    >
                    </Activity>)
                }
            </div>
            <div className="cart-container">
                <h3>Cart Summary</h3>
            </div>
        </div>
    );
};

export default Work;