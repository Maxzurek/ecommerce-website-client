import "./Home.scss";

import { newArrivals } from "../../Products";
import ProductCard from "../../components/products/ProductCard";
import ProductList from "../../components/products/ProductList";
import { Product } from "../../interfaces/Product.interfaces";

import { Link } from "react-router-dom";
import Button from "../../components/inputs/button/Button";

interface HomeProps {
    onShowAddToCartDialog: (product: Product) => void;
}

const Home = ({ onShowAddToCartDialog }: HomeProps) => {
    return (
        <div className="home">
            <div className="home__banner-image">
                <img
                    alt="home-banner-large"
                    className="home__banner-image"
                    src="./images/home-banner.png"
                />
                <span className="home__banner-image-slogan">
                    WEAR
                    <br />
                    YOUR ATTITUDE
                </span>
                <span className="home__banner-image-new-arrivals">NEW ARRIVALS ARE HERE</span>
                <Button
                    className="home__banner-image-button-shop-now"
                    inverseColorOnHover
                    theme="transparent"
                >
                    <Link className="app__link-unstyled" to="shop">
                        Shop Now
                    </Link>
                </Button>
            </div>
            <span className="home__header">
                {"LIMITED EDITION"}
                <br />
                {"COLLECTION"}
            </span>
            <ProductList>
                {newArrivals.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onShowAddToCartDialog={onShowAddToCartDialog}
                    />
                ))}
            </ProductList>
        </div>
    );
};

export default Home;
