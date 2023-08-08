import { ReactElement, createContext } from 'react';
import { useProdructs } from '../hooks/useProducts';
import { Product, ProductContexProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContexProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: React.CSSProperties;
}

export const ProductCard = ({ product, children, className, style }: Props) => {

    const { counter, increaseBy } = useProdructs();

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>

            <div className={`${styles.productCard} ${className}`}
                style={style} 
            >
                {children}
                {/* <ProductImage img={product.img} />
            <ProductTitle title={product.title}/>
            <ProductButtons increaseBy={ increaseBy } counter={ counter } /> */}
            </div>
        </Provider>

    );
};

export default ProductCard