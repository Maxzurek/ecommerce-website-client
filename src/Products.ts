import { Product } from "./interfaces/Product.interfaces";

const withTwoDecimalPlaces = (number: number) => {
    return Number(number).toFixed(2);
};

const menShirtImageSrcBasePath = "/images/products/men/";

export const products: Product[] = [
    {
        id: "shirt-men-1",
        imageSrc: menShirtImageSrcBasePath + "men-shirt-1.jpg",
        title: "Men shirt 1",
        price: withTwoDecimalPlaces(30)
    },
    {
        id: "shirt-men-2",
        imageSrc: menShirtImageSrcBasePath + "men-shirt-2.jpg",
        title: "Men shirt 2",
        price: withTwoDecimalPlaces(25)
    },
    {
        id: "shirt-men-3",
        imageSrc: menShirtImageSrcBasePath + "men-shirt-3.jpg",
        title: "Men shirt 3",
        price: withTwoDecimalPlaces(28)
    },
    {
        id: "shirt-men-4",
        imageSrc: menShirtImageSrcBasePath + "men-shirt-4.jpg",
        title: "Men shirt 4",
        price: withTwoDecimalPlaces(35)
    },
    {
        id: "shirt-men-5",
        imageSrc: menShirtImageSrcBasePath + "men-shirt-5.jpg",
        title: "Men shirt 5",
        price: withTwoDecimalPlaces(35)
    },
    {
        id: "shirt-men-6",
        imageSrc: menShirtImageSrcBasePath + "men-shirt-6.jpg",
        title: "Men shirt 6",
        price: withTwoDecimalPlaces(30)
    },
    {
        id: "shirt-men-7",
        imageSrc: menShirtImageSrcBasePath + "men-shirt-7.jpg",
        title: "Men shirt 7",
        price: withTwoDecimalPlaces(20)
    },
    {
        id: "shirt-men-8",
        imageSrc: menShirtImageSrcBasePath + "men-shirt-8.jpg",
        title: "Men shirt 8",
        price: withTwoDecimalPlaces(25)
    },
    {
        id: "shirt-men-9",
        imageSrc: menShirtImageSrcBasePath + "men-shirt-9.jpg",
        title: "Men shirt 9",
        price: withTwoDecimalPlaces(30)
    },
    {
        id: "shirt-men-10",
        imageSrc: menShirtImageSrcBasePath + "men-shirt-10.jpg",
        title: "Men shirt 10",
        price: withTwoDecimalPlaces(35)
    },
    {
        id: "shirt-men-11",
        imageSrc: menShirtImageSrcBasePath + "men-shirt-11.jpg",
        title: "Men shirt 11",
        price: withTwoDecimalPlaces(30)
    },
    {
        id: "shirt-men-12",
        imageSrc: menShirtImageSrcBasePath + "men-shirt-12.jpg",
        title: "Men shirt 12",
        price: withTwoDecimalPlaces(30)
    },
    {
        id: "shirt-men-13",
        imageSrc: menShirtImageSrcBasePath + "men-shirt-13.jpg",
        title: "Men shirt 13",
        price: withTwoDecimalPlaces(20)
    },
    {
        id: "shirt-men-14",
        imageSrc: menShirtImageSrcBasePath + "men-shirt-14.jpg",
        title: "Men shirt 14",
        price: withTwoDecimalPlaces(30)
    },
    {
        id: "shirt-men-15",
        imageSrc: menShirtImageSrcBasePath + "men-shirt-15.jpg",
        title: "Men shirt 15",
        price: withTwoDecimalPlaces(30),
        isNew: true
    },
    {
        id: "shirt-men-16",
        imageSrc: menShirtImageSrcBasePath + "men-shirt-16.jpg",
        title: "Men shirt 16",
        price: withTwoDecimalPlaces(25),
        isNew: true
    },
    {
        id: "shirt-men-17",
        imageSrc: menShirtImageSrcBasePath + "men-shirt-17.jpg",
        title: "Men shirt 17",
        price: withTwoDecimalPlaces(30),
        isNew: true
    },
    {
        id: "shirt-men-18",
        imageSrc: menShirtImageSrcBasePath + "men-shirt-18.jpg",
        title: "Men shirt 18",
        price: withTwoDecimalPlaces(35),
        isNew: true
    }
];

export const limitedEditionProducts: Product[] = [
    products[0],
    products[1],
    products[2],
    products[3],
    products[4],
    products[5],
    products[6],
    products[7],
    products[8],
    products[9]
];
