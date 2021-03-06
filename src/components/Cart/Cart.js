import React from 'react';


const Cart = (props) => {
    const cart = props.cart
    const total = cart.reduce((total, prd) =>total+prd.price,0);

    return (
        <div>
            <h4>Items Ordered:{cart.length}</h4>
            <h4>Total Price:{Math.round(total)}</h4>
            <h4>Tax:{Math.round(total*0.1)}</h4>
            <h4>Grand Total:{Math.round(total+total*0.1)}</h4>
           {
               props.children
           }
        </div>
    );
};

export default Cart;