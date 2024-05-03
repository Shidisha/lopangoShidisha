
import Header from '../../components/header'
import Sidebar from '../../components/sidebar'
import SectionHero from '../../components/section_hero'
import SectionSearch from '../../components/section_search'
import SectionHeart from '../../components/section_Heart'
import SectionCategory from '../../components/section_category'

const Home = () =>{
    return (
        <div className=''>  
              <Header/>
               <main className="flex  gap-12 py-4 pl-12 pr-12">
                        <Sidebar/>
                    <section className=" flex flex-col gap-4">
                        <SectionHero/>
                        <SectionSearch/>
                        <SectionHeart/>
                        <SectionCategory/>
                    </section>
             </main>
        </div>
    )
}

export default Home