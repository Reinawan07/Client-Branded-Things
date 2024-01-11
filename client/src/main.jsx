import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import HomePublic from './pages/publicSite/HomePublic';
import HomeDetailPublic from './pages/publicSite/HomeDetailPublic';
import LoginPage from './pages/cmsSite/LoginPage';
import ListEntitasUtama from './pages/cmsSite/ListEntitasUtama';
import { NavbarCmsSite, NavbarPubSite } from './App';
import EditDataProduct from './pages/cmsSite/EditDataProduct';
import AddStaff from './pages/cmsSite/AddStaff';
import UploadImage from './pages/cmsSite/UploadImg';


const router = createBrowserRouter([
  {
    element: <NavbarPubSite />,
    children: [
      {
        path: "/",
        element: <HomePublic />
      },
      {
        path: "/detail/:id",
        element: <HomeDetailPublic />
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    element: <NavbarCmsSite />,
    children: [
      {
        path: "/listproducts",
        element: <ListEntitasUtama />
      },
      {
        path: "/edit/:id",
        element: <EditDataProduct />
      },
      {
        path: "/add-staff",
        element: <AddStaff />
      },
      {
        path: "/upload/:id",
        element: <UploadImage />
      },
    ]
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
