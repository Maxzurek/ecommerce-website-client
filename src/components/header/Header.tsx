import "./Header.scss";

import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useRef, useState } from "react";
import CartButton from "./CartButton";
import LoginButton from "./LoginButton";
import Menu from "../../assets/Menu.icon";
import SidebarMenu from "../sidebarMenu/SidebarMenu";
import MediaQuery, { MediaWidth } from "../mediaQuery/MediaQuery";

const Header = () => {
    const [searchInputValue, setSearchInputValue] = useState("");
    const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState(false);

    const searchBarRef = useRef<HTMLInputElement>();
    const scrollAnchorRef = useRef<HTMLDivElement>();

    const handleClickLogo = () => {
        document.body.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleChangeSearchBar = (e: React.FormEvent<HTMLInputElement>) => {
        setSearchInputValue(e.currentTarget.value);
    };

    const handleClearSearchBar = () => {
        setSearchInputValue("");
        searchBarRef.current?.focus();
    };

    const handleClickCart = () => {
        // TODO
    };

    const handleClickMenu = () => {
        setIsSidebarMenuOpen(true);
    };

    const handleCloseSidebarMenu = () => {
        setIsSidebarMenuOpen(false);
    };

    return (
        <div className="header">
            <div className="header__top-row">
                <span>FREE SHIPPING WORLDWIDE</span>
            </div>
            <div className="header__columns">
                <div className="header__column">
                    <Link to={"/"} onClick={handleClickLogo}>
                        <img src="./logo-light-transparent.png" className="header__logo" />
                    </Link>
                </div>
                <div className="header__column">
                    <div className="header__controls">
                        <MediaQuery minMediaWidth={MediaWidth.lg}>
                            <SearchBar
                                ref={searchBarRef}
                                value={searchInputValue}
                                onChange={handleChangeSearchBar}
                                onClear={handleClearSearchBar}
                            />
                        </MediaQuery>
                        <CartButton itemCount={0} onClick={handleClickCart} />
                        <MediaQuery minMediaWidth={MediaWidth.sm}>
                            <LoginButton />
                        </MediaQuery>
                        <Menu className="header__menu" onClick={handleClickMenu} />
                    </div>
                </div>
            </div>
            <MediaQuery maxMediaWidth={MediaWidth.lg}>
                <div className="header__touch-search-bar">
                    <SearchBar
                        ref={searchBarRef}
                        value={searchInputValue}
                        onChange={handleChangeSearchBar}
                        onClear={handleClearSearchBar}
                    />
                </div>
            </MediaQuery>
            <SidebarMenu isOpen={isSidebarMenuOpen} onClose={handleCloseSidebarMenu} />
            <div ref={scrollAnchorRef} />
        </div>
    );
};

export default Header;
