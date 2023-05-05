import "./RouterOutlet.scss";

import { Outlet } from "react-router-dom";

const RouterOutlet = () => {
    return (
        <div className="router-outlet">
            <Outlet />
        </div>
    );
};

export default RouterOutlet;
