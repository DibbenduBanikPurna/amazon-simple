import React from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Header/Product/Product';
import fakeData from '../../fakeData'
const ProductDetail = () => {
    const {productKey}=useParams()
    const product=fakeData.find(pd=>pd.key===productKey)
    return (
        <div>
                <h2>Your product  Details</h2>
                <Product addToCart={false} product={product}/>
        </div>
    );
};

export default ProductDetail;