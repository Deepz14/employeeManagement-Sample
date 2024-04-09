import searchImg from '/assests/Icons/icons8-search-24.png';
import userImg from '/assests/Icons/icons8-user-24.png';
import windowImg from '/assests/Icons/icons8-windows-11-24.png';
import checkAllImg from '/assests/Icons/icons8-check-all-24.png';
import chartImg from '/assests/Icons/icons8-chart-24.png';
import dollarImg from '/assests/Icons/icons8-dollar-24.png';
import notifyImg from '/assests/Icons/icons8-notification-24.png';
import msgImg from '/assests/Icons/icons8-message-24.png';
import sheetsImg from '/assests/Icons/icons8-sheets-24.png';
import arrowsImg from '/assests/Icons/icons8-arrows-24.png';
import homeImg from '/assests/Icons/icons8-home-24.png';
import exitImg from '/assests/Icons/icons8-exit-24.png';
import DefaultUserImg from '/assests/Icons/defaultUser.jpg';



const SideNavbar = () => {
    return (
        <div className="sidenavbar-container w-[90px] border-solid border border-gray-300">
            <div className="sidenav-logo">
                <h1 className="p-3 my-3 font-semibold">Qwik HR</h1>
                <div className="sidenav-search w-[50px] mx-3">
                    <div className="bg-stone-100 rounded px-4 py-2">
                        <img className='icon-sidenav' src={searchImg} alt='searchImg' />
                    </div>
                </div>
            </div>
            <div className="sidenav-list w-[50px] mx-3 my-3 border border-t-gray-300 border-b-gray-300 border-l-0 border-r-0">
                <div className="bg-blue-100 text-sky-600 rounded px-4 py-2 my-2">
                    <img className='icon-sidenav' src={userImg} alt='searchImg' />
                </div>
                <div className="rounded px-4 py-2 my-2">
                    <img className='icon-sidenav' src={windowImg} alt='searchImg' />
                </div>
                <div className="rounded px-4 py-2 my-2">
                    <img className='icon-sidenav' src={sheetsImg} alt='searchImg' />
                </div>
                <div className="rounded px-4 py-2 my-2">
                    <img className='icon-sidenav' src={checkAllImg} alt='searchImg' />
                </div>
                <div className="rounded px-4 py-2 my-2">
                    <img className='icon-sidenav' src={chartImg} alt='searchImg' />
                </div>
                <div className="rounded px-4 py-2 my-2">
                    <img className='icon-sidenav' src={dollarImg} alt='searchImg' />
                </div>
                <div className="rounded px-4 py-2 my-2">
                    <img className='icon-sidenav' src={notifyImg} alt='searchImg' />
                </div>
                <div className="rounded px-4 py-2 my-2">
                    <img className='icon-sidenav' src={msgImg} alt='searchImg' />
                </div>
                <div className="rounded px-4 py-2 my-2">
                    <img className='icon-sidenav' src={arrowsImg} alt='searchImg' />
                </div>
                <div className="rounded px-4 py-2 my-2">
                    <img className='icon-sidenav' src={homeImg} alt='searchImg' />
                </div>
                <div className="rounded px-4 py-2 my-2">
                    <img className='icon-sidenav' src={notifyImg} alt='searchImg' />
                </div>
                <div className="rounded px-4 py-2 my-2">
                    <img className='icon-sidenav' src={sheetsImg} alt='searchImg' />
                </div>
                <div className="rounded px-4 py-2 my-2">
                    <img className='icon-sidenav' src={checkAllImg} alt='searchImg' />
                </div>
            </div>
            <div className="sidenav-profile w-[50px] rounded border border-gray-300 px-1 py-2 mx-3">
                {/* <div className="rounded border border-gray-300 my-2"> */}
                    <img className='userIcon-sidenav' src={DefaultUserImg} alt='searchImg' />
                {/* </div> */}
            </div>
        </div>
    )

}

export default SideNavbar;