import React from 'react';
import { NavLink } from 'react-router-dom';

const LinkPath = ({route}) => {

    const {name, path} = route;

    return (
        <NavLink className={({isActive}) => `text-xl px-8 gap-6 py-2 font-bold border-2 border-white rounded-full ${isActive? 'bg-white text-purple-600' : 'text-white'}`} to={path}>{name}</NavLink>
    );
};

export default LinkPath;