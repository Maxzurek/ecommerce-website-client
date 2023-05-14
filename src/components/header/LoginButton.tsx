import User from "../../assets/User.icon";
import "./LoginButton.scss";

const LoginButton = () => {
    // TODO Implement google login?

    return (
        <div className="login-button">
            <User className="login-button__user-icon" />
            <span className="login-button__text">Log In</span>
        </div>
    );
};

export default LoginButton;
