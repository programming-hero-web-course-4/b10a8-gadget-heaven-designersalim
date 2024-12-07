import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer/Footer";


const Roots = () => {
    return (
        <div className="bg-gray-100">
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-545px)]">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Roots;