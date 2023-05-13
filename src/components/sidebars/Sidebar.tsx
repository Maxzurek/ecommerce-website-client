import "./Sidebar.scss";

import { withClassNames } from "../../utilities/WithClassNames";
import { ReactNode } from "react";

interface SidebarProps {
    children: ReactNode;
    isOpen: boolean;
    className?: string;
    onClose: () => void;
}

const Sidebar = ({ children, isOpen, className, onClose }: SidebarProps) => {
    return (
        <>
            {isOpen && <div className="sidebar__click-outside-area" onClick={onClose} />}
            <div
                className={withClassNames([
                    "sidebar",
                    className && className,
                    isOpen && "sidebar--open"
                ])}
            >
                {children}
            </div>
        </>
    );
};

export default Sidebar;
