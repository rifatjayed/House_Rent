import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Pages/Home.jsx';
import House from './components/House.jsx';
import PropertyDetails from './components/Pages/PropertyDetails.jsx';
import HouseContextProvider from './components/HouseContextProvider.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,

      },
      {
        path: "house",
        element: <House></House> ,
      },
      {
        path: "propertyDetails",
        element: <PropertyDetails></PropertyDetails> ,
      }
    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <HouseContextProvider>
      <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
  </HouseContextProvider>

)
