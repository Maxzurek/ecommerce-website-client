import { ProductSize } from "./Product.interfaces";

export interface CartItem {
    id: string;
    productId: string;
    quantity: number;
    size: ProductSize;
}
