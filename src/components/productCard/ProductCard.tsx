import "./ProductCard.scss";

import { Product } from "../../ProductList";
import { Link } from "react-router-dom";

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    const { id, imageSrc, title, price } = product;

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
            <button className="app__button--light">Add to Cart</button>
        </div>
    );
};

export default ProductCard;
