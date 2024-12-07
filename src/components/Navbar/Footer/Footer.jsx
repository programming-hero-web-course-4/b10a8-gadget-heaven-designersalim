
const Footer = () => {
    return (
        <div className="bg-white">
            <div className="w-9/12 mx-auto p-10 font-sans">
            <div className="text-center py-5">
                <h2 className="font-bold text-3xl py-3">Gadget Heaven</h2>
                <p className="text-xl text-gray-400">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <hr />
            <div className="flex justify-between w-10/12 mx-auto py-8">
                <div className="flex flex-col gap-4 font-medium text-center text-gray-400">
                    <h2 className="font-bold text-black">Services</h2>
                    <button>Product Support</button>
                    <button>Order Tracking</button>
                    <button>Shipping & Delivery</button>
                    <button>Returns</button>
                </div>
                <div className="flex flex-col gap-4 font-medium text-center text-gray-400">
                    <h2 className="font-bold text-black">Company</h2>
                    <button>About Us</button>
                    <button>Careers</button>
                    <button>Contact</button>
                </div>
                <div className="flex flex-col gap-4 font-medium text-center text-gray-400">
                    <h2 className="font-bold text-black">Legal</h2>
                    <button>Terms of Service</button>
                    <button>Privacy Policy</button>
                    <button>Cookie Policy</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;