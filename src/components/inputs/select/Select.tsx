import "./Select.scss";

import { ReactNode, forwardRef, useRef } from "react";
import CaretDown from "../../../assets/CaretDown.icon";
import { withClassNames } from "../../../utilities/WithClassNames";

interface SelectProps {
    label: string;
    selectedOption: string;
    isOpen?: boolean;
    children?: ReactNode;
    /**
     * The duration of the animations in milliseconds
     */
    animationsDuration?: number;
    /**
     * If true, will display an error message telling the user : Select {label}
     */
    isError?: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const Select = forwardRef<HTMLDivElement, SelectProps>(
    (
        {
            label,
            selectedOption,
            isOpen,
            children,
            animationsDuration = 300,
            isError,
            onOpen,
            onClose
        },
        ref
    ) => {
        const menuRef = useRef<HTMLDivElement>();

        const handleSelectRefCallback = (node: HTMLDivElement) => {
            if (ref) {
                if (typeof ref === "function") {
                    ref(node);
                } else {
                    ref.current = node;
                }
            }

            if (!node) return;

            const height = node.clientHeight;
            const width = node.clientWidth;
            node.style.setProperty("--select-height", `${height}px`);
            node.style.setProperty("--select-width", `${width}px`);
            node.style.setProperty("--select-animation-duration", `${animationsDuration / 1000}s`);
        };

        const handleMenuRefCallback = (node: HTMLDivElement) => {
            if (!node) return;

            menuRef.current = node;

            const height = node.scrollHeight;
            node.style.setProperty("--select-menu-height", `${height}px`);
        };

        const handleErrorRefCallback = (node: HTMLDivElement) => {
            if (!node) return;

            const height = node.scrollHeight;
            const width = node.scrollHeight;
            node.style.setProperty("--select-error-height", `${height}px`);
            node.style.setProperty("--select-error-width", `${width}px`);
        };

        const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            if (e.target === menuRef.current) return;

            if (isOpen) {
                onClose();
            } else {
                onOpen();
            }
        };

        return (
            <div ref={handleSelectRefCallback} className="select" onClick={handleClick}>
                <div
                    className={withClassNames([
                        "select__label",
                        selectedOption && "select__label--raised"
                    ])}
                >
                    {label}
                </div>
                <div className="select__selected-option">{selectedOption}</div>
                <div className="select__caret-button">
                    <CaretDown
                        className={withClassNames([
                            "select__caret-icon",
                            isOpen && "select__caret-icon--rotate"
                        ])}
                    />
                </div>
                <div
                    ref={handleMenuRefCallback}
                    className={withClassNames([
                        "select__menu",
                        isOpen ? "select__menu--opened" : "select__menu--closed"
                    ])}
                >
                    {children}
                </div>
                {isError && !isOpen && (
                    <div
                        ref={handleErrorRefCallback}
                        className="select__error"
                    >{`Select ${label}`}</div>
                )}
            </div>
        );
    }
);

Select.displayName = "Select";
export default Select;
