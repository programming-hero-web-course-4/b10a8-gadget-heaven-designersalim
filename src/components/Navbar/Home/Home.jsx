import { useEffect, useState } from "react";
import Products from "../../Products/Products";
import Banner from "../../Banner/Banner";
import Categories from "../../Categories/Categories";
import { Outlet } from "react-router-dom";

const Home = () => {

    return (
        <>
            <Banner></Banner>
            <h2 className='text-center text-5xl font-bold py-10 text-purple-500'>Explore Cutting-Edge Gadgets</h2>
            <div className='grid grid-cols-5 w-9/12 mx-auto'>
                <div className='flex flex-col p-6 rounded-xl mt-6 bg-white h-[500px]'>
                    <Categories></Categories>
                </div>
                <div className='grid grid-cols-3 gap-4  col-span-4 p-6 mx-auto'>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default Home;