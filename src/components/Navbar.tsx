import { useState } from "react"

import { FaHome, FaList, FaCog, FaInfoCircle } from "react-icons/fa"
import Sidebar from "./Sidebar"
import { Link, useLocation } from "react-router-dom"

export default function Navbar(){
    const [showSidebar, setShowSidebar] = useState(false)
    const links = [
        {
            name: "Home",
            path: "/",
            icon: <FaHome/>
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: <FaList/>
        },
        {
            name: "Settings",
            path: "/settings",
            icon: <FaCog/>
        },
        {
            name: "About",
            path: "/about",
            icon: <FaInfoCircle/>
        }
    ]
    const location = useLocation()
    function closeSidebar(){
        setShowSidebar(false)
    }
    return(
        <>
            <div className="navbar container">
                <Link to={"/"} className="logo">C<span>oo</span>king F<span>oo</span>d</Link>
                <div className="nav-links">
                    {links.map(link => (
                        <Link to={link.path} className={location.pathname === link.path ? "active" : ""} key={link.name}>{link.name}</Link>
                    ))}
                </div>
                <div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            {showSidebar && <Sidebar close={closeSidebar} links={links}/>}
        </>
    )
}