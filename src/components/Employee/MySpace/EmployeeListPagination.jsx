
const EmployeeListPagination = () => {
    return (
        <div className="empList-pagination-container flex items-center justify-between flex-wrap px-4 py-3 mb-8">
            <div className="showResults-section flex items-center mb-3">
                <div className="border border-gray-300 px-2 py-1 rounded mr-5">
                    30 Results
                </div>
                <div>
                    <span>Show: </span>
                    <select className="border border-gray-300 px-1 py-1 rounded">
                        <option value={'10'}>10</option>
                    </select>
                </div>
            </div>
            <div className="pagination-section cursor-pointer mb-3">
                <span className="border border-gray-300 px-2 py-1 rounded mr-3">&#11164;&#11164;</span>
                <span className="border border-gray-300 px-2 py-1 rounded mr-3">&#11164;</span>
                <span className="mr-3">1</span>
                <span className="mr-3">2</span>
                <span className="mr-3">3</span>
                <span className="mr-3">4</span>
                <span className="border border-gray-300 px-2 py-1 rounded mr-3">&#11166;&#11166;</span>
                <span className="border border-gray-300 px-2 py-1 rounded mr-3">&#11166;</span>
            </div>
            <div className="jump-section mb-3">
                <div>Jump to:  <span className="border border-gray-300 px-2 py-1 rounded">3</span></div>
            </div>
        </div>
    )

}

export default EmployeeListPagination;