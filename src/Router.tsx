import "./RouterOutlet.scss";

import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "./routes/home/Home";
import Shop from "./routes/shop/Shop";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AboutUs from "./routes/aboutUs/AboutUs";
import Contact from "./routes/contact/Contact";

export const router = createBrowserRouter([
    {
        element: (
            <>
                <Header />
                <div className="router-outlet">
                    <Outlet />
                </div>
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
            },
            {
                path: "/about-us",
                element: <AboutUs />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    }
]);
