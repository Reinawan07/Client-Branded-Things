import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, redirect, RouterProvider, } from "react-router-dom";
import HomePublic from './pages/publicSite/HomePublic';
import HomeDetailPublic from './pages/publicSite/HomeDetailPublic';
import LoginPage from './pages/cmsSite/LoginPage';
import ListEntitasUtama from './pages/cmsSite/ListEntitasUtama';
import { NavbarCmsSite, NavbarPubSite } from './App';
import AddStaff from './pages/cmsSite/AddStaff';
import UploadImage from './pages/cmsSite/UploadImg';
import ListEntitasKedua from './pages/cmsSite/LisEntitasKedua';
import FormProduct from './pages/cmsSite/FormProduct';

const authCMS = () => {
  const access_token = localStorage.access_token;
  if (!access_token){
    throw redirect("/login");
  }
  return null;
}

const authLogin = () => {
  const access_token = localStorage.access_token;
  if (access_token){
    throw redirect("/listproducts");
  }
  return null;
}

const router = createBrowserRouter([
  {
    element: <NavbarPubSite />,
    children: [
      {
        path: "/",
        element: <HomePublic />,
        loader: authLogin
      },
      {
        path: "/detail/:id",
        element: <HomeDetailPublic />,
        loader: authLogin
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    loader: authLogin
  },

  {
    element: <NavbarCmsSite />,
    children: [
      {
        path: "/listproducts",
        element: <ListEntitasUtama />,
        loader: authCMS
      },
      {
        path: "/listcategory",
        element: <ListEntitasKedua />,
        loader: authCMS
      },
      {
        path: "/create",
        element: <FormProduct />,
        loader: authCMS
      },
      {
        path: "/edit/:id",
        element: <FormProduct />,
        loader: authCMS
      },
      {
        path: "/add-staff",
        element: <AddStaff />,
        loader: authCMS
      },
      {
        path: "/upload/:id",
        element: <UploadImage />,
        loader: authCMS
      },
    ]
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
