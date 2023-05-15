import { withClassNames } from "../../../utilities/WithClassNames";
import "./Button.scss";

interface ButtonProps
    extends React.DetailedHTMLProps<
        React.DialogHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    theme: "light" | "dark" | "transparent";
    invertOnHover?: boolean;
}

const Button = ({ theme, invertOnHover, ...buttonProps }: ButtonProps) => {
    return (
        <button
            {...buttonProps}
            className={withClassNames([
                "button",
                `button--${theme}`,
                invertOnHover
                    ? `button--${theme}-invert-color-on-hover`
                    : "button--opacity-on-hover",
                buttonProps.className
            ])}
        />
    );
};

export default Button;
