import User from "../../assets/User.icon";
import "./LoginButton.scss";

interface LoginButtonProps {
    onLogin: () => void;
}

const LoginButton = ({ onLogin }: LoginButtonProps) => {
    return (
        <div className="login-button" onClick={onLogin}>
            <User className="login-button__user-icon" />
            <span className="login-button__text">Log In</span>
        </div>
    );
};

export default LoginButton;
