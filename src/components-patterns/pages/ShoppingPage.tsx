import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components';

const product = {
  id: '1',
  title: 'Coffee mug',
  img: './coffee-mug.png'
}

const ShoppingPage = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    }}>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard product={product} >
        <ProductImage />
        <ProductTitle title='' />
        <ProductButtons />
      </ProductCard>

      <ProductCard product={product} >
        <ProductCard.Image />
        <ProductCard.Title title='' />
        <ProductCard.Buttons />
      </ProductCard>
    </div>
  )
}

export default ShoppingPage