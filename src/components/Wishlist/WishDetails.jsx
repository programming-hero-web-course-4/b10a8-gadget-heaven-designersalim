import React from 'react';
import { RxCross2 } from "react-icons/rx";
import { TbShoppingCart } from "react-icons/tb";
import { addToCart } from '../Utilites/addtoCart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const WishDetails = ({ product }) => {

    const handleMarkAsCart = (id) => {
        addToCart(id);
    }

    const handleRmvProduct = (id) => {
    }

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
                    <button onClick={(e) => {handleMarkAsCart(product_id); handleRmvProduct(product_id)}} className='bg-purple-600 max-w-40 px-5 py-2 rounded-full'>
                    <div className='flex gap-3 items-center'>
                        <h4 className='font-bold text-white'>Add to Card</h4>
                        <TbShoppingCart className='font-bold text-white' />
                    </div>
                </button>
                <ToastContainer></ToastContainer>
                </div>
            </div>
            <button >
                <div className='p-2 rounded-full border text-xl text-red-500 border-red-500'><RxCross2 /></div>
            </button>
        </div>
    );
};

export default WishDetails;