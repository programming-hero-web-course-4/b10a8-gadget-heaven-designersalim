
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Links from '../Links/Links';


const Navbar = () => {

    const routes = [
        {
            name: "Home",
            id: 1,
            path: "/"
        },
        {
            name: "Statistics",
            id: 2,
            path: "/statistics"
        },
        {
            name: "Dashboard",
            id: 3,
            path: "/dashboard"
        },
        {
            name: "About Us",
            id: 4,
            path: "/about_us"
        }
    ];
    const [open, setOpen] = useState(true);

    const location = useLocation();

   const navActive = location.pathname == '/'

    const buttons = <>
        <NavLink to={'/dashboard/Cart'}><button className='bg-white p-2 md:p-3 hover:bg-slate-300 text-xl rounded-full'><MdOutlineShoppingCart /></button></NavLink>
        <NavLink to={'/dashboard/Wishlist'}><button className='bg-white p-2 md:p-3 hover:bg-slate-300 text-xl rounded-full'><FaRegHeart /></button></NavLink>
    </>

    return (
        <>
            <div className={`flex justify-between items-center pt-8 px-10 md:px-16 lg:px-24 py-2 ${navActive ? 'bg-purple-600' : 'bg-white'}`}>
                <div>
                    <NavLink to={'/'}><button className={`${navActive ? 'font-bold text-2xl text-white hover:bg-purple-800 py-2 px-3 rounded-lg' : 'font-bold text-2xl text-purple-600 hover:bg-gray-200 py-2 px-3 rounded-lg'}`}>Gadget Heaven</button></NavLink>
                </div>
                {/* Mini Screen/Mobile Phone Code */}
                <div className='md:hidden relative'>
                    <div className='text-2xl' onClick={() => setOpen(!open)}>
                        {
                            open === true ? <GiHamburgerMenu /> : <RxCross2 />
                        }
                    </div>
                    <div className={!open ? 'dropdown-content duration-1000 absolute flex flex-col bg-purple-400 text-white font-bold right-5' : 'hidden'}>
                        {
                            routes.map(route => <Links key={route.id} route={route}></Links>)
                        }
                    </div>
                </div>
                {/* Large Device Code */}
                <div className='hidden md:flex'>
                    {
                        routes.map(route => <Links key={route.id} route={route}></Links>)
                    }
                </div>
                <div className='hidden md:flex gap-8'>
                    {buttons}
                </div>
            </div>
        </>
    );
};

export default Navbar;