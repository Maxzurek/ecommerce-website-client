import "./RouterOutlet.scss";

import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const RouterOutlet = () => {
    const { key } = useLocation();

    useEffect(() => {
        document.body.scrollTo({ top: 0, behavior: "smooth" });
    }, [key]);

    return (
        <div key={key} className="router-outlet">
            <Outlet />
        </div>
    );
};

export default RouterOutlet;
