import "./App.scss";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ScrollToTopButton from "./components/scrollTopButton/ScrollToTopButton";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import RouterOutlet from "./components/routerOutlet/RouterOutlet";
import AboutUs from "./routes/aboutUs/AboutUs";
import Contact from "./routes/contact/Contact";
import Home from "./routes/home/Home";
import Shop from "./routes/shop/Shop";

const App = () => {
    const router = createBrowserRouter([
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

    return (
        <div className="app">
            <RouterProvider router={router} />
            <ScrollToTopButton />
        </div>
    );
};

export default App;
