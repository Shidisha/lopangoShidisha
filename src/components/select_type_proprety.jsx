import { useState } from "react";

const SelectTypeProrety = () =>{
    const [selectOption, setSelectOption] = useState("");
    const handleSelectChange = (event) =>{
        setSelectOption(event.target.value);
    };
    return(
        <>
            <select className="border rounded-tr-[20px] rounded-tl-[20px] rounded-br-[20px] rounded-bl-[20px] py-1 pl-4 pr-4 pb-1" value={selectOption} onChange={handleSelectChange}>
                <option value="">Type propriété</option>
                <option value="option1">Maison</option>
                <option value="option2">Appartement</option>
                <option value="option3">Terrain</option>
             </select>
        </>
    )
}

export default SelectTypeProrety