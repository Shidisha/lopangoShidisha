import { Outlet } from "react-router-dom"
import Header from "../../components/header"
import SideBar from "../../components/sidebar"


const Layout = ()=>{
    return(
        <>
             <Header/>
             <SideBar/> 
             <Outlet/>
        </>
    )
}

export default Layout