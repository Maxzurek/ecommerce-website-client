import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
    const handleClickLogo = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
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
                    <button>WIP</button>
                </div>
            </div>
        </div>
    );
};

export default Header;
