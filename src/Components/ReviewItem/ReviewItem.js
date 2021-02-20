import React from 'react';


const ReviewItem = (props) => {
   
    const {name,quantity,price}=props.cart;
    
    return (
       
        <div>
         <h4 className="product-name">Name:{name}</h4>
         <h5>quantity:{quantity}</h5>
         <h3>Price:{price}</h3>
         <button onClick={()=>props.removeProduct(props.cart.key)}  className="main-button">Remove</button>
        </div>
        
        
    );
};

export default ReviewItem;