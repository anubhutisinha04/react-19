import logo from './logo.svg';
import './App.css';
import Product from './components/Product';

function App() {
  return (
    <>
   <h1>Products</h1>
   <div className='product-list'><Product /></div>
   </>
  );
}

export default App;
