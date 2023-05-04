import "./Header.scss";

import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useRef, useState } from "react";
import CartButton from "./CartButton";
import LoginButton from "./LoginButton";
import Menu from "../../assets/Menu.icon";

const Header = () => {
    const [searchInputValue, setSearchInputValue] = useState("");

    const searchBarRef = useRef<HTMLInputElement>();

    const handleClickLogo = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    const handleChangeSearchBar = (e: React.FormEvent<HTMLInputElement>) => {
        setSearchInputValue(e.currentTarget.value);
    };

    const handleClearSearchBar = () => {
        setSearchInputValue("");
        searchBarRef.current.focus();
    };

    const handleClickCart = () => {
        // TODO
    };

    const handleClickMenu = () => {
        // TODO
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
                        <SearchBar
                            ref={searchBarRef}
                            value={searchInputValue}
                            onChange={handleChangeSearchBar}
                            onClear={handleClearSearchBar}
                        />
                        <CartButton itemCount={0} onClick={handleClickCart} />
                        <LoginButton />
                        <Menu className="header__menu" onClick={handleClickMenu} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;