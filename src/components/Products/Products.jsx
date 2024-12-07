import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Categories from '../Categories/Categories';

const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])


    return (
        <div className='grid grid-cols-3 gap-4  col-span-4 p-6 mx-auto'>
            {
                products.map(product => <Product key={product.product_id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;