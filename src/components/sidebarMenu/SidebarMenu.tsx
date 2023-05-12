import "./SidebarMenu.scss";

import CloseThin from "../../assets/CloseThin.icon";
import { withClassNames } from "../../utilities/WithClassNames";
import { Link, useLocation } from "react-router-dom";
import { useMatch } from "react-router-dom";
import Facebook from "../../assets/Facebook.icon";
import Twitter from "../../assets/Twitter.icon";
import Youtube from "../../assets/Youtube.icon";
import Pinterest from "../../assets/Pinterest.icon";
import Instagram from "../../assets/Instagram.icon";
import { usePrevious } from "../../hooks/usePrevious";

interface SidebarMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const SidebarMenu = ({ isOpen, onClose }: SidebarMenuProps) => {
    const location = useLocation();
    const previousLocation = usePrevious(location);

    if (location !== previousLocation) {
        onClose();
    }

    return (
        <>
            {isOpen && <div className="sidebar-menu__click-outside-area" onClick={onClose} />}
            <div className={withClassNames(["sidebar-menu", isOpen && "sidebar-menu--open"])}>
                <CloseThin className="sidebar-menu__close-button" onClick={onClose} />
                <div className="sidebar-menu__body">
                    <div className="sidebar-menu__nav-links">
                        <Link
                            className={withClassNames([
                                "app__link",
                                useMatch("/") && "app__link--active"
                            ])}
                            to="/"
                        >
                            Home
                        </Link>
                        <Link
                            className={withClassNames([
                                "app__link",
                                useMatch("/shop") && "app__link--active"
                            ])}
                            to="shop"
                        >
                            Shop
                        </Link>
                        <Link
                            className={withClassNames([
                                "app__link",
                                useMatch("/about-us") && "app__link--active"
                            ])}
                            to="about-us"
                        >
                            About Us
                        </Link>
                        <Link
                            className={withClassNames([
                                "app__link",
                                useMatch("/faq") && "app__link--active"
                            ])}
                            to="faq"
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
            </div>
        </>
    );
};

export default SidebarMenu;
