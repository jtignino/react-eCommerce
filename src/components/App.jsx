import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Componentes
import Navbar from './Navbar/Navbar';
import Cart from './Cart/Cart';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import SectionPrincipal from './SectionPrincipal/SectionPrincipal';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <SectionPrincipal/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/product/:id' element={<ItemDetailContainer/>}/>  
          <Route path='/category/:category' element={<ItemListContainer/>}/>   
          <Route path='/cart' element={<Cart/>}/>   
        </Routes>
      </BrowserRouter>  
    </>
  );
}

export default App;
