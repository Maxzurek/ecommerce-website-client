import "./SidebarMenu.scss";

import CloseThin from "../../../assets/CloseThin.icon";
import { withClassNames } from "../../../utilities/WithClassNames";
import { Link } from "react-router-dom";
import { useMatch } from "react-router-dom";
import Facebook from "../../../assets/Facebook.icon";
import Twitter from "../../../assets/Twitter.icon";
import Youtube from "../../../assets/Youtube.icon";
import Pinterest from "../../../assets/Pinterest.icon";
import Instagram from "../../../assets/Instagram.icon";
import Sidebar from "../Sidebar";

interface SidebarMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const SidebarMenu = ({ isOpen, onClose }: SidebarMenuProps) => {
    return (
        <Sidebar isOpen={isOpen} onClose={onClose}>
            <CloseThin className="sidebar-menu__close-button" onClick={onClose} />
            <div className="sidebar-menu">
                <div className="sidebar-menu__nav-links">
                    <Link
                        className={withClassNames([
                            "app__link",
                            useMatch("/") && "app__link--active"
                        ])}
                        to="/"
                        onClick={onClose}
                    >
                        Home
                    </Link>
                    <Link
                        className={withClassNames([
                            "app__link",
                            useMatch("/shop") && "app__link--active"
                        ])}
                        to="shop"
                        onClick={onClose}
                    >
                        Shop
                    </Link>
                    <Link
                        className={withClassNames([
                            "app__link",
                            useMatch("/about-us") && "app__link--active"
                        ])}
                        to="about-us"
                        onClick={onClose}
                    >
                        About Us
                    </Link>
                    <Link
                        className={withClassNames([
                            "app__link",
                            useMatch("/faq") && "app__link--active"
                        ])}
                        to="faq"
                        onClick={onClose}
                    >
                        FAQ
                    </Link>
                </div>
                <div className="sidebar-menu__social-links">
                    <Link rel="noreferrer" target="_blank" to="https://facebook.com">
                        <Facebook className="sidebar-menu__social-icon" />
                    </Link>
                    <Link rel="noreferrer" target="_blank" to="https://twitter.com">
                        <Twitter className="sidebar-menu__social-icon" />
                    </Link>
                    <Link rel="noreferrer" target="_blank" to="https://youtube.com">
                        <Youtube className="sidebar-menu__social-icon" />
                    </Link>
                    <Link rel="noreferrer" target="_blank" to="https://pinterest.com">
                        <Pinterest className="sidebar-menu__social-icon" />
                    </Link>
                    <Link rel="noreferrer" target="_blank" to="https://instagram.com">
                        <Instagram className="sidebar-menu__social-icon" />
                    </Link>
                </div>
            </div>
        </Sidebar>
    );
};

export default SidebarMenu;
