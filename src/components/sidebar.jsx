import data from '../data.json'


const SideBar = () =>{
    const items = data.sideBars
    return(
        <div>
            <ul>
                {items.map(item =>(
                    <item key={item.id}
                        icon = {item.icon}
                    />
                ))}
            </ul>
        </div>
    )
}

export default SideBar