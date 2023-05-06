import { useCallback, useEffect, useState } from "react";
import { usePrevious } from "./usePrevious";

const useScroll = () => {
    const [scrollPositionY, setScrollPositionY] = useState(0);
    const [scrollHeight, setScrollHeight] = useState(0);

    const previousScrollPositionY = usePrevious(scrollPositionY);

    const handleScroll = useCallback(() => {
        const bodyHeight = (document.body.scrollHeight ?? 0) - (document.body.offsetHeight ?? 0);
        const scrollPositionY = document.body.scrollTop ?? 0;

        setScrollPositionY(scrollPositionY);
        setScrollHeight(bodyHeight);
    }, []);

    useEffect(() => {
        document.body.addEventListener("scroll", handleScroll, {
            passive: true
        });

        return () => document.body.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return {
        scrollPositionY,
        previousScrollPositionY,
        scrollHeight
    };
};

export default useScroll;
