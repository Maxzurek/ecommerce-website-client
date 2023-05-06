import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/home/Home";
import Shop from "./routes/shop/Shop";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AboutUs from "./routes/aboutUs/AboutUs";
import Contact from "./routes/contact/Contact";
import RouterOutlet from "./components/routerOutlet/RouterOutlet";

export const router = createBrowserRouter([
    {
        element: (
            <>
                <Header />
                <RouterOutlet />
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
            },
            {
                path: "/product-page/:productId",
                element: <div>TODO</div>
            }
        ]
    }
]);
