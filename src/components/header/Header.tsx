import "./Header.scss";

import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useRef } from "react";
import CartButton from "./CartButton";
import LoginButton from "./LoginButton";
import Menu from "../../assets/Menu.icon";
import MediaQuery, { MediaWidth } from "../mediaQuery/MediaQuery";
import { useCartState } from "../../hooks/useCart";

interface HeaderProps {
    onOpenMenu: () => void;
    onOpenCart: () => void;
}

const Header = ({ onOpenMenu, onOpenCart }: HeaderProps) => {
    const cartState = useCartState();

    const scrollAnchorRef = useRef<HTMLDivElement>();

    const handleClickLogo = () => {
        document.body.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="header">
            <div className="header__top-row">
                <span>FREE SHIPPING WORLDWIDE</span>
            </div>
            <div className="header__columns">
                <div className="header__column">
                    <Link to={"/"} onClick={handleClickLogo}>
                        <img
                            alt="Logo"
                            className="header__logo"
                            src="/logo-light-transparent.png"
                        />
                    </Link>
                </div>
                <div className="header__column">
                    <div className="header__controls">
                        <MediaQuery minMediaWidth={MediaWidth.lg}>
                            <SearchBar />
                        </MediaQuery>
                        <CartButton itemCount={cartState.items.length} onClick={onOpenCart} />
                        <MediaQuery minMediaWidth={MediaWidth.sm}>
                            <LoginButton />
                        </MediaQuery>
                        <Menu className="header__menu" onClick={onOpenMenu} />
                    </div>
                </div>
            </div>
            <MediaQuery maxMediaWidth={MediaWidth.lg}>
                <div className="header__touch-search-bar">
                    <SearchBar />
                </div>
            </MediaQuery>
            <div ref={scrollAnchorRef} />
        </div>
    );
};

export default Header;
