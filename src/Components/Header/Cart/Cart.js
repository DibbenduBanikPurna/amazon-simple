import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
   
    const cart=props.item
    let price=0;
    let total=0;
    for(let i=0;i<cart.length;i++){
        let element=cart[i]
        price=(element.price)
        total=Math.floor(total + element.price)

    }
    let cost=0;
    if(total>100 && total<1000){
        cost=cost + 5
    }
    
    else if(total >0 && total <100){
        cost=cost + 20
    }
    else if(total>1000){
        cost=0
    }
    const tax=(total/100);
    
    return (
        <div>
            <h4>Order Summary</h4>
           
            <p>Items Ordered:<span>{props.item.length}</span></p>
            <p>Product - prize: ${price}</p>
            <p>Shipping Cost: ${cost}</p>
            <p>Tax + Vat : ${tax}</p>
            <p>Total - Prize: {total +cost +tax}</p>
            <br/>
            <Link to="/review">
            <button className="main-button">Review-Order</button>  
            </Link>

        </div>
    );
};

export default Cart;