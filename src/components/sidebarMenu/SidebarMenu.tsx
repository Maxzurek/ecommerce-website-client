import "./SidebarMenu.scss";

import CloseThin from "../../assets/CloseThin.icon";
import { withClassNames } from "../../utilities/WithClassNames";
import { Link, useLocation } from "react-router-dom";
import { useMatch } from "react-router-dom";
import { useEffect } from "react";
import Facebook from "../../assets/Facebook.icon";
import Twitter from "../../assets/Twitter.icon";
import Youtube from "../../assets/Youtube.icon";
import Pinterest from "../../assets/Pinterest.icon";
import Instagram from "../../assets/Instagram.icon";

interface SidebarMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const SidebarMenu = ({ isOpen, onClose }: SidebarMenuProps) => {
    const location = useLocation();

    useEffect(() => {
        onClose();
    }, [location]);

    return (
        <div className={withClassNames(["sidebar-menu", isOpen && "sidebar-menu--open"])}>
            <CloseThin className="sidebar-menu__close-button" onClick={onClose} />
            <div className="sidebar-menu__body">
                <div className="sidebar-menu__nav-links">
                    <Link
                        to="/"
                        className={withClassNames([
                            "app__link",
                            useMatch("/") && "app__link--active"
                        ])}
                    >
                        Home
                    </Link>
                    <Link
                        to="shop"
                        className={withClassNames([
                            "app__link",
                            useMatch("/shop") && "app__link--active"
                        ])}
                    >
                        Shop
                    </Link>
                    <Link
                        to="about-us"
                        className={withClassNames([
                            "app__link",
                            useMatch("/about-us") && "app__link--active"
                        ])}
                    >
                        About Us
                    </Link>
                    <Link
                        to="contact"
                        className={withClassNames([
                            "app__link",
                            useMatch("/contact") && "app__link--active"
                        ])}
                    >
                        Contact
                    </Link>
                </div>
                <div className="sidebar-menu__social-links">
                    <Link to="https://facebook.com" target="_blank" rel="noreferrer">
                        <Facebook className="sidebar-menu__social-icon" />
                    </Link>
                    <Link to="https://twitter.com" target="_blank" rel="noreferrer">
                        <Twitter className="sidebar-menu__social-icon" />
                    </Link>
                    <Link to="https://youtube.com" target="_blank" rel="noreferrer">
                        <Youtube className="sidebar-menu__social-icon" />
                    </Link>
                    <Link to="https://pinterest.com" target="_blank" rel="noreferrer">
                        <Pinterest className="sidebar-menu__social-icon" />
                    </Link>
                    <Link to="https://instagram.com" target="_blank" rel="noreferrer">
                        <Instagram className="sidebar-menu__social-icon" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SidebarMenu;
