import { ReactElement, createContext, useContext } from 'react';
import { useProdructs } from '../hooks/useProducts';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
};

interface Product {
    id: string,
    title: string,
    img?: string
};

interface ProductButtons {
    increaseBy: (value: number) => void;
    counter: number;
};

interface ProductContexProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
};

const ProductContext = createContext({} as ProductContexProps);
const { Provider } = ProductContext;

export const ProductImage = ({ img = '' }) => {

    const { product } = useContext(ProductContext);
    let imgToShow: string;

    if (img) {
        imgToShow = img;
    } else if (product.img) {
        imgToShow = product.img;
    } else {
        imgToShow = noImage;
    };

    return (
        <img className={styles.productImg} src={imgToShow} alt="Product image" />
    );
};

export const ProductTitle = ({ title }: { title?: string }) => {

    const { product } = useContext(ProductContext);

    return (
        <span className={styles.productDescription}>
            {title ? title : product.title}
        </span>
    );
};

export const ProductButtons = () => {

    const { increaseBy, counter } = useContext(ProductContext);

    return (
        <div className={styles.buttonsContainer}>
            <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}> - </button>
            <div className={styles.countLabel}> {counter} </div>
            <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}> + </button>
        </div>
    );
};

const ProductCard = ({ product, children }: Props) => {

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