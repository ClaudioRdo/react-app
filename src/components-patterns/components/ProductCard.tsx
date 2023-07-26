import { useProdructs } from '../hooks/useProducts';
import styles from '../styles/styles.module.css';
//import noImage from '../assets/no-image.jpg';

const ProductCard = () => {

    const { counter, increaseBy } = useProdructs();

    return (
        <div className={styles.productCard}>
            <img className={styles.productImg} src="./coffee-mug.png" alt="Coffe mug" />

            <span className={styles.productDescription}> Coffee mug </span>

            <div className={styles.buttonsContainer}>
                <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}> - </button>
                <div className={styles.countLabel}> {counter} </div>
                <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}> + </button>
            </div>

        </div>

    )
}

export default ProductCard