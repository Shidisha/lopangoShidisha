import { useState } from "react"


const SelectCity = () => {
    const [selectOption, setSelectOption] = useState("");
    const handleSelectChange = (event) =>{
        setSelectOption(event.target.value);
    };
    return(
        <>
            <select className="border rounded-tr-[20px] rounded-tl-[20px] rounded-br-[20px] rounded-bl-[20px] py-1 pl-4 pr-4 pb-1" value={selectOption} onChange={handleSelectChange}>
                <option value="">Ville</option>
                <option value="option1">Kinsahsa</option>
                <option value="option2">Lubumbashi</option>
                <option value="option3">Butembo</option>
             </select>
        </>
    )
}


export default SelectCity