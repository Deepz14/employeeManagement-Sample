import filterImg from '/assests/Icons/icons8-filter-24.png';
import viewMoreImg from '/assests/Icons/icons8-view-more-25.png';
import searchImg from '/public/assests/Icons/icons8-search-25.png';
import { USER_INFO } from '../../../utils/mockData';

const EmployeeList = () => {
    return (
        <div className='EmployeeList-container w-full overscroll-auto'>
            <div className="EmployeeList-header-container w-full flex justify-between px-4 py-3">
                <div className="empList-search-inp w-1/3 bg-stone-100 rounded px-4 py-2 flex items-center">
                    <img className='icon' src={searchImg} alt='searchImg' />
                    <input className='bg-stone-100 ml-2 w-full' type="text" placeholder="Emp. Name" />
                </div>
                <div className="flex items-center">
                    {/* <div className="add-emp-btn text-blue-700 mr-3 cursor-pointer">
                        <span className='mr-1 text-xl font-bold'>+</span>
                        Add Employee
                    </div> */}
                    <img className='icon mr-3' src={filterImg} alt='filterIcon' />
                    <img className='icon mr-3' src={viewMoreImg} alt='filterIcon' />
                </div>
            </div>
            <div className='EmpList-table-container w-full overscroll-auto px-4 py-3'>
                <table className='EmpList-table w-full'>
                    <thead className='w-full text-left'>
                        <tr className='px-2 py-4'>
                            <th><input className='border border-gray-300' type='checkbox' /></th>
                            <th>Emp.Name</th>
                            <th>Emp.ID</th>
                            <th>Job Title</th>
                            <th>Department</th>
                            <th>Reporting To</th>
                            <th>Work Email</th>
                            <th>Mobile</th>
                        </tr>
                    </thead>
                    <tbody className='w-full text-left'>
                        {
                            USER_INFO.map((user) => {
                                return (
                                    <tr key={user.id} className='border border-b-gray-300 border-t-0 border-r-0 border-l-0'>
                                        <td><input className='border border-gray-300' type='checkbox' /></td>
                                        <td className='text-blue-600 font-semibold'>
                                            <img className='userIcon' src={user?.imgURl} alt='userImg' />
                                            {user?.name}
                                        </td>
                                        <td>{user?.empId}</td>
                                        <td>{user?.jobTitle}</td>
                                        <td>{user?.department}</td>
                                        <td>{user?.reportingTo}</td>
                                        <td>{user?.email}</td>
                                        <td>{user?.phone}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EmployeeList;