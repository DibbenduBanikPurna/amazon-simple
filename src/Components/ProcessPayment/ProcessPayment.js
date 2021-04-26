import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCartForm from './SimpleCartForm';

const stripePromise = loadStripe(

    'pk_test_51IYhuLLe0tLd1B4BtzCae3CHI2hZBCFIIo0Qx13THJOPlsWVTlwP9hMSbdy8MZ2Vsf1CXHQfGmhQDEOo5UmhOn7J00zGfn3UKc'
    )
const ProcessPayment = ({handlePaymentSuccess}) => {
  
    return (
        <Elements stripe={stripePromise}>

        <SimpleCartForm handlePaymentSuccess={handlePaymentSuccess}/>


      </Elements>
    );
};

export default ProcessPayment;