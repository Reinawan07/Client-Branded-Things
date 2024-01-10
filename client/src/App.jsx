import { Outlet } from "react-router-dom"
import NavbarPublic from "./components/NavbarPublic"
import NavbarCms from "./components/NavbarCms"


function NavbarPubSite(){
  return (
    <>
      <NavbarPublic/>
      <Outlet/>

    </>
  )
}

function NavbarCmsSite() {
  return (
    <>
      <NavbarCms/>
      <Outlet />
    </>
  )
}

export {NavbarPubSite, NavbarCmsSite}
