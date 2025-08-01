import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type Link = {
    name: string;
    path: string;
    icon: ReactNode;
}
type SidebarProps = {
    links: Link[];
    close: () => void;
}
export default function Sidebar({links, close}:SidebarProps){
    return(
        <div className="sidebar" onClick={close}>
            {links.map(link => (
                <Link to={link.path} className={location.pathname === link.path ? "sidebar-link active" : "sidebar-link"} key={link.name}>
                    {link.icon}{link.name}
                </Link>
            ))}
        </div>
    )
}