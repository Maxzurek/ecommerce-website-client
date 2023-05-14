export interface Product {
    id: string;
    imageSrc: string;
    title: string;
    price: string;
    isNew?: boolean;
}

export enum ProductSize {
    Small = "Small",
    Medium = "Medium",
    Large = "Large",
    XLarge = "Extra large"
}
