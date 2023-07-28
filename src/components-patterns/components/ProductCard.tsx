import { createContext } from 'react';
import { useProdructs } from '../hooks/useProducts';
import { ProductContexProps, ProductCardProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContexProps);
const { Provider } = ProductContext;



export const ProductCard = ({ product, children }: ProductCardProps) => {

    const { counter, increaseBy } = useProdructs();

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>

            <div className={styles.productCard}>
                {children}
                {/* <ProductImage img={product.img} />
            <ProductTitle title={product.title}/>
            <ProductButtons increaseBy={ increaseBy } counter={ counter } /> */}
            </div>
        </Provider>

    );
};

export default ProductCard