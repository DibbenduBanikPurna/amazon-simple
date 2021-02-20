import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Header/Cart/Cart';
import {Link} from 'react-router-dom'
import ReviewItem from '../ReviewItem/ReviewItem';
import Sleep from '../../images/sleep.jpg'

const Review = () => {
    const [cart,setCart]=useState([])
    const [orderPlaced,setOrderPlaced]=useState(false)
    const removeProduct=(productKey)=>{
      
        const newCart=cart.filter(pd=>pd.key!==productKey)
        removeFromDatabaseCart(productKey)
       setCart(newCart)

     }
     const handlePlaceOrder=()=>{
       console.log('clicked')
       setCart([])
       setOrderPlaced(true)
       processOrder()
     }
    useEffect(()=>{
      const savedCart=getDatabaseCart()
      const productKeys=Object.keys(savedCart)
     
      
      const cartProducts=productKeys.map(key=>{

          let product=fakeData.find(pd=> pd.key===key);
          product.quantity=savedCart[key];
        return product
      })
      setCart(cartProducts);
    },[])
    
    return (
      <div className="shop-container">
        <div className="product-container">
          
           {
               cart.map(cart=>{
                return <ReviewItem key={cart.key}  removeProduct={removeProduct}  cart={cart}/>

               })
             
           }
             {
                 orderPlaced && <img style={{width:'450px'}} src={Sleep} alt=""/>
               }
           
        </div>
        <div className="cart-container">
       <Cart cart={cart}>
       <Link to="/review">
            <button onClick={handlePlaceOrder} className="main-button">Place-Order</button>  
            </Link>
       </Cart>
        </div>
        </div>
    );
};

export default Review;