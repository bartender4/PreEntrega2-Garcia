import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContariner/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/context/CartContext';
import Cart from './components/Cart/Cart'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
      <NavBar />
      <Routes>
      <Route path='/' element={<ItemListContainer />} />
      <Route path='/category/:categoryId' element={<ItemListContainer />} />
      <Route path='/item/:itemId' element={<ItemDetailContainer />} />
      <Route path='cart' element={<Cart />} />
      <Route path='*' element={<h1>404 NOT FOUND</h1>} />
      </Routes>
      </CartProvider> 
      </BrowserRouter>
    </div>
  );
}

export default App;
