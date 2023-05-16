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
import Home from "./routes/home/Home";
import Shop from "./routes/shop/Shop";
import { BaseDialogRef } from "./components/dialogs/BaseDialog";
import ProductPage from "./routes/productPage/ProductPage";
import Faq from "./routes/faq/Faq";
import SidebarCart from "./components/sidebars/sidebarCart/SidebarCart";
import SidebarMenu from "./components/sidebars/sidebarMenu/SidebarMenu";
import { useCartState } from "./hooks/useCart";
import FeatureNotAvailableDialog from "./components/dialogs/featureNotAvailableDialog/FeatureNotAvailableDialog";

const App = () => {
    const [addToCartProduct, setAddToCartProduct] = useState<Product>();
    const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState(false);
    const [isSidebarCartOpen, setIsSidebarCartOpen] = useState(false);
    const [featureNotAvailableDialogText, setFeatureNotAvailableDialogText] = useState("");

    const cartState = useCartState();

    const addToCartDialogRef = useRef<BaseDialogRef>();
    const featureNotAvailableDialogRef = useRef<BaseDialogRef>();

    const handleShowAddToCartDialog = (product: Product) => {
        setAddToCartProduct(product);
        addToCartDialogRef.current.open();
    };

    const handleCloseAddToCartDialog = () => {
        addToCartDialogRef.current.close();
    };

    const handleOpenSidebarMenu = () => {
        setIsSidebarMenuOpen(true);
    };

    const handleCloseSidebarMenu = () => {
        setIsSidebarMenuOpen(false);
    };

    const handleOpenCart = () => {
        setIsSidebarCartOpen(true);
    };

    const handleCloseSidebarCart = () => {
        setIsSidebarCartOpen(false);
    };

    const handleOpenFeatureNotAvailableDialog = () => {
        featureNotAvailableDialogRef.current.open();
    };

    const handleCloseFeatureNotAvailableDialog = () => {
        featureNotAvailableDialogRef.current.close();
    };

    const handleBuyNow = () => {
        setFeatureNotAvailableDialogText("We can't accept online orders right now");
        handleOpenFeatureNotAvailableDialog();
    };

    const handleLogin = () => {
        setFeatureNotAvailableDialogText("This feature is not available");
        handleOpenFeatureNotAvailableDialog();
    };

    const handleCheckout = () => {
        setFeatureNotAvailableDialogText("We can't accept online orders right now");
        handleOpenFeatureNotAvailableDialog();
    };

    const router = createBrowserRouter([
        {
            element: (
                <>
                    <Header
                        onLogin={handleLogin}
                        onOpenCart={handleOpenCart}
                        onOpenMenu={handleOpenSidebarMenu}
                    />
                    <RouterOutlet />
                    <Footer />
                    <AddToCartDialog
                        ref={addToCartDialogRef}
                        product={addToCartProduct}
                        onBuyNow={handleBuyNow}
                        onClose={handleCloseAddToCartDialog}
                        onOpenCart={handleOpenCart}
                    />
                    <FeatureNotAvailableDialog
                        ref={featureNotAvailableDialogRef}
                        text={featureNotAvailableDialogText}
                        onClose={handleCloseFeatureNotAvailableDialog}
                    />
                    <SidebarMenu
                        isOpen={isSidebarMenuOpen}
                        onClose={handleCloseSidebarMenu}
                        onLogin={handleLogin}
                    />
                    <SidebarCart
                        isOpen={isSidebarCartOpen}
                        items={cartState.items}
                        onCheckout={handleCheckout}
                        onClose={handleCloseSidebarCart}
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
                    path: "/product-page/:productId",
                    element: <ProductPage onBuyNow={handleBuyNow} onOpenCart={handleOpenCart} />
                },
                {
                    path: "/faq",
                    element: <Faq />
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
