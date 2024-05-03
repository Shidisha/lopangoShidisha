import Header from "../../components/header"
import SideBar from "../../components/sidebar"
import SectionSearch from "../../components/section_search"
const Explore = () =>{
    return(
        <>
            <Header/>
               <main className="flex  gap-12 py-4 pl-12 pr-12">
                    <SideBar/>
                    <section className=" flex flex-col gap-4">
                    <SectionSearch/>
                </section>
             </main>
        </>
    )
}

export default Explore