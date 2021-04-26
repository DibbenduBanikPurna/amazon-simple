import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { addToDatabaseCart, getDatabaseCart } from '../../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';
const Shop = () => {
   document.title="shop-more"
 const [products,setProduct]=useState([])
const [cart,setCart]=useState([])
const [search,setSearch]=useState('')

        useEffect(()=>{
            fetch('http://localhost:4000/products?search='+search)
            .then(res=>res.json())
            .then(data=>setProduct(data))

        },[search])

    useEffect(()=>{
        const savedCart=getDatabaseCart()
        const productKeys=Object.keys(savedCart)
       // console.log(products,productKeys)
       fetch('http://localhost:4000/productByKeys',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(productKeys)
      })
      .then(res=>res.json())
      .then(data=>setCart(data))
    },[])

    
 function handleAddProduct(product){
    const sameProduct=cart.find(pd=>pd.key===product.key)
   
    let count=1;
    let newCart;
    if(sameProduct){
        count=sameProduct.quantity +1
        sameProduct.quantity=count
        const others=cart.filter(pd=>pd.key!==product.key)
        newCart=([...others,sameProduct])
    }
    else{
        product.quantity=1;
        newCart=[...cart,product]
    }
     
    setCart(newCart)
    
    
    addToDatabaseCart(product.key,count)
    
 }
 const handleSearch=(e)=>{
    setSearch(e.target.value)
 }
    return (
        <div className="shop-container">
            <div className="product-container">
                <input className="product-search" onBlur={handleSearch} type="text" placeholder="search-here"/>
                {products.length===0 &&  <CircularProgress color="secondary" />}
            {products.map(product=>{
                      return <Product key={product.key}
                       addToCart={true}  
                       handleAddProduct={handleAddProduct} 
                       product={product}/>
                  })}

            </div>
            <div className="cart-container">
               <Cart cart={cart}>
               
                <Link to="/review">
            <button className="main-button">Review-Order</button>  
            </Link>
            

                    </Cart> 
               
            </div>
                  
                 
        </div>
    );
};

export default Shop;            