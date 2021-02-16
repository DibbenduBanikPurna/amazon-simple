import React from 'react';

const Cart = (props) => {
    console.log(props)
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
           
            <h5>Items Ordered:<span>{props.item.length}</span></h5>
            <p><strong>Product - prize: ${price}</strong></p>
            <p>Shipping Cost: ${cost}</p>
            <p>Tax + Vat : ${tax}</p>
            <h4>Total - Prize: {total +cost +tax}</h4>
            <h1>Selected items:</h1>
            {
                cart.map(cart=>{
                    return <p><small>  {cart.name}</small>
                    </p>
                })
            }

        </div>
    );
};

export default Cart;