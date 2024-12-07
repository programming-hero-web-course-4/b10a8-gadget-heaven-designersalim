import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { getCartList } from '../Utilites/addtoCart';
import CartProducts from './CartProducts/CartProducts';
import { BsSortAlphaDown } from "react-icons/bs";
import { TbDisabled } from 'react-icons/tb';

const CartDetails = () => {

    const navigate = useNavigate();

    const allProducts = useLoaderData();
    const [products, setProduct] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const storedCartList = getCartList();

        if (storedCartList && storedCartList.length > 0) {
            const matchedProducts = allProducts.filter(product =>
                storedCartList.includes(product.product_id)
            );
            setProduct(matchedProducts);
        }
    }, [allProducts]);

    const totalPrice = products.reduce((total, product) => total + parseFloat(product.price), 0);

    const handlePurchase = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        const removeItems = localStorage.removeItem('add-to-cart')
        setProduct(removeItems)
    };

    const handleSort = () => {
        const sorted = [...products].sort((a, b) => b.price - a.price);
        setProduct(sorted);
    };

    return (
        <div className='w-9/12 mx-auto my-6'>
            <div className='flex justify-between items-center'>
                <h2 className='font-bold text-2xl'>Cart</h2>
                <div className='flex gap-6 items-center'>
                    <h2 className='font-bold text-2xl'>Total Cost: ${totalPrice.toFixed(2)}</h2>
                    <button className='px-6 py-3 rounded-full font-bold border-2 border-purple-600'>
                        <div className='flex items-center gap-2'>
                            <h2 onClick={handleSort} className='font-bold text-xl'>Sort by Price</h2>
                            <BsSortAlphaDown className='text-2xl text-purple-600' />
                        </div>
                    </button>
                    <button onClick={handlePurchase} className={`px-6 py-3 rounded-full font-bold text-xl text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                     ${products.length > 0 ? 'cursor-pointer' : 'cursor-not-allowed'}`} disabled={products.length === 0}>Purchase</button>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <div className='font-bold text-center'>
                            <img className='h-40 flex justify-center mx-auto' src="../payment.png" alt="" />
                            <h2 className='text-2xl'>Payment Successfully</h2>
                            <hr className='my-4 border-2' />
                            <p className='text-xl my-5'>Thanks for purchasing.</p>
                            <p>Total: ${totalPrice.toFixed(2)}</p>
                        </div>
                        <div className="flex justify-center w-full gap-4 mt-8">
                            <button
                                onClick={() => { handleCloseModal(); navigate('/') }}
                                className="px-4 py-2 w-full bg-gray-300 text-black rounded-full">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className='flex flex-col gap-5 mt-10'>
                {
                    products.map(product => <CartProducts key={product.product_id} product={product}></CartProducts>)
                }
            </div>
        </div>
    );
};

export default CartDetails;
