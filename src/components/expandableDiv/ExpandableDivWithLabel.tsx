import "./ExpandableDivWithLabel.scss";

import Minus from "../../assets/Minus.icon";
import Plus from "../../assets/Plus.icon";
import ExpandableDiv from "./ExpandableDiv";
import { ReactNode, useRef } from "react";

interface ExpandableDivWithLabelProps {
    children: ReactNode;
    label: string;
    isExpanded?: boolean;
    onClickLabel: () => void;
}

const ExpandableDivWithLabel = ({
    children,
    label,
    isExpanded,
    onClickLabel
}: ExpandableDivWithLabelProps) => {
    const divRef = useRef<HTMLDivElement>();
    const test = useRef<HTMLDivElement>();

    const handleTransitionEnd = () => {
        if (isExpanded) {
            divRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    };

    return (
        <div ref={divRef} className="expandable-div-with-label">
            <div className="expandable-div-with-label__label" onClick={onClickLabel}>
                {label}
                {isExpanded ? <Minus /> : <Plus />}
            </div>
            <ExpandableDiv
                ref={test}
                className="expandable-div-with-label__container"
                isExpanded={isExpanded}
                onTransitionEnd={handleTransitionEnd}
            >
                {children}
            </ExpandableDiv>
        </div>
    );
};

export default ExpandableDivWithLabel;
