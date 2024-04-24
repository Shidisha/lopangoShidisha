import data from '../data.json'

const DashbordMenu = () =>{
    return(
        <>
              <a href="#"><img className=' w-10' src={data.nav[1].dashbord_icon} alt="dashboard" /></a>
              <a href="#"><img className=' w-10' src={data.nav[2].export_icon} alt="dashboard" /></a>
              <a href="#"><img className=' w-10' src={data.nav[3].wallet_icon} alt="dashboard" /></a>
              <a href="#"><img className=' w-10' src={data.nav[4].setting_icon} alt="dashboard" /></a>
              <a href="#"><img className=' w-10' src={data.nav[5].account_icon} alt="dashboard" /></a>
        </>
    )
}

export default DashbordMenu