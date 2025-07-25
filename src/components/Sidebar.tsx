import type { ReactNode } from "react";

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
                <a className="sidebar-link" href="#!" key={link.name}>
                    {link.icon}{link.name}
                </a>
            ))}
        </div>
    )
}