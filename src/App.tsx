import "./App.scss";

import { RouterProvider } from "react-router-dom";
import { router } from "./Router";

const App = () => {
    return (
        <div className="app">
            <RouterProvider router={router} />
        </div>
    );
};

export default App;