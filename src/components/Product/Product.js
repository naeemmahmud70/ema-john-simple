import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'



const Product = (props) => {
    const { img, name, seller, price, stock, key } = props.product
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4> <Link to={"product/" + key}>{name}</Link></h4><br />
                <p>by:{seller}</p><br />
                <p>Price:{price}</p><br />
                <p><small>Only {stock} left in stock.</small></p>
                {props.showAddToCart && <button onClick={() => props.handleAddProduct(props.product)}>add to cart</button>}
            </div>
        </div>
    );
};

export default Product;