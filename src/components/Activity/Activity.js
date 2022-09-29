import React from 'react';
import './Activity.css'
const Activity = (props) => {
    const { img, name, age, time } = props.activity;
    return (
        <div className='activity'>
            <img src={img} alt="" />
            <p className='activity-name'>{name}</p>
        </div>
    );
};

export default Activity;