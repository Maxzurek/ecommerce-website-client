import "./SidebarCart.scss";

import CaretRight from "../../../assets/CaretRight.icon";
import Sidebar from "../Sidebar";
import CartItemCard from "./CartItemCard";
import { CartItem } from "../../../interfaces/Cart.interfaces";
import { useCartDispatch } from "../../../hooks/useCart";
import { useMemo } from "react";
import { numberWithCommas } from "../../../utilities/Number.utils";
import Button from "../../inputs/button/Button";

interface SidebarCartProps {
    isOpen: boolean;
    items: CartItem[];
    onClose: () => void;
}

const SidebarCart = ({ isOpen, items, onClose }: SidebarCartProps) => {
    const cartDispatch = useCartDispatch();

    const subtotal = useMemo(() => {
        let subtotal = 0;

        for (const item of items) {
            subtotal += Number(item.product.price) * item.quantity;
        }

        return numberWithCommas(subtotal);
    }, [items]);

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
            <div className="sidebar-cart__body">
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
                <span className="sidebar-cart__subtotal">Subtotal</span>
                <span className="sidebar-cart__subtotal">{`C$${subtotal}`}</span>
                <Button theme="dark">Checkout</Button>
            </div>
        </Sidebar>
    );
};

export default SidebarCart;
