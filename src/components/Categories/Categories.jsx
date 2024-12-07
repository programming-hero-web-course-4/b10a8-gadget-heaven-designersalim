import React, { useEffect } from 'react';
import { useState } from 'react';
import Category from '../Category/Category';
import { Navigate, useLoaderData, useNavigate, useParams } from 'react-router-dom';

const Categories = () => {

    const categories = useLoaderData()

    const navigate = useNavigate()

    const isActiveAllProducts = location.pathname === '/';
    
    return (
        <>
        <div className='flex flex-col gap-4'>
            <button onClick={() => navigate('/')} 
                    className={`px-5 py-2 rounded-full text-xl text-center font-medium ${isActiveAllProducts ? 'bg-purple-400' : 'bg-gray-200'}`}>All Products</button>
            {categories.map(category =><Category key={category.category_id} category={category}></Category>)}
        </div>
        </>
    );
};

export default Categories;