import "./Footer.scss";

import { Link, useMatch } from "react-router-dom";
import { withClassNames } from "../../utilities/WithClassNames";
import Facebook from "../../assets/Facebook.icon";
import Instagram from "../../assets/Instagram.icon";
import Pinterest from "../../assets/Pinterest.icon";
import Twitter from "../../assets/Twitter.icon";
import Youtube from "../../assets/Youtube.icon";
import Button from "../inputs/button/Button";
import Input from "../inputs/Input";
import { useState } from "react";

const Footer = () => {
    const [email, setEmail] = useState("");
    const [isInputError, setIsInputError] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        setEmail(value);
        setIsSubscribed(false);
        setIsInputError(!value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubscribed(true);
        setEmail("");
    };

    const handleInvalid = (e: React.FormEvent<HTMLFormElement>) => {
        const input = e.target as HTMLInputElement;

        input.setCustomValidity("Please enter a valid email");
        setIsInputError(true);
    };

    const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        input.setCustomValidity("");
        setIsInputError(false);
    };

    return (
        <div className="footer">
            <div className="footer__nav-links">
                <Link
                    className={withClassNames([
                        "footer__link",
                        useMatch("/") && "footer__link--active"
                    ])}
                    to="/"
                >
                    Home
                </Link>
                <Link
                    className={withClassNames([
                        "footer__link",
                        useMatch("/about-us") && "footer__link--active"
                    ])}
                    to="about-us"
                >
                    About Us
                </Link>
                <Link
                    className={withClassNames([
                        "footer__link",
                        useMatch("/shop") && "footer__link--active"
                    ])}
                    to="shop"
                >
                    Shop
                </Link>
                <Link
                    className={withClassNames([
                        "footer__link",
                        useMatch("/faq") && "footer__link--active"
                    ])}
                    to="faq"
                >
                    FAQ
                </Link>
            </div>
            <div className="footer__social-container">
                <form
                    className="footer__subscribe-form"
                    onInvalid={handleInvalid}
                    onSubmit={handleSubmit}
                >
                    <div>
                        <Input
                            isError={isInputError}
                            label="Enter email"
                            maxLength={250}
                            pattern="^.+@.+\.[a-zA-Z]{2,63}$"
                            type="email"
                            value={email}
                            onChange={handleChangeInput}
                            onInput={handleInput}
                        />
                        {isSubscribed && (
                            <div className="footer__is-subscribed-text">
                                Thank you for subscribing!
                            </div>
                        )}
                    </div>
                    <Button className="footer__subscribe-button" inverseColorOnHover theme="dark">
                        SUBSCRIBE
                    </Button>
                </form>
                <div className="footer__social-links">
                    <Link rel="noreferrer" target="_blank" to="https://facebook.com">
                        <Facebook className="footer__social-icon" />
                    </Link>
                    <Link rel="noreferrer" target="_blank" to="https://twitter.com">
                        <Twitter className="footer__social-icon" />
                    </Link>
                    <Link rel="noreferrer" target="_blank" to="https://youtube.com">
                        <Youtube className="footer__social-icon" />
                    </Link>
                    <Link rel="noreferrer" target="_blank" to="https://pinterest.com">
                        <Pinterest className="footer__social-icon" />
                    </Link>
                    <Link rel="noreferrer" target="_blank" to="https://instagram.com">
                        <Instagram className="footer__social-icon" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
