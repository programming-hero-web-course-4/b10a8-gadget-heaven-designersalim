import React from 'react';
import { RxCross2 } from "react-icons/rx";

const CartProducts = ({ product }) => {

    const { product_id, product_title, description, price, product_image } = product

    return (
        <div className='flex p-8 bg-white justify-between rounded-xl'>
            <div className='flex'>
            <div>
                <img className='h-40 w-60 object-cover border rounded-xl' src={product_image} alt="" />
            </div>
            <div className='pl-5 flex flex-col gap-5'>
                <h2 className='text-2xl font-bold'>{product_title}</h2>
                <p className='text-xl'>{description}</p>
                <h3 className='text-2xl font-bold'>Price: {price}</h3>
            </div>
            </div>
            <button >
                <div className='p-2 rounded-full border text-xl text-red-500 border-red-500'><RxCross2 /></div>
            </button>
        </div>
    );
};

export default CartProducts;