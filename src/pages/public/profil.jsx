
import Header from "../../components/header"
import SideBar from "../../components/sidebar"
import data from "../../data.json"

const Profil = () => {
    return(
        <>
            <Header/>
            
            <main className="flex gap-12 py-4 pl-12 pr-12">
                <SideBar/>
                    <div className=" relative w-3/6 h-80" >
                    <div  className='h-72 items-center gap-1 br bg-white rounded-tl-[40px] rounded-bl-[40px] rounded-tr-[40px] rounded-br-[40px]'>
                            <img className="pr-2 pl-2 pt-2 pb-2 gap-1 h-72 w-full rounded-tl-[40px] rounded-bl-[40px] rounded-tr-[40px] rounded-br-[40px]" src={data.sectionHero[0].imageHero} alt="" />
                        <div className="flex absolute bottom-0 left-8">
                            <img className=" w-28 h-28 rounded-full border-4 border-white" src={data.account[0].profil} alt=" image profil agent immobilier" />
                        </div>
                    </div>
                    </div>
               
            </main>
        </>
    )
}


export default Profil 