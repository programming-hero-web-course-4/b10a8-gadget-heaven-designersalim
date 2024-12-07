import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { TbShoppingCart } from "react-icons/tb";
import { BiHeart } from "react-icons/bi";
import DetailsPage from "../DetailsPage/DetailsPage"
import { addToCart } from '../Utilites/addtoCart';
import { addWishList } from '../Utilites/addStoredWishList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {

    const { productID } = useParams();

    const ProductData = useLoaderData([]);

    const [details, setDetails] = useState([]);

    useEffect(() => {
        const findProducts = [...ProductData].find(item => item.product_id === productID)
        setDetails(findProducts)
    }, []);


    const handleMarkAsCart = (id) => {
        addToCart(id)
    }

    const handleAsWishList = (id) =>{
        addWishList(id)
    }

    const { product_id, product_title, product_image, category, price, description, Specification, availability, rating } = details

    return (
        <div>
            <div className="bg-purple-600">
                <div className="w-9/12 mx-auto py-8 pb-80">
                    <h2 className="text-7xl font-bold text-center text-white my-6 leading-tight font-sans">Product Detials</h2>
                    <p className="text-center w-8/12 mx-auto text-white text-xl">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
            </div>
            <div className="mt-[-260px] mb-20 w-8/12 mx-auto border-white rounded-xl">
                <div className="bg-white p-6 rounded-xl">
                    <div className='flex'>
                        <img className="rounded-xl max-w-xl border-2" src={product_image} alt="" />
                        <div className='flex flex-col gap-3 ml-5'>
                            <h2 className='font-bold text-2xl'>{product_title}</h2>
                            <h3 className='font-bold text-xl'>Price: <span className='font-medium'>{price}</span></h3>
                            <button className='rounded-full max-w-32 bg-lime-100 px-4 py-2 border border-lime-700'>In Stock</button>
                            <p>{description}</p>
                            <h3 className='font-bold'>Specification:</h3>
                            <ul>{Specification && Array.isArray(Specification) && Specification.length > 0 ? (
                                Specification.map((spec, idx) => (
                                    <li key={idx}>{spec}</li>
                                ))
                            ) : (
                                <p>No specifications available.</p>
                            )}</ul>
                            <h3 className='font-bold'>Rating</h3>
                            <div className='flex'>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <p className='px-3 py-1 bg-gray-200 ml-2 rounded-full'>{rating}</p>
                            </div>
                            <div className='flex gap-5'>
                                <button onClick={()=>handleMarkAsCart(product_id)} className='bg-purple-600 max-w-40 px-5 py-2 rounded-full'>
                                    <div className='flex gap-3 items-center'>
                                        <h4 className='font-bold text-white'>Add to Card</h4>
                                        <TbShoppingCart className='font-bold text-white' />
                                    </div>
                                </button>
                                <button onClick={()=>handleAsWishList(product_id)} className='border border-purple-600 p-3 rounded-full'>
                                    <BiHeart className='text-2xl text-purple-600' />
                                </button>
                                <ToastContainer></ToastContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;