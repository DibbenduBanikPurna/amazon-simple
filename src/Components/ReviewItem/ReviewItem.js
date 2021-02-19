import React from 'react';

const ReviewItem = (props) => {
    console.log(props)
    const {name,quantity}=props.cart;
    const reviewStyle={
        borderBottom:'2px solid gray',
        marginBottom:'5px',
        paddingBottom:'5px'
    }
    return (
        <div style={reviewStyle} className="review-item">
         <h4 className="product-name">Name:{name}</h4>
         <h5>quantity:{quantity}</h5>
         <button className="main-button">Remove</button>
        </div>
    );
};

export default ReviewItem;