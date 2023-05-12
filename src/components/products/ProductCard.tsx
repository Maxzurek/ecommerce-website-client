import "./ProductCard.scss";

import { Product } from "../../interfaces/Product.interfaces";
import { Link, useLocation } from "react-router-dom";
import Button from "../inputs/button/Button";

interface ProductCardProps {
    product: Product;
    isNew?: boolean;
    onShowAddToCartDialog: (product: Product) => void;
}

const ProductCard = ({ product, isNew, onShowAddToCartDialog }: ProductCardProps) => {
    const prevLocation = useLocation();

    const { id, imageSrc, title, price } = product;

    const handleClickAddToCartButton = () => {
        onShowAddToCartDialog(product);
    };

    return (
        <div className="product-card">
            <Link
                className="app__link-unstyled"
                state={{ productId: id, prevLocation }}
                to={`/product-page/${id}`}
            >
                {isNew && <div className="product-card__new-ribbon">New</div>}
                <img alt="Product" className="product-card__image" src={imageSrc} />
                <div className="product-card__info">
                    <span className="product-card__title">{title}</span>
                    <span className="product-card__price">{`C$${price}`}</span>
                </div>
            </Link>
            <Button inverseColorOnHover theme="light" onClick={handleClickAddToCartButton}>
                Add to Cart
            </Button>
        </div>
    );
};

export default ProductCard;
