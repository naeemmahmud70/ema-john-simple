import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, key} = props.product
    return (
        <div>
           <h4>{name}</h4>
           <h3>Quantity{quantity}</h3>
           <button onClick={()=>props.removeProduct(key)} >Remove</button>
        </div>
    );
};

export default ReviewItem;