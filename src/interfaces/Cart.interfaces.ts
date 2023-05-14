import { Product, ProductSize } from "./Product.interfaces";

export interface CartItem {
    id: string;
    product: Product;
    quantity: number;
    size: ProductSize;
}
