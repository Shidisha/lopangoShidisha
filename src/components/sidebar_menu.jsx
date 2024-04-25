import data from '../data.json'
import { Link } from 'react-router-dom'

const SideBarMenu = () =>{
    return (
            <div className=' flex flex-col gap-4'>
                <div className=' flex items-center gap-[14px]'>
                    <Link to = "/home"><img src= {data.sideBars[0].dashbord} alt="icon dashbord sidebar" /></Link>
                    <Link to = "/home"><span>Dashbord</span></Link>
                </div>
                <div className=' flex items-center gap-[14px]'>
                <Link to = "/explore"><img src= {data.sideBars[1].explore} alt="icon Explore sidebar" /></Link>
                <Link to = "/explore"><span>Explore</span></Link>
                </div>
                <div className=' flex items-center gap-[14px]'>
                <Link to = "/reservation"><img src= {data.sideBars[2].wallet} alt="icon Reservation sidebar" /></Link>
                <Link to = "/reservation"><span>Mes réservations</span></Link>
                </div>
                <div className=' flex items-center gap-[14px]'>
                <Link to = "/parametre"><img src= {data.sideBars[3].setting} alt="icon paramétre sidebar" /></Link>
                <Link to = "/parametre"><span>Paramétre</span></Link>
                </div>
                <div className=' flex items-center gap-[14px]'>
                <Link to = "/profil"><img src= {data.sideBars[4].compte} alt="icon compte sidebar" /></Link>
                <Link to = "/profil"><span>Compte</span></Link>
                </div>
            </div>
            
    )
}

export default SideBarMenu