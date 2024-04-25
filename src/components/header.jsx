import data from '../data.json'
import DashbordMenu from './dashbord_menu'
import { Link } from 'react-router-dom'

const Header = () =>{
    return(
            <nav className=' flex justify-between items-center py-2 pl-16 pr-16 border-b-2'>
                 <div className=' flex gap-20'>
                      <Link to="/home"><img className=' w-18 h-10' src={data.nav[0].logo} alt="logo application" /></Link>
                      <input className=' border rounded-tr-[20px] rounded-tl-[20px] rounded-br-[20px] rounded-bl-[20px] py-1 pl-4 pr-4 pb-1' type="text" placeholder="Rechercher des propriétés" />
                 </div>
                 <div className=' flex gap-10'>
                       <DashbordMenu/>
                 </div>
                 <div>
                       <a href="#"><img className=' w-10' src={data.nav[6].mode_icon} alt="dashboard" /></a>
                 </div>

            </nav>
             
    )
}

export default Header