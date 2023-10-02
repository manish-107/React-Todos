import { useContext } from 'react'
import { InstanceContext, Data } from "../App"

function Contextuse() {

    const name = useContext(InstanceContext);
    const place = useContext(Data);
    return (
        <div>{name} and  place is {place}</div>
    )
}

export default Contextuse