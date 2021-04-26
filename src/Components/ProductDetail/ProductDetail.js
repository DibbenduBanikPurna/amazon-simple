import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Header/Product/Product';
import CircularProgress from '@material-ui/core/CircularProgress';
const ProductDetail = () => {
    const [product,setProduct]=useState({})
    document.title="product-detail"
    const [loading,setLoading]=useState(true)
    const {productKey}=useParams()
    useEffect(()=>{
        fetch(`http://localhost:4000/product/${productKey}`)
        .then(res=>res.json())
        .then(data=>
            {
            setProduct(data)
            setLoading(false)
            })

    },[productKey])
 
    return (
        <div>
            { loading ?  <CircularProgress color="secondary" />: 
               
                <Product addToCart={false} product={product}/>
    }
        </div>
    );
};

export default ProductDetail;