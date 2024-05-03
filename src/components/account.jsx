import data from '../data.json'

const Account = () =>{
    return(
        <div>
            <div className=' flex gap-2'>
                <img className=' flex rounded-full w-10 h-10' src= {data.account[0].profil} alt="Photo profil"/>
                <span className=' flex'>{data.account[0].firstName}</span>
            <span className=' flex'>{data.account[0].secondName}</span>
            </div>
            <div>
                <p className=' flex flex-row'>{data.account[0].typeAccount}</p>
            </div>
        </div>
    )
}

export default Account