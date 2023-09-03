import { useState } from "react"

export const AssignCard = ({id}) => {
    const [clicked,setClicked] = useState(false)
    return (
        <div >
            <p>USERNAME</p>
            <button className="assignCard" assignedStatus={clicked?"assigned":"assign"} userid={id} onClick={()=>setClicked(!clicked)}>{clicked?"Assigned":"Assign"}</button>
        </div>
    )
}