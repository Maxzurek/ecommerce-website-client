import "./ProductList.scss";

import { ReactNode } from "react";

interface ProductListProps {
    children: ReactNode;
}

const ProductList = ({ children }: ProductListProps) => {
    return <div className="product-list">{children}</div>;
};

export default ProductList;
