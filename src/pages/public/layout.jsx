import { Outlet } from "react-router-dom"
import Header from "../../components/header"
import SideBar from "../../components/sidebar"
import SectionHero from "../../components/section_hero"
import SectionSearch from "../../components/section_search"


const Layout = ()=>{
    return(
        <div>
             <Header/>
             <main className="flex  gap-32 py-4 pl-16 pr-16">
                <SideBar/>
                <section>
                    <SectionHero/>
                    <SectionSearch/>
                </section>
             </main>
             
             <Outlet/>
        </div>
    )
}

export default Layout