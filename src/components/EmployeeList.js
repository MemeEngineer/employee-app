import EmployeeListItem from "./EmployeeListItem";
import './EmployeeListItem.css'
function EmployeeList(){
    return(
        <>
        
        {/* {employees.map((employee) => 
        <UsersListItem  employee={employee} key={employee.id}/>)} */}
        <EmployeeListItem/>
        <EmployeeListItem/>
        <EmployeeListItem/>
        <EmployeeListItem/>
        <EmployeeListItem/>
        </>
        
    )
}

export default EmployeeList;