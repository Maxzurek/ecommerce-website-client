import "./Shop.scss";

import { products } from "../../Products";
import ProductCard from "../../components/products/ProductCard";
import ProductList from "../../components/products/ProductList";
import { Product } from "../../interfaces/Product.interfaces";

interface ShopProps {
    onShowAddToCartDialog: (product: Product) => void;
}

const Shop = ({ onShowAddToCartDialog }: ShopProps) => {
    const newArrivals = products.filter((product) => product.isNew);

    return (
        <div className="shop">
            <span className="shop__header">NEW ARRIVALS</span>
            <ProductList>
                {newArrivals.map((product) => (
                    <ProductCard
                        key={product.id}
                        isNew
                        product={product}
                        onShowAddToCartDialog={onShowAddToCartDialog}
                    />
                ))}
            </ProductList>
            <span className="shop__header">SHOP ALL</span>
            <ProductList>
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        isNew={product.isNew}
                        product={product}
                        onShowAddToCartDialog={onShowAddToCartDialog}
                    />
                ))}
            </ProductList>
        </div>
    );
};

export default Shop;
