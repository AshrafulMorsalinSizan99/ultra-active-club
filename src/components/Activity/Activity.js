import React from 'react';
import './Activity.css'
const Activity = (props) => {
    const { handleAddToList } = props;
    const { img, name, age, time } = props.activity;

    return (
        <div className='activity'>
            <img src={img} alt="" />
            <div className='activity-info'>
                <p className='activity-name'>{name}</p>
                <p>For Age: {age}</p>
                <p>Time required: {time}s</p>
            </div>
            <button onClick={() => props.handleAddToList(props.activity)} className='btn-cart'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Activity;