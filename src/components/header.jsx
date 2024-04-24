import data from '../data.json'
import DashbordMenu from './dashbord_menu'
import { Link } from 'react-router-dom'

const Header = () =>{
    return(
        <>
            <nav className=' flex justify-between items-center py-1 border-b-2 mb-4'>
                 <div className=' flex gap-20'>
                      <Link to="/home"><img className=' w-18 h-10' src={data.nav[0].logo} alt="logo application" /></Link>
                      <input type="text" placeholder="Rechercher des propriétés" />
                 </div>
                 <div className=' flex gap-10'>
                       <DashbordMenu/>
                 </div>
                 <div>
                       <a href="#"><img className=' w-10' src={data.nav[6].mode_icon} alt="dashboard" /></a>
                 </div>

            </nav>
        </>
            
    )
}

export default Header