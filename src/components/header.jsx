import data from '../data.json'

const Header = () =>{
    return(
        <>
            <nav className=' flex justify-between items-center py-1'>
                        <div className=' flex gap-20'>
                            <a href="#"><img className=' w-18 h-10' src={data.nav[0].logo} alt="logo application" /></a>
                            <input type="text" placeholder="Rechercher des propriétés" />
                        </div>
                        <div className=' flex gap-10'>
                            <a href="#"><img className=' w-10' src={data.nav[1].dashbord_icon} alt="dashboard" /></a>
                            <a href="#"><img className=' w-10' src={data.nav[2].export_icon} alt="dashboard" /></a>
                            <a href="#"><img className=' w-10' src={data.nav[3].wallet_icon} alt="dashboard" /></a>
                            <a href="#"><img className=' w-10' src={data.nav[4].setting_icon} alt="dashboard" /></a>
                            <a href="#"><img className=' w-10' src={data.nav[5].account_icon} alt="dashboard" /></a>
                        </div>
                        <div>
                            <a href="#"><img className=' w-10' src={data.nav[6].mode_icon} alt="dashboard" /></a>
                        </div>

            </nav>
        </>
            
    )
}

export default Header