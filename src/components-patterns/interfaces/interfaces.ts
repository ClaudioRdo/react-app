import { ReactElement } from "react";

export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
};

export interface Product {
    id: string,
    title: string,
    img?: string
};

export interface ProductButtons {
    increaseBy: (value: number) => void;
    counter: number;
};

export interface ProductContexProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
};