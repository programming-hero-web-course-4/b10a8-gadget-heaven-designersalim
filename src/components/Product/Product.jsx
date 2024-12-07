import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Product = ({product}) => {

    const navigate = useNavigate();
    
    const {product_id, product_title, product_image,  price} = product
    
    return (
        <div className='bg-white border-2  p-5 rounded-xl shadow-md'>
            <div className='bg-white'>
            <img className='rounded-xl' src={product_image} alt="Product Image Missing" />
            </div>
            <h2 className='font-bold text-xl py-3'>{product_title}</h2>
            <h5 className='font-bold text-gray-500'>Price: {price}</h5>
            <button onClick={() => navigate(`/details/${product_id}`)} className='px-3 py-2 my-3 mt-10 rounded-full border-2 border-fuchsia-500'>View Details</button>
        </div>
    );
};

export default Product;