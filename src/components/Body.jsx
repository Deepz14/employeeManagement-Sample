import EmployeeDirectory from "./Employee/MySpace/EmployeeDirectory";
import OrganizationTabs from "./Employee/MySpace/MySpaceTabs";
import Header from "./Header";
import SideNavbar from "./SideNavbar";

const Body = () => {
    return (
        <>
            <Header />
            <SideNavbar />
            <div className="main-container">
                <OrganizationTabs />
                <EmployeeDirectory />
            </div>
        </>
    )
}

export default Body;