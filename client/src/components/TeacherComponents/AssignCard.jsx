import { useState } from "react"

export const AssignCard = ({id,name}) => {
    const [clicked,setClicked] = useState(false)
    return (
        <div >
            <p>{name}</p>
            <button className="assignCard" assignedstatus={clicked?"assigned":"assign"} userid={id} onClick={()=>setClicked(prev=>!prev)}>{clicked?"Assigned":"Assign"}</button>
        </div>
    )
}