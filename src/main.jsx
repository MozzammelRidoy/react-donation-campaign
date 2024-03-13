import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import ErrorPage from './Componant/ErrorPage/ErrorPage';
import Donation from './Componant/Donation/Donation';
import Banner from './Componant/Banner/Banner';
import Statistics from './Componant/Statistics/Statistics';
import Details from './Componant/Details/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage></ErrorPage>, 
    children: [
      {
        path: '/',
        element: <Banner></Banner>,
      },
      
      
     {
      path: "/donation",
      element: <Donation></Donation>,
      loader: () => fetch('donation.json')
     },
     {
      path: '/statistics',
      element: <Statistics></Statistics>,
      loader: () => fetch('donation.json')
     }, 
     {
      path: '/details/:id',
      element: <Details></Details>,
      loader: () => fetch('donation.json')
     }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
