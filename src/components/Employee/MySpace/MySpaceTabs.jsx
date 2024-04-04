
const OrganizationTabs = () => {
    return (
        <div className="tabs-section border border-b-gray-300 border-t-0 border-l-0 border-r-0 mx-3 mb-5 flex items-center justify-between">
            <ul className="flex items-center">
                <li className="mr-5"><h5 className="text-slate-600">Personal</h5></li>
                <li className="mr-5 border-2 border-b-gray-600 border-t-0 border-l-0 border-r-0"><h5 className="font-semibold">Team</h5></li>
                <li className="mr-5"><h5 className="text-slate-600">Job</h5></li>
                <li className="mr-5"><h5 className="text-slate-600">Training</h5></li>
                <li className="mr-5"><h5 className="text-slate-600">Assets</h5></li>
                <li className="mr-5"><h5 className="text-slate-600">Notes</h5></li>
            </ul>
            <div className="add-emp-btn text-blue-700 mr-3 cursor-pointer">
                Customize Tabs
            </div>
        </div>
    )
}


export default OrganizationTabs;