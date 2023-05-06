import "./ScrollToTopButton.scss";

import { useState, useRef, useEffect } from "react";
import CaretUp from "../../assets/CaretUp.icon";
import useScroll from "../../hooks/useScroll";
import { withClassNames } from "../../utilities/WithClassNames";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const { scrollPositionY, previousScrollPositionY } = useScroll();

    const timeout = useRef<NodeJS.Timeout>();

    useEffect(() => {
        const scrollPositionVisibilityTrigger = 500;
        const scrollToTopButtonVisibilityDuration = 3000;
        const wasScrolled = previousScrollPositionY !== scrollPositionY;
        const hasReachTop = scrollPositionY <= scrollPositionVisibilityTrigger;

        if (wasScrolled && scrollPositionY >= scrollPositionVisibilityTrigger && !isVisible) {
            setIsVisible(true);

            timeout.current = setTimeout(() => {
                setIsVisible(false);
            }, scrollToTopButtonVisibilityDuration);
        }
        if (wasScrolled && hasReachTop && isVisible) {
            setIsVisible(false);
            clearTimeout(timeout.current);
        }
    }, [isVisible, previousScrollPositionY, scrollPositionY]);

    const handleClick = () => {
        document.body.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div
            className={withClassNames([
                "scroll-to-top-button",
                isVisible ? "scroll-to-top-button--visible" : "scroll-to-top-button--hidden"
            ])}
            onClick={handleClick}
        >
            <CaretUp className="scroll-to-top-button__icon" />
        </div>
    );
};

export default ScrollToTopButton;
