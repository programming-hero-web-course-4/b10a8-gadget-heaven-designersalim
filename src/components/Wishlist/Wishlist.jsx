import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getWishList } from '../Utilites/addStoredWishList';
import WishDetails from './WishDetails';

const Wishlist = () => {

    const allProducts = useLoaderData();

    const [product, setProduct] = useState([])

    const storedWishList = getWishList();

    useEffect(()=>{


        if(storedWishList && storedWishList.length >0){

            const matchData = allProducts.filter(product => storedWishList.includes(product.product_id))
            setProduct(matchData)
        }

    },[allProducts])

    

    return (
        <div className='w-9/12 mx-auto flex flex-col gap-5 my-10'>
            {
                product.map(product => <WishDetails key={product.product_id} product={product}></WishDetails>)
            }
        </div>
    );
};

export default Wishlist;