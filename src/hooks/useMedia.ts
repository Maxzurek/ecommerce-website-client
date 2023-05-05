import { useState, useEffect, useMemo } from "react";

const useMedia = () => {
    const tabletMinWidth = 768;
    const desktopMinWidth = 992;

    const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);
    const [isMobile, setIsMobile] = useState(window.innerWidth < tabletMinWidth);
    const [isTablet, setIsTablet] = useState(
        window.innerWidth >= tabletMinWidth && window.innerWidth < desktopMinWidth
    );
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= desktopMinWidth);

    const isTouch = useMemo(() => "ontouchstart" in window, []);

    useEffect(() => {
        const handleResizeWindow = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
            setIsMobile(window.innerWidth < tabletMinWidth);
            setIsTablet(window.innerWidth >= tabletMinWidth && window.innerWidth < desktopMinWidth);
            setIsDesktop(window.innerWidth >= desktopMinWidth);
        };

        window.addEventListener("resize", handleResizeWindow);

        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    return { windowSize, isTouch, isMobile, isTablet, isDesktop };
};

export default useMedia;
