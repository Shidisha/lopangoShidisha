import data from '../data.json'
import DashbordMenu from './dashbord_menu'
import { Link } from 'react-router-dom'
import SearchBar from './searchbar'

const Header = () =>{
    return(
            <nav className=' flex justify-between items-center py-2 pl-16 pr-16 border-b-2'>
                 <div className=' flex gap-20'>
                      <Link to="/home"><img className=' w-18 h-10' src={data.nav[0].logo} alt="logo application" /></Link>
                      <SearchBar/>
                 </div>
                 <div className=' flex gap-10'>
                       <DashbordMenu/>
                 </div>
                 <div>
                       <a href="#"><img className=' w-8' src={data.nav[6].mode_icon} alt="dashboard" /></a>
                 </div>
            </nav>
             
    )
}

export default Header