import './App.css';
import 'react-toastify/dist/ReactToastify.css';

// Router DOM
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Toastify
import { ToastContainer } from 'react-toastify';

// Componentes
import Navbar from './Navbar/Navbar';
import Cart from './Cart/Cart';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Checkout from './Checkout/Checkout';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/product/:id' element={<ItemDetailContainer/>}/>  
          <Route path='/category/:category' element={<ItemListContainer/>}/>   
          <Route path='/cart' element={<Cart/>}/>   
          <Route path='/checkout' element={<Checkout/>}/>   
        </Routes>
        <ToastContainer/>
      </BrowserRouter>  
    </>
  );
}

export default App;
