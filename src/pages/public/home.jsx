import Header from '../../components/header'
import Sidebar from '../../components/sidebar'
import SectionHero from '../../components/section_hero'
import SectionSearch from '../../components/section_search'

const Home = () =>{
    return (
        <div>  
                    <Header/>
                    <main className="flex  gap-12 py-4 pl-12 pr-12">
                    <Sidebar/>
                    <section className=" flex flex-col gap-4">
                        <SectionHero/>
                        <SectionSearch/>
                </section>
             </main>
        </div>
    )
}

export default Home