import { NavLink, Outlet } from "react-router-dom";
import LinkPath from "./LinkPath";

const Dashboard = () => {

    const routes = [
        {
            name: "Cart",
            id: 1,
            path: "/dashboard/Cart"
        },
        {
            name: "Wishlist",
            id: 2,
            path: "/dashboard/Wishlist"
        },
    ];

    return (
        <div>
            <div className="bg-purple-600">
                <div className="w-9/12 mx-auto py-8">
                <h2 className="text-center font-bold text-3xl text-white">Dashboard</h2>
                <p className="text-center text-lg w-7/12 text-white mx-auto py-4">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="flex justify-center gap-6">
                {
                        routes.map(route => <LinkPath key={route.id} route={route}></LinkPath>)
                }
                </div>
                </div>
            </div>
            <Outlet className="w-9/12 mx-auto"></Outlet>
        </div>
    );
};

export default Dashboard;