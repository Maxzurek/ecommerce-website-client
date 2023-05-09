import "./SelectOption.scss";

export interface SelectOptionProps<T> {
    label: string;
    value: T;
    onClick: (value: T) => void;
}

function SelectOption<T>({ label, value, onClick }: SelectOptionProps<T>) {
    const handleClick = () => {
        onClick(value);
    };

    return (
        <div className="select-option" onClick={handleClick}>
            <div className="select-option__label">{label}</div>
        </div>
    );
}

export default SelectOption;
