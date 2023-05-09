import "./ProductCard.scss";

import { Product } from "../../interfaces/Product.interfaces";
import { Link } from "react-router-dom";

interface ProductCardProps {
    product: Product;
    onShowAddToCartDialog: (product: Product) => void;
}

const ProductCard = ({ product, onShowAddToCartDialog }: ProductCardProps) => {
    const { id, imageSrc, title, price } = product;

    const handleClickAddToCartButton = () => {
        onShowAddToCartDialog(product);
    };

    return (
        <div className="product-card">
            <Link
                className="app__link-unstyled"
                state={{ productId: id }}
                to={`/product-page/:${id}`}
            >
                <img alt="Product" className="product-card__image" src={imageSrc} />
                <div className="product-card__info">
                    <span className="product-card__title">{title}</span>
                    <span className="product-card__price">{`C$${price}`}</span>
                </div>
            </Link>
            <button
                className="app__button--light product-card__add-to-cart-button"
                onClick={handleClickAddToCartButton}
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
