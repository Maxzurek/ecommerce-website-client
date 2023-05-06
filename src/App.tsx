import "./App.scss";

import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import ScrollToTopButton from "./components/scrollTopButton/ScrollToTopButton";

const App = () => {
    return (
        <div className="app">
            <RouterProvider router={router} />
            <ScrollToTopButton />
        </div>
    );
};

export default App;
