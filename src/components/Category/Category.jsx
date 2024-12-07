import React from 'react';
import { NavLink } from 'react-router-dom';

const Category = ({category}) => {

    const{path, category_id, category_name} = category

    return (
        <>
        
        <NavLink to={`/category/${path}`} className={({isActive}) => `px-5 py-2 bg-gray-200 rounded-full text-xl text-center font-medium ${isActive? 'bg-purple-400' : ''}`}>{category_name}</NavLink>
        </>
    );
};

export default Category;