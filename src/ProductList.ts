import { generateRandomId } from "./utilities/Math.utils";

export interface Product {
    id: string;
    imageSrc: string;
    title: string;
    price: string;
}

interface ProductList {
    men: {
        shirt: Product[];
    };
    women: {
        shirt: Product[];
    };
}

const withTwoDecimalPlaces = (number: number) => {
    return Number(number).toFixed(2);
};

const menShirtImageSrcBasePath = "./images/products/men/";

export const productList: ProductList = {
    men: {
        shirt: [
            {
                id: generateRandomId(),
                imageSrc: menShirtImageSrcBasePath + "men-shirt-1.jpg",
                title: "Men shirt",
                price: withTwoDecimalPlaces(30)
            },
            {
                id: generateRandomId(),
                imageSrc: menShirtImageSrcBasePath + "men-shirt-2.jpg",
                title: "Men shirt",
                price: withTwoDecimalPlaces(25)
            },
            {
                id: generateRandomId(),
                imageSrc: menShirtImageSrcBasePath + "men-shirt-3.jpg",
                title: "Men shirt",
                price: withTwoDecimalPlaces(28)
            },
            {
                id: generateRandomId(),
                imageSrc: menShirtImageSrcBasePath + "men-shirt-4.jpg",
                title: "Men shirt",
                price: withTwoDecimalPlaces(35)
            },
            {
                id: generateRandomId(),
                imageSrc: menShirtImageSrcBasePath + "men-shirt-5.jpg",
                title: "Men shirt",
                price: withTwoDecimalPlaces(35)
            },
            {
                id: generateRandomId(),
                imageSrc: menShirtImageSrcBasePath + "men-shirt-6.jpg",
                title: "Men shirt",
                price: withTwoDecimalPlaces(30)
            },
            {
                id: generateRandomId(),
                imageSrc: menShirtImageSrcBasePath + "men-shirt-7.jpg",
                title: "Men shirt",
                price: withTwoDecimalPlaces(20)
            },
            {
                id: generateRandomId(),
                imageSrc: menShirtImageSrcBasePath + "men-shirt-8.jpg",
                title: "Men shirt",
                price: withTwoDecimalPlaces(25)
            },
            {
                id: generateRandomId(),
                imageSrc: menShirtImageSrcBasePath + "men-shirt-9.jpg",
                title: "Men shirt",
                price: withTwoDecimalPlaces(30)
            },
            {
                id: generateRandomId(),
                imageSrc: menShirtImageSrcBasePath + "men-shirt-10.jpg",
                title: "Men shirt",
                price: withTwoDecimalPlaces(35)
            },
            {
                id: generateRandomId(),
                imageSrc: menShirtImageSrcBasePath + "men-shirt-11.jpg",
                title: "Men shirt",
                price: withTwoDecimalPlaces(30)
            },
            {
                id: generateRandomId(),
                imageSrc: menShirtImageSrcBasePath + "men-shirt-12.jpg",
                title: "Men shirt",
                price: withTwoDecimalPlaces(30)
            },
            {
                id: generateRandomId(),
                imageSrc: menShirtImageSrcBasePath + "men-shirt-13.jpg",
                title: "Men shirt",
                price: withTwoDecimalPlaces(20)
            },
            {
                id: generateRandomId(),
                imageSrc: menShirtImageSrcBasePath + "men-shirt-14.jpg",
                title: "Men shirt",
                price: withTwoDecimalPlaces(30)
            },
            {
                id: generateRandomId(),
                imageSrc: menShirtImageSrcBasePath + "men-shirt-15.jpg",
                title: "Men shirt",
                price: withTwoDecimalPlaces(30)
            },
            {
                id: generateRandomId(),
                imageSrc: menShirtImageSrcBasePath + "men-shirt-16.jpg",
                title: "Men shirt",
                price: withTwoDecimalPlaces(25)
            },
            {
                id: generateRandomId(),
                imageSrc: menShirtImageSrcBasePath + "men-shirt-17.jpg",
                title: "Men shirt",
                price: withTwoDecimalPlaces(30)
            },
            {
                id: generateRandomId(),
                imageSrc: menShirtImageSrcBasePath + "men-shirt-18.jpg",
                title: "Men shirt",
                price: withTwoDecimalPlaces(35)
            }
        ]
    },
    women: {
        shirt: []
    }
};
