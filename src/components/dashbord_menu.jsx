import data from '../data.json'
import { Link } from 'react-router-dom'

const DashbordMenu = () =>{
    return(
        <>
              <Link to="/home"><img className=' w-10' src={data.nav[1].dashbord_icon} alt="dashboard" /></Link>
              <Link to ="/explore"><img className=' w-10' src={data.nav[2].export_icon} alt="dashboard" /></Link>
              <Link to ="/reservation"><img className=' w-10' src={data.nav[3].wallet_icon} alt="dashboard" /></Link>
              <Link to ="/parametre"><img className=' w-10' src={data.nav[4].setting_icon} alt="dashboard" /></Link>
              <Link to ="/profil"><img className=' w-10' src={data.nav[5].account_icon} alt="dashboard" /></Link>
        </>
    )
}

export default DashbordMenu