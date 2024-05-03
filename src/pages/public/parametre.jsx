import Header from "../../components/header"
import SideBar from "../../components/sidebar"

const Parametre = () =>{
    return(
        <>
            <Header/>
            <h3>Votre page des parametre</h3>
            <main className="flex  gap-12 py-4 pl-12 pr-12">
                    <SideBar/>
             </main>
        </>
    )
}

export default Parametre