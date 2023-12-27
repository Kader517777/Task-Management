import { useContext, useEffect, useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import DashboardMenu from "../Component/Menu/DashboardMenu";
import { userContext } from "../Provider/AuthContext";
import { Link, Outlet } from "react-router-dom";


const DashboardLayout = () => {
    const { user, signUp } = useContext(userContext);
    const displayName = user?.auth?.currentUser?.displayName;
    const photoURL = user?.auth?.currentUser?.photoURL;
    const [menuBar, setMenuBar] = useState(true);
    const [BigDisplay, setBigDisplay] = useState(true);
    const [menuIcon, setMenuIcon] = useState(true);
    var screenWidth = window.innerWidth;

    useEffect(() => {
        if (screenWidth < 768) {
            setMenuBar(false)
            setMenuIcon(false)
            setBigDisplay(false)
        } else {
            setMenuIcon(true)
            setMenuBar(true)
            setBigDisplay(true)
        }
    }, [screenWidth])

    return (
        <div className="">
            {!menuIcon && <div className="text-right bg-[#faf8f869] w-full">
                <button onClick={() => { setMenuBar(!menuBar) }} className={`btn text-3xl`}><CgMenuGridR size={40} /></button>
            </div>}
            <div className="flex">
                <div className={` h-screen w-[300px] text-center bg-[gray] flex flex-col ${!menuBar ? 'hidden' : !BigDisplay ? 'fixed' : ''}`}>
                    <div>
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={photoURL} />
                            </div>
                        </div>
                        <h1 className=" text-3xl font-bold mt-8">{displayName}</h1>
                    </div>
                    <ul className=" text-left flex-1 ml-2 md:ml-8 mt-5 md:mt-40">
                        <DashboardMenu />

                    </ul>
                    <Link onClick={() => signUp()} className="btn w-full text-xl mr-0 md:mr-6 mb-10 font-bold" to='/'>LogOut</Link>
                </div>
                <div className="flex-1 text-right">

                    <Outlet />

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;