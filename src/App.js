import logo from './logo.svg';
import './App.css';
import Product from './components/Product';

    const products = [
        {
        code: '0001',
        name: 'Pineapple',
        price: 12,
        image: '/pineapple.jpg'
        },
        {
        code: '0002',
        name: 'Pear',
        price: 10,
        image: '/pear.jpg'
        }
        ,
        {        
        code: '0003',
        name: 'Strawberry',
        price: 16,
        image: '/strawberry.jpg'
        }


]

function App() {
  return (
    <>
   <h1>Products</h1>
   <div className='product-list'>
  
   {
    products.map((product) => {
      return <Product key={product.code} product={product}/>
    })
   }
   
   </div>
   </>
  );
}

export default App;
