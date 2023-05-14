import "./Input.scss";

import { withClassNames } from "../../utilities/WithClassNames";
import { useState } from "react";

interface InputProps
    extends Omit<
        React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
        "value" & "onChange"
    > {
    label: string;
    value: string;
    /**
     * If true, the bottom border will be red and bigger
     */
    isError?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, value, isError, onChange, ...inputProps }: InputProps) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        setIsFocused(false);
        inputProps.onBlur?.(e);
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        setIsFocused(true);
        inputProps.onFocus?.(e);
    };
    return (
        <div
            className={withClassNames([
                inputProps.className,
                "input",
                isFocused && "input--focused",
                isError && "input--error"
            ])}
        >
            <div
                className={withClassNames([
                    "input__label",
                    (value || isFocused) && "input__label--raised"
                ])}
            >
                {label}
            </div>
            <input
                {...inputProps}
                value={value}
                onBlur={handleBlur}
                onChange={onChange}
                onFocus={handleFocus}
            />
        </div>
    );
};

export default Input;
