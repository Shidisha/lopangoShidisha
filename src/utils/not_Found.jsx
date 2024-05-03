import { NavLink } from "react-router-dom"

const NotFound = () =>{
    return(
        <div>
        <h1 className="">Ouf il y a une erreur</h1>
        <p className=" items-center content-center">Veillez retourner sur la page accueil</p>
        <NavLink to = '/home'><button className=" border rounded-all">Accueil</button></NavLink>
        </div>
    )
}

export default NotFound