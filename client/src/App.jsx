import { Outlet } from "react-router-dom"
import NavbarPub from "./components/Navbar"


function Navbar(){
  return (
    <>
      <NavbarPub/>
      <Outlet/>

    </>
  )
}

export {Navbar}
