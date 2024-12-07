import React from 'react';
import { BarChart, Bar, CartesianGrid,Legend , XAxis, YAxis, Tooltip } from 'recharts';


const Rechart = ({ product }) => {

    const { product_id, product_title, product_image, price } = product

    return (
        <div>
            <h2>Rechart Connected</h2>
            <BarChart width={730} height={250} data={product}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={product_title} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey={price} fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
        </div>
    );
};

export default Rechart;