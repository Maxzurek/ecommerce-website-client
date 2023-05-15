import "./SidebarCart.scss";

import CaretRight from "../../../assets/CaretRight.icon";
import Sidebar from "../Sidebar";
import CartItemCard from "./CartItemCard";
import { CartItem } from "../../../interfaces/Cart.interfaces";
import { useCartDispatch } from "../../../hooks/useCart";
import { useMemo } from "react";
import { numberWithCommas } from "../../../utilities/Number.utils";
import Button from "../../inputs/button/Button";
import { withClassNames } from "../../../utilities/WithClassNames";
import { Link } from "react-router-dom";
import { products } from "../../../Products";

interface SidebarCartProps {
    isOpen: boolean;
    items: CartItem[];
    onClose: () => void;
    onCheckout: () => void;
}

const SidebarCart = ({ isOpen, items, onClose, onCheckout }: SidebarCartProps) => {
    const cartDispatch = useCartDispatch();

    const subtotal = useMemo(() => {
        let subtotal = 0;

        for (const item of items) {
            const product = products.find((product) => product.id === item.productId);
            subtotal += Number(product.price) * item.quantity;
        }

        return numberWithCommas(subtotal);
    }, [items]);

    const isCartEmpty = items.length === 0;

    const handleChangeQuantity = (itemId: string, quantity: number) => {
        cartDispatch({ type: "updateItemQuantity", payload: { itemId, newQuantity: quantity } });
    };

    const handleRemoveItem = (itemId: string) => {
        cartDispatch({ type: "removeItem", payload: { itemId } });
    };

    return (
        <Sidebar className="sidebar-cart" isOpen={isOpen} onClose={onClose}>
            <div className="sidebar-cart__header">
                <div className="sidebar-cart__close-button" onClick={onClose}>
                    <CaretRight />
                </div>
                <span className="sidebar-cart__header-text">Cart</span>
            </div>
            <div
                className={withClassNames([
                    "sidebar-cart__body",
                    isCartEmpty && "sidebar-cart__body--empty"
                ])}
            >
                {isCartEmpty && (
                    <span className="sidebar-cart__empty-cart">Your cart is empty</span>
                )}
                {items.map((item) => (
                    <CartItemCard
                        key={item.id}
                        item={item}
                        onQuantityChange={handleChangeQuantity}
                        onRemoveItem={handleRemoveItem}
                    />
                ))}
            </div>
            <div className="sidebar-cart__footer">
                {isCartEmpty ? (
                    <Link to={"/shop"} onClick={onClose}>
                        <Button theme="dark">Shop All</Button>
                    </Link>
                ) : (
                    <>
                        <span className="sidebar-cart__subtotal">Subtotal</span>
                        <span className="sidebar-cart__subtotal">{`C$${subtotal}`}</span>
                        <Button theme="dark" onClick={onCheckout}>
                            Checkout
                        </Button>
                    </>
                )}
            </div>
        </Sidebar>
    );
};

export default SidebarCart;
