import "./RouterOutlet.scss";

import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { usePrevious } from "../../hooks/usePrevious";

const RouterOutlet = () => {
    const { pathname } = useLocation();
    const prevLocation = usePrevious(pathname);

    useEffect(() => {
        if (prevLocation === pathname) {
            return;
        }

        document.body.scrollTo({ top: 0 });
    }, [pathname, prevLocation]);

    return (
        <div key={pathname} className="router-outlet">
            <Outlet />
        </div>
    );
};

export default RouterOutlet;
