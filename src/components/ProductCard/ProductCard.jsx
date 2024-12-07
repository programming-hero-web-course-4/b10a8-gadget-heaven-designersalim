import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Product from '../Product/Product';

const ProductCard = () => {
    
    const { categoryPath } = useParams()
    
    const data = useLoaderData()

    const [products, setProducts] = useState([])
    
    useEffect(() =>{
        if(categoryPath){
            const filterCategoriesData = [...data].filter(product=> product.category === categoryPath)
        setProducts(filterCategoriesData)
        }
        else(
            setProducts(data)
        )
    },[data, categoryPath])

    return (
        <div className='grid grid-cols-3 gap-4  col-span-4 p-6 mx-auto'>
            {
                products.map(product => <Product key={product.product_id} product={product}></Product>)
            }
        </div>
    );
};

export default ProductCard;