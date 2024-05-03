import Header from "../../components/header"
import SideBar from "../../components/sidebar"

const Reservation = () =>{
    return(
        <>
           <Header/>
           <main className="flex  gap-12 py-4 pl-12 pr-12">
                <SideBar/>
                <h3>Votre page des reservation</h3>
             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio quae quo debitis facilis illum consequatur ratione officiis fugiat et suscipit fuga fugit perspiciatis quia nam, maxime, architecto asperiores praesentium incidunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto minus amet dolorem dignissimos minima incidunt sit ducimus rem nisi, expedita soluta cumque quam accusamus obcaecati, ipsum temporibus. Harum, animi optio! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, incidunt eum corrupti fugit ut perferendis, fugiat saepe quisquam minus accusantium quasi iure</p>
           </main>
        </>
    )
}

export default Reservation