import "./ProductPage.scss";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useMemo, useRef, useState } from "react";
import { products } from "../../Products";
import Button from "../../components/inputs/button/Button";
import NumberInput from "../../components/inputs/numberInput/NumberInput";
import Select from "../../components/inputs/select/Select";
import SelectOption from "../../components/inputs/select/SelectOption";
import { ProductSize } from "../../interfaces/Product.interfaces";
import ExpandableDivWithLabel from "../../components/expandableDiv/ExpandableDivWithLabel";
import BaseDialog, { BaseDialogRef } from "../../components/dialogs/BaseDialog";
import CaretLeft from "../../assets/CaretLeft.icon";
import { getFormattedRouterRoutePathName } from "../../utilities/Global.utils";
import { useCartDispatch } from "../../hooks/useCart";
import { CartItem } from "../../interfaces/Cart.interfaces";
import { generateRandomId } from "../../utilities/Math.utils";

interface ProductPageProps {
    onOpenCart: () => void;
}

const ProductPage = ({ onOpenCart }: ProductPageProps) => {
    const [isSelectProductSizeOpen, setIsSelectProductSizeOpen] = useState(false);
    const [productSize, setProductSize] = useState<ProductSize>();
    const [productQuantity, setProductQuantity] = useState(1);
    const [isErrorSelectSize, setIsErrorSelectSize] = useState(false);
    const [isProductInfoExpanded, setIsProductInfoExpanded] = useState(true);
    const [isReturnAndRefundPolicyExpanded, setIsReturnAndRefundPolicyExpanded] = useState(false);
    const [isShippingInfoExpanded, setIsShippingInfoExpanded] = useState(false);

    const cartDispatch = useCartDispatch();

    const navigate = useNavigate();
    const { productId } = useParams();
    const { state } = useLocation();
    const previousRoute = getFormattedRouterRoutePathName(state?.prevLocation.pathname);

    const selectRef = useRef<HTMLDivElement>();
    const dialogRef = useRef<BaseDialogRef>();

    const product = useMemo(
        () =>
            products.men.shirt.find((product) => product.id === productId) ||
            products.women.shirt.find((product) => product.id === productId),
        [productId]
    );

    const handleClickBackToPreviousRoute = () => {
        navigate(state?.prevLocation || "/");
    };

    const handleClickProductImage = () => {
        dialogRef.current.open();
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
            productId: product.id,
            quantity: productQuantity,
            size: productSize
        };
        cartDispatch({ type: "addItem", payload: cartItem });

        onOpenCart();
    };

    const handleBuyNow = () => {
        // TODO Buy now
    };

    const handleClickProductInfoLabel = () => {
        setIsProductInfoExpanded(!isProductInfoExpanded);
        setIsReturnAndRefundPolicyExpanded(false);
        setIsShippingInfoExpanded(false);
    };

    const handleClickReturnAndRefundPolicyLabel = () => {
        setIsReturnAndRefundPolicyExpanded(!isReturnAndRefundPolicyExpanded);
        setIsProductInfoExpanded(false);
        setIsShippingInfoExpanded(false);
    };

    const handleClickShippingInfo = () => {
        setIsShippingInfoExpanded(!isShippingInfoExpanded);
        setIsReturnAndRefundPolicyExpanded(false);
        setIsProductInfoExpanded(false);
    };

    const handleBackdropClickDialog = () => {
        dialogRef.current.close();
    };

    return (
        <div className="product-page">
            <div
                className="product-page__back-to-previous-location"
                onClick={handleClickBackToPreviousRoute}
            >
                <CaretLeft />
                <div>{`Back to ${previousRoute}`}</div>
            </div>
            <div />
            <img
                alt="Product"
                className="product-page__image"
                src={product.imageSrc}
                onClick={handleClickProductImage}
            />
            <div className="product-page__inputs">
                <span className="product-page__title">{product.title}</span>
                <span className="product-page__price">{`C$${product.price}`}</span>
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
                <div className="product-page__buttons">
                    <Button inverseColorOnHover theme="light" onClick={handleAddToCart}>
                        Add to Cart
                    </Button>
                    <Button theme="dark" onClick={handleBuyNow}>
                        Buy Now
                    </Button>
                </div>
            </div>
            <div className="product-page__description">
                {
                    "I'm a product description. I'm a great place to add more details about the product such as sizing, material, care instructions and cleaning instructions"
                }
            </div>
            <div>
                <ExpandableDivWithLabel
                    isExpanded={isProductInfoExpanded}
                    label="PRODUCT INFO"
                    onClickLabel={handleClickProductInfoLabel}
                >
                    {
                        "I'm a product detail. I'm a great place to add more information about the product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how the customers can benefit from this item."
                    }
                </ExpandableDivWithLabel>
                <ExpandableDivWithLabel
                    isExpanded={isReturnAndRefundPolicyExpanded}
                    label="RETURN & REFUND POLICY"
                    onClickLabel={handleClickReturnAndRefundPolicyLabel}
                >
                    {
                        "I'm a Return and Refund policy. I'm a great place to let the customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure the customers that they can buy with confidence."
                    }
                </ExpandableDivWithLabel>
                <ExpandableDivWithLabel
                    isExpanded={isShippingInfoExpanded}
                    label="SHIPPING INFO"
                    onClickLabel={handleClickShippingInfo}
                >
                    {
                        "I'm a shipping policy. I'm a great place to add more information about the shipping methods, packaging and cost. Providing straightforward information about the shipping policy is a great way to build trust and reassure the customers that they can buy from us with confidence."
                    }
                </ExpandableDivWithLabel>
            </div>
            <BaseDialog
                ref={dialogRef}
                className="product-page__dialog"
                onBackdropClick={handleBackdropClickDialog}
            >
                <img alt="Product" src={product.imageSrc} style={{ width: "100%" }} />
            </BaseDialog>
        </div>
    );
};

export default ProductPage;
