import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="bg-purple-600">
            <div className="w-9/12 mx-auto py-24 pb-96">
            <h2 className="text-7xl font-bold text-center text-white my-6 leading-tight font-sans">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h2>
            <p className="text-center w-7/12 mx-auto text-white text-xl">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            <Link to={'/dashboard'}><button className="bg-white px-5 py-3 mx-auto justify-center flex my-10 font-bold text-2xl text-purple-500 rounded-full">Shop Now</button></Link>
            </div>
            </div>
            <div className="border-2 mt-[-380px] w-8/12 mx-auto border-white rounded-xl">
                <div className="bg-white/[0.25] p-6 rounded-xl">
                    <div>
                        <img className="rounded-xl" src="../banner.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;