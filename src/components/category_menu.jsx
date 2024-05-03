import { NavLink } from "react-router-dom"

const CategoryMenu = () =>{
    return(
        <div>
            <ul className=" flex flex-row gap-8 font-semibold">
                <NavLink to="/all_proprety"><li>Tout</li></NavLink>
                <NavLink to="/all_proprety"><li>Populaires</li></NavLink>
                <NavLink to="/all_proprety"><li>Récommandées</li></NavLink>
                <NavLink to="/all_proprety"><li>Près de chez vous</li></NavLink>
            </ul>
        </div>
    )
}

export default CategoryMenu