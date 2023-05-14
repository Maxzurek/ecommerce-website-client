import "./CartItemCard.scss";

import { CartItem } from "../../../interfaces/Cart.interfaces";
import NumberInput from "../../inputs/numberInput/NumberInput";
import Close from "../../../assets/Close.icon";
import { useMemo, useState } from "react";
import { numberWithCommas } from "../../../utilities/Number.utils";
import { withClassNames } from "../../../utilities/WithClassNames";
import { products } from "../../../Products";

interface CartItemCardProps {
    item: CartItem;
    onQuantityChange: (itemId: string, quantity: number) => void;
    onRemoveItem: (itemId: string) => void;
}

const CartItemCard = ({ item, onQuantityChange, onRemoveItem }: CartItemCardProps) => {
    const [isRemoved, setIsRemoved] = useState(false);

    const { id, quantity, size } = item;

    const product = useMemo(
        () => products.find((product) => product.id === item.productId),
        [item.productId]
    );

    const totalPrice = useMemo(
        () => numberWithCommas(Number(product.price) * quantity),
        [product.price, quantity]
    );

    const handleChangeQuantity = (quantity: number) => {
        onQuantityChange(id, quantity);
    };

    const handleClickRemoveItemButton = () => {
        // We want to change the class to animate the removal before remove the item from our cart state
        setIsRemoved(true);
    };

    const handleTransitionEnd = () => {
        onRemoveItem(item.id);
    };

    return (
        <div
            className={withClassNames(["cart-item-card", isRemoved && "cart-item-card--removed"])}
            onTransitionEnd={handleTransitionEnd}
        >
            <div>
                <img alt="Product" className="cart-item-card__image" src={product.imageSrc}></img>
            </div>
            <div className="cart-item-card__info">
                <div className="cart-item-card__row">
                    <span className="cart-item-card__product-title"> {product.title}</span>
                    <Close
                        className="cart-item-card__remove-item-button"
                        onClick={handleClickRemoveItemButton}
                    />
                </div>
                <div className="cart-item-card__column">
                    <span className="cart-item-card__product-price">{`C$${product.price}`}</span>
                    <span className="cart-item-card__product-size">Size: {size}</span>
                </div>
                <div className="cart-item-card__row">
                    <NumberInput
                        max={9999}
                        min={1}
                        value={quantity}
                        onChange={handleChangeQuantity}
                    />
                    <span className="cart-item-card__total-price">{`C$${totalPrice}`}</span>
                </div>
            </div>
        </div>
    );
};

export default CartItemCard;
