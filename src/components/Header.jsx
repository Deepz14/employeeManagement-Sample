import NotifyIcon  from '/assests/Icons/icons8-doorbell-24.png';
import settingsIcon from '/assests/Icons/icons8-settings-24.png';

const Header = () => {
    return (
        <nav className="header-container border border-b-gray-300 flex justify-between px-3 py-2">
            <div className="logo-header">
                <h4 className="text-slate-600">Employee Management</h4>
                <h2 className="font-semibold">My Space</h2>
            </div>
            <div className="header-settings flex items-center">
                <img className='icon mr-3' src={NotifyIcon} alt='notifyIcon' />
                <img className='icon mr-3' src={settingsIcon} alt='notifyIcon' />
            </div> 
        </nav>
    )
}

export default Header;