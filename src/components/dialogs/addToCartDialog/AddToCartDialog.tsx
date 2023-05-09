import "./AddToCartDialog.scss";

import BaseDialog, { BaseDialogRef } from "../BaseDialog";
import { Product, ProductSize } from "../../../interfaces/Product.interfaces";
import { forwardRef, useRef, useState } from "react";
import Close from "../../../assets/Close.icon";
import Select from "../../inputs/select/Select";
import SelectOption from "../../inputs/select/SelectOption";
import { assertIsNode } from "../../../utilities/Global.utils";
import NumberInput from "../../inputs/numberInput/NumberInput";
import Button from "../../inputs/button/Button";

interface AddToCartDialogProps {
    product: Product;
    onClose: () => void;
}

const AddToCartDialog = forwardRef<BaseDialogRef, AddToCartDialogProps>(
    ({ product, onClose }, ref) => {
        const [isSelectProductSizeOpen, setIsSelectProductSizeOpen] = useState(false);
        const [productSize, setProductSize] = useState<ProductSize>();
        const [productQuantity, setProductQuantity] = useState(1);
        const [isErrorSelectSize, setIsErrorSelectSize] = useState(false);

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

            // TODO Add to cart
        };

        const handleBuyNow = () => {
            // TODO
        };

        return (
            <BaseDialog
                ref={ref}
                className="add-to-cart-dialog"
                onBackdropClick={handleCloseDialog}
                onClick={handleClickDialog}
            >
                <div className="add-to-cart-dialog__header">
                    <Close
                        className="add-to-cart-dialog__close-button"
                        onClick={handleCloseDialog}
                    />
                </div>
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
                            max={99999}
                            min={1}
                            value={productQuantity}
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
                        <a
                            className="add-to-cart-dialog__details"
                            href={`/product-page/:${product?.id}`}
                        >
                            View More Details
                        </a>
                    </div>
                </div>
            </BaseDialog>
        );
    }
);

AddToCartDialog.displayName = "AddToCartDialog";
export default AddToCartDialog;
