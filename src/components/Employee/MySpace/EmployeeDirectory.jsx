import EmployeeList from "./EmployeeList";
import EmployeeListPagination from "./EmployeeListPagination";


const EmployeeDirectory = () => {
    return (
        <div className="EmployeeDirectory-card border border-gray-300 mx-3 my-4">
            <EmployeeList />
            <EmployeeListPagination />
        </div>
    )
}

export default EmployeeDirectory;