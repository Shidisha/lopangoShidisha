import data from '../data.json'
import BookmarkButton from './bookmark_btn'


const Proprety = () =>{
    return(
        <div className=' flex flex-wrap gap-8'>
            {data.proprety.map(item =>(
                <div  key={item.id}>
                    <div className=" relative rounded-2xl border-gray-200 w-[200px] h-[210px] bg-cover bg-center" 
                     style={{backgroundImage: `url(${item.imageProprety})`}}>
                        <div className=' border border-gray-200 rounded-b-2xl flex flex-row gap-8 leading-5 absolute bg-white p-1 bottom-0 left-0 right-0'>
                            <div>
                                <span className=' font-semibold text-[14px]'>{item.city} / {item.Commone}</span>
                                <p>{item.typePropriety}</p>
                                <p>${item.price}</p>
                            </div>
                            <div>
                                <BookmarkButton/>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Proprety