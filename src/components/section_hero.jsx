import data from '../data.json'

const SectionHero = () => {
    return(
        <div className=' flex gap-1 br bg-slate-200 rounded-tl-3xl rounded-bl-3xl rounded-tr-[60px] rounded-br-[160px]'>
            <div className=' justify-between items-center'>
                <div className=' justify-between items-center'>
                    <h1>Chaque porte ouverte est une opportinuté, voici celle qui mène à votre propriété de reve</h1>
                </div>
                <div className=' justify-between items-center'>
                    <button>Contacter un agent</button>
                    <button>Publier une propriété</button>
                </div>
            </div>
            <div className=' pr-8 py-8'>
                <img className=' rounded-bl-[40px] rounded-tr-[40px] rounded-br-[130px] rounded-tl-[130px]' src= {data.sectionHero[0].imageHero} alt="image hero" />
            </div>
        </div>
    )
}

export default SectionHero