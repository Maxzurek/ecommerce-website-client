import { useLayoutEffect, useState } from "react";
import "./RouterOutlet.scss";

import { Outlet, useLocation } from "react-router-dom";
import { withClassNames } from "../../utilities/WithClassNames";
import { usePrevious } from "../../hooks/usePrevious";

const RouterOutlet = () => {
    const [animateNavigation, setAnimateAnimation] = useState(true);

    const { pathname } = useLocation();
    const previousPathName = usePrevious(pathname);

    useLayoutEffect(() => {
        if (pathname !== previousPathName) {
            setAnimateAnimation(true);
        }
    }, [pathname, previousPathName]);

    const handleAnimationEnd = () => {
        setAnimateAnimation(false);
    };

    return (
        <div
            className={withClassNames([
                "router-outlet",
                animateNavigation && "router-outlet--animate-navigation"
            ])}
            onAnimationEnd={handleAnimationEnd}
        >
            <Outlet />
        </div>
    );
};

export default RouterOutlet;
