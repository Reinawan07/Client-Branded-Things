import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { NavbarPub } from './App';
import HomePublic from './pages/publicSite/HomePublic';


const router = createBrowserRouter([
  {
    element: <NavbarPub />,
    children: [
      {
        path: "/",
        element: <HomePublic />
      },
    ],
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
