import Logo from "./logo"
import seachIcon from '../assets/icons/search.svg'

const Footer = () =>{
    return(
        <div className=" flex flex-row justify-between bg-slate-200 w-full h-32 pl-16 pr-16 mt-4 pt-4 font-extralight lg">
            <div>
                <Logo/>
            </div>
            <div>
                <ul>
                    <li>Publier une propriété</li>
                    <li>Sinscrire</li>
                    <li>Devenir partenaire</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Qui sommes-nous</li>
                    <li>Nos projet davenir</li>
                    <li>Contactez-nous</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Conditions dutilisation</li>
                    <li>Protection de données</li>
                    <li>FAQs</li>
                </ul>
            </div>
            <div>
                <ul className=" flex flex-col">
                    <div>
                        <li>Nous suivre sur:</li>
                    </div>
                    <div className="flex gap-2">
                        <img src={seachIcon} alt="icon youtub" />
                        <img src={seachIcon} alt="icon Whatsapp" />
                        <img src={seachIcon} alt="icon facebook" />
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Footer