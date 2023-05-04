import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "./routes/home/Home";
import Shop from "./routes/shop/Shop";
import Header from "./components/header/Header";

export const router = createBrowserRouter([
    {
        element: (
            <>
                <Header />
                <Outlet />
            </>
        ),
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/shop",
                element: <Shop />
            }
        ]
    }
]);
