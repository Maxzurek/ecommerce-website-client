import { withClassNames } from "../../../utilities/WithClassNames";
import "./Button.scss";

interface ButtonProps
    extends React.DetailedHTMLProps<
        React.DialogHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    theme: "light" | "dark" | "transparent";
    inverseColorOnHover?: boolean;
}

const Button = ({ theme, inverseColorOnHover, ...buttonProps }: ButtonProps) => {
    return (
        <button
            {...buttonProps}
            className={withClassNames([
                "button",
                `button--${theme}`,
                inverseColorOnHover ? "button--inverse-on-hover" : "button--opacity-on-hover",
                buttonProps.className
            ])}
        />
    );
};

export default Button;
