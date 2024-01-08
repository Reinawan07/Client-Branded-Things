import { Outlet } from "react-router-dom"
import NavbarPublic from "./components/NavbarPublic"


function NavbarPub(){
  return (
    <>
      <NavbarPublic/>
      <Outlet/>

    </>
  )
}

export {NavbarPub}
