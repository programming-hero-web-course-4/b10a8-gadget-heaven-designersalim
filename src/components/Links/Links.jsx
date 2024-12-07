import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Links = ({route}) => {

    const {name, path} = route;

    const location = useLocation();

   const navActive = location.pathname == '/'

    return (
        <NavLink className={({isActive}) => `text-xl px-5 gap-6 py-2 ${navActive ?
            'text-white hover:bg-purple-800' : ' font-medium text-purple-600 hover:bg-gray-200'} ${isActive? 'border-b-2 border-purple-300 rounded-m' : ''}`} to={path}>{name}</NavLink>
    );
};

export default Links;