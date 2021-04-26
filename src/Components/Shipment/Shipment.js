import React, { useContext, useState } from 'react';
import './Shipment.css'
import {useForm} from 'react-hook-form'
import { userContext } from '../../App';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
const Shipment = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser,setLoggedInUser]=useContext(userContext)
    const [shippingData,setShippingData]=useState('')
   

    const onSubmit=(data)=>{
    setShippingData(data)
     
    }
    const handlePaymentSuccess=(paymentId)=>{
      const savedCart=getDatabaseCart()
      const orderDetail={...loggedInUser, 
        products:savedCart, 
        shipment:shippingData,
        paymentId,
        date:new Date().toLocaleDateString()} 
      fetch('http://localhost:4000/addOrder',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(orderDetail)
      })
      .then(res=>res.json())
      .then(data=>{
        processOrder()
        alert('order success')
      })

    }
  
   
    return (
     <div className="row">
       <div style={{display:shippingData ? 'none' : 'block'}} className="col-md-6">
         
      <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
    
    <input name="name" defaultValue={loggedInUser.name} ref={register} placeholder="Your Name" />
    {errors.name && <span className="error">name is required</span>}
   
    <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
    {errors.email && <span className="error">email is required</span>}
   
    <input name="address" ref={register({ required: true })} placeholder="Your Address" />
    {errors.address && <span className="error">Address is required</span>}
    
    <input name="phone" ref={register({ required: true })} placeholder="Your Phone No" />
    {errors.phone && <span className="error">phone Number is required</span>}
    
    <input type="submit" />
  </form>
       </div>
       <div style={{display:shippingData? 'block' : 'none'}} className="col-md-6 mt-5 pt-5">
         <h2>Pay for Me</h2>
         <ProcessPayment handlePaymentSuccess={handlePaymentSuccess}/>
       </div>
     </div>
    );
};

export default Shipment;