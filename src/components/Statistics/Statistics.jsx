import { BiBarChart } from "react-icons/bi";
import { useLoaderData } from "react-router-dom";
import Rechart from "../Rechart/Rechart";
import { BarChart, Bar, CartesianGrid,Legend , XAxis, YAxis, Tooltip } from 'recharts';



const Statistics = () => {

    const products = useLoaderData()

    console.log(products)

    const {product_id, product_title, product_image,  price} = products

    return (
        <div>
            <div className="bg-purple-600">
                <div className="w-9/12 mx-auto py-8">
                <h2 className="text-center font-bold text-3xl text-white">Statistics</h2>
                <p className="text-center text-lg w-7/12 text-white mx-auto py-4">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
            </div>
            <div className="w-9/12 py-16 mx-auto">
            <BarChart width={1280} height={600} data={products}>
                <CartesianGrid strokeDasharray="2 2" />
                <XAxis dataKey="product_title" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="price" fill="#8884d8" />
                <Bar dataKey="rating" fill="#82ca9d" />
            </BarChart>
            </div>
        </div>
        
    );
};

export default Statistics;