import "./AddToCartDialog.scss";

import BaseDialog, { BaseDialogRef } from "../BaseDialog";
import { Product, ProductSize } from "../../../interfaces/Product.interfaces";
import { forwardRef, useRef, useState } from "react";
import Select from "../../inputs/select/Select";
import SelectOption from "../../inputs/select/SelectOption";
import { assertIsNode } from "../../../utilities/Global.utils";
import NumberInput from "../../inputs/numberInput/NumberInput";
import Button from "../../inputs/button/Button";
import { Link, useLocation } from "react-router-dom";
import { useCartDispatch } from "../../../hooks/useCart";
import { CartItem } from "../../../interfaces/Cart.interfaces";
import { generateRandomId } from "../../../utilities/Math.utils";

interface AddToCartDialogProps {
    product: Product;
    onClose: () => void;
    onOpenCart: () => void;
}

const AddToCartDialog = forwardRef<BaseDialogRef, AddToCartDialogProps>(
    ({ product, onClose, onOpenCart }, ref) => {
        const [isSelectProductSizeOpen, setIsSelectProductSizeOpen] = useState(false);
        const [productSize, setProductSize] = useState<ProductSize>();
        const [productQuantity, setProductQuantity] = useState(1);
        const [isErrorSelectSize, setIsErrorSelectSize] = useState(false);

        const prevLocation = useLocation();
        const cartDispatch = useCartDispatch();

        const selectRef = useRef<HTMLDivElement>();

        const handleClickDialog = (e: React.MouseEvent<HTMLDialogElement, MouseEvent>) => {
            assertIsNode(e.target);
            if (selectRef.current && !selectRef.current.contains(e.target)) {
                setIsSelectProductSizeOpen(false);
            }
        };

        const handleCloseDialog = () => {
            onClose();
            setProductQuantity(1);
            setProductSize(null);
        };

        const handleOpenSelectSize = () => {
            setIsSelectProductSizeOpen(true);
        };

        const handleCloseSelectSize = () => {
            setIsSelectProductSizeOpen(false);
        };

        const handleClickProductSizeOption = (productSize: ProductSize) => {
            setIsSelectProductSizeOpen(false);
            setProductSize(productSize);
            setIsErrorSelectSize(false);
        };

        const handleChangeInputQuantity = (value: number) => {
            setProductQuantity(value);
        };

        const handleAddToCart = () => {
            if (!productSize) {
                setIsErrorSelectSize(true);
                return;
            }

            const cartItem: CartItem = {
                id: generateRandomId(),
                product: product,
                quantity: productQuantity,
                size: productSize
            };
            cartDispatch({ type: "addItem", payload: cartItem });

            onOpenCart();
            handleCloseDialog();
        };

        const handleBuyNow = () => {
            // TODO
        };

        const handleClickDetails = () => {
            onClose();
        };

        return (
            <BaseDialog
                ref={ref}
                className="add-to-cart-dialog"
                onBackdropClick={handleCloseDialog}
                onClick={handleClickDialog}
            >
                <div className="add-to-cart-dialog__body">
                    <img
                        alt="Product"
                        className="add-to-cart-dialog__image"
                        src={product?.imageSrc}
                    />
                    <div className="add-to-cart-dialog__inputs">
                        <span className="add-to-cart-dialog__title">{product?.title}</span>
                        <span className="add-to-cart-dialog__price">{`C$${product?.price}`}</span>
                        <Select
                            ref={selectRef}
                            isError={isErrorSelectSize}
                            isOpen={isSelectProductSizeOpen}
                            label="Size"
                            selectedOption={productSize}
                            onClose={handleCloseSelectSize}
                            onOpen={handleOpenSelectSize}
                        >
                            <SelectOption
                                label={ProductSize.Small}
                                value={ProductSize.Small}
                                onClick={handleClickProductSizeOption}
                            />
                            <SelectOption
                                label={ProductSize.Medium}
                                value={ProductSize.Medium}
                                onClick={handleClickProductSizeOption}
                            />
                            <SelectOption
                                label={ProductSize.Large}
                                value={ProductSize.Large}
                                onClick={handleClickProductSizeOption}
                            />
                            <SelectOption
                                label={ProductSize.XLarge}
                                value={ProductSize.XLarge}
                                onClick={handleClickProductSizeOption}
                            />
                        </Select>
                        <NumberInput
                            label="Quantity"
                            max={9999}
                            min={1}
                            value={productQuantity}
                            withArrow
                            onChange={handleChangeInputQuantity}
                        />
                        <div className="add-to-cart-dialog__buttons">
                            <Button inverseColorOnHover theme="light" onClick={handleAddToCart}>
                                Add to Cart
                            </Button>
                            <Button theme="dark" onClick={handleBuyNow}>
                                Buy Now
                            </Button>
                        </div>
                        <Link
                            className="add-to-cart-dialog__details"
                            state={{ prevLocation }}
                            to={`/product-page/${product?.id}`}
                            onClick={handleClickDetails}
                        >
                            View More Details
                        </Link>
                    </div>
                </div>
            </BaseDialog>
        );
    }
);

AddToCartDialog.displayName = "AddToCartDialog";
export default AddToCartDialog;
