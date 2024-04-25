import { useState } from "react";

const SelectType = () =>{
        const [selectOption, setSelectOption] = useState("");
        const handleSelectChange = (event) =>{
            setSelectOption(event.target.value);
        };
        return(
            <>
                <select className="border rounded-tr-[20px] rounded-tl-[20px] rounded-br-[20px] rounded-bl-[20px] py-1 pl-4 pr-4 pb-1" value={selectOption} onChange={handleSelectChange}>
                    <option value="">Type</option>
                    <option value="option1">Achat</option>
                    <option value="option2">Location</option>
                   
                 </select>
            </>
        )
}

export default SelectType