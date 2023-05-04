import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "./routes/home/Home";
import Shop from "./routes/shop/Shop";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export const router = createBrowserRouter([
    {
        element: (
            <>
                <Header />
                <Outlet />
                <Footer />
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
