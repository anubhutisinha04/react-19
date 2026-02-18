const Employees = ({employee}) => {

    return (
        <div className="card">
            <span>{employee.id}</span>
            <span>{employee.name}</span>
            <span>{employee.position}</span>
            <span>{employee.department}</span>
            <span>{employee.salary}</span>
        </div>
    )
} 

export default Employees;