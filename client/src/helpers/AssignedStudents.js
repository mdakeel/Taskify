export const useAssignedStudent =() =>()=> {
    const assignedStudent = []
    const parentElement = document.querySelectorAll(".assignCard");
    for(let list of parentElement) {
        if(list.getAttribute("assignedStatus")=="assigned"){
            assignedStudent.push(list.getAttribute("userid"))
        }
    }
    return assignedStudent
}