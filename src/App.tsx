import "./App.scss";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ScrollToTopButton from "./components/scrollTopButton/ScrollToTopButton";
import AddToCartDialog from "./components/dialogs/addToCartDialog/AddToCartDialog";
import { Product } from "./interfaces/Product.interfaces";
import { useRef, useState } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import RouterOutlet from "./components/routerOutlet/RouterOutlet";
import AboutUs from "./routes/aboutUs/AboutUs";
import Contact from "./routes/contact/Contact";
import Home from "./routes/home/Home";
import Shop from "./routes/shop/Shop";
import { BaseDialogRef } from "./components/dialogs/BaseDialog";
import ProductPage from "./routes/productPage/ProductPage";

const App = () => {
    const [addToCartProduct, setAddToCartProduct] = useState<Product>();

    const addToCartDialogRef = useRef<BaseDialogRef>();

    const handleShowAddToCartDialog = (product: Product) => {
        setAddToCartProduct(product);
        addToCartDialogRef.current.open();
    };

    const handleCloseAddToCartDialog = () => {
        addToCartDialogRef.current.close();
    };

    const router = createBrowserRouter([
        {
            element: (
                <>
                    <Header />
                    <RouterOutlet />
                    <Footer />
                    <AddToCartDialog
                        ref={addToCartDialogRef}
                        product={addToCartProduct}
                        onClose={handleCloseAddToCartDialog}
                    />
                </>
            ),
            children: [
                {
                    path: "/",
                    element: <Home onShowAddToCartDialog={handleShowAddToCartDialog} />
                },
                {
                    path: "/shop",
                    element: <Shop onShowAddToCartDialog={handleShowAddToCartDialog} />
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
                    element: <ProductPage />
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
