import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffee mug',
  img: './coffee-mug.png'
};

const ShoppingPage = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    }}>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard
        product={product}
        className='bg-dark text-white'
      >
        <ProductImage className='custom-image'/>
        <ProductTitle className='text-bold' />
        <ProductButtons className='custom-buttons'/>
      </ProductCard>

      <ProductCard 
        product={product}
        className='bg-dark text-white' 
      >
        <ProductCard.Image className='custom-image'/>
        <ProductCard.Title className='text-bold' />
        <ProductCard.Buttons className='custom-buttons'/>
      </ProductCard>

      <ProductCard 
        product={product}
        style={{
          backgroundColor: '#70D1F8'
        }}
      >
        <ProductCard.Image />
        <ProductCard.Title  />
        <ProductCard.Buttons />
      </ProductCard>
    </div>
  )
};

export default ShoppingPage;