import data from '../data.json'
const Proprety = () =>{
    return(
        <div>
            <img className=' w-40 h-40 rounded-xl' src={data.proprety[0].imageProprety} alt=""/>
            <span className=' flex'>Bandal/Appartement</span>
        </div>
    )
}

export default Proprety