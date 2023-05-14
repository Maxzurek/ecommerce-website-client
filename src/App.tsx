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

const App = () => {
    const [addToCartProduct, setAddToCartProduct] = useState<Product>();
    const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState(false);
    const [isSidebarCartOpen, setIsSidebarCartOpen] = useState(false);

    const cartState = useCartState();

    const addToCartDialogRef = useRef<BaseDialogRef>();

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

    const router = createBrowserRouter([
        {
            element: (
                <>
                    <Header onOpenCart={handleOpenCart} onOpenMenu={handleOpenSidebarMenu} />
                    <RouterOutlet />
                    <Footer />
                    <AddToCartDialog
                        ref={addToCartDialogRef}
                        product={addToCartProduct}
                        onClose={handleCloseAddToCartDialog}
                        onOpenCart={handleOpenCart}
                    />
                    <SidebarMenu isOpen={isSidebarMenuOpen} onClose={handleCloseSidebarMenu} />
                    <SidebarCart
                        isOpen={isSidebarCartOpen}
                        items={cartState.items}
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
                    element: <ProductPage onOpenCart={handleOpenCart} />
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
