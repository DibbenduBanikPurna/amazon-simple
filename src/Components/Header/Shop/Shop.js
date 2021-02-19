import React, { useState } from 'react';
import  fakeData from '../../../fakeData'
import { addToDatabaseCart } from '../../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const first10=fakeData.slice(0,10)
 const [products,setProduct]=useState(first10)
const [item,setItem]=useState([])
 
 function handleAddProduct(product){

     const newCart=[...item,product]
    setItem(newCart)
    const sameProduct=newCart.filter(pd=>pd.key===product.key)
    const count=sameProduct.length
    addToDatabaseCart(product.key,count)
    
 }
    return (
        <div className="shop-container">
            <div className="product-container">
            {products.map(product=>{
                      return <Product addToCart={true} key={product.key} handleAddProduct={handleAddProduct} product={product}/>
                  })}

            </div>
            <div className="cart-container">
               <Cart item={item}/>
            </div>
                  
                 
        </div>
    );
};

export default Shop;            