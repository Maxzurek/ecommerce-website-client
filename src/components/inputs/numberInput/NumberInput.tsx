import { useRef } from "react";
import CaretDown from "../../../assets/CaretDown.icon";
import CaretUp from "../../../assets/CaretUp.icon";
import "./NumberInput.scss";
import Minus from "../../../assets/Minus.icon";
import Plus from "../../../assets/Plus.icon";
import { withClassNames } from "../../../utilities/WithClassNames";

interface NumberInputProps {
    value: number;
    label?: string;
    min?: number;
    max?: number;
    withArrow?: boolean;
    onChange: (value: number) => void;
}

const NumberInput = ({ label, value, min, max, withArrow, onChange }: NumberInputProps) => {
    const inputRef = useRef<HTMLInputElement>();

    const handleIncrementValue = () => {
        inputRef.current?.focus();

        const newValue = value + 1;
        if (newValue > max) return;

        onChange(newValue);
    };

    const handleDecrementValue = () => {
        inputRef.current?.focus();

        const newValue = value - 1;
        if (newValue < min) return;

        onChange(newValue);
    };

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);

        if (value > max || value < min) {
            return;
        }

        onChange(Number(e.target.value));
    };

    return (
        <>
            {label && <label className="number-input__label">{label}</label>}
            <div
                className={withClassNames([
                    "number-input",
                    withArrow && "number-input--with-arrow"
                ])}
            >
                {!withArrow && (
                    <Minus className="number-input__icon" onClick={handleDecrementValue} />
                )}
                <input
                    ref={inputRef}
                    max={max}
                    min={min}
                    type="number"
                    value={value}
                    onChange={handleChangeInput}
                />
                {!withArrow && (
                    <Plus className="number-input__icon" onClick={handleIncrementValue} />
                )}
                {withArrow && (
                    <div className="number-input__spinner-arrow-container">
                        <CaretUp
                            className="number-input__icon number-input__icon--arrow"
                            onClick={handleIncrementValue}
                        />
                        <CaretDown
                            className="number-input__icon number-input__icon--arrow"
                            onClick={handleIncrementValue}
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default NumberInput;
