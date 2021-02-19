import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Header/Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart,setCart]=useState([])
    useEffect(()=>{
      const savedCart=getDatabaseCart()
      const productKeys=Object.keys(savedCart)
     
      
      const cartProducts=productKeys.map(key=>{
          const product=fakeData.find(pd=>pd.key=productKeys)
          product.quantity=savedCart[key];
          
          return product
      })
      setCart(cartProducts)
    },[])
    return (
        <div>
           <h2>Cart Items: {cart.length}</h2>
           {
               cart.map(cart=>{
                return <ReviewItem cart={cart}/>

               })
           }
           
        </div>
    );
};

export default Review;