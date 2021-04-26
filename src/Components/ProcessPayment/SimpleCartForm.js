import React, { useState } from 'react'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

const SimpleCartForm = ({handlePaymentSuccess}) => {
    const [paymentError,setPaymentError]=useState('')
    const [paymentSuccess,setPaymentSuccess]=useState('')
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
  
    event.preventDefault();

    if (!stripe || !elements) {
      
      return;
    }

   
    const cardElement = elements.getElement(CardElement);

    
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message)
      setPaymentSuccess('')
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setPaymentSuccess(paymentMethod)
      setPaymentError('')
        handlePaymentSuccess(paymentMethod.id)
    }
  };

  return (
      <>
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
    {
      paymentError &&   <p className="text-danger">{paymentError}</p>
    }
    {
        paymentSuccess && <p className="text-success">Thank you For Payment</p>
    }
    </>
    
  );
};
export default SimpleCartForm