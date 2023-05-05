import { ReactNode, useEffect, useState } from "react";

export enum MediaWidth {
    xs = 0,
    sm = 576,
    md = 768,
    lg = 992,
    xl = 1200
}

interface MediaQueryCommonProps {
    children: ReactNode;
}
interface MediaQueryPropsWithMinWidth extends MediaQueryCommonProps {
    minMediaWidth: MediaWidth;
}
interface MediaQueryPropsWithMaxWidth extends MediaQueryCommonProps {
    maxMediaWidth: MediaWidth;
}
interface MediaQueryProps {
    children: ReactNode;
    minMediaWidth?: MediaWidth;
    maxMediaWidth?: MediaWidth;
}

function MediaQuery(props: MediaQueryPropsWithMinWidth): JSX.Element;
function MediaQuery(props: MediaQueryPropsWithMaxWidth): JSX.Element;
function MediaQuery({ children, minMediaWidth, maxMediaWidth }: MediaQueryProps) {
    const [mediaWidth, setMediaWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResizeWindow = () => {
            setMediaWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResizeWindow);

        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    return mediaWidth <= maxMediaWidth || mediaWidth > minMediaWidth ? <>{children}</> : <></>;
}

export default MediaQuery;
