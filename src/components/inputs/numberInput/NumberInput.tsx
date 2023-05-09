import { useRef } from "react";
import CaretDown from "../../../assets/CaretDown.icon";
import CaretUp from "../../../assets/CaretUp.icon";
import "./NumberInput.scss";

interface NumberInputProps {
    value: number;
    label: string;
    min?: number;
    max?: number;
    onChange: (value: number) => void;
}

const NumberInput = ({ label, value, min, max, onChange }: NumberInputProps) => {
    const inputRef = useRef<HTMLInputElement>();

    const handleArrowUpClick = () => {
        inputRef.current?.focus();

        const newValue = value + 1;
        if (newValue > max) return;

        onChange(newValue);
    };

    const handleArrowDownClick = () => {
        inputRef.current?.focus();

        const newValue = value - 1;
        if (newValue < min) return;

        onChange(newValue);
    };

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(Number(e.target.value));
    };

    return (
        <>
            <label className="number-input__label">{label}</label>
            <div className="number-input">
                <input
                    ref={inputRef}
                    max={max}
                    min={min}
                    type="number"
                    value={value}
                    onChange={handleChangeInput}
                />
                <div className="number-input__spinner-arrow-container">
                    <span onClick={handleArrowUpClick}>
                        <CaretUp className="number-input__spinner-arrow" />
                    </span>
                    <span onClick={handleArrowDownClick}>
                        <CaretDown className="number-input__spinner-arrow" />
                    </span>
                </div>
            </div>
        </>
    );
};

export default NumberInput;
