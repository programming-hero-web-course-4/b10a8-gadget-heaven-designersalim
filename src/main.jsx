import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './components/Roots/Roots';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Navbar/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Dashboard from './components/Dashboard/Dashboard';
import Products from './components/Products/Products';
import ProductCard from './components/ProductCard/ProductCard';
import ProductDetails from './components/ProductDetails/ProductDetails';
import CartDetails from './components/CartDetails/CartDetails';
import Wishlist from './components/Wishlist/Wishlist';
import AboutUs from './components/AboutUs/AboutUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('../categories.json'),
        children: [
          {
            path: '/',
            element: <ProductCard></ProductCard>,
            loader: ()=> fetch('../products.json'),
          },
          {
            path: '/category/:categoryPath',
            element: <ProductCard></ProductCard>,
            loader: ()=> fetch('../products.json'),
          },
        ]
      },
      {
        path: '/details/:productID',
        element: <ProductDetails></ProductDetails>,
        loader: ()=> fetch('../products.json'),
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
        loader: ()=> fetch('../products.json')
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: '/dashboard/Cart',
            element: <CartDetails></CartDetails>,
            loader: ()=> fetch('../products.json')
          },
          {
            path: '/dashboard/Wishlist',
            element: <Wishlist></Wishlist>,
            loader: ()=> fetch('../products.json')
          }
        ]
      },
      {
        path: '/about_us',
        element: <AboutUs></AboutUs>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
