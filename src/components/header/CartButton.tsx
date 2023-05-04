import "./CartButton.scss";

import Cart from "../../assets/Cart.icon";
import { withClassNames } from "../../utilities/WithClassNames";

interface CartButtonProps {
    itemCount: number;
    onClick: () => void;
}

const CartButton = ({ itemCount, onClick }: CartButtonProps) => {
    return (
        <div className="cart-button" onClick={onClick}>
            <div
                className={withClassNames([
                    "cart-button__item-count",
                    itemCount < 10
                        ? "cart-button__item-count--one-digit"
                        : "cart-button__item-count--two-digit"
                ])}
            >
                {itemCount}
            </div>
            <Cart className="cart-button__icon" />
            <span className="cart-button__text">Cart</span>
        </div>
    );
};

export default CartButton;
