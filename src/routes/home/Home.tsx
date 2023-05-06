import { productList } from "../../ProductList";
import ProductCard from "../../components/productCard/ProductCard";
import "./Home.scss";

import { Link } from "react-router-dom";

const Home = () => {
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
                <div className="app__button--transparent home__banner-image-button-shop-now">
                    <Link className="app__link-unstyled" to="shop">
                        Shop Now
                    </Link>
                </div>
            </div>
            <span className="home__header">
                {"LIMITED EDITION"}
                <br />
                {"COLLECTION"}
            </span>
            <div className="home__product-list">
                {productList.men.shirt.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Home;
