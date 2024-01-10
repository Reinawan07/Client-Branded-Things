import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import HomePublic from './pages/publicSite/HomePublic';
import HomeDetailPublic from './pages/publicSite/HomeDetailPublic';
import LoginPage from './pages/cmsSite/LoginPage';
import ListEntitasUtama from './pages/cmsSite/ListEntitasUtama';
import { NavbarCmsSite, NavbarPubSite } from './App';


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
    ]
  }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
