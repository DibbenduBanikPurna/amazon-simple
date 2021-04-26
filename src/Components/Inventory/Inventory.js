import React, { useState } from 'react';


const Inventory = () => {

    document.title="inventory"
    const inStyle={
        textAlign:'center',
        color:'red'
    }
    
    
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        const product={}
        fetch('http://localhost:4000/addProduct',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(product)
        })
    }
    return (
        <div>
           <form onSubmit={handleSubmit}>
            <p><span>Name:</span><input type="text"/> </p>
            <p><span>Price:</span><input type="text"/> </p>
            <p><span>quantity:</span><input type="text"/> </p>
            <p><span>Product Image</span><input type="file"/> </p>
            <button>Add Product</button>
           </form>
           
        </div>
    );
};

export default Inventory;