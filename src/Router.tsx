import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/home/Home";
import Shop from "./routes/shop/Shop";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/shop",
        element: <Shop />
    }
]);
